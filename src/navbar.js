import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="Navbar p-5 flex items-center my-0 mx-auto justify-between">
            <Link to="/"><h1 className="text-[#f1356d] font-bold text-xl">R3xDD Blogs</h1></Link>
            <div className="links ml-auto">
                <Link to="/" className="transition-all hover:text-[#f1356d] mr-3 text-lg font-medium">Home</Link>
                <Link to="/create" className="transition-all text-[#fff] bg-[#f1356d] p-2 font-medium rounded-md hover:bg-[#e50f4f] text-lg">New Blog</Link>
            </div>
        </nav>
    );
};
export default Navbar;
