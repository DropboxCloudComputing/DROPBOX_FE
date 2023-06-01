import React from "react";
import Logo from "../static/logo-ball.webp";
import {Link, useNavigate} from "react-router-dom";
import {loginUser} from "../apis/User";
import { useSetRecoilState } from "recoil";
import { isLogInState } from "../recoil/atom";

const LoginComponent = () => {
    const isLoggedIn = useSetRecoilState(isLogInState);
    let navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        loginUser(email,password)
            .then(status => {
                isLoggedIn(true);
                return navigate("/");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


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
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email" className="login-input" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="text-left block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="login-input focus:ring-primary-600 focus:border-primary-600" required=""/>
                                </div>
                                <button type="submit"  className="login-button hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? 
                                    <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginComponent;