import { Ed25519Provider } from 'key-did-provider-ed25519'
import KeyResolver from 'key-did-resolver'
import { DID } from 'dids'
import * as uint8arrays from 'uint8arrays'

export async function createNewDID(seedString: string) {
  const seed = uint8arrays.fromString(seedString, 'utf8').slice(0, 32)
  const provider = new Ed25519Provider(seed)

  const did = new DID({
    provider,
    resolver: {
      ...KeyResolver.getResolver(),
    },
  })

  await did.authenticate()
  return did
}
