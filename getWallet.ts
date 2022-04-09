import { ethers } from 'https://cdn.ethers.io/lib/ethers-5.2.esm.min.js'

export function getWallet(text: string) {
  try {
    const n = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(text))

    const seed = BigInt(n)
    const key = new ethers.utils.SigningKey(seed)

    return {
      privateKey: (key as any).privateKey,
      address: ethers.utils.computeAddress((key as any).publicKey),
    }
  } catch (err) {
    console.warn(err)
    return null
  }
}
