export {}
const ModelController = require('../ModelController')
const DepartmentSchema = require('../../Database/Models/DepartmentSchema')
const validation = require('../ValidationController')
const auth = require('../AuthController')
const UserControler = require('../Users/UserRoutes')

class DepartmentRoutes extends ModelController {
     private _dept: MongooseModel
     constructor(model: MongooseModel) {
          super(model)
          this._dept = model
     }

     public addDepartment = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const token = await auth.isAuthenticated(req)

               validation.isEmpty(req.body)

               const user = await UserControler._user
                    .findOne({ _id: token.id })
                    .populate('department')

               if (user.department)
                    throw new Error('User already has an Department')

               const department = await this.create(req.body)

               const newDepartment = await UserControler._user
                    .findOneAndUpdate(
                         { _id: token.id },
                         { department: department },
                         { new: true }
                    )
                    .populate('department')

               res.status(200).json(newDepartment)
          } catch (err) {
               next(err)
          }
     }

     public updateDept = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const token = await auth.isAuthenticated(req)

               const user = await UserControler._user
                    .findOne({ _id: token.id })
                    .populate('department', 'address')

               const updatedDept = await this._dept.findOneAndUpdate(
                    { _id: user.department._id },
                    req.body,
                    { new: true }
               )

               res.status(200).json(updatedDept)
          } catch (err) {
               next(err)
          }
     }

     public deleteDept = async (
          req: TypeRequest,
          res: TypeResponse,
          next: TypeNext
     ) => {
          try {
               const token = await auth.isAuthenticated(req)

               const user = await UserControler._user
                    .findById(token.id)
                    .populate('department')

               await this._dept.deleteOne({
                    _id: user.department._id,
               })

               res.status(200).json('deleted')
          } catch (err) {
               next(err)
          }
     }
}

module.exports = new DepartmentRoutes(DepartmentSchema)
