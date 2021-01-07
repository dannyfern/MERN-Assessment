import api from '../config/api'

// services from integration lecture code - review and understand them

export function getPostFromId(blogPosts, id){
    const post = blogPosts.find((post) => post._id === id)
    return post
}

export async function getAllBlogPosts() {
    const response = await api.get("/")
    console.log(response)
    return response.data
}

export async function addBlogPost(newPost) {
    const response = await api.post("/", newPost)
    console.log(response)
    return response.data
}

export async function deleteBlogPost(id) {
    const response = await api.delete(`/${id}`)
    return response.data
}

export async function updateBlogPost (post) {
    const response = await api.put(`/${post._id}`, post)
    return response.data
}