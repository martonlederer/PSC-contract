const { build } = require("esbuild");
const fs = require("fs");

(async () => {
  console.log("Building contract...");

  // build the sources
  await build({
    entryPoints: ["./src/index.ts"],
    outdir: "./dist",
    format: "esm",
    bundle: true,
  });

  console.log("Built contract. Fixing up...");

  // fixup the handle function, make it exported
  const contractFilePath = "./dist/index.js";
  const data = fs.readFileSync(contractFilePath).toString()
    .replace("async function handle", "export async function handle")
    .replace("export {\n  handle\n};\n", "");

  fs.writeFileSync(contractFilePath, data);

  console.log("Ready.");
})();
