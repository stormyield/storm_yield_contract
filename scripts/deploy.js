const { ethers } = require('hardhat');

async function main() {
    const StakingPlatform = await ethers.getContractFactory("StormYield");
    const stakingPlatform = await StakingPlatform.deploy();
    const stakingPlatformResult = await stakingPlatform.deployed();
    console.log("Success when deploy farm contract: %s",stakingPlatformResult.address)
    // npx hardhat verify --network testnet 0x65a39e9cfd2dD335eC1137E0B2CaF81dF4fD6F27
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

