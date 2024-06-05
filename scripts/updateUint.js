 (async () => {
    const address = "0x6C31779dEC18Edd6aE436B05E598FCF6C8EF24BC";
    const abiArray =[
	{
		"inputs": [],
		"name": "MyUint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_myUint",
				"type": "uint256"
			}
		],
		"name": "setMyUint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
    const contractInstance = new web3.eth.Contract(abiArray, address);

    console.log(await contractInstance.methods.MyUint().call()); 

	let accounts = await web3.eth.getAccounts();
	let txResult = await contractInstance.methods.setMyUint(5050).send({from: accounts[0]});

	console.log(await contractInstance.methods.MyUint().call()); 	
	
	console.log(txResult);
 } ) ()