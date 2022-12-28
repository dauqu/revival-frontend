

export default function BankingDetails() {
    return (
        <div className="flex justify-center">
            <div className="hero min-h-[90vh] bg-base-200 text-left items-start pt-5">
                <div className="hero-content flex-col lg:flex-row-reverse items-start">
                    <div className="card w-[50%] bg-base-100 shadow-sm rounded-none justify-start flex text-left h-full">
                        <figure className="p-5">
                            {/* Add ben heading */}
                            <h1 className="card-title">List of Banks</h1>
                        </figure>
                        <div className="card-body">
                            <div className="overflow-x-auto w-full">
                                <table className="table table-zebra w-full">
                                    {/* <!-- head --> */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Holder</th>
                                            <th>Bank Name</th>
                                            <th>Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <!-- row 1 --> */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>HDFC</td>
                                            <td>+91 876-456-4566</td>
                                        </tr>
                                        {/* <!-- row 2 --> */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>UBI</td>
                                            <td>+91 876-456-4566</td>
                                        </tr>
                                        {/* <!-- row 3 --> */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>UBI</td>
                                            <td>+91 876-456-4566</td>
                                        </tr>
                                        {/* <!-- row 3 --> */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>UBI</td>
                                            <td>+91 876-456-4566</td>
                                        </tr>
                                        {/* <!-- row 3 --> */}
                                        <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>UBI</td>
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
                            <h1 className="card-title">Add Bank</h1>
                        </figure>
                        <div className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Account holder</span>
                                </label>
                                <input type="text" placeholder="Account holder" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank name</span>
                                </label>
                                <input type="text" placeholder="Bank name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Branch name</span>
                                </label>
                                <input type="text" placeholder="Branch name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank code</span>
                                </label>
                                <input type="text" placeholder="Bank code" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Swift code</span>
                                </label>
                                <input type="text" placeholder="Swift code" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank type</span>
                                </label>
                                <input type="text" placeholder="Bank type" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank account number</span>
                                </label>
                                <input type="text" placeholder="Bank account number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Berry USDT TRC20 receive address.</span>
                                </label>
                                <input type="text" placeholder="Berry USDT TRC20 receive address." className="input input-bordered" />
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