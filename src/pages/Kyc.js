

export default function Kyc() {
    return (
        <div className="flex justify-center">
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
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline btn btn-sm">
                                    Select File
                                </div>
                                <div className="badge badge-outline btn btn-sm">
                                    Upload
                                </div>
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
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline btn btn-sm">
                                    Select File
                                </div>
                                <div className="badge badge-outline btn btn-sm">
                                    Upload
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}