import { userLogined} from '../userRouter/helpers';
import { api, deleteAllPostsDB, } from './helpers';


beforeEach(async () => {
    //Delete all posts
    deleteAllPostsDB()
})



describe('POST/post', () => {
    const user = userLogined()

    describe('successful process', () => {

        test('create post', async () => {
            const response = await api.post('/api/post')
                .send({
                    userid: user[0].id,
                    title: "Mira mi ultima jugada",
                    description: "Estaba jugando con @juanito y de repente se me aparecio esto:",
                    image: "https://picsum.photos/id/1/200/300",
                    likes: 654
                })
                .expect(201)

            expect(response.body).toEqual(expect.objectContaining(response.body));
            expect(response.body.ok).toBe(true)
            console.log(response.body);

        })

    })

})


