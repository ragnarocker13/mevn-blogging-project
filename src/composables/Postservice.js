// POSTSERVICE.JS is where we load the axios api, 
// and create some custom functions for us to use

import axios from 'axios';

// alter this parameter, depending on the API's address
const url = 'http://localhost:5000/api/posts';

class PostService {
    // GET
    // static means accessing the function without instatiating an object
    static getPosts() {
        return new Promise( async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            }
            catch(err) {
                reject(err);
            }
        })
    }

    // RETRIEVE from single blog post
    static getBlogPost(id) {
        return new Promise( async (resolve, reject) => {
            try {
                const res = await axios.get(url,id);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            }
            catch(err) {
                reject(err);
            }
        })
    }

    // CREATE
    static insertPost(text) {
        return axios.post(url, {
            text
        })
    }

    // DELETE
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;