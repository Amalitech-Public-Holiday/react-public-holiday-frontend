import "./Signup.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SignupForm from "../../components/SignupForm/SignupForm";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="Signup">
            <NavBar>
                <Link to="/login">Login</Link>
            </NavBar>
            <h2>Create an account</h2>
            <SignupForm/>
            <Footer/>
        </div>
    );
}

export default Signup;