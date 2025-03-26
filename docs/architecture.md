🏗 Architecture: 시스템 구성 및 흐름

⚙️ 기술 스택

프론트엔드 - Next.js (App Router), TypeScript, TailwindCSS

Web3 연동 - ethers.js, Metamask

블록체인 - Solidity, Hardhat, Sepolia Testnet

백엔드 - Express.js (보상 로그 저장용)

배포 - Vercel (프론트), Sepolia Faucet/Alchemy (테스트넷)

📐 시스템 구성도

[User]
   ↓ (응답/클릭)
[Next.js Frontend] → Metamask 연결 (ethers.js)
   ↓
[RTK 스마트 컨트랙트 (Sepolia)] ← 운영자 지갑에서 보상 전송
   ↓
[사용자 지갑에 RTK 수신]
   ↓
[Optional] 보상 로그 저장 API (Express Backend)

📦 폴더 구조 요약

/contracts                # MyToken.sol - ERC-20 컨트랙트
/frontend/scripts         # deploy.ts - 배포 스크립트
/frontend/src/app         # 프론트엔드 페이지들 (home, survey, admin)
/frontend/src/utils       # Web3 함수들 (rewardUser 등)
/frontend/src/data        # 설문/채널 JSON 데이터
/frontend/src/abi         # 컴파일된 ABI 저장소
/backend                  # 보상 로그 기록용 API 서버
/docs                     # 문서 정리

🔁 흐름 요약

1.사용자가 Metamask 연결

2.설문 응답 → 보상 전송 트리거

3.RTK 컨트랙트의 transfer() 실행

4.보상 대상 지갑으로 RTK 전송

5.보상 로그 백엔드 저장