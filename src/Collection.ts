import ZQuery from '.'
import { createHash } from './utils'

export default class Collection {
	/** The cache of the hash */
	_hash?: string
	
	didCreateTable: boolean = false
	
	id: string
	pathParts: string[]
	
	constructor(public parent: ZQuery, public path: string) {
		this.pathParts = path.split('/')
		
		if (!(this.pathParts.length & 1))
			throw new Error('Collection paths must have an odd number of parts')
		
		this.id = this.pathParts[this.pathParts.length - 1]
	}
	
	get hash() {
		return this._hash ?? (
			this._hash = createHash(this.path)
		)
	}
	
	createTableIfNeeded = () =>
		this.didCreateTable
			? Promise.resolve() // Don't do anything if you've already created the table
			: new Promise<void>((resolve, reject) =>
				this.parent.db.run(
					// Each document has a random TEXT id
					`CREATE TABLE IF NOT EXISTS ${this.hash} (id TEXT PRIMARY KEY)`,
					error => error ? reject(error) : resolve()
				)
			)
	
	/**
	 * @returns A promise containing a list of documents contained in the collection.
	 * 
	 * The data for each document should be pre-loaded.
	 */
	get = () => {
		// TODO: Fill this out
		return Promise.resolve([] as Document[])
	}
}
