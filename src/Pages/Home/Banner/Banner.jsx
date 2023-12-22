import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <img className="w-full " src="https://i.ibb.co/JqV1JLT/1-l-Fh-Ch-Efmj5-R4-TU2-Q0g-TNa-A.png" alt="" />
            <div>
            <Link to="/dashboard" className=""><button className=" btn-sm ml-4  -mt-12 md:w-28 mx-auto btn bg-blue-500 text-white hover:text-black  hover:bg-blue-200 absolute md:ml-24 md:-mt-28 lg:ml-40 lg:-mt-36 xl:ml-60 xl:-mt-60 2xl:ml-80 2xl:-mt-72">Let’s Explore</button></Link>
            </div>
        </div>
    );
};

export default Banner;