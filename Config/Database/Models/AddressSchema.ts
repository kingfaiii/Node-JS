import { Schema, Document, model } from 'mongoose'
const schemaNames = require('../../Constants/SchemaNames')

const stringRequired: object = {
     type: String,
     require: true,
}

export interface AddressInterface extends Document {
     street: string
     lot_number: string
     state: string
     city: string

     timestamps: string
}

const addressSchema: Schema = new Schema(
     {
          street: stringRequired,
          lot_number: stringRequired,
          state: stringRequired,
          city: stringRequired,
     },
     { timestamps: true }
)

module.exports = model<AddressInterface>(
     schemaNames.addressSchema,
     addressSchema
)
