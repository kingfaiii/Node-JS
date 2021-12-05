import { Model, Schema, Types, Document } from 'mongoose'
import { Request, Response, NextFunction } from 'express'

interface SchemaDic {
     [key: string]: object
}

declare global {
     type MongooseModel = Model<Schema>

     type TypeRequest = Request

     type TypeResponse = Response

     type TypeNext = NextFunction
}
