import { ethers } from "ethers";

export const rewardEthUser = async (to: string) => {
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

    // 보상 금액 (예: 0.01 ETH)
    const rewardAmount = ethers.parseEther("0.01"); // 0.01 ETH

    // 보상자 ETH 잔액 확인
    const ethBalance = await provider.getBalance(sender);
    console.log("보상자:", sender);
    console.log("보상 대상:", to);
    console.log("보상자 ETH 잔액:", ethers.formatEther(ethBalance));

    if (ethBalance < rewardAmount) {
      alert("보상자 ETH 잔액 부족");
      return;
    }

    // ETH 전송 트랜잭션
    const tx = await signer.sendTransaction({
      to,
      value: rewardAmount,
    });
    await tx.wait();
    await fetch("http://localhost:4000/api/reward-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to,
        amount: "10 RTK",
        channel: "디자인 채널", // 또는 파라미터로 받기
        timestamp: new Date().toISOString(),
      }),
    });

    alert("🎉 ETH 보상 지급 완료!");
  } catch (err: any) {
    console.error("보상 지급 실패", err);
    alert("보상 지급 실패: " + (err?.reason || err?.message || "Unknown error"));
  }
};
