💻 frontend

이 문서는 Web3 설문 보상 시스템의 프론트엔드 구조 및 Web3 연동 방식을 설명합니다.

📦 사용 기술

Next.js 15 (App Router 기반)

TypeScript + TailwindCSS

ethers.js (Metamask 연동)

🔗 주요 기능

1. Metamask 연결

const provider = new ethers.BrowserProvider(window.ethereum);
const accounts = await provider.send("eth_requestAccounts", []);

사용자가 Metamask로 연결하면 account 상태 저장

2. 설문 페이지 (SurveyPage)

설문 JSON 목록 출력

단일 선택 방식 (라디오 버튼)

"제출하고 보상받기" 버튼 → rewardUser() 호출

3. RTK 보상 함수 호출

/utils/rewardUser.ts 내 함수 호출

const tokenContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
await tokenContract.transfer(to, rewardAmount);

연결된 지갑 주소를 대상으로 보상 전송

4. 다국어(i18n)

react-i18next 기반 구성

사용자는 버튼 클릭으로 🇰🇷/🇺🇸 언어 변경 가능

5. 라우팅

/ (Home) → 지갑 연결, 채널 목록

/survey → 설문 참여 → 보상 지급

/admin → 향후 보상 내역 확인 용도