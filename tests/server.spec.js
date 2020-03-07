const app = require('../src/server/index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe("Server works", () => {
    test('Gets the test endpoint', async done => {
        // Sends GET Request to root endpoint
        const res = await request.get('/')
        expect(res.status).toBe(200)
        done()
    })
})



