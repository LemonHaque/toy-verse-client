import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>

            <div className='my-20'>

                <div className=' flex flex-col justify-center'>
                    <form onSubmit={handleSignUp} className='max-w-[400px] w-full mx-auto rounded-lg shadow-xl p-8 px-8'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>Sign Up</h2>
                        <div className='flex flex-col py-2'>
                            <label>Name</label>
                            <input className='rounded-lg border mt-2 p-2 focus:border-red-500 focus:outline-none' type="text" name='name' required />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input className='rounded-lg border mt-2 p-2 focus:border-red-500 focus:outline-none' type="text" name='email' required />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Confirm Password</label>
                            <input className='p-2 rounded-lg border mt-2 focus:border-red-500 focus:outline-none' type="password" name='password' required />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Photo URL</label>
                            <input className='p-2 rounded-lg border mt-2 focus:border-red-500 focus:outline-none' type="text" name='photo' required />
                        </div>
                        <div className='flex justify-between py-2'>
                            <p className='flex items-center'><input className='mr-2 bg-red-400' type="checkbox" /> Remember Me</p>

                        </div>
                        <button className='w-full my-5 py-2 bg-purple-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg'>Sign Up</button>
                        <div className='text-center flex flex-col gap-3 mx-8 mb-2'>
                            


                        </div>
                        <p className='text-center'>Already have an account? <Link className='text-blue-500' to='/login'>Login</Link></p>

                        <p className='text-red-500'></p>
                        <p className='text-blue-500'></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;