// import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./bloglist";


const Home = () => {
    const { error, data:blogs, isPending } = useFetch("http://localhost:8000/blogs");
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setData(newBlogs);
    // };
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
        </div>
    );
}
export default Home;

// handleDelete ={handleDelete}