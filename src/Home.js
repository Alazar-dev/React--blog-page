import { useState } from "react";

const Home = () => {

    const [ blogs, setBlogs ] = useState([
        {id: 1, title: 'React', body: 'React is the best javasctipt framework I ever knew and learn', author: 'vue.js team'},
        {id: 2, title: 'Vue', body: 'Honestly speaking vue is highly envolving js framework and I am loving it', author: ''},
        {id: 3, title: 'Angular', body: 'This thing is totally shit', author: 'google' }
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => {
               return <div key = {blog.id} className="blog-preview">
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p><small>{blog.author}</small></p>
               </div>
            })}
        </div>
     );
}
 
export default Home;