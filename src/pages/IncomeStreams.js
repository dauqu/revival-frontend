

export default function IncomeStreams() {
    return (
        <div className="flex justify-center">
            <div className="hero min-h-[90vh] bg-base-200 text-left items-start pt-5">
                <h1>
                    Income Streams
                </h1>
                <div className="hero-content flex-col lg:flex-row-reverse items-start">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full mt-10">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Reffer</th>
                                    <th>Income</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://cdn.dribbble.com/users/3305260/screenshots/6570213/ord_4x.jpg?compress=1&resize=400x300" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>$567</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* <!-- row 2 --> */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://cdn.dribbble.com/users/3305260/screenshots/6570213/ord_4x.jpg?compress=1&resize=400x300" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Brice Swyre</div>
                                                <div className="text-sm opacity-50">China</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Carroll Group
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                    </td>
                                    <td>$23</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* <!-- row 3 --> */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://cdn.dribbble.com/users/3305260/screenshots/6570213/ord_4x.jpg?compress=1&resize=400x300" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Marjy Ferencz</div>
                                                <div className="text-sm opacity-50">Russia</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rowe-Schoen
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                    </td>
                                    <td>#567</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                {/* <!-- row 4 --> */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://cdn.dribbble.com/users/3305260/screenshots/6570213/ord_4x.jpg?compress=1&resize=400x300" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Yancy Tear</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Wyman-Ledner
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                    </td>
                                    <td>$899</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}