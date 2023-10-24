
const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("Lock"); 
  const lock = await hre.ethers.deployContract();

  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
