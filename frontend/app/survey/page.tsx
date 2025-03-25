"use client";

import { useState } from "react";
import { surveys } from "@/src/data/surveys";
import { rewardEthUser } from "@/utils/rewardEthUser";
import { ethers } from "ethers";

export default function SurveyPage() {
  const [selectedSurvey, setSelectedSurvey] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedOption || selectedSurvey === null || !account) return;

    // ✅ 설문 응답 저장 + 보상 지급
    await fetch("http://localhost:4000/api/reward-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Survey System",
        to: account,
        amount: "10 RTK",
        channel: `설문 ${selectedSurvey}`,
        timestamp: new Date().toISOString(),
      }),
    });

    await rewardEthUser(account);

    alert("설문 응답 완료 및 보상 지급!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">설문 참여</h1>
      {!account ? (
        <button onClick={connectWallet}>🦊 Metamask 연결</button>
      ) : (
        <>
          <p className="mb-2">지갑 주소: {account}</p>
          {surveys.map((s) => (
            <div key={s.id} className="mb-4 border p-4 rounded">
              <h2 className="font-semibold mb-2">{s.question}</h2>
              {s.options.map((opt) => (
                <label key={opt} className="block">
                  <input
                    type="radio"
                    name={`survey-${s.id}`}
                    value={opt}
                    onChange={() => {
                      setSelectedSurvey(s.id);
                      setSelectedOption(opt);
                    }}
                  />{" "}
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            제출하고 보상받기
          </button>
        </>
      )}
    </div>
  );
}
