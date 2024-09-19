## Accounts

- private key --> 228737d1999349ca3d9241059187381ba65bc9b44f09b7f165f79c88065e6e57
- wallet address --> 0xf84827dB2C4ec918eA13cbdAdB14c2c1d0f678e5
- contract address --> 0xB658B42C8c209f98c19Bf6e9dD6339E04c95a163

## Steps to interact with contract in your dapp

1. npm i web3
2. import web3

```js
import { Web3 } from "web3";
```

3. initialize the web3 object

```js
const web3 = new Web3(window.ethereum);
```

4. connect accounts

```js
await web3.eth.requestAccounts();
```

5. initialize the contract

```js
const contract = new web3.eth.Contract(ABI, ADDRESS);
```
# jkuat-workshop
