require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot dance remember night sniff hunt canoe army gesture'; 
let testAccounts = [
"0xfdf2f7c896d9bcb1a9a955820645a319b07be04fc221539374a708b0f7442817",
"0x7cd314925f51c0b48bc1a782ca1287f4bd3fbc8340eda1e3404e84a03f2fea55",
"0x385886f6dc9c80532800cdee57753edd4b328773248cffcc58b9e5223ca9a445",
"0x69f184c56911cf099219eb57a595c86765b73b71f074761d5d24ddc80cc21076",
"0x59109d93fca90900bed7ec275ce9595484349ccdce4e0872e90897c97a09b2a6",
"0x734ab6edc206ab8d918c133a8ba99b5312923ee395e6a957b252925bf5676c9b",
"0xf8b55cd7d0a34b6506b6fb392a1af611bf951afad2ed2da8ff83b5da928f6196",
"0xd23499bb61ac7ccdf5994c07973d547eae5fca49181b8957b7854222f6840a7d",
"0x3b80194beec88849a2fd530b33363cafad0990fa79a91efbe0465101369e206d",
"0xb56f2c4b4d0d9e0ece8867be9c700af9da77464a3a7dd1b51c9c2d27426c054c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


