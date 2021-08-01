const { createContract } = require("smartweave");
const Arweave = require("arweave");
const fs = require("fs");

(async () => {
  const keyfile = JSON.parse(fs.readFileSync("./arweave.json"));
  const src = fs.readFileSync("./dist/index.js");
  const defaultState = fs.readFileSync("./state.json");
  const arweave = new Arweave({
    host: "arweave.net",
    port: 443,
    protocol: "https",
  });

  console.log("Creating contract...");

  const contractID = await createContract(arweave, keyfile, src, defaultState);

  console.log(`Contract created. ID: ${contractID}`);
})();