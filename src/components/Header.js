import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="navbar bg-base-300 shadow-md">
                <div className="flex-1">
                    <a className="btn btn-sm normal-case text-xl rounded-none">
                        Revival Plateform
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <ul className="menu menu-horizontal px-1">
                            <li onClick={() => navigate("/dashboard/beneficiary")}>
                                <a className="rounded-none">
                                    <span className="text-sm">Beneficiary</span>
                                </a>
                            </li>
                            <li onClick={() => navigate("/dashboard/kyc")}>
                                <a className="rounded-none">
                                    <span className="text-sm">KYC</span>
                                </a>
                            </li>
                            <li onClick={() => navigate("/dashboard/banking-details")}>
                                <a className="rounded-none">
                                    <span className="text-sm">Banking Details</span>
                                </a>
                            </li>
                            <li onClick={() => navigate("/dashboard/income-streams")}>
                                <a className="rounded-none">
                                    <span className="text-sm">Income Streams</span>
                                </a>
                            </li>
                            <li onClick={() => navigate("/dashboard/payments")}>
                                <a className="rounded-none">
                                    <span className="text-sm">Payments</span>
                                </a>
                            </li>
                            <li onClick={() => navigate("/dashboard/statement")}>
                                <a className="rounded-none">
                                    <span className="text-sm">Hierarchy statement</span>
                                </a>
                            </li>
                            <li onClick={() => navigate("/dashboard/contact-us")}>
                                <a className="rounded-none">
                                    <span className="text-sm">Contact us</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li onClick={() => navigate("/dashboard/statement")}>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            {/* <li onClick={() => navigate("/dashboard/statement")}>
                                <a className="justify-between">
                                    Settings
                                    <span className="badge">New</span>
                                </a>
                            </li> */}
                            <li onClick={() => navigate("/login")}>
                                <a className="justify-between">
                                    Logout
                                    <span className="badge">New</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}