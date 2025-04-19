'use client'

import { useState } from 'react'
import { createNewDID } from '@/lib/didManager'
import SimpleButton from '../components/SimpleButton'
import Link from 'next/link'
import NewDIDDisplay from '../components/NewDID'

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [did, setDid] = useState<string | null>(null)
  const [seedString, setSeed] = useState<string | null>(null)

  async function handleCreateNewDID() {
    setLoading(true)
    try {
      const randomSeed = crypto.getRandomValues(new Uint8Array(32))
      const seedString = Buffer.from(randomSeed).toString('hex')
      const didInstance = await createNewDID(seedString)
      setDid(didInstance.id)
      setSeed(seedString)

      localStorage.setItem('user_did', didInstance.id)
      localStorage.setItem('user_seed', seedString)

    } catch (error) {
      console.error('Error creating DID:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6">
      <h1 className="text-2xl">Register</h1>

      <div className="flex w-full md:w-auto md:flex-row gap-4 flex-col-reverse">
        <Link href='/' className='w-full md:w-auto text-prisma-a hover:text-white rounded-full pt-3 pr-2 text-center'>🡸</Link>

        {/* Option 1: Connect Wallet */}
        <SimpleButton redirectTo='#' buttonText='Connect Wallet' className='w-full md:w-auto text-center'/>

        {/* Option 2: Create New DID */}
        <button
          onClick={handleCreateNewDID}
          className="w-full md:w-auto py-2 px-4 cursor-pointer border-2 rounded-3xl border-white hover:bg-white text-white hover:text-black"
          disabled={loading}
        >
          {loading ? 'Creating DID...' : 'Generate Prisma DID'}
        </button>
      </div>

      <SimpleButton redirectTo='/signup/role' buttonText='Register without ID' className='w-full md:w-auto text-center'/>

      {did && seedString && ( <NewDIDDisplay did={did} seedString={seedString}/> )}
    </div>
  )
}
