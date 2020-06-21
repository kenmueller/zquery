import { verbose, Database } from 'sqlite3'

const sqlite3 = verbose()

export default class ZQuery {
	db: Database
	
	constructor(file: string = ':memory:') {
		this.db = new sqlite3.Database(file)
	}
}
