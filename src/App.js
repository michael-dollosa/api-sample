import { userLogin, getAllUsers } from "./api"

const App = () => {
  
  //create hardcoded object - usually this will come from your userlogin form
  const user = {
    email: "dolee@example.com",
    password: "test12345"
  }

  //hardcoded header - this will come from the response data once you have successfully login
  const header = {
    token: "_QJ_UvaGYuonP5_V9hXOQQ",
    client: "Y9LHKe9CobcHeYC-4DizYg",
    expiry: "1627050606",
    uid: "dolee@example.com"
  }

  //sample method to show login API
  const handleLogin = () => {
    
    //always remember that even if we have made the API call a reusable function (via api.js), it will STILL return a PROMISE
    //so to get the data, always use .then()
    userLogin(user)
      .then(d => console.log(d)) //success
      .catch(e => console.log(e))
  }

  //sample method to show get users API
  const handleGetUsers = () => {

    getAllUsers(header)
      .then(data => console.log(data.data))

  }
  

  return(
    <div>
      <button onClick={handleLogin} >Login</button>
      <button onClick={handleGetUsers} >Get Users</button>
    </div>
  )
}

export default App