import express from 'express'
import authMiddleware from '../../middlewares/authMiddleware.js'

import {
  register,
  login
} from './authController.js'

const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get('/me', authMiddleware, (req,res)=>{
    res.json({
        success:true,
        user:req.user
})
})
export default router