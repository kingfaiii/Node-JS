const ModelController = require('../ModelController')
const AddressModel = require('../../Database/Models/AddressSchema')
const validation = require('../ValidationController')
const auth = require('../AuthController')
const UserControler = require('../Users/UserRoutes')
class AddressRoutes extends ModelController {
     private _address: MongooseModel
     constructor(model: MongooseModel) {
          super(model)
          this._address = model
     }

     public addAddress = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const token = await auth.isAuthenticated(req)

               validation.isEmpty(req.body)

               const user = await UserControler._user
                    .findOne({ _id: token.id })
                    .populate('address')

               if (user.address) throw new Error('User already has an address')

               const address = await this.create(req.body)

               const newAddress = await UserControler._user
                    .findOneAndUpdate(
                         { _id: token.id },
                         { address: address },
                         { new: true }
                    )
                    .populate('address')

               res.status(200).json(newAddress)
          } catch (err) {
               next(err)
          }
     }

     public updateAddress = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const token = await auth.isAuthenticated(req)

               const user = await UserControler._user
                    .findOne({ _id: token.id })
                    .populate('address')

               const updatedAddress = await this._address.findOneAndUpdate(
                    { _id: user.address._id },
                    req.body,
                    { new: true }
               )

               res.status(200).json(updatedAddress)
          } catch (err) {
               next(err)
          }
     }

     public deleteAddress = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const token = await auth.isAuthenticated(req)

               const user = await UserControler._user
                    .findById(token.id)
                    .populate('address')

               await this._address.deleteOne({
                    _id: user.address._id,
               })

               res.status(200).json('deleted')
          } catch (err) {
               next(err)
          }
     }
}

module.exports = new AddressRoutes(AddressModel)
