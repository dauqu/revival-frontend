import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { api } from '../constants';

export default function Beneficiary() {
    const [loading, setLoading] = useState(false);
    const [beneficiary, setBeneficiary] = useState({
        name: "",
        identification_no: "",
        relationship: "",
        email: "",
        address: "",
        contact: ""
    });
    const [beneficiaryList, setBeneficiaryList] = useState([]);

    const onAddBeneficiary = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            axios.post(`${api}/beneficiary`, beneficiary, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    setLoading(false);
                    if (res.data.status === "success") {
                        toast.success(res.data.message);
                        setBeneficiaryList([res.data.beneficiary, ...beneficiaryList])
                    } else {
                        toast.warning(res.data.message);
                    }
                })
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }



    useEffect(() => {
        try {
            setLoading(true);
            axios.get(`${api}/beneficiary`, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    setLoading(false);
                    if (res.data.status === "success") {
                        setBeneficiaryList(res.data.beneficiaries);
                    }
                })

        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }, []);

    return (
        <div className="flex justify-center">
            <ToastContainer />
            <div className="min-h-[100vh] w-screen bg-base-200 text-left py-10">
                <div className="flex flex-row justify-evenly items-start px-6 gap-x-[20px]">
                    <div className="bg-base-100 shadow-sm rounded-none h-full max-md:hidden md:w-[35%]">
                        <figure className="p-5">
                            {/* Add ben heading */}
                            <h1 className="card-title">Add Beneficiary</h1>
                        </figure>
                        <div className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    value={beneficiary.name}
                                    onChange={(e) => setBeneficiary({ ...beneficiary, name: e.target.value })}
                                    type="text" placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Identification Number</span>
                                </label>
                                <input
                                    value={beneficiary.identification_no}
                                    onChange={(e) => setBeneficiary({ ...beneficiary, identification_no: e.target.value })}
                                    type="text" placeholder="Identification Number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Relationship</span>
                                </label>
                                <input
                                    value={beneficiary.relationship}
                                    onChange={(e) => setBeneficiary({ ...beneficiary, relationship: e.target.value })}
                                    type="text" placeholder="Relationship" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input
                                    value={beneficiary.email}
                                    onChange={(e) => setBeneficiary({ ...beneficiary, email: e.target.value })}
                                    type="text" placeholder="Email address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Residual Address</span>
                                </label>
                                <input
                                    value={beneficiary.address}
                                    onChange={(e) => setBeneficiary({ ...beneficiary, address: e.target.value })}
                                    type="text" placeholder="Residual Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input
                                    value={beneficiary.contact}
                                    onChange={(e) => setBeneficiary({ ...beneficiary, contact: e.target.value })}
                                    type="text" placeholder="Contact Number" className="input input-bordered" />
                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={onAddBeneficiary} className=" btn">
                                    Add Beneficiary
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-100 shadow-sm rounded-none justify-start flex w-[100%] md:w-[65%] text-left h-full">
                        <figure className="p-5">
                            <h1 className="card-title">List of Beneficiary</h1>
                        </figure>
                        <div className="card-body">
                            <div className="overflow-x-auto w-full">
                                <table className="table table-zebra w-full">
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
                                        {beneficiaryList.length > 0 && beneficiaryList.map((ben, idx) => {
                                            return (
                                                <tr>
                                                    <th>{idx + 1}</th>
                                                    <td>{ben.name}</td>
                                                    <td>{ben.email}</td>
                                                    <td>{ben.contact}</td>
                                                </tr>
                                            )
                                        })}

                                        {/* <tr>
                                            <th>1</th>
                                            <td>Cy Ganderton</td>
                                            <td>info@example.com</td>
                                            <td>+91 876-456-4566</td>
                                        </tr> */}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}