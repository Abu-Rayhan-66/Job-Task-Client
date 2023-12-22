

const Project = () => {
    return (
        <div>
        <h2 className="text-3xl font-semibold text-center mt-6">Your current Running Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/d7ZcLcL/download.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Car repair shop react website project</h2>
                
                <div className="card-actions ">
                    <button className="btn btn-primary">send team message</button>
                </div>

            </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/3dPC5qc/20180920-234806-f6dc5b9d-w1920.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Online Watch Shop building with MERN stack </h2>
                
                <div className="card-actions ">
                    <button className="btn btn-primary">send team message</button>
                </div>

            </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/417dNCf/istockphoto-1359207185-612x612.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Online Show shop frontend development</h2>
                
                <div className="card-actions ">
                    <button className="btn btn-primary">send team message</button>
                </div>

            </div>
        </div>
       
       
       

    </div>
    </div>
    );
};

export default Project;