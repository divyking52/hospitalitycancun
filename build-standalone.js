/* ============================================================
   build-standalone.js
   Builds a self-contained, offline `standalone.html` from index.html,
   styles.css, script.js and the project's local assets.

   Usage: node build-standalone.js
   ============================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'standalone.html');
const MIME = {
  '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.mp4': 'video/mp4', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.ico': 'image/x-icon'
};
const read = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const escapeRegExp = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const embedded = rel => {
  const ext = path.extname(rel).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  return `data:${mime};base64,${fs.readFileSync(path.join(ROOT, rel)).toString('base64')}`;
};

function inlineAssets(source) {
  return source.replace(/(?:\.\.\/)?assets\/[A-Za-z0-9_@%+.,/-]+\.(?:svg|png|jpe?g|webp|mp4|webm|gif|ico|woff2?|js)/gi, rel => {
    const localPath = rel.replace(/^(?:\.\.\/)?/, '');
    return fs.existsSync(path.join(ROOT, localPath)) ? embedded(localPath) : rel;
  });
}

function inlineCss(css) {
  return css.replace(/url\((['"]?)([^)'"]+)\1\)/gi, (match, quote, rawPath) => {
    const rel = rawPath.replace(/^[./]+/, '');
    if (!/^assets\//i.test(rel) || !fs.existsSync(path.join(ROOT, rel))) return match;
    return `url("${embedded(rel)}")`;
  });
}

function inlineScripts(html, js) {
  for (const name of ['assets/js/lenis.min.js', 'assets/js/gsap.min.js', 'assets/js/ScrollTrigger.min.js']) {
    const external = `assets/js/${path.basename(name)}`;
    if (!fs.existsSync(path.join(ROOT, name))) throw new Error(`Missing local animation library: ${name}`);
    html = html.replace(new RegExp(`<script\\s+defer\\s+src=["']${escapeRegExp(external)}["']><\\/script>`, 'g'),
      () => `<script>/* Vendored ${path.basename(name)} */${read(name).replace(/<\/script/gi, '<\\/script')}</script>`);
  }
  html = html.replace(/<script\s+src=["']script\.js["']><\/script>/g,
    () => `<script>${js.replace(/<\/script/gi, '<\\/script')}</script>`);
  return html;
}

try {
  let html = read('index.html');
  let css = read('styles.css');
  const js = read('script.js');

  if (/<\/style/i.test(css) || /<\/script/i.test(js)) throw new Error('Unescaped HTML closing tag in CSS or JavaScript.');

  const styles = `<style>${inlineCss(css)}</style>`;
  html = html.replace(/<link\s+rel=["']stylesheet["']\s+href=["']styles\.css["']\s*\/?>/i, () => styles);
  if (html.includes('href="styles.css"')) throw new Error('Failed to inline the stylesheet.');

  html = inlineScripts(html, js);
  html = inlineAssets(html);

  const remaining = [];
  for (const rel of [...new Set((html.match(/assets\/[A-Za-z0-9_@%+.,/-]+/gi) || []))]) {
    if (html.includes(`"${rel}"`) || html.includes(`url(${rel})`)) remaining.push(rel);
  }
  if (remaining.length) throw new Error(`Unresolved local assets: ${remaining.join(', ')}`);
  if (/<script\b[^>]+\bsrc\s*=\s*["'](?!data:)/i.test(html)) throw new Error('An external script URL remains.');
  if (/<link\b[^>]+\bhref\s*=\s*["']https?:/i.test(html)) throw new Error('An external stylesheet or font link remains.');

  html = html.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n<!-- Generated offline single-file build; edit index.html, styles.css, script.js and assets instead. -->');
  fs.writeFileSync(OUT, html);
  console.log(`Built ${path.basename(OUT)} (${(Buffer.byteLength(html) / 1048576).toFixed(2)} MB).`);
  console.log('Verified: styles, fonts, animation libraries, page script and all local media are embedded; no runtime CDN requests.');
} catch (error) {
  console.error('Standalone build failed:', error.message);
  process.exitCode = 1;
}
