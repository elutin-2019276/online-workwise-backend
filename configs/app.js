//Configuración de Express

//Importaciones
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/User/user.routes.js'
import workOfferRoutes from '../src/WorkOffer/workOffer.routes.js'
import finalOfferRoutes from '../src/FinalOfferHome/finalOfferHome.routes.js'

//Configuraciones
const app = express() //Crear el servidor
config()
const port = process.env.PORT || 3200

//Configurar el servidor de express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors()) //Aceptar o denegar las solicitudes de diferentes orígenes (local, remoto) /políticas de acceso
app.use(helmet()) //Aplica capa de seguridad
app.use(morgan('dev')) //Crea logs de solicitudes al servidor HTTP


//Declaración de rutas
app.use('/user', userRoutes)
app.use('/workOffer', workOfferRoutes)
app.use('/finalOfferHome', finalOfferRoutes)

//Levantar el servidor
export const initServer = () => {
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}