import { Express } from 'express'

module.exports = (app: Express) => {
     app.use('/api/v1', require('./Controllers/Users/User.api'))
     app.use('/api/v1', require('./Controllers/Address/Address.api'))
     app.use('/api/v1', require('./Controllers/Department/department.api'))
     app.use(require('./Routes/middlewares').errorHandler)
     app.use(require('./Routes/middlewares').notFound)
}
