class UserController {
   private userService = require('../services/user.service.js')

  
  getUsersAction(req, res)  {
    const users = this.userService.getUsers();
    
    res.send(Json.stringify(users))
  }
}
