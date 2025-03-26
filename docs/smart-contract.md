🔐 smart-contract

이 문서는 프로젝트의 핵심 스마트 컨트랙트인 MyToken.sol의 구조를 설명합니다.

📝 개요

이더리움 Sepolia 네트워크에 배포된 커스텀 ERC-20 토큰

이름: RewardToken

심볼: RTK

초기 발행량 지정 가능

🔨 기본 구조

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply, address initialReceiver) ERC20("RewardToken", "RTK") {
        _mint(initialReceiver, initialSupply * 10 ** decimals());
    }
}

⚙️ 주요 포인트

initialSupply -> 배포 시 총 발행량 지정 (단위: 토큰 수)

initialReceiver -> 초기 토큰 수령자 (보상 지급자)

ERC20("RewardToken", "RTK") -> 토큰 이름/심볼 설정

_mint(...) -> 지정한 주소에 토큰 발행

📦 ABI 생성 위치

artifacts/contracts/MyToken.sol/MyToken.json

ABI는 프론트에서 ethers.Contract 생성 시 사용됨