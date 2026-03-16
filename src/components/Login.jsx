function Login({ setToggle }) {

    return (
        <div className="form">

            <h2>Login</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Login</button>

            <p>
                Don't have an account?
                <span onClick={() => setToggle(prev => !prev)}> Register</span>
            </p>

        </div>
    )

}

export default Login