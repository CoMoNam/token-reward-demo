import { ethers } from "hardhat";

async function main() {
  const initialSupply = 100000; // 10만 개
  const rewardDistributor = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Metamask에서 사용하는 보상자 주소 입력

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(initialSupply, rewardDistributor);

  await token.waitForDeployment();

  console.log(`✅ MyToken deployed to: ${await token.getAddress()}`);
  console.log(`✅ Tokens minted to: ${rewardDistributor}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
