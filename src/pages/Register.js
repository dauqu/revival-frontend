import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { api } from "../constants";

export default function Register() {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        country: "",
        phone: "",
        password: "",
        repeatPassword: "",
        referal: "",
        level: 1
    });

    const onRegister = () => {
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
                }).catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            toast.error(error.message);
        }

    }

    return (
        <div className="min-h-screen w-full bg-base-200">
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
                                        type="text" placeholder="Password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Repeat Password</span>
                                    </label>
                                    <input
                                        value={user.repeatPassword}
                                        onChange={e => setUser({ ...user, repeatPassword: e.target.value })}
                                        type="text" placeholder="Repeat Password" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Referal</span>
                                </label>
                                <input
                                    value={user.referal}
                                    onChange={e => setUser({ ...user, referal: e.target.value })}
                                    type="text" placeholder="Repeat Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Level</span>
                                </label>
                                <select className="select select-bordered"
                                defaultValue={1}
                                 onChange={e => setUser({ ...user, level: e.target.value })}>
                                    <option disabled>Pick one</option>
                                    <option value={1}>Level 1</option>
                                    <option value={2}>Level 2</option>
                                    <option value={3}>Level 3</option>
                                    <option value={4}>Level 4</option>
                                    <option value={5}>Level 5</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={onRegister}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}