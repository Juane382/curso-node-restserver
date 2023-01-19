const {response, request} =  require ('express')

const usuariosPut = (req, res = response)=> {
    const id = req.params.id
    res.json({
        ok : true,
        msg : 'put API - controlador',
        id
    })
  }

  const usuariosPost = (req, res = response)=> {

    const {nombre,edad} = req.body

    res.json({
        msg : 'Post API - controlador',
        nombre,
        edad
    })
  }

  const usuariosDelete = (req, res = response)=> {

    res.json({
        ok : true,
        msg : 'Delete API - controlador'
    })
  }

  const usuariosPatch = (req, res = response)=> {

    res.json({
        ok : true,
        msg : 'Patch API - controlador'
    })
  }

  const usuariosGet = (req = request, res = response)=> {

    const query = req.query

    res.json({
        ok : true,
        msg : 'Get API - controlador',
        query
    })
  }

  module.exports = {
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
    usuariosGet

  }