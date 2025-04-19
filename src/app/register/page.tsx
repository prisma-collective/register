'use client'

import { useState } from 'react'
import { createNewDID } from '@/lib/didManager'
import { createCeramic } from '@/lib/ceramic'
import { publishInitialDIDDoc } from '@/lib/publishDIDDoc'
import { hexStringToUint8Array } from '@/lib/utils'

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [did, setDid] = useState<string | null>(null)
  const [seedString, setSeed] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  async function handleCreateNewDID() {
    setLoading(true)
    try {
      const randomSeed = crypto.getRandomValues(new Uint8Array(32))
      const seedString = Buffer.from(randomSeed).toString('hex').slice(0, 32)
      const didInstance = await createNewDID(seedString)
      setDid(didInstance.id)
      setSeed(seedString)

      localStorage.setItem('user_did', didInstance.id)
      localStorage.setItem('user_seed', seedString)

      // Show modal
      setShowModal(true)
    } catch (error) {
      console.error('Error creating DID:', error)
    } finally {
      setLoading(false)
    }
  }

  function handleDownloadSeed() {
    if (!seedString) return
    const element = document.createElement('a')
    const file = new Blob([seedString], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'my-did-seed.txt'
    document.body.appendChild(element)
    element.click()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold">Register</h1>

      <div className="flex flex-col space-y-4">
        {/* Option 1: Connect Wallet (coming soon) */}
        <button
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          disabled
        >
          Connect Wallet (coming soon)
        </button>

        {/* Option 2: Create New DID */}
        <button
          onClick={handleCreateNewDID}
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? 'Creating DID...' : 'Create New Identity'}
        </button>
      </div>

      {did && (
        <div className="mt-6 p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">Your DID:</h2>
          <p className="break-words">{did}</p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow space-y-4">
                <h2 className="text-xl font-bold">Download Your Private Key</h2>
                <p className="text-gray-700">
                    Save your private key securely. You will not be able to recover it later!
                </p>
                <div className="flex justify-between space-x-4">
                    <button
                        onClick={handleDownloadSeed}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Download
                    </button>
                    <button
                        onClick={async () => {
                            setShowModal(false)

                            if (seedString) {
                                const seed = hexStringToUint8Array(seedString)
                                const ceramic = await createCeramic(seed)
                                const docId = await publishInitialDIDDoc(ceramic)
                                console.log('Initial Ceramic doc ID:', docId)

                                localStorage.setItem('user_doc_id', docId)
                            }
                        }}
                        className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  )
}
