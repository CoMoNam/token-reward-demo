// import { ethers } from "ethers";
// import ABI from "@/src/abi/MyToken.json"; // RTK 컨트랙트 ABI
// import { CONTRACT_ADDRESS } from "@/src/constants"; // RTK 컨트랙트 주소

// export const rewardUser = async (to: string, channel: string) => {
//   try {
//     if (!window.ethereum) {
//       alert("Metamask not installed");
//       return;
//     }

//     const provider = new ethers.BrowserProvider(window.ethereum);
//     const signer = await provider.getSigner();
//     const sender = await signer.getAddress();

//     const token = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

//     const rewardAmount = ethers.parseUnits("10", 18);
//     const balance: bigint = await token.balanceOf(sender);

//     if (balance < rewardAmount) {
//       alert("보상자 RTK 토큰 잔액 부족");
//       return;
//     }

//     const tx = await token.transfer(to, rewardAmount);
//     await tx.wait();

//     // ✅ 로그 저장 (백엔드)
//     await fetch("http://localhost:4000/api/reward-log", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         from: sender,
//         to,
//         amount: "10 RTK",
//         channel,
//         timestamp: new Date().toISOString(),
//       }),
//     });

//     alert("🎉 RTK 보상 지급 완료!");
//   } catch (err: any) {
//     console.error("보상 지급 실패", err);
//     alert("보상 지급 실패: " + (err?.reason || err?.message || "Unknown error"));
//   }
// };
