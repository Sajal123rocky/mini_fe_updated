require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@nomiclabs/hardhat-waffle');

// task("accounts","Prints the list of accounts",async(taskArgs,hre)=>{
//   const accounts = await hre.ethers.getSigners();
//   for(const account of accounts)
//   {
//     const address=await account.getAddress();
//     const balance= await address.getBalance();
//     console.log(account);
//   }

// })
module.exports = {
  defaultNetwork: "sepolia",
  paths:{
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat:{},
    sepolia: {
      url: "https://sepolia.infura.io/v3/8be48f55cae24d3a950b0541945aba02",
      accounts: [`63ed8881e38a293ee9eb8ec815905e7c6b31e7b4d9d2fde39323a0c7793ce671`],
      chainId: 11155111,
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      chainId: 1337,
      accounts: [
        `0xe50f58a262b5f37eadeac869f542873eb8d4eddc344b2109765679a6a6152c27`,
        
      ],
    },
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}