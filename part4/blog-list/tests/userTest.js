
const { test, describe, beforeEach, after } = require('node:test')
const supertest = require('supertest')
const assert = require('node:assert')
const helper = require('./testHelper')
const app = require('../app')
const { default: mongoose } = require('mongoose')

const api = supertest(app)

describe('In fresh db', async () => {
    beforeEach(async () => { await helper.freshUserDatabase() })
    test('User get created', async () => {
        const userStart = await helper.usersInDatabase()
        await api.post('/api/users')
            .send({
                username: 'alice',
                name: 'Alice',
                password: 'pass1'
            })
            .expect(201)

        const userEnd = await helper.usersInDb()
        const users = userEnd.map(user => user.name)
        assert(users.includes('alice'))
        assert.strictEqual(userEnd.length, userStart.length + 1)
    })

    test('invalid user are not crerated', async () => {
        const userStart = await helper.usersInDatabase()
        await api.post('/api/users')
            .send({
                username: 'bob',
                name: 'Bob',
                password: 'pass2'
            })
            .expect(400)

        await api.post('/api/users')
            .send({
                username: 'john',
                name: 'John Doe',
                password: 'unknown'
            })
            .expect(400)
        const userEnd = await helper.usersInDatabase()
        assert.strictEqual(userEnd.length, userStart.length)
    })
})

after(async () => {
    await mongoose.connection.close()
})