const { api, newUser } = require('./helpers');

describe('GET/users', () => {

    test('get user', async () => {
        const response = await api.get('/api/users')
            .expect(200)
        expect(response.text).toContain('users')
    })

})

describe('POST/users', () => {

    describe('successful process', () => {

        test('register user', async () => {
            const response = await api.post('/api/users/register')
                .send(newUser)
                .expect(201)

            // expect(response.body).toContain({ ok: true })
            // console.log( response.body);

        })

    })

    describe('process fails', () => {

        test('User already exists', async () => {
            const response = await api.post('/api/users/register')
                .send(newUser)
                .expect(400)

            // expect(response.body).toContain({
            //     ok: false,
            //     msg: "An error has arisen in the process, please review",
            // })
        })

    })

})


