const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

(async () => {
  // Resolve paths relative to this script file (not the CWD)
  // optimize.js is in src/js → images are in src/images
  const inDir = path.resolve(__dirname, "../images");
  const outDir = path.join(inDir, "optimized");

  // Ensure output directory exists
  fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(inDir);

  for (const f of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(f)) continue;

    const base = f.replace(/\.(jpg|jpeg|png)$/i, "");
    const inputPath = path.join(inDir, f);

    for (const w of [320, 640, 960, 1280]) {
      await sharp(inputPath)
        .resize({ width: w })
        .avif({ quality: 50 })
        .toFile(path.join(outDir, `${base}-${w}.avif`));

      await sharp(inputPath)
        .resize({ width: w })
        .webp({ quality: 60 })
        .toFile(path.join(outDir, `${base}-${w}.webp`));

      await sharp(inputPath)
        .resize({ width: w })
        .jpeg({ quality: 60, mozjpeg: true })
        .toFile(path.join(outDir, `${base}-${w}.jpg`));
    }

    console.log(`[ok] ${f} → 320/640/960/1280 (avif/webp/jpg)`);
  }

  console.log("✅ Done. Outputs in src/images/optimized/");
})();
