const PASSWORD = 'Password1'

interface UserSeedInterface {
     username: string
     password: string
     fullname: string
     contact_number: string
}

const userDetails: UserSeedInterface[] = [
     {
          username: 'Calil',
          password: 'jaudian',
          fullname: 'calil christopher jaudian',
          contact_number: '09955591932',
     },

     {
          username: 'Username1',
          password: PASSWORD,
          fullname: 'Juan Dela Cruz',
          contact_number: '09232123132',
     },

     {
          username: 'Username2',
          password: PASSWORD,
          fullname: 'Bong Bong',
          contact_number: '09348383432',
     },

     {
          username: 'Username3',
          password: PASSWORD,
          fullname: 'Bartolome Cruz',
          contact_number: '09383848334',
     },

     {
          username: 'Username4',
          password: PASSWORD,
          fullname: 'Tolome Indra',
          contact_number: '092934923942',
     },
]

module.exports = userDetails
