import { api } from './helpers';



describe('GET/Server', () => {


  describe('Server ok...', () =>{

    test('Server ready', async () => {
        await api.get('/')
            .expect(200)
    });



    test('Get de frase Server ready', async () => {
        const response = await api.get('/')
        expect(response.text).toContain('Server ready')
    });

  })

//   describe('Server fail', () => {


//     test('server off', async () => {
//         const response = await api.get('/')
//         console.log(response.body)
//         expect(response.status).toBe(404)
//     });
//   })

})

// describe('POST/productos', () => {

//     test('should  respond with a 200 status code post', async () => {
//         await api.post('/api/productos')
//             .expect(200)
//     });

//     test('products are returned as json', async () => {
//         await api.post('/api/productos')
//             .expect('Content-Type', /application\/json/)

//     });

    
//     test('products are returned an Object', async () => {
//         const response = await api.post('/api/productos')
//             expect(response.body).toBeInstanceOf(Object)

//     });

//     test('products are returned with a propierty producto ', async () => {
//         const response = await api.post('/api/productos')
//             expect(response.body.producto).toBeDefined()

//     });


// })

