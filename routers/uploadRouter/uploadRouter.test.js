import { api } from './helpers';
import path from 'path';
import fs from 'fs';

// beforeEach(async () => {
//     uploadFileHandler(image)
// })

const __dirname = path.resolve();

const testImage = `${__dirname}/images/check.jpg`

describe('POST/upload', () => {

    describe('successful process', () => {

        test('upload image', async () => {
            const response = await api.post('/api/uploads')
                .set('Content-Type': 'multipart/form-data')
                .pipe(fs.createReadStream(testImage))
                .expect(200)

            // expect(response.body).toEqual(expect.stringContaining(response.body));
            console.log(response);

        })



    })


})

