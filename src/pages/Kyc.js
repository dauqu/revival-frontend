import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants'
import {toast, ToastContainer } from 'react-toastify'
const Kyc = () => {
    const [loading, setLoading] = useState(false);

    const [passport, setPassport] = useState('');
    const [national_id, setNational_id] = useState('');

    const [user, setUser] = useState('');
    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data) {
            setUser(JSON.parse(data));
        }
    }, [])

    const uploadPassport = () => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append('passport', passport);

        axios.post(`${api}/upload/passport/${user._id}`, formdata)
            .then(res => {
                console.log(res);
                if(res.data.status === "success"){
                    toast.success(res.data.message);
                }else{
                    toast.warning(res.data.message);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 2000)
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }
    const uploadNationalID = () => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append('national_id', national_id);

        axios.post(`${api}/upload/national-id/${user._id}`, formdata)
            .then(res => {
                console.log(res);
                if(res.data.status === "success"){
                    toast.success(res.data.message);
                }else{
                    toast.warning(res.data.message);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 2000)
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }
    return (
        <div className="flex justify-center">
            <ToastContainer />
            <div className="hero min-h-[90vh] bg-base-200 text-left items-start pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card w-96 bg-base-100 shadow-sm rounded-none">
                        <figure className="p-5"><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Nationa ID
                                <div className="badge badge-secondary">
                                    PDF <i className="icon icon-file-pdf"></i>
                                </div>
                            </h2>
                            <p>
                                Upload your national ID card to verify your identity.
                            </p>
                            <div className="flex items-center my-2 card-actions justify-end">
                                <div className="badge badge-outline btn btn-sm w-[70%]">
                                    {/* // Select File */}
                                    <input onChange={e => setNational_id(e.target.files[0])} type="file" />
                                </div>
                                <button disabled={loading && true} onClick={uploadNationalID} className="badge badge-outline btn btn-sm">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-sm rounded-none">
                        <figure className="p-5"><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Passport
                                <div className="badge badge-secondary">
                                    PDF <i className="icon icon-file-pdf"></i>
                                </div>
                            </h2>
                            <p>
                                Upload your passport to verify your identity and address.
                            </p>
                            <div className="flex my-2 items-center card-actions justify-end">
                                <div className="badge badge-outline btn btn-sm w-[70%]">
                                    <input type="file" onChange={e => setPassport(e.target.files[0])} />
                                </div>
                                <button disabled={loading && true} onClick={uploadPassport} className="badge badge-outline btn btn-sm">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kyc;