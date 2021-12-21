import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// drop module address
const bundleDrop = sdk.getBundleDropModule(
  "0x4491b5293DaeedEe3b0A6d92ED1E17fD2918356A",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to ArtDAO!",
        image: readFileSync("scripts/assets/other_art.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()