import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import img from "../../assets/login.png"



const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    const handleGoogleSignIn = (event) => {
        event.preventDefault();

        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    };



    return (
        <div>
            <h2 className='text-5xl text-purple-600 my-6 font-bold text-center'>Login</h2>
            <div className=" md:flex md:justify-between w-full">
                <div className="w-1/2 h-1/2 mx-auto">
                    <img src={img} alt="" />
                </div>
                <div className="w-1/2 h-1/2 mx-auto">

                    <div className=' flex flex-col justify-center'>
                        <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto rounded-lg shadow-xl p-8 px-8'>

                            <div className='flex flex-col py-2'>
                                <label>Email Address</label>
                                <input className='rounded-lg border mt-2 p-2 focus:border-purple-500 focus:outline-none' type="text" name='email' required />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Password</label>
                                <input className='p-2 rounded-lg border mt-2 focus:border-purple-500 focus:outline-none' type="password" name='password' required />
                            </div>
                            <div className='flex justify-between py-2'>
                                <p className='flex items-center'><input className='mr-2 bg-red-400' type="checkbox" /> Remember Me</p>
                                <p>Forgot Password</p>
                            </div>
                            <button className='w-full my-5 py-2 bg-purple-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg'>Login</button>
                            <div className='text-center flex flex-col gap-3 mx-8 mb-2'>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline hover:bg-purple-600"> Sign in with Google</button>


                            </div>
                            <p className='text-center'>Do not have an account? <Link className='text-blue-500' to='/signup'>Sign Up</Link></p>

                            <p className='text-red-500'></p>
                            <p className='text-blue-500'></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;