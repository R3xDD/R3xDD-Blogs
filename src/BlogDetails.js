import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/")
        }) 
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="title text-xl font-bold text-[#f1356d] ">{blog.title}</h2>
                    <p className="author">Written By <span className="text-lg font-medium text-[#f1356d] ">{blog.author}</span></p>
                    <p className="body leading-6 text-[#]">{blog.body}</p>
                    <button onClick={handleDelete} className="transition-all text-[#fff] bg-[#f1356d] p-2 font-medium rounded-md hover:bg-[#e50f4f] text-lg mt-8">Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;