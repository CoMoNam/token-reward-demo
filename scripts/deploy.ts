import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("📦 Deploying contracts with account:", deployer.address);

  const initialSupply = ethers.parseUnits("1000", 18); // 10만 RTK
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(initialSupply, deployer.address);

  await token.waitForDeployment();

  console.log("🎯 RTK deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});