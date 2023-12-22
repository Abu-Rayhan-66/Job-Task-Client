import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-20 footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover text-xl font-medium">About us</a>
                <a className="link link-hover text-xl font-medium">Contact Us</a>
                <a className="link link-hover text-xl font-medium">Premium Plans</a>
                <a className="link link-hover text-xl font-medium">Free Trail</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                   <Link to="https://www.facebook.com/mdrayhan6"><FaFacebook className='text-3xl'></FaFacebook></Link>
                   <Link to="https://www.linkedin.com/in/abu-rayhan-dev"><FaLinkedin className='text-3xl'></FaLinkedin></Link>
                   <Link to="https://www.instagram.com/arrayhan66"><FaInstagram className='text-3xl'></FaInstagram></Link>
                    
                </div>
            </nav>
            <aside>
                <p className='text-xl font-medium'>Copyright © 2023 - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;