# PSC contract

This is an example Arweave Profit Sharing Community contract based on [CommunityXYZ/contract](https://github.com/CommunityXYZ/contract). It uses the super-fast esbuild bundler to build the contract. It is also re-organized in a more modular and separated way.

## Building

Running the following command will build the project in `./dist` using esbuild:

```sh
yarn build
```

## Deploying on Arweave

To deploy the contract on Arweave, create a file named `arweave.json` in the root of this project and populate it with your private keyfile. The script will only use it to write the contract to the chain. 

Next, edit `state.json`. This file holds the default state of your contract.

After creating these files, run the following command:

```sh
yarn deploy
```