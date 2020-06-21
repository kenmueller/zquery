const Database = require('../lib').default

it('runs', async () => {
	const db = new Database()
	const doc = db.doc('users/ken')
	const data = await doc.data()
	
	console.log(data)
})
