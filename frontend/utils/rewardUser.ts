import { ethers } from "ethers";
import MyToken from "@/src/abi/MyToken.json"; // .json 확장자 명시
import { CONTRACT_ADDRESS } from "@/src/constants"; // constants/index.ts 또는 constants.ts 존재해야 함

const ABI = MyToken.abi;

export const rewardUser = async (to: string) => {
  try {
    if (!window.ethereum) {
      alert("Metamask not installed");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);

    // 지갑 연결 및 signer 설정
    const accounts = await provider.send("eth_requestAccounts", []);
    const sender = accounts[0];
    const signer = await provider.getSigner(sender);

    const tokenContract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);
    const rewardAmount = ethers.parseUnits("10", 18); // 10 RTK

    // 보상자 RTK 잔액 확인
    const balance: bigint = await tokenContract.balanceOf(sender);
    console.log("보상자:", sender);
    console.log("보상 대상:", to);
    console.log("보상자 RTK 잔액:", ethers.formatUnits(balance, 18));

    if (balance < rewardAmount) {
      alert("보상자 RTK 토큰 잔액 부족");
      return;
    }

    // RTK 전송 트랜잭션
    const tx = await tokenContract.transfer(to, rewardAmount);
    await tx.wait();

    // 보상 로그 저장
    await fetch("http://localhost:4000/api/reward-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to,
        amount: "10 RTK",
        channel: "디자인 채널", // 파라미터화 가능
        timestamp: new Date().toISOString(),
      }),
    });

    alert("🎉 RTK 보상 지급 완료!");
  } catch (err: any) {
    console.error("보상 지급 실패", err);
    alert("보상 지급 실패: " + (err?.reason || err?.message || "Unknown error"));
  }
};
