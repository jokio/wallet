import { ethers } from '../lib/ethers-v5.6.2.esm.js'

export function getWallet(text: string) {
  if (!text) {
    throw new Error('Please provide text')
  }

  if (['.', ',', '-', '_', "'", '"'].some(x => text.includes(x))) {
    throw new Error('Please use only words and spaces ')
  }

  try {
    const n = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(text))

    const seed = BigInt(n)
    const key = new ethers.utils.SigningKey(seed)

    return {
      secretPhrase: text,
      privateKey: (key as any).privateKey,
      address: ethers.utils.computeAddress((key as any).publicKey),
    }
  } catch (err) {
    console.warn(err)
    return null
  }
}
