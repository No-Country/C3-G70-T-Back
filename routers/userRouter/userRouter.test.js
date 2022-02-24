import { api, deleteAllmysqlDB, getAllUsersDB, newUser, updatedUser, updatedUserToId, userLogin, userLogined } from './helpers';


beforeEach(async () => {
    //Delete all register
    deleteAllmysqlDB()
})



describe('POST/users', () => {

    describe('successful process', () => {

        test('register user', async () => {
            const response = await api.post('/api/users/register')
                .send(newUser)
                .expect(201)

            expect(response.body).toEqual(expect.objectContaining(response.body));
            expect(response.body.ok).toBe(true)
            console.log(response.body);

        })

        test('login user', async () => {
            const response = await api.post('/api/users/login')
                .send(userLogin)
                .expect(200)

            expect(response.body).toEqual(expect.objectContaining(response.body));
            expect(response.body.ok).toBe(true)
            console.log(response.body);

        })

    })

    // describe('process fails', () => {

    //     test('User already exists', async () => {
    //         const response = await api.post('/api/users/register')
    //             .send(newUser)
    //             .expect(400)

    //         expect(response.body).toEqual(expect.objectContaining(response.body));
    //         expect(response.body.ok).toBe(false)
    //         expect(response.body.msg).toBe("User already exists")

    //     })

    // })

})


describe('GET/users', () => {

    test('get user', async () => {
        const response = await api.get('/api/users')
            .expect(200)
        expect(response.body).toEqual(expect.arrayContaining(response.body));
        console.log(response.body[0]);

    });

    test('get user to id', async () => {
        const user = await getAllUsersDB()
        const response = await api.get(`/api/users/${user.id}`)
            .expect(200)
        expect(response.body).toEqual(expect.objectContaining(response.body));
        expect(response.body.ok).toBe(true)
        console.log(response.body);
        console.log(user);

    });

});




describe('PUT/users', () => {

    describe('successful process', () => {

        test('update user', async () => {
            const user = await getAllUsersDB()
            console.log(user.id);

            const responseLogin = await userLogined()

            console.log(responseLogin.body.token);

            const response = await api.put('/api/users/profile')
                .send({
                    id: user.id,
                    username: "update prueba",
                    email: "updateprueba@gmail.com",
                    password: "938472829",
                    nickname: " updateprueba"
                })
                .set({ Authorization: `Bearer ${responseLogin.body.token}` })
                .expect(201)

            expect(response.body).toEqual(expect.objectContaining(response.body));
            expect(response.body.id).toBe(updatedUser.id)
            expect(response.body.updatedUser.email).toBe(updatedUser.email)

            console.log(response.body);
        })

    })


    test('update user to id', async () => {
        const user = await getAllUsersDB()
        console.log(user.id);

        const responseLogin = await api.post('/api/users/login')
            .send(userLogin)

        console.log(responseLogin.body);

        const response = await api.put(`/api/users/edit/${user.id}`)
            .send({
                id: user.id,
                username: "update prueba",
                email: "updateprueba@gmail.com",
                nickname: " updateprueba"
            })
            .set({ Authorization: `Bearer ${responseLogin.body.token}` })
            .expect(201)

        expect(response.body).toEqual(expect.objectContaining(response.body));
        expect(response.body.ok).toBe(true)

        console.log(response.body);

    })

})
