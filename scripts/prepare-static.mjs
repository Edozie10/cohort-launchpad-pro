import { copyFile, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outDir = resolve("dist/client");
const indexPath = resolve(outDir, "index.html");
const base = process.env.VITE_BASE_PATH || "./";

let html = await readFile(indexPath, "utf8");

if (base === "./" || base === "") {
  // Relative paths for hosts like GitHub Pages project sites
  html = html.replaceAll('href="/./assets/', 'href="./assets/');
  html = html.replaceAll('src="/./assets/', 'src="./assets/');
  html = html.replaceAll('href="/assets/', 'href="./assets/');
  html = html.replaceAll('src="/assets/', 'src="./assets/');
  html = html.replaceAll('"/./assets/', '"./assets/');
  html = html.replaceAll('"/assets/', '"./assets/');
}

await writeFile(indexPath, html);
await copyFile(indexPath, resolve(outDir, "404.html"));
await writeFile(resolve(outDir, ".nojekyll"), "");
