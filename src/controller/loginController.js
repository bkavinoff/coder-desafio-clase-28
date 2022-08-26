import { userDAO } from "../DAO/userDAO.js"
import { hashPassword, isValidPassword } from '../utils/hashPasswords.js'
import passport from 'passport';

const loginController = async (req, res) => {
    const { username } = req.session
    const invalidFields = false
    const invalidCredentials = false
    await res.render("loginTemplate.ejs", { username, invalidFields, invalidCredentials })
    
}

const postUserLogin = async (req, res) => {
    // const userToLogin = req.body

    // let invalidFields = false
    // let invalidCredentials = false

    // //verifico que lleguen todos los campos
    // if(userToLogin.username === '' || userToLogin.password === ''){
    //     invalidFields = true
    // }

    // //varifico si el usuario existe
    // const dbUser = await userDAO.getByUsername(userToLogin.username)
    // console.log(dbUser)
    // if (dbUser.length === 0){
    //     //no hay usuarios
    //     invalidCredentials = true
    // }

    // const dbUserPassword = dbUser[0].password

    // //chequeo si la password es correcta:
    // if (!isValidPassword(userToLogin.password, dbUserPassword)){
    //     invalidCredentials = true
    // }

    // if (invalidFields || invalidCredentials){
    //     return res.render("loginTemplate.ejs", { invalidFields, invalidCredentials })
    // }
    // //todo ok, guardo el usuario en sesion
    // req.session.username = {username: dbUser[0].username}

    // //redirijo a la página de productos
    // await res.redirect("/api/products")

    const userLogged = await passport.authenticate(
        "login", 
        { 
            successRedirect: "/api/products/all",
            failureRedirect: "/error-login"  
        }
    )

    //si el passport.authenticate fue exitoso, asigno la session
    req.session.username = req.body.username
    
    console.log('loginController -> req.session.username: ', req.session.username)

    res.status(200).redirect('/api/products/all');

} 

export { loginController, postUserLogin }