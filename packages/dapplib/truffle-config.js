require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski story return sad million great light army gate'; 
let testAccounts = [
"0xdea60541b01b2d6d3c9396c6969fb2b011b000ba362a08f47b90388ee8a35786",
"0xb138360768f2f707a1157886d13500e8e72bb14a9f4c1a69a9ef63c8f8bf48b5",
"0xa904f433c491244b22355bef71e4435500e22cb63b110e77273c06971283a4c0",
"0xcff76ef8f9ace4a3ac40963c4cb022c117a7b3d9c2a8eb17b78ea6c4e03f89c4",
"0xa53879796876e175f4c8965e6205373b6ea74afaddd2524640e08c8a78567d2b",
"0x3103bcd5c4388ee656a0f83e35c1408a600ec8135e80b92fd5bcd97135ef7fee",
"0x47befcf3adfbcfd89246049610099df10f1d673794514c3651ebc015da4e06c6",
"0xbcc6fcd41cd5f61835856435cd3149d4f2cbbacdd8c79c2c78b10f4a75ddde11",
"0x36c7b757dc4ab8f664a3d9476e5fd8dad7c36b239d524468bd4c659c02d16c3a",
"0x2d4a6a8c98a200ac65eac968236704102b496f8cfc65f08603e6bd873a39e127"
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


