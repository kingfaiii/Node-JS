const cron = require('node-cron')
const UsersModel = require('../Controllers/Users/UserRoutes')
const authController = require('../Controllers/AuthController')

/* REFRESH PASSWORD TOKEN FOR EVERY 10MINS */
cron.schedule('*/10 * * * *', async () => {
     let users = await UsersModel._user.find({})

     for (let user of users) {
          const token = await authController.verify(user.password)
          const hashedPass = await authController.sign({ id: token.id })

          user.password = hashedPass
          await user.save()
     }
})
