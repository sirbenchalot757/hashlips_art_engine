"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Nifty Narwhal is a community-run creative studio that empowers creative enthusiasts to influence the art with which we engage. 10,000 unique Ethereum-based tokens will function as membership passes, granting access to creative contributions and joint ownership of our group's works. The Nifty Narwhals Creative Studio was formed to collaborate on media projects with hundreds of participants and to give ownership of our collective works.s";
const baseUri = "ipfs://QmSouXRmu4KfnaZvBddMt38dvp1gR1cBTwukfad3Rht66w";

const layerConfigurations = [
  {
    growEditionSizeTo: 8000,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Mouth" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Eyewear" },
      { name: "Hats" },
      { name: "Tusks" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 800,
  height: 800,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 1,
  thumbWidth: 250,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
