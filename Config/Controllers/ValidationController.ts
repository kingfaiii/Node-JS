interface ObjectIndex {
     [key: string]: string
}

class Validation {
     private _regex_test = /(?=.*[A-Z])(?=.*\d)/

     public testUsername(name: string) {
          if (!this._regex_test.test(name) || name.length < 8) {
               throw new Error(
                    'Username must be a minimum of 8 characters and contain at least 1 uppercase letter and number'
               )
          }
     }

     public testPassword(pass: string) {
          if (!this._regex_test.test(pass) || pass.length < 8) {
               throw new Error(
                    'Password must be a minimum of 8 characters and contain at least 1 uppercase letter and number'
               )
          }
     }

     public testNumber(num: string) {
          let format = '(xxx)-xxxx-xxxx'
          if (num.length < 11 || num.length > 11) {
               throw new Error('Contact Number must be 11 characters length')
          }

          const numPartials = num.split('')
          for (let i: number = 0; i < numPartials.length; i++) {
               format = format.replace('x', numPartials[i])
          }

          return format
     }

     public isEmpty(param: ObjectIndex) {
          const undefinedValues: string[] = Object.keys(param).filter(
               (k) => !param[k] && k
          )

          if (undefinedValues.length > 0)
               throw new Error(
                    `${undefinedValues?.join(', ')} Field  Cannot be Empty`
               )
     }
}

module.exports = new Validation()
