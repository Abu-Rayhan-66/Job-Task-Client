import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import GoogleLogin from "../../Shared/GoogleLogIn/GoogleLogIn";


const Login = () => {
    const {userSignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const email = data.email
        const password = data.password
        userSignIn(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : "/dashboard")
            })
        
        Swal.fire("Successfully Logged In ");
    }

    return (
        <div >
            <div id="background">
                <div className='border-2 mx-auto  w-[350px] h-[450px] md:h-[500px] mb-6 mt-6 md:w-[500px] p-5
         md:p-10 bg-white bg-opacity-50  hover:shadow-2xl  rounded-md' >
                    <h2 className='text-5xl font-bold text-blue-600'>Login here</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className=' w-40 h-80 relative'>
                        <h3 className='text-white text-lg font-medium'>Email</h3>
                        <input className='pl-2  rounded-md py-2 w-[300px] bg-blue-200 md:w-[400px] text-lg'
                            {...register("email", { required: true })} type="email" placeholder='Email' id="" />
                        {errors.email && <span className="mt-2 text-red-600">Email is required </span>}


                        <h3 className='text-white text-lg  font-medium'>Password</h3>
                        <input className='pl-2  rounded-md py-2 w-[300px] bg-blue-200 md:w-[400px]  text-lg '
                            {...register("password", { required: true, minLength: 6 })} type="password" placeholder='Password' id="" />
                        {/* {errors.password && <span className="mt-2 text-red-600 ">password is required </span>
                        
                        } */}

                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600">required 6 character</p>
                        )}

                        <p className=' mb-6 w-[300px] '>Do not have an account? <Link className='font-semibold text-purple-800' to="/register">Register</Link></p>
                        <button
                         className="btn w-[300px]
                          md:w-[400px] bg-blue-500
                           text-white rounded-md
                            hover:text-black
                             hover:bg-blue-300 
                              text-lg font-semibold">Login</button>
                              <GoogleLogin></GoogleLogin>
                    
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;