import { api,  uploadFileHandler } from './helpers';
import image from '../../images/check.jpg'

// beforeEach(async () => {
//     uploadFileHandler(image)
// })



describe('POST/upload', () => {

    describe('successful process', () => {

        test('upload image', async () => {
            const response = await api.post('/api/uploads')
                .send(uploadFileHandler(image))
                .expect(200)

            expect(response.body).toEqual(expect.stringContaining(response.body));
            console.log(response.body);

        })



    })


})

