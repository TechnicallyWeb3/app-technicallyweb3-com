import React, { createContext, useContext } from 'react';

const TW3Context = createContext();

export function useTW3Context() {
    return useContext(TW3Context);
}

export default function TW3Provider({ children }) {
    // Constants for your context
    const USER_ABIFILE = '/artifacts/contracts/userControl.sol/UserControl.json';
    const USER_ADDRESS = '0x8eb4D6Fe0D7eb0f1A61A61a9557e54de2C958CCd';
    const DEFAULT_RPC = 'https://ethereum-sepolia.publicnode.com';
    const CHAIN_SYMBOLS = ['S.ETH'];
    const DAPP_CHAINS = ['0xaa36a7'];
    
    // Initialize variables
    let isConnected = false;
    let connectedAddress;
    let connectedAccounts = [];
    let connectedAccount;
    let userData = [];
    
    // Function to check if a user is registered
    const isRegistered = (user) => {
        if (userData.length === 0 || user === null) return false;
        if (userData.length - 1 < user) throw new Error('User id out of bounds');
        return userData[user].userName.length > 0;
    };
    
    // Define any other functions or variables you need here
    
    // Create the context value object
    const contextValue = {
        CHAIN_SYMBOLS,
        DAPP_CHAINS,
        isConnected,
        connectedAddress,
        connectedAccounts,
        connectedAccount,
        userData,
        isRegistered
    };

    // Provide the context value to children
    return (
        <TW3Context.Provider value={contextValue}>
            {children}
        </TW3Context.Provider>
    );
}
