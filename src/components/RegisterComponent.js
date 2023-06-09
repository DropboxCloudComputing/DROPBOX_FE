import React from "react";
import Logo from "../static/logo-ball.webp";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const registerUser = async (full_name, email, password) => {
    return await axios.post('http://127.0.0.1:8000/api/v1/user_app/signup/',
      {
        full_name: full_name,
        email: email,
        password: password
      },
      {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((response) =>{
          return response.status;
      })
      .catch((error) => { console.log('Error!') })
  }

const RegisterComponent = () => {

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        registerUser(event.target[0].value,event.target[1].value,event.target[2].value)
            .then(status => console.log(status))
        
        return navigate("/login");
    }

    return (
        <>
            <section className="bg-gray-50">
                <div className="login-body">
                    <Link to="/" className="login-logo">
                        <img className="w-48 h-48 mr-2" src={Logo} alt="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" />
                        KKHU_GIT    
                    </Link>
                    <div className="login-form">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign up
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                    <label for="name" className="text-left block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                                    <input type="text" name="name" id="name" className="login-input" placeholder="Name" required=""/>
                                </div>
                                <div>
                                    <label for="email" className="text-left block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email" className="login-input" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label for="password" className="text-left block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="login-input focus:ring-primary-600 focus:border-primary-600" required=""/>
                                </div>
                                <button type="submit" className="login-button hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300   ">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegisterComponent;