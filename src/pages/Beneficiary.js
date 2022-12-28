

export default function Beneficiary() {
    return (
        <div className="flex justify-center">
            <div className="hero min-h-[90vh] bg-base-200 text-left items-start pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse items-start">
                    <div className="card w-[50%] bg-base-100 shadow-sm rounded-none justify-start flex text-left h-full">
                        <figure className="p-5">
                            {/* Add ben heading */}
                            <h1 className="card-title">List of Beneficiary</h1>
                        </figure>
                        <div className="card-body">
                            <div className="overflow-x-auto w-full">
                                <table className="table table-zebra w-full">
                                    {/* <!-- head --> */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <!-- row 1 --> */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>info@example.com</td>
                                            <td>+91 876-456-4566</td>
                                        </tr>
                                        {/* <!-- row 2 --> */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>info@example.com</td>
                                            <td>+91 876-456-4566</td>
                                        </tr>
                                        {/* <!-- row 3 --> */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>info@example.com</td>
                                            <td>+91 876-456-4566</td>
                                        </tr>
                                        {/* <!-- row 3 --> */}
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[50%] bg-base-100 shadow-sm rounded-none h-full">
                        <figure className="p-5">
                            {/* Add ben heading */}
                            <h1 className="card-title">Add Beneficiary</h1>
                        </figure>
                        <div className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Identification Number</span>
                                </label>
                                <input type="text" placeholder="Identification Number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Relationship</span>
                                </label>
                                <input type="text" placeholder="Relationship" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input type="text" placeholder="Email address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Residual Address</span>
                                </label>
                                <input type="text" placeholder="Residual Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input type="text" placeholder="Contact Number" className="input input-bordered" />
                            </div>
                            <div className="card-actions justify-end">
                                <div className=" btn">
                                    Add Beneficiary
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}