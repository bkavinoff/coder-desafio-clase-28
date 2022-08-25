import { userDAO } from "../DAO/userDAO.js"
import { hashPassword, isValidPassword } from '../utils/hashPasswords.js'

const registerController = async (req, res) => {

    const invalidFields=false 
    const invalidPassword=false 
    const invalidUser=false

    await res.render("registerTemplate.ejs", { invalidFields, invalidPassword, invalidUser })
    
}

const postNewUser = async (req, res) => {
    // let newUser = req.body

    // let invalidFields = false
    // let invalidUser = false
    // let invalidPassword = false

    // //verifico que lleguen todos los campos
    // if(newUser.email === '' || newUser.username === '' || newUser.password === '' || newUser.password2 === ''){
    //     invalidFields = true
    // }

    // //verifico que la password y el reingreso de password coincida
    // if ((newUser.password !== newUser.password2) || newUser.password ==''){
    //     invalidPassword = true
    // }

    // //varifico si el usuario ya existe
    // const user = await userDAO.getByUsername(newUser.username)
    // if (user.length === 0){
    //     //no hay usuarios
    //     invalidUser = false
    // }else{
    //     console.log(user)
    //     if(user){
    //         invalidUser = true
    //     }
    // }

    // if (invalidFields || invalidPassword || invalidUser){
    //     return res.render("registerTemplate.ejs", { invalidFields, invalidPassword, invalidUser })
    // }

    // //encripto el password
    // const hashedPassword = hashPassword(newUser.password)

    // //actualizo el obj con la password encriptada
    // newUser.password = hashedPassword

    // //todo ok, creo al usuario
    // await userDAO.createDocument(newUser)
    

    // //redirijo al login
    // await res.redirect("/api/login")

    //req.session.email = req.body.email
    console.log("Redirijo a la página de login")
    

    return res.redirect("/api/login")
}

export { registerController, postNewUser }