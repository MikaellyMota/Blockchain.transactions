import { BinaryLike, createHash } from 'crypto'
const crypto = require("crypto");



export function hash (data: BinaryLike) {
  return createHash('sha256').update(data).digest('hex')
}

export function hashValidado ({ hash, dificuldade = 3, prefixo = "0" }: { hash: string, dificuldade: number, prefixo: string }) : boolean {
  const check : string =  prefixo.repeat(dificuldade)
  return hash.startsWith(check)
}
