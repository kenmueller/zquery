import ZQuery from '.'
import Collection from './Collection'

export default class Document {
	/** Cached data */
	_data?: Record<string, any>
	
	id: string
	pathParts: string[]
	parentCollection: Collection
	
	constructor(public parent: ZQuery, public path: string) {
		this.pathParts = path.split('/')
		
		if (this.pathParts.length & 1)
			throw new Error('Document paths must have an even number of parts')
		
		this.id = this.pathParts[this.pathParts.length - 1]
		this.parentCollection = this.parent.collection(
			this.pathParts.slice(0, -1).join('/')
		)
	}
	
	/** Returns and caches the data for this document */
	data = async () => {
		if (this._data)
			return this._data
		
		await this.parentCollection.createTableIfNeeded()
		
		// TODO: Select this document from the parent collection's table
		return {}
	}
	
	/** Sets the data for this document, and returns a Promise */
	set = (data: Record<string, any>) => {
		// TODO: Set the data for this document
	}
}
