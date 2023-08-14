import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body , setBody ] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(true);
            history.push('/')
        });
    }
    return (
        <div className="create">
            <h2 className="font-medium text-center text-2xl mb-6 text-[#f1356d]">Add A New Blog</h2>
            <form action="" onSubmit={handleClick}>
                <label >Blog Title:</label>
                <input
                    type="text"
                    reaquired
                    className="Title"
                    placeholder="Make A Blog Title"
                    value={ title }
                    onChange ={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    className="resize-none h-28"
                    placeholder="Make A Blog Body"
                    value={ body }
                    onChange ={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={ author }
                    onChange ={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yushi">Yushi</option>
                </select>
                { !isPending && <button className="transition-all text-[#fff] bg-[#f1356d] p-2 font-medium rounded-md hover:bg-[#e50f4f] text-lg mt-8">Make A Blog</button>}
                { isPending && <button className="transition-all text-[#fff] bg-[#f1356d] p-2 font-medium rounded-md hover:bg-[#e50f4f] text-lg mt-8" disabled>Adding Blog ....</button>}
            </form>
        </div>
    );
};
export default Create; 