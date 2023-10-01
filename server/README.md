## ORM
- path : server/src/db/orm
- both ModelUser and ORM inside same path
# Create User // save()
* to create a user just few steps
- example
```console
const user = {
    username: "johndoe",
    password : 'nice',
    email: "jniceoe@example.com",
  };
const userModel = new ModelUser(user);
const newUser = new Orm(userModel);
try{
        await newUser.save().then(()=>{console.log('user created successfuly')});

    }catch(err : any){console.log(err.message)}
```
  
- username and password and email is required and don't forget to hashed password
- first we create userModel then create and initial orm with userModel
- and the last step to save the user in database if user save with any problem then it will display in console 'user created successfuly' instead of this it will display error message the error message is display to you kind of problem do you have here is 3 errors first error first error it will display to you any field is not fully filled second duplicate name third error email is duplicated
 
