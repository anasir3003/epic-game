# NFT Practice

## Synopsis

### A project to learn how NFTs work and practice smart contract development.

  - On a web page user has the ability to connect MetaMask wallet and mint one of 3 NFTs.

  - Each NFT has different health and attack values.

  - Each user can only have one NFT.

  - There's a boss with HP and attack value.

  - User attacks the boss and gets attacked in return.

  - On the back-end transaction occurs and updates NFT health values with each attack.

### The stack of languages and tools I used:

  - Back-end: Solidity, Hardhat, JS to handle the deployment.

  - Front-end: ReactJS, ethers.js to connect front-end with the back-end.
  
## Showcase
<img width="1440" alt="Screenshot 2022-05-22 at 1 19 58 PM" src="https://user-images.githubusercontent.com/74717035/169688314-135f5fde-ff97-4e38-a34a-a50c0e26ad1e.png">

 - Connect Wallet and you will see the character nfts
<img width="1440" alt="Screenshot 2022-05-22 at 1 20 51 PM" src="https://user-images.githubusercontent.com/74717035/169688392-5d4f49c4-da1b-4c3c-a634-5a5ee697a6d3.png">

 - Mint your favourite character by paying small amount of fees
<img width="1440" alt="Screenshot 2022-05-22 at 1 22 29 PM" src="https://user-images.githubusercontent.com/74717035/169688489-af15522a-cd24-49da-a53b-e7538edf3121.png">

 - You will see the minting in progress
<img width="1440" alt="Screenshot 2022-05-22 at 1 23 13 PM" src="https://user-images.githubusercontent.com/74717035/169688504-2ec3bde1-b3e0-4e2e-9015-a29671ff7ce1.png">

 - You will land on the attack page
<img width="1440" alt="Screenshot 2022-05-22 at 1 23 37 PM" src="https://user-images.githubusercontent.com/74717035/169688542-eef8fe99-ef96-4af3-8cb0-e3d103866a86.png">
<img width="1440" alt="Screenshot 2022-05-22 at 1 23 40 PM" src="https://user-images.githubusercontent.com/74717035/169688545-0ccc86f5-d4be-406c-9b7c-a52a0e9379a3.png">

 - Press the Attack button to launch an attack
<img width="1440" alt="Screenshot 2022-05-22 at 1 23 55 PM" src="https://user-images.githubusercontent.com/74717035/169688593-91941a52-d310-42e0-942c-dc909a0a6dec.png">

 - You will see Attack completion notification
<img width="1440" alt="Screenshot 2022-05-22 at 1 24 07 PM" src="https://user-images.githubusercontent.com/74717035/169688641-0bee5f5e-0945-4034-8875-f7e1b548879a.png">

 - You can see the updated HP values of the characters
<img width="1440" alt="Screenshot 2022-05-22 at 1 26 01 PM" src="https://user-images.githubusercontent.com/74717035/169688674-535f1b38-7675-41aa-bd37-ac8634514dc0.png">
<img width="1440" alt="Screenshot 2022-05-22 at 1 26 04 PM" src="https://user-images.githubusercontent.com/74717035/169688676-96296863-e6ff-45cb-925e-27717ba1e885.png">

#### THANK YOU


## Notice

I tried my best to implement most of best practices when writing the smart contract:

- All entities within contract have names which make sense.


- Deployment scripts are separated for local and Rinkeby testnet deployment (if I were to make a production project, I'd also make a third one for mainnet deployment).


Rinkeby testnet was used randomly :)


P.S. I tried to keep the front-end part tidy but didn't polish it the way I polished the smart contract because it wasn't the main focus of this project. The website link is provided. The images take little time to load as I have not used IPFS right now, please bear with it :). Will improve soon.
