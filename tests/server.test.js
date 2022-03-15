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


