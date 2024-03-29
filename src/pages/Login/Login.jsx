import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("login")
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="custom-height container">
            <form onSubmit={handleLogin}>
                <div>
                    <label className="me-2">Email:</label>
                    <input type="text" name="email" placeholder="enter your email" />
                </div>
                <div>
                    <label className="me-2">Password:</label>
                    <input type="text" name="password" placeholder="enter your password" />
                </div>
                <div>
                    <input type="submit" value={"Login"} />
                </div>
            </form>

            <p>Do not have an account? <Link to={"/signup"}>Sign Up</Link></p>
        </div>
    );
};

export default Login;