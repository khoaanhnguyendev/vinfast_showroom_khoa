import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname);

const files = [
  "commnunes.boundariesRun1.json",
  "commnunes.boundariesRun2.json",
  "commnunes.boundariesRun3.json",
  "commnunes.boundariesRun4.json",
  "commnunes.boundariesRun5.json",
  "commnunes.boundariesRun6.json",
  "commnunes.boundariesRun7.json",
  "commnunes.boundariesRun8.json",
  "commnunes.boundariesRun9.json",
  "commnunes.boundariesRun10.json"
];


const merged: Record<string, any> = {};

for (const file of files) {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) continue;

  const data = JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  );

  for (const [commune, boundary] of Object.entries(data)) {
    if (!merged[commune] && boundary) {
      merged[commune] = boundary;
    }
  }
}

fs.writeFileSync(
  path.join(baseDir, "preloaded-boundaries.json"),
  JSON.stringify(merged, null, 2),
  "utf-8"
);

console.log(
  `Merged ${Object.keys(merged).length} communes`
);

// Chạy merge: npx tsx src/data/merge-preloaded-boundaries.ts
