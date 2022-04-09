import { ethers } from '../ethers-5.2.esm.min.js'

export function getWallet(text: string) {
  if (!text) {
    throw new Error('Please provide text')
  }

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
