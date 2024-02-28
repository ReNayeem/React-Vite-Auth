import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="custom-height container">
            <form onSubmit={handleSignUp}>
            <div>
                    <label className="me-2">Name:</label>
                    <input type="text" name="name" placeholder="enter your name" />
                </div>
                <div>
                    <label className="me-2">Email:</label>
                    <input type="text" name="email" placeholder="enter your email" />
                </div>
                <div>
                    <label className="me-2">Password:</label>
                    <input type="text" name="password" placeholder="enter your password" />
                </div>
                <div>
                    <input type="submit" value={"Sign up"} />
                </div>
            </form>

            <p>Already have an account? <Link to={"/login"}>Login</Link></p>
        </div>
    );
};

export default SignUp;