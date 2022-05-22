const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["IronMan", "CaptainAmerica", "Thor"],       // Names
      ["https://imgur.com/mcGIfmh.png", // Images
      "https://imgur.com/RDeD6ux.png", 
      "https://imgur.com/i68F9q1.png"],
      [100, 200, 300],                    // HP values
      [100, 50, 25],                   // Attack damage values
      "Thanos", // Boss name
      "https://imgur.com/hVuFcaF.png", // Boss image
       10000, // Boss hp
       50 // Boss attack damage  
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();  
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();