// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IntuitionNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("IntuitionNFT", "INT") Ownable(msg.sender) {}

    function mint(address to) public onlyOwner {
        _tokenIdCounter++;
        _safeMint(to, _tokenIdCounter);
    }
}
