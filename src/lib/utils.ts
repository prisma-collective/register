export function hexStringToUint8Array(hexString: string): Uint8Array {
    if (hexString.startsWith('0x')) {
      hexString = hexString.slice(2)
    }
    const bytes = new Uint8Array(hexString.length / 2)
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hexString.substr(i * 2, 2), 16)
    }
    return bytes
  }
