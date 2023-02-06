import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { api } from '../constants';


export default function Beneficiary() {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowModal(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);

        }, [ref]);
    }

    const modalRef = React.useRef();
    useOutsideAlerter(modalRef);

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
                    setShowModal(false);
                    if (res.data.status === "success") {
                        setBeneficiaryList(res.data.beneficiaries);
                    }
                })
                
            } catch (err) {
            setShowModal(false);
            setLoading(false);
            console.log(err);
        }
    }, []);

    return (
        <div className="flex justify-center">
            <ToastContainer />
            <div className="min-h-[100vh] w-full bg-base-200 text-left py-10">
                <div className="flex flex-row justify-evenly items-start px-5">
                    {showModal ? 
                    (<div className={` w-full flex z-40 fixed left-0 top-0 bg-black bg-opacity-10 min-h-screen justify-center items-center`}>
                        <div className="overflow-y-scroll h-[90vh] md:h-auto bg-base-100 shadow-sm rounded-none w-[80%] md:w-[40%] " ref={modalRef}>
                            <figure className="p-5">
                                <h1 className="card-title">Add Beneficiary</h1>
                            </figure>
                            <div className="card-body w-full ">
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
                    </div>) : null}

                    <div className="bg-base-100 shadow-sm rounded-none justify-start flex flex-col w-[100%] md:w-[65%] text-left h-full">
                        <figure className="flex p-4 px-6 justify-between">
                            <h1 className="card-title">List of Beneficiary</h1>
                            <button className='btn btn-sm block' onClick={() => {
                                setShowModal(true);
                            }}>Add Beneficiary</button>
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