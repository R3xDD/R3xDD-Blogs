import { Link } from 'react-router-dom';

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
    return ( 
        <div className="blog-list">
            <h2 className="font-medium text-2xl mb-6 text-[#f1356d]">{ title }</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview p-5 mb-2" key={blog.id}>
                    <h2 className="text-xl italic tracking-wider text-[#f1356d] font-semibold ">{blog.title}</h2>
                    <p className="text-sm mt-1 ">Written By <span className="text-[#f1356d] font-bold">{blog.author}</span></p>
                    <Link to={`/blogs/${blog.id}`}>
                        <div className="mt-3 transition-all hover:bg-[#e50f4f] bg-[#f1356d] w-fit py-2 px-1 text-white rounded-md ">More details</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;