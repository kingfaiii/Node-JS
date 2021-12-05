import { Schema, Document, model } from 'mongoose'
const schemaNames = require('../../Constants/SchemaNames')

const stringRequired: object = {
     type: String,
     require: true,
}

export interface DepartmentInterface extends Document {
     dept_name: string
     dept_location: string
     timestamps: string
}

const departmentSchema: Schema = new Schema(
     {
          dept_name: stringRequired,
          dept_location: stringRequired,
     },
     { timestamps: true }
)

module.exports = model<DepartmentInterface>(
     schemaNames.departmentSchema,
     departmentSchema
)
