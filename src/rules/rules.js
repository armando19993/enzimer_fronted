export default new class {
    email() 
    {
      return v => /.+@.+/.test(v) || 'No es una direccion de correo valida'
    }
    minText(value)
    {
        return v => v.length >= value || 'El campo debe tener míminimo de '+value+' caracteres'
    }
    required()
    {
        return v => !!v || 'Campo requerido'
    }
    confirmation(field)
    {
        return v => v == field || 'Los campos no son coinciden'
    }
}