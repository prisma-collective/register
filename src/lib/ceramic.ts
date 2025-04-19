// lib/ceramic.ts
import { CeramicClient } from '@ceramicnetwork/http-client'

let ceramic: CeramicClient

export function getCeramic() {
  if (!ceramic) {
    ceramic = new CeramicClient('https://ceramic-clay.3boxlabs.com') // Using testnet
  }
  return ceramic
}
