
 export class User {
    private name = '';
    private email = '';
    private password = '';

    get name() {
      return this.name
    }

    set name(value) {
      this.name = value.trim()
    }

    get email() {
      return this.email
    }

    set email(value) {
      this.email = value.trim()
    }

    
    get password() {
      return this.password
    }

    set password(value) {
      this.password = value.trim()
    }


    __construct() {
    }

    static load(id) {
      require('../data/users.json')
      const user = new User()
      user.
    }
    
 }
