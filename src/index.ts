import { verbose, Database } from 'sqlite3'

import Collection from './Collection'
import Document from './Document'

const sqlite3 = verbose()

export default class ZQuery {
	collectionCache: Record<string, Collection> = {}
	documentCache: Record<string, Document> = {}
	
	db: Database
	
	constructor(file: string = ':memory:') {
		this.db = new sqlite3.Database(file)
	}
	
	collection = (path: string) =>
		this.collectionCache[path] ?? (
			this.collectionCache[path] = new Collection(this, path)
		)
	
	doc = (path: string) =>
		this.documentCache[path] ?? (
			this.documentCache[path] = new Document(this, path)
		)
}
