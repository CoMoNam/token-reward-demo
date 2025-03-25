'use client';

import { useEffect, useState } from "react";

interface RewardLog {
  from: string;
  to: string;
  amount: string;
  channel: string;
  timestamp: string;
}

export default function AdminPage() {
  const [logs, setLogs] = useState<RewardLog[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/reward-log")
      .then((res) => res.json())
      .then(setLogs);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">보상 지급 로그</h1>
      <ul className="space-y-2">
        {logs.map((log, i) => (
          <li key={i} className="border p-2 rounded text-sm">
            <strong>채널:</strong> {log.channel}<br />
            <strong>보낸 사람:</strong> {log.from}<br />
            <strong>받는 사람:</strong> {log.to}<br />
            <strong>금액:</strong> {log.amount}<br />
            <strong>시간:</strong> {new Date(log.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
