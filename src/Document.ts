import ZQuery from '.'
import Collection from './Collection'

export default class Document {
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
	
	data = async () => {
		await this.parentCollection.createTableIfNeeded()
		
		// TODO: Select this document from the parent collection's table
	}
}
