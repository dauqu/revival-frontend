import React, { useRef, useState, useEffect } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { api } from '../constants'
import axios from 'axios';


const Profile = () => {
    const fileRef = useRef(null);

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        profile: '',
        country: '',
    });

    const chooseFile = () => {
        fileRef.current.click();
    }

    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append('profile', file[0]);
        axios.post(`${api}/profile/upload`, formData, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setUser({ ...user, profile: res.data.profile })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updateProfile = () => {
        axios.patch(`${api}/profile`, user, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                if (res.data.status === "success") {
                    setUser(res.data.user)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        try {
            axios.get(`${api}/profile`, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
                    setUser(res.data.user);
                })
                .catch(err => {
                    console.log(err)
                })

        } catch (error) {
            console.log(error);
        }
    }, [])



    return (
        <div className='w-full h-full flex flex-col justify-center items-center min-h-[80vh]'>
            <h2 className='text-3xl font-medium my-5'>User Profile</h2>
            <div className='flex flex-row-reverse justify-evenly gap-x-10 items-center w-[75%]'>
                <div className='w-[40%]'>
                    <input type="file" onChange={e => uploadFile(e.target.files)} className='hidden' ref={fileRef} />
                    <div className="avatar relative" >
                        <div className="w-24 rounded-full ">
                            <img src={user.profile} />
                        </div>
                        <div onClick={chooseFile} className='w-[30px] h-[30px] rounded-[50%] bg-white absolute bottom-0 right-0 z-50 p-2 cursor-pointer justify-center items-center' style={{ display: "flex" }}>
                            <FiEdit2 color={"blue"} size={15} />
                        </div>
                    </div>
                    <input type="text"
                        value={user.name}
                        onChange={e => setUser({ ...user, name: e.target.value })}
                        placeholder="Name" className="input input-bordered my-2 w-full" />
                    <input
                        value={user.email}
                        onChange={e => setUser({ ...user, email: e.target.value })}
                        type="text" placeholder="Email" className="input input-bordered my-2 w-full" />
                    <input
                        value={user.country}
                        onChange={e => setUser({ ...user, country: e.target.value })}
                        type="text" placeholder="Level" className="input input-bordered my-2 w-full" />
                    <button className='btn bg-primary w-full border-none mt-5' onClick={updateProfile}>
                        Update Profile
                    </button>
                </div>
                <div className='flex flex-col my-3 w-[40%]'>
                    <h2 className='text-xl my-2 flex items-center'>Total Earnings: <span className='text-2xl font-bold mx-3 my-2'>${user.total_earning}</span></h2>
                    <h2 className='text-xl my-2 flex items-center'>Total Donation: <span className='text-2xl font-bold mx-3 my-2'>${user.total_donation}</span></h2>
                    <h2 className='text-xl my-2 flex items-center'>Total Referals: <span className='text-2xl font-bold mx-3 my-2'>$ {user.total_referral}</span></h2>
                    <h2 className='text-xl my-2 flex items-center'>Total Level: <span className='text-2xl font-bold mx-3 my-2'>{user.level}</span></h2>
                </div>
            </div>
        </div>
    )
}

export default Profile;