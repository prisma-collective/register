export function hexStringToUint8Array(hexString: string): Uint8Array {
    if (hexString.startsWith('0x')) {
      hexString = hexString.slice(2)
    }
    if (hexString.length % 2 !== 0) {
        throw new Error('Invalid hex string: length must be even')
      }
    
    const bytes = new Uint8Array(hexString.length / 2)
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hexString.slice(i * 2, i * 2 + 2), 16)
    }
    return bytes
  }
