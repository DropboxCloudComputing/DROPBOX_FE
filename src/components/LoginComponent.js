import React from "react";
import Logo from "../static/logo-ball.webp";
import {Link} from "react-router-dom";

const LoginComponent = () => {
    return (
        <>
            <section className="bg-gray-50">
                <div class="login-body">
                    <Link to="/" class="login-logo">
                        <img class="w-48 h-48 mr-2" src={Logo} alt="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" />
                        KKHU_GIT    
                    </Link>
                    <div className="login-form">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email" class="login-input" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="login-input focus:ring-primary-600 focus:border-primary-600" required=""/>
                                </div>
                                <button type="submit" class="login-button hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300   ">Sign in</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? 
                                    <Link to="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</Link>
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