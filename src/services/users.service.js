const User = require('../model/user.model.js')

class UserService {
  private rawUsers = require('../data/users.json')
  private users = []
  
  getUsers() {
    this.loadUsers();
    
    return this.users
  }

  getUser(id) {
    return this.getUsers().filter(value => value.id === id)
  }
  
  private loadUsers() {
    if (this.users.length <= 0 && Object.keys(name) > 0)
    {
      let user;
      for (const [key, value] of Object.entries(this.rawUsers) {
        user = new User()
        user.name = value.name
        user.id = value.id
        user.age = value.age
      
        this.users.push(user)
      }
    }
  }
  
  
}


export new UserService()
