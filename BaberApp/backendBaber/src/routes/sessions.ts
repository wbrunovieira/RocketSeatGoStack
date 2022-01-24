import { Router } from 'express';


import AuthenticateUserService from '../service/AuthenticateUserService';


const sessionsRouter = Router();

// interface User {

//     email: string;
//     password?: string;
// }

sessionsRouter.post('/', async (request, response) => {
   try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

     const   {user, token }= await authenticateUser.execute({
        email,
        password,
    });

    // delete user.password;

    return response.json( {user, token} );

   } catch(err:any) {
       return response.status(err.statusCode).json({ error: err.message });
   }
})

export default sessionsRouter;
