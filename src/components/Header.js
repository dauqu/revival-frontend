import { useNavigate } from "react-router-dom";
import { api } from '../constants';
import axios from 'axios';

export default function Header() {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("user");
        axios.get(`${api}/auth/logout`, { withCredentials: true })
            .then((res) => {
                if (res.data.status === "success") {
                    navigate("/login");
                }
            })
    }

    const MenuComp = () => {
        return (<>
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
        </>
        )
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <MenuComp />
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Revival Platform</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu items-center menu-horizontal px-1">
                    <MenuComp />
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https:placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li onClick={() => navigate("/dashboard/profile")}>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li onClick={logOut}>
                        <a className="justify-between">
                            Logout
                            <span className="badge">New</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        // <div>
        //     <div className="navbar bg-base-300 shadow-md">
        //         <div className="flex-1">
        //             <a className="btn btn-sm normal-case text-xl rounded-none">
        //                 Revival Plateform
        //             </a>
        //         </div>
        //         <div className="flex-none gap-2">
        //             <div className="form-control">
        //                 <ul className="menu menu-horizontal px-1">
        //                     <li onClick={() => navigate("/dashboard/beneficiary")}>
        //                         <a className="rounded-none">
        //                             <span className="text-sm">Beneficiary</span>
        //                         </a>
        //                     </li>
        //                     <li onClick={() => navigate("/dashboard/kyc")}>
        //                         <a className="rounded-none">
        //                             <span className="text-sm">KYC</span>
        //                         </a>
        //                     </li>
        //                     <li onClick={() => navigate("/dashboard/banking-details")}>
        //                         <a className="rounded-none">
        //                             <span className="text-sm">Banking Details</span>
        //                         </a>
        //                     </li>
        //                     <li onClick={() => navigate("/dashboard/income-streams")}>
        //                         <a className="rounded-none">
        //                             <span className="text-sm">Income Streams</span>
        //                         </a>
        //                     </li>
        //                     <li onClick={() => navigate("/dashboard/payments")}>
        //                         <a className="rounded-none">
        //                             <span className="text-sm">Payments</span>
        //                         </a>
        //                     </li>
        //                     <li onClick={() => navigate("/dashboard/statement")}>
        //                         <a className="rounded-none">
        //                             <span className="text-sm">Hierarchy statement</span>
        //                         </a>
        //                     </li>
        //                     <li onClick={() => navigate("/dashboard/contact-us")}>
        //                         <a className="rounded-none">
        //                             <span className="text-sm">Contact us</span>
        //                         </a>
        //                     </li>

        //                 </ul>
        //             </div>
        //             <div className="dropdown dropdown-end">
        //                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        //                     <div className="w-10 rounded-full">
        //                         <img src="https://placeimg.com/80/80/people" />
        //                     </div>
        //                 </label>
        //                 <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        //                     <li onClick={() => navigate("/dashboard/profile")}>
        //                         <a className="justify-between">
        //                             Profile
        //                             <span className="badge">New</span>
        //                         </a>
        //                     </li>
        //                     {/* <li onClick={() => navigate("/dashboard/statement")}>
        //                         <a className="justify-between">
        //                             Settings
        //                             <span className="badge">New</span>
        //                         </a>
        //                     </li> */}
        //                     <li onClick={logOut}>
        //                         <a className="justify-between">
        //                             Logout
        //                             <span className="badge">New</span>
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}