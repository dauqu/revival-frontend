import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { api } from "../constants";
import { Link } from "react-router-dom";

export default function Register() {
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        country: "",
        phone: "",
        password: "",
        repeatPassword: "",
        referal: "",
    });

    const onRegister = () => {
        setLoading(true);
        console.log(user);
        if (user.password !== user.repeatPassword) {
            return toast.error("Passwords do not match");
        }
        try {
            axios.post(`${api}/register`, user)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.status === "success") {
                        toast.success(res.data.message);
                        setTimeout(() => {
                            window.location.href = "/login";
                        }, 2000);
                    } else {
                        toast.info(res.data.message);
                    }
                    setLoading(false);
                }).catch((error) => {
                    setLoading(false);
                    console.log(error);
                })
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center w-full bg-base-200">
            <ToastContainer theme="dark" />
            <div className="hero ">
                <div className="hero-content flex-col xl:flex-row-reverse">
                    <div className="card w-full bg-base-100">
                        <div className="card-body w-full">
                            <div className="flex w-full">
                                <div className="form-control mr-5">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input
                                        value={user.name}
                                        onChange={e => setUser({ ...user, name: e.target.value })}
                                        type="text" placeholder="Full Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your username</span>
                                    </label>
                                    <input
                                        value={user.username}
                                        onChange={e => setUser({ ...user, username: e.target.value })}
                                        type="text" placeholder="Username" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input
                                    value={user.email}
                                    onChange={e => setUser({ ...user, email: e.target.value })}
                                    type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>

                            <div className="flex w-full">
                                <div className="form-control mr-5">
                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <input
                                        value={user.country}
                                        onChange={e => setUser({ ...user, country: e.target.value })}
                                        type="text" placeholder="Country" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Contact number</span>
                                    </label>
                                    <input
                                        value={user.phone}
                                        onChange={e => setUser({ ...user, phone: e.target.value })}
                                        type="text" placeholder="Contact Number" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="flex w-full">
                                <div className="form-control mr-5">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        value={user.password}
                                        onChange={e => setUser({ ...user, password: e.target.value })}
                                        type="password" placeholder="Password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Repeat Password</span>
                                    </label>
                                    <input
                                        value={user.repeatPassword}
                                        onChange={e => setUser({ ...user, repeatPassword: e.target.value })}
                                        type="password" placeholder="Repeat Password" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Referal</span>
                                </label>
                                <input
                                    value={user.referal}
                                    onChange={e => setUser({ ...user, referal: e.target.value })}
                                    type="text" placeholder="Referal ID (Optional)" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className={`${loading && "loading"} btn btn-primary`} onClick={onRegister}>
                                    {loading ? "Loading..." : "Register"}
                                </button>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="text-base label-text-alt link link-hover">Already have an account ?</span>
                                <Link to='/login' className="text-base text-accent-focus ml-3">Login</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}