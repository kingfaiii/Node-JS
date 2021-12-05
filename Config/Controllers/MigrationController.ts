import { Model, Schema } from 'mongoose'
const auth = require('./AuthController')

interface SeedInterface {
     username?: string
     password?: string
     fullname?: string
     contact_number?: string
}

class MigrationController {
     private _model: Model<Schema>
     private _modelName: string
     constructor(model: Model<Schema>) {
          this._model = model
          this._modelName = model?.collection?.collectionName
     }

     public migrate = async (seed: any) => {
          const isDeleted = await this._model?.deleteMany({})
          console.log(`${this._modelName} is rolledback`)
          if (isDeleted) {
               const inserted = await this._model?.insertMany(seed)
               if (inserted) {
                    console.log(`seed executed at ${this._modelName}`)
               }
          }
     }

     public hashPass = async (details: any) => {
          for (let detail of details) {
               detail.password = await auth.sign({ id: detail.password })
          }

          return details
     }
}

module.exports = MigrationController
