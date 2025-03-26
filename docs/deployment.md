📦 사전 준비

Alchemy 또는 Infura에서 Sepolia RPC URL 발급

Metamask 지갑 생성 및 Sepolia Faucet에서 테스트 ETH 수령

🔐 .env 예시

SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
PRIVATE_KEY=0xyour_private_key

✅ PRIVATE_KEY는 Sepolia 테스트 지갑의 비밀키, 반드시 0x 포함

🛠 배포 명령어

npx hardhat run scripts/deploy.ts --network sepolia

배포 후 나오는 주소 복사

src/constants/index.ts에서 CONTRACT_ADDRESS 설정

🔁 프론트 반영

export const CONTRACT_ADDRESS = "0xYourDeployedRTKAddress";

프론트의 rewardUser 함수는 이 주소를 기반으로 토큰 전송 수행

📄 토큰 추가 (Metamask)

Metamask → Sepolia → 토큰 가져오기 → 컨트랙트 주소 입력

심볼: RTK, 소수점: 18
