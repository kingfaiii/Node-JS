export {}
const ModelController = require('../ModelController')
const UserSchema = require('../../Database/Models/UserSchema')
const auth = require('../AuthController')
const validation = require('../ValidationController')

interface UserObject {
     [key: string]: string | object
}

class UserRoutes extends ModelController {
     public _user: MongooseModel
     constructor(model: MongooseModel) {
          super(model)
          this._user = model
     }

     public login = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const { username, password } = req.body

               const ifExist: any = await this._user.findOne({
                    username: username,
               })

               if (!ifExist) throw new Error(`${username} does npot exist`)
               const userPassword = await auth.verify(ifExist?.password)

               if (userPassword.id !== password)
                    throw new Error('Password Doesn`t match')

               const userToken = await auth.sign({ id: ifExist._id })

               delete ifExist._doc.password

               res.status(200).json({ ...ifExist._doc, userToken })
          } catch (err) {
               next(err)
          }
     }

     public register = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const { username, password, fullname, contact_number } = req.body

               validation.isEmpty(req.body)

               validation.testUsername(username)
               validation.testPassword(password)
               let formattedNumber = validation.testNumber(contact_number)
               req.body.contact_number = formattedNumber

               req.body.password = await auth.sign({ id: password })

               const registeredUser = await this.create(req.body)

               res.status(200).json(registeredUser)
          } catch (err) {
               next(err)
          }
     }

     public updateUser = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const { username, password, fullname, contact_number } = req.body
               const token = await auth.isAuthenticated(req)

               const ifExist = await this._user.findOne({
                    username: username,
               })

               if (ifExist) throw new Error(`${username} already exist`)

               if (username) validation.testUsername(username)

               if (password) validation.testPassword(password)

               if (contact_number)
                    req.body.contact_number =
                         validation.testNumber(contact_number)

               const updated = await this._user.findOneAndUpdate(
                    { _id: token.id },
                    req.body,
                    { new: true }
               )

               res.status(201).json(updated)
          } catch (err) {
               next(err)
          }
     }

     public getProfile = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const { username, password, fullname, contact_number } = req.body
               const token = await auth.isAuthenticated(req)

               const profile = await this.findById(token.id)

               res.status(201).json(profile[0])
          } catch (err) {
               next(err)
          }
     }
}

module.exports = new UserRoutes(UserSchema)
