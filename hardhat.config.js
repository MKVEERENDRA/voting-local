require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

// Use these plugins for interacting with contracts on Polygon or other networks if needed later
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0", // Make sure this matches the version used in your contracts
  networks: {
    hardhat: {
      mining: { auto: true },

      chainId: 1337, // Default chain ID for Hardhat Network
    },
    // Polygon Testnet configuration (if you still need to deploy there)
   
  },

};
