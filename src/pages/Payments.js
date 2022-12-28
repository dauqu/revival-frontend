import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../constants";


export default function Payments() {

    const [payments, setPayments] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${api}/payments`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setPayments(res.data.payments);
                setUser(res.data.user);
                setLoading(false);
            }
            )
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="hero">
            <div className="hero-content text-center flex flex-col">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Payments</h1>
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
                                <th>Bank Name</th>
                                <th>Amount</th>
                                <th>Bank Number</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.length > 0 && payments.map((payment, index) => (
                            <tr className="hover">
                                <th>{payment.level}</th>
                                <td>{user.name}</td>
                                <td>{payment.bank_name}</td>
                                <td>${payment.amount}</td>
                                <td>{payment.account_number}</td>
                                <td>{new Date(payment.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <span className="badge badge-success">
                                        Success
                                    </span>
                                </td>
                            </tr>
                            ))}
                            {/* <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>State Bank Of India</td>
                                <td>$5997</td>
                                <td>0000-0000-0000-0000</td>
                                <td>12/09/2022</td>
                                <td>
                                    <span className="badge badge-success">
                                        Success
                                    </span>
                                </td>
                            </tr> */}
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
    );
}