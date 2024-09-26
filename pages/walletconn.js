import React, { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const WalletConnect = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);

    const connectWallet = async () => {
        console.log("Connecting");
        const web3Modal = new Web3Modal({
            cacheProvider: true, // optional
            providerOptions: {}, // Add any provider options if necessary
        });
        console.log("Connecting1");

        const connection = await web3Modal.connect();
        console.log("Connecting2");

        const ethersProvider = new ethers.providers.Web3Provider(connection);
        console.log("Connecting3");

        const signer = ethersProvider.getSigner();
        console.log("Connecting4");

        setProvider(ethersProvider);
        setSigner(signer);
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
        </div>
    );
};

export default WalletConnect;
