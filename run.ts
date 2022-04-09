import { getWallet } from './getWallet.ts'

const result = getWallet(Deno.args[0])

console.log(result)
