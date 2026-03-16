function Register({ setToggle }) {

  return (
    <div className="form">

      <h2>Create Account</h2>

      <input type="text" placeholder="Full Name"/>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>

      <button>Register</button>

      <p>
        Already have an account?
        <span onClick={() => setToggle(prev => !prev)}> Login</span>
      </p>

    </div>
  )

}

export default Register