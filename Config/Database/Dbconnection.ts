import mongoose from 'mongoose'

mongoose.connect(String(process.env.MONGODB_URI), {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
})

const db = mongoose.connection
db.on('error', (err: string) => console.error(err))

db.once('open', () => {
     console.log('db connected...')
})
