
import { Link, useRouteError } from 'react-router-dom'
import img from "../../assets/error.png"
const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <section>

            <div className='h-1/2 w-1/2 mx-auto'>
                <img src={img} alt="" />
                <Link to='/' className='btn w-full bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold'>
                    Back to homepage
                </Link>
            </div>
            <p className='text-2xl font-semibold md:text-4xl text-red-700 mb-8'>
                {error?.message}
            </p>



        </section>
    )
}

export default ErrorPage
