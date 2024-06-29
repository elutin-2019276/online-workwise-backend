'use trict'

import { Router } from 'express';
//import {validateJwt, isAdmin, isClient} from '../middlewares/validate_Jwt.js'
import {
    getEmployer,
    saveEmployer,
    updateEmployer,
    deleteEmployer
} from './Employer.controller.js'

const api = Router()


api.get('/getEmployer', getEmployer)

api.post('/saveEmployer', saveEmployer)
api.put('/updateEmployer/:id', updateEmployer)
api.delete('/delteEmployer/:id', deleteEmployer)

export default api