import Post from "../model/Post.js"

class PostServis{
    async create(body){
        if(!body){console.log("error")}     
        const post = await Post.create(body)
        return post
    }
    async getAll(){
        const post = await Post.find()
        return post
    }
    async getOne(id){
        if(!id){console.log("error")}
        const post = await Post.findById(id)
        return post
    }
    async update(id, body){
        if(!id){console.log("error")}
        if(!body){console.log("error")}
        const updatedPost = await Post.findByIdAndUpdate(id, body)
        return updatedPost
    }
    async delete(id){
        if(!id){console.log("error")}
        const deletedPost = await Post.findByIdAndDelete(id)
        return deletedPost
    }
}



export default new PostServis