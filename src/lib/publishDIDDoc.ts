// lib/publishDIDDoc.ts
import { CeramicClient } from '@ceramicnetwork/http-client'
import { TileDocument } from '@ceramicnetwork/stream-tile'

export async function publishInitialDIDDoc(ceramic: CeramicClient) {
  const doc = await TileDocument.create(ceramic, {
    createdAt: new Date().toISOString(),
    profileStatus: 'basic',
    associatedEvents: [],
  }, {
    controllers: [ceramic.did!.id],
  })

  return doc.id.toString()
}
