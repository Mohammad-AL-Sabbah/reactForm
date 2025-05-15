import { useState } from "react"
function App() {

  const [user, setUser] = useState({
    username: "",
    UserEmail: "",
    userbassword: ""
  });
  const handleChange = (e) =>{
const {name, value} = e.target;
setUser({
  ...user,
 [name]:value
})
  
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>

    <div>

     <h2>register</h2>

     <form onSubmit={handleSubmit} >
      
     <div className="mb-3">
     <label  className="form-label">User Name</label>
     <input value={user.username} name="username" onChange={handleChange} type="text" className="form-control"  />
     </div>

     <div className="mb-3">
     <label  className="form-label">User Email</label>
     <input value={user.UserEmail} name="UserEmail" onChange={handleChange} type="text" className="form-control"  />
     </div>

      <div className="mb-3">
     <label  className="form-label">User Basssword</label>
     <input value={user.userbassword} name="userbassword" onChange={handleChange} type="text" className="form-control"  />
     </div>

     <button type="submit" className="btn btn-outline-primary">Register</button>

     </form>

     </div>

    </>
  )
}

export default App
