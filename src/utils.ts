import * as crypto from 'crypto'

export const createHash = (data: string) =>
	crypto.createHash('md5').update(data).digest('hex')
