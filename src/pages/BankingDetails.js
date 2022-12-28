import { useState, useEffect } from 'react'
import axios from 'axios';
import { api } from '../constants'
import { toast, ToastContainer } from 'react-toastify';

function BankingDetails() {
    const [loading, setLoading] = useState(false);
    const [bankList, setBankList] = useState([]);
    const [bank, setBank] = useState({
        account_holder: "",
        account_no: "",
        bank_name: "",
        branch_name: "",
        bank_code: "",
        swift_code: "",
        bank_type: "",
        recieve_address: ""
    })

    useEffect(() => {
        setLoading(true)
        axios.get(`${api}/bank`)
            .then(res => {
                setBankList(res.data.banks)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.response.data.message)
            })
    }, [])

    const addBankDetails = () => {
        setLoading(true);
        try {
            axios.post(`${api}/bank`, bank)
                .then(res => {
                    if(res.data.status === "success"){
                        toast.success(res.data.message)
                        setBankList([...bankList, res.data.bank])
                    }else{
                        toast.warning(res.data.message)
                    }
                }).finally(() => {
                    setLoading(false);
                })

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center">
            <ToastContainer />
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
                                            <th>Account Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {bankList.length > 0 && bankList.map((bank, index) => (
                                            <tr>
                                                <th>{index+1}</th>
                                                <td>{bank.account_holder}</td>
                                                <td>{bank.bank_name}</td>
                                                <td>{bank.account_no}</td>
                                            </tr>
                                        ))}
                                       

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
                                <input
                                value={bank.account_holder}
                                onChange={(e) => setBank({...bank, account_holder: e.target.value})}
                                type="text" placeholder="Account holder" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank name</span>
                                </label>
                                <input 
                                value={bank.bank_name}
                                onChange={(e) => setBank({...bank, bank_name: e.target.value})}
                                type="text" placeholder="Bank name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Branch name</span>
                                </label>
                                <input
                                value={bank.branch_name}
                                onChange={(e) => setBank({...bank, branch_name: e.target.value})}
                                type="text" placeholder="Branch name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank code</span>
                                </label>
                                <input
                                value={bank.bank_code}
                                onChange={(e) => setBank({...bank, bank_code: e.target.value})}
                                type="text" placeholder="Bank code" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Swift code</span>
                                </label>
                                <input
                                value={bank.swift_code}
                                onChange={(e) => setBank({...bank, swift_code: e.target.value})}
                                type="text" placeholder="Swift code" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank type</span>
                                </label>
                                <input
                                value={bank.bank_type}
                                onChange={(e) => setBank({...bank, bank_type: e.target.value})}
                                type="text" placeholder="Bank type" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bank account number</span>
                                </label>
                                <input
                                value={bank.account_no}
                                onChange={(e) => setBank({...bank, account_no: e.target.value})}
                                type="text" placeholder="Bank account number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Berry USDT TRC20 receive address.</span>
                                </label>
                                <input 
                                value={bank.recieve_address}
                                onChange={(e) => setBank({...bank, recieve_address: e.target.value})}
                                type="text" placeholder="Berry USDT TRC20 receive address." className="input input-bordered" />
                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={addBankDetails} className=" btn">
                                    Add Beneficiary
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BankingDetails;