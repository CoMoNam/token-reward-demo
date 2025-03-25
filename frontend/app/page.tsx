"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { channels } from "@/src/data/channels";
import { rewardEthUser } from "@/utils/rewardEthUser";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);
  const router = useRouter();

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please install Metamask");
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-xl mb-4">Web3 토큰 보상 시스템</h1>
      {account ? (
        <>
          <p>지갑 연결됨: {account}</p>

          <h2 className="mt-4 mb-2 font-bold">채널 목록</h2>
          <ul className="space-y-2 mb-4">
            {channels.map((channel) => (
              <li key={channel.id} className="border p-2 rounded">
                {channel.name}
                <button
                  className="ml-4 border px-2 py-1"
                  onClick={() => rewardEthUser(account)}
                >
                  보상 지급
                </button>
              </li>
            ))}
          </ul>

          {/* ✅ 하단 네비게이션 버튼 */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => router.push("/translation")}
              className="border px-4 py-2 rounded"
            >
              🌐 Translation
            </button>
            <button
              onClick={() => router.push("/admin")}
              className="border px-4 py-2 rounded"
            >
              🛠 관리자 페이지
            </button>
            <button
              onClick={() => router.push("/survey")}
              className="border px-4 py-2 rounded"
            >
              📝 설문 참여
            </button>
          </div>
        </>
      ) : (
        <button onClick={connectWallet}>Metamask 연결</button>
      )}
    </main>
  );
}
