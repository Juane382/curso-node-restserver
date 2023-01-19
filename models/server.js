const express = require('express')
const cors = require('cors')


class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //Middlewares
        this.middlewares()
        // Rutas de mi aplicacion 

        this.routes()
    }

    middlewares(){
            // CORS
            this.app.use(cors())

            //lECTURA Y PARSEO DEL BODY
            this.app.use(express.json())
            // DIRECTORIO PUBLICO
            this.app.use(express.static('public'))
    }

    routes(){

        this.app.use('/api/usuarios',require('../routes/usuarios.routes'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo', this.port)
        })
    }

}

module.exports = Server