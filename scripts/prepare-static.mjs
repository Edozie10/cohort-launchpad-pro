import { copyFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outDir = resolve("dist/client");
const indexPath = resolve(outDir, "index.html");
let html = await import("node:fs/promises").then(({ readFile }) => readFile(indexPath, "utf8"));

html = html.replaceAll('href="/./assets/', 'href="./assets/');
html = html.replaceAll('src="/./assets/', 'src="./assets/');
html = html.replaceAll('href="/assets/', 'href="./assets/');
html = html.replaceAll('src="/assets/', 'src="./assets/');

await writeFile(indexPath, html);
await copyFile(indexPath, resolve(outDir, "404.html"));
await writeFile(resolve(outDir, ".nojekyll"), "");