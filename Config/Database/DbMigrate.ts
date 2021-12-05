require('dotenv').config()
import './Dbconnection'
const Migration = require('../Controllers/MigrationController')
const userDetails = require('./seeds/UserSeeds')
const auth = require('../Controllers/AuthController')
const userModel = require('./Models/UserSchema')
const addressModel = require('./Models/AddressSchema')

try {
     const userMigration = new Migration(userModel)
     const addressMigration = new Migration(addressModel)

     userMigration.hashPass(userDetails).then((data: any) => {
          userMigration.migrate(data)
     })

     addressMigration.migrate([])
} catch (err) {
     console.log(err)
}
