# 🧠 Web3 설문 보상 시스템 (RTK Reward System)
(현재 진행중인 프로젝트)

> **"설문에 응답하면 토큰으로 보상받는 Web3 플랫폼"**  
> Hardhat(Local ETH) → Sepolia(RTK) 단계별 개발과 테스트 경험을 기반으로 만든 프로젝트입니다. 

Next.js + Solidity + Hardhat을 활용하여 Web3 보상 구조를 처음부터 설계하고,  
Metamask 연동, 스마트 컨트랙트 배포, 실제 테스트넷을 통한 보상까지 직접 구현 진행중 입니다.

---

## ⚙️ 기술 스택

- **Frontend**: Next.js 15 (App Router), TypeScript, TailwindCSS
- **Blockchain**:
  - Solidity + Hardhat (로컬 개발)
  - Sepolia Testnet (실제 테스트)
- **Web3 연동**: ethers.js, Metamask
- **Token**: ERC-20 커스텀 토큰 (RTK)
- **Backend**: Node.js + Express (보상 로그 저장용)

---

## 🔁 개발 흐름

| 단계 | 내용 |
|------|------|
| ✅ **Step 1: Hardhat 로컬에서 ETH로 보상 테스트** | 가상 계정 & 무료 ETH로 구조 설계 |
| ✅ **Step 2: RTK 토큰 컨트랙트 작성 및 배포** | Hardhat → Sepolia로 네트워크 전환 |
| ✅ **Step 3: 실제 지갑에서 RTK 보상 지급 구현** | Sepolia Faucet + Alchemy 활용 |
| ✅ **Step 4: 다국어, 설문페이지, 보상로그 API 개발** | 사용자 경험 강화 & 기록 기반 확장 준비 |

---

## 📦 주요 기능

| 기능 | 설명 |
|------|------|
| 📝 설문 응답 | Web3 지갑 연결 후 설문 참여 가능 |
| 🎁 RTK 토큰 보상 | 응답 완료 시, RTK 토큰 자동 지급 |
| 🧾 보상 내역 저장 | Backend API 호출로 보상 로그 기록 |
| 🧠 Hardhat 테스트 지원 | 로컬에서 ETH 기반 보상 테스트 가능 |
| 🌍 다국어 지원 | 🇰🇷 한국어 / 🇺🇸 영어 스위칭 기능 포함

---

## 🔗 스마트컨트랙트 정보

| 항목 | 값 |
|------|-----|
| 컨트랙트명 | `MyToken (RewardToken)` |
| 토큰 심볼 | `RTK` 또는 `ETH` |
| 배포 네트워크 | Sepolia Testnet |
| 배포 주소 | `0x5FbDB2315678afecb367f032d93F642f64180aa3` ← hardhat localhost eth ver. |
| 초기 발행량 | 100,000 RTK (지정된 주소로 전송됨)

---

## 기타사항

 * 기타사항은 docs directory 구성