

export default function Statements() {

    return (
        <div>
            <div className="hero">
                <div className="hero-content text-center flex flex-col">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">
                            Hierarchy Statements
                        </h1>
                        <p className="py-6">
                            Here is the list of payments you have made.
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>
                                        Refer By (Name)
                                    </th>
                                    <th>
                                        Earned Amount
                                    </th>
                                    <th>
                                        Percent Earned
                                    </th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>
                                        Timothee
                                    </td>
                                    <td>$5997</td>
                                    <td>
                                        40%
                                    </td>
                                    <td>12/09/2022</td>
                                    <td>
                                        <span className="badge badge-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>
                                {/* <!-- row 2 --> */}
                                {/* <!-- row 1 --> */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>
                                        Timothee
                                    </td>
                                    <td>$5997</td>
                                    <td>
                                        40%
                                    </td>
                                    <td>12/09/2022</td>
                                    <td>
                                        <span className="badge badge-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>
                                {/* <!-- row 3 --> */}
                                {/* <!-- row 1 --> */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>
                                        Timothee
                                    </td>
                                    <td>$5997</td>
                                    <td>
                                        40%
                                    </td>
                                    <td>12/09/2022</td>
                                    <td>
                                        <span className="badge badge-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>
                                {/* <!-- row 3 --> */}
                                {/* <!-- row 1 --> */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>
                                        Timothee
                                    </td>
                                    <td>$5997</td>
                                    <td>
                                        40%
                                    </td>
                                    <td>12/09/2022</td>
                                    <td>
                                        <span className="badge badge-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>
                                {/* <!-- row 3 --> */}
                                {/* <!-- row 1 --> */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>
                                        Timothee
                                    </td>
                                    <td>$5997</td>
                                    <td>
                                        40%
                                    </td>
                                    <td>12/09/2022</td>
                                    <td>
                                        <span className="badge badge-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>
                                {/* <!-- row 3 --> */}
                                {/* <!-- row 1 --> */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>
                                        Timothee
                                    </td>
                                    <td>$5997</td>
                                    <td>
                                        40%
                                    </td>
                                    <td>12/09/2022</td>
                                    <td>
                                        <span className="badge badge-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex justify-center mt-5">
                            <div className="btn-group">
                                <button className="btn btn-ghost">Previous</button>
                                <button className="btn btn-ghost">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}