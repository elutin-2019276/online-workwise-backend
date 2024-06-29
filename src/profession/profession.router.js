'use strict'

import { Router } from 'express';
//import { validateJwt, isAdmin, isClient } from '../middlewares/validate_Jwt.js'
import {
    getProfession,
    saveProfession,
    updateProfession,
    deleteProfession
} from './profession.controller.js'

const api = Router()


api.get('/getProfession', getProfession)

api.post('/saveProfession', saveProfession)
api.put('/updateProfession/:id', updateProfession)
api.delete('/deleteProfession/:id', deleteProfession)

export default api