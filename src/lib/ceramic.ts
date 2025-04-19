// lib/ceramic.ts
import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'

// connect to Ceramic node
const API_URL = 'https://ceramic-clay.3boxlabs.com'

export async function createCeramic(seed: Uint8Array) {
  const ceramic = new CeramicClient(API_URL)
  const provider = new Ed25519Provider(seed)
  const did = new DID({ provider, resolver: getResolver() })
  await did.authenticate()
  ceramic.did = did
  return ceramic
}
