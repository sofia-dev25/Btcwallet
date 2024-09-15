//Importar as dependencias.
const bip32 = require ("bip32")
const bip39 = require ("bip39")
const bitcoin = require ("bitcoinjs-lib")

//Definir a rede.
//Bitcoin-rede principal - mainnet
//Testnet - rede de teste.

const network = bitcoin.networks.testnet

// Derivação de carteiras HD
const path = `m/49'/1'/0'/0`
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSyne(mnemonic)

//Criar a raiz da carteira HD.
let root = bip32. fromSeed (seed,network)

//criando uma conta - por pvt-pub keys
let accout = root.derivePath(path)
let node = accout.derive(0).derive(0)
let btcAddress = bitcoin.payments.p2pkh ({
    pubkey: node.publicKey,
    network: network,}).address

    console.log ("carteira Gerada")
    console.log("Endereço:", btcAddress)
    console.log("chaveprivada:", node.toWIF())
    console.log("Seed", mnemonic)

