import { api, newUser, userLogin } from './helpers';
import db from '../../mysqlConnection/mysqlConnection.js';


beforeEach(async() => {
    //Delete all register
    const judgmentQuerry = `DELETE FROM users`;
    db.query(judgmentQuerry);
    

    // sequential
    // for(const product of initialProductGet){
    //     const productObject = new Producto(product)
    //     await productObject.save()
    // }
})

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

        test('login user', async () => {
            const response = await api.post('/api/users/login')
                .send(userLogin)
                .expect(200)

            expect(response.body.ok).toBe(true)
            console.log( response.body);

        })

    })

    describe('process fails', () => {

        test('User already exists', async () => {
            const response = await api.post('/api/users/register')
                .send(newUser)
                .expect(400)

            expect(response.body.ok).toBe(false)
        })

    })

})


