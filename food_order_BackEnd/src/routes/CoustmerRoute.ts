import express, { Request, Response, NextFunction } from 'express';
import { CreateOrder, CustomerLogIn, CustomerSignUp, CustomerVerfiy, EditCustomerProfile, GetCustomerProfile, GetOrderById, GetOrders, RequestOtp } from '../controllers';
import { Authenticate } from '../middlewares/CommonAuth';

const router = express.Router();

/*.................Singup...............*/

router.post('/signup',CustomerSignUp)


/*...................Login..................*/

router.post('/login',CustomerLogIn)

//Authencation

router.use(Authenticate)

//Verify Account

router.patch('/verify',CustomerVerfiy)

//OTP

router.get('/otp',RequestOtp)

//Profile

router.get('/profile',GetCustomerProfile)

router.patch('/profile',EditCustomerProfile)


// orders
router.post('/create-order', CreateOrder);
router.get('/orders', GetOrders);
router.get('/order/:id', GetOrderById)


export { router as CoustmerRoute}