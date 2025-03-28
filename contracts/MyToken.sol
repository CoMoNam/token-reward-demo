// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply, address initialReceiver) ERC20("RewardToken", "RTK") {
        _mint(initialReceiver, initialSupply * 10 ** decimals());
    }
}