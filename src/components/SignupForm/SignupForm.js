import "./SignupForm.scss";
import {useState} from "react";


const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleFullname = ({target}) => {
    setFullname(target.value);
  }

  const handleEmail = ({target}) => {
    setEmail(target.value);
  }

  return (
    <div className="SignupForm">
      <form autoComplete="true">
        <div>
          <label htmlFor="fullname">Full name:</label>
          <input type="text" name="fullname" autoFocus={true} value={fullname} onChange={handleFullname}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail}/>
        </div>
        <div>
          <label htmlFor="password1">Password:</label>
          <input type="password" name="password1" autoComplete="true" value={password1}/>
        </div>
        <div>
          <label htmlFor="password2">Retype password:</label>
          <input type="password" name="password2" autoComplete="true" value={password2}/>
        </div>
        <div>
          <input type="submit" className="button green" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
