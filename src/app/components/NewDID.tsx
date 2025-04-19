import { useEffect, useState } from 'react';
import { createCeramic } from '@/lib/ceramic'
import { publishInitialDIDDoc } from '@/lib/publishDIDDoc'
import { hexStringToUint8Array } from '@/lib/utils'
import { FaCopy, FaDownload, FaCheck, FaCircleInfo } from 'react-icons/fa6'
import { FiAlertCircle } from "react-icons/fi";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

interface NewDIDDisplayProps {
    did: string;
    seedString: string;
}

const NewDIDDisplay: React.FC<NewDIDDisplayProps> = ({ did, seedString }) => {
  const [showSeedString, setShowSeedString] = useState(false);
  const [copiedConfirmTick, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(seedString);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3500); // 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const handleConfirm = async () => {
    if (seedString) {
      const seed = hexStringToUint8Array(seedString);
      const ceramic = await createCeramic(seed);
      const docId = await publishInitialDIDDoc(ceramic);
      console.log('Initial Ceramic doc ID:', docId);

      localStorage.setItem('user_doc_id', docId);
    }
  }

  const handleDownloadSeed = () => {
    if (!seedString) return
    const element = document.createElement('a')
    const file = new Blob([seedString], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'my-did-seed.txt'
    document.body.appendChild(element)
    element.click()
  }

  return (
    <div className="flex flex-col space-y-4 mt-6 p-4 border-1 border-gray-600 rounded-2xl bg-gray-900 max-w-[95%]">
      <h2 className="text-lg font-semibold">Your DID</h2>
      <p className="text-gray-400 wrap-anywhere ">{did}</p>

      <h2 className="text-xl font-semibold mt-4">Your Private Key</h2>
      <p className="text-red-300 flex flex-row">
        <span><FiAlertCircle className='w-4 h-4 mt-1 mr-2'/></span> Save your private key securely. You will not be able to recover it later!
      </p>

      <div className="flex items-center space-x-2">
        <input
          type={showSeedString ? 'text' : 'password'}
          value={seedString}
          readOnly
          className="cursor-default grow px-3 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-600"
        />
        <button
          onClick={() => setShowSeedString(!showSeedString)}
          className="px-1 md:px-4 py-2 text-gray-100"
        >
          {showSeedString ? <BiSolidHide className='w-6 h-6'/> : <BiSolidShow className='w-6 h-6'/>}
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={handleDownloadSeed}
          className="flex flex-row px-4 py-2 items-center bg-gray-600 text-white rounded-full hover:bg-white hover:text-gray-800 group cursor-pointer"
        >
            <FaDownload className='text-white group-hover:text-gray-600 mr-2'/> 
            Download
        </button>
        
        <div className='relative flex flex-row items-center'>
            {copiedConfirmTick && <FaCheck className='absolute -right-6 text-green-400'/>}
            <button
                onClick={handleCopy}
                className="flex flex-row items-center px-4 py-2 bg-prisma-b text-white rounded-full group hover:bg-white hover:text-gray-800 cursor-pointer"
            >
                <FaCopy className='w-4 h-4 text-white group-hover:text-gray-600 mr-2'/> 
                Copy
            </button>
        </div>
        <button
            onClick={async () => {handleConfirm}}
            className="px-4  py-2 mt-6 md:mt-0 md:ml-auto text-white rounded-full border-2 border-white hover:bg-white hover:text-black"
        >
            Confirm
        </button>
      </div>
    </div>
  );
}

export default NewDIDDisplay;
