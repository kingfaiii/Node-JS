import { Schema, Document, model } from 'mongoose'
const schemaNames = require('../../Constants/SchemaNames')

const stringRequired: object = {
     type: String,
     require: true,
}

export interface UserInterface extends Document {
     username: string
     password: string
     fullname: string
     contact_number: string
     department?: string
     address?: string
     timestamps: string
}

const UserSchema: Schema = new Schema(
     {
          username: stringRequired,
          password: stringRequired,
          fullname: stringRequired,
          contact_number: stringRequired,
          department: {
               type: Schema.Types.ObjectId,
               ref: schemaNames.departmentSchema,
          },

          address: {
               type: Schema.Types.ObjectId,
               ref: schemaNames.addressSchema,
          },
     },
     { timestamps: true }
)

module.exports = model<UserInterface>(schemaNames.userSchema, UserSchema)
