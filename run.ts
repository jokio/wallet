import { getWallet } from './src/getWallet.ts'

const result = getWallet(Deno.args[0])

console.log(result)
