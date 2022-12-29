
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../constants'

const IncomeStreams = () => {

    const [streams, setStreams] = useState([])
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        try {
            axios.get(`${api}/stream`, { withCredentials: true })
                .then(res => {
                    setStreams(res.data.streams)
                })
                .catch(err => {
                    console.log(err)
                }).finally(() => {
                    setLoading(false)
                })
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }, []);

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

                                {streams.length > 0 && streams.map((stream, index) => (

                                    <tr key={index}>
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
                                                    <div className="font-bold">{user.name}</div>
                                                    <div className="text-sm opacity-50">{user.country || ""}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {stream.refer.length > 0 && stream.refer.map((ref, ref_idx) => {
                                                return (
                                                    <span className='ml-1'>
                                                        <span className='capitalize'>
                                                            {ref}
                                                        </span>
                                                        {ref_idx < stream.refer.length - 1 && <span className="text-gray-400">,</span>}
                                                    </span>
                                                )
                                            })}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>${stream.income}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeStreams;


