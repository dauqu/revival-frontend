


export default function Register() {
    return (
        <div className="min-h-screen w-full h-screen">

            <div className="hero bg-base-200 h-screen">

                <div className="hero-content flex-col xl:flex-row-reverse">

                    <div className="card w-full bg-base-100">
                        <div className="card-body w-full">
                            <div className="flex w-full">
                                <div className="form-control mr-5">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your username</span>
                                    </label>
                                    <input type="text" placeholder="Username" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input type="text" placeholder="Country" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact number</span>
                                </label>
                                <input type="text" placeholder="Contact Number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Repeat Password</span>
                                </label>
                                <input type="text" placeholder="Repeat Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}