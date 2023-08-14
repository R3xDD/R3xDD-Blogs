import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2 className="mb-8 text-3xl text-[##e50f4f]">Sorry</h2>
            <p className=" mb-5 font-bold">That Page Connot Be Found</p>
            <Link to="/" className="transition-all text-[#fff] bg-[#f1356d] p-2 font-medium rounded-md hover:bg-[#e50f4f] text-lg mt-8">Back To the Home Page</Link>
        </div>
     );
}

export default NotFound;