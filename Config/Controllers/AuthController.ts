const jwt = require('jsonwebtoken')
import { Request, Response } from 'express'

interface payload {
     id?: string
     password?: string
}

const secret = process.env.TOKEN_SECRET?.split(',')
     .join('\n')
     .replace(/["']/g, '')

class Authencation {
     // each request needs to have a Authorization header
     public isAuthenticated = async (req: Request) => {
          const encrypted: string = req.headers['authorization']!
          if (!encrypted) throw new Error('No Auth Provided')

          const decodedObj: object = await this.verify(encrypted)

          return decodedObj
     }

     public sign = (payload: payload) => {
          return new Promise<string>((resolve, reject) => {
               return jwt.sign(
                    {
                         id: payload.id,
                    },
                    secret,
                    {
                         algorithm: 'RS256',
                         expiresIn: '1d',
                    },
                    (err: any, token: string) => {
                         return err ? reject(err) : resolve(token)
                    }
               )
          })
     }

     public verify = (token: string) => {
          return new Promise<object>((resolve, reject) => {
               return jwt.verify(
                    token,
                    secret,
                    { algorithms: ['RS256'] },
                    (err: any, decoded: object) => {
                         return err ? reject(err) : resolve(decoded)
                    }
               )
          })
     }
}

module.exports = new Authencation()
