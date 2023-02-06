import { useState } from 'react';
import { Link } from 'react-router-dom'
import { api } from '../constants';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'


export default function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        setLoading(true);
        axios.post(`${api}/auth/login`, { email, password }, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.status === "success") {
                    toast.success(res.data.message);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    setTimeout(() => {
                        window.location.href = "/dashboard";
                    }, 1000);
                    setLoading(false);
                } else {
                    toast.info(res.data.message);
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }

    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center w-full h-screen">
            <ToastContainer theme='dark' />


            <div className="w-full md:w-[70%] h-full flex flex-col md:flex-row items-start justify-evenly">
                <div className='w-full h-full flex items-center justify-center'>
                    <div className="md:w-[70%] w-[85%]">
                        <h1 className="text-left text-5xl font-bold">Login now!</h1>
                        <div className='md:h-[100px] h-[20px]'></div>
                        <p className="text-justify ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> <br />excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>

                <div className='w-full h-full flex items-center justify-center'>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-sm bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className={`btn btn-primary ${loading && "loading"}`} onClick={onLogin}>{!loading ? "Login" : "Loading..."}</button>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="text-base label-text-alt link link-hover">Don't have an account ?</span>
                                <Link to='/register' className='text-base text-accent-focus ml-3'>Sign Up</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}