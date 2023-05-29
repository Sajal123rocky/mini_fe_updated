const hre = require("hardhat");

async function main() {
  const ProjectHandler = await hre.ethers.getContractFactory("ProjectHandler");
  const projectHandler = await ProjectHandler.deploy("0x390574c67B43eeB6c934604CA7c171E702819da9");

  await projectHandler.deployed();

  console.log("Project deployed to:", projectHandler.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
