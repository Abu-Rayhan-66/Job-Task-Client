

const YourTeam = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center mt-6">People You work with</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/3dgypYX/man-with-crossed-arms-23-2147574164.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mr teddy</h2>
                    <p>Full-Stack Developer</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Send Message</button>
                    </div>

                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/MSWWfHr/young-female-entrepreneur-talking-with-coworker-while-being-office-637285-1057.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Miss Monica</h2>
                    <p>React developer</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Send Message</button>
                    </div>

                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/qd3ktNB/portrait-happy-businesswoman-her-employees-background-1262-20305.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Jenifer</h2>
                    <p>MERN Stack Developer</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Send Message</button>
                    </div>

                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/gTLvV43/young-business-man-talking-phone-working-computer-1303-25412.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mr Henry</h2>
                    <p>Project Manager</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Send Message</button>
                    </div>

                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/KhFTbwh/young-businessman-with-clipboard-1098-602.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mr John</h2>
                    <p>Frontend Developer</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Send Message</button>
                    </div>

                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/KKgQwD5/portrait-young-smiling-businessman-1163-3880.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mr Philips</h2>
                    <p>Backend Developer</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Send Message</button>
                    </div>

                </div>
            </div>

        </div>
        </div>
    );
};

export default YourTeam;