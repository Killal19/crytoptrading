require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.17",
networks: {
  goerli: {
    url: 'https://eth-goerli.g.alchemy.com/v2/BVnvOcvYUoenbfENZU65EAcurjTBw4Jm',
    accounts: ['519d3d02f3052de54f01cd086f69eae00bb7fcd7d695b46919f1dbd5f30fb2cd'],
  },
},
};

