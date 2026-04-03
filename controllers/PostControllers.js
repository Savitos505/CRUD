import PostServis from "../servic/PostServis.js"

class PostControllers{
    async create(req, res){
        try{
            const post = await PostServis.create(req.body)
            res.json(post)
        }catch(error){
            throw new Error(error)
        }
        }
    async getAll(_, res){
        try{
            const post = await PostServis.getAll()
            res.json(post)
        }catch{
            res.json({message: error})
        }}
    async getOne(req, res){
        try{
            const post = await PostServis.getOne(req.params.id)
            res.json(post)
        }catch{
            res.json({message: error})
        }
    }
    async update(req, res){
        try{
            const updatedPost = await PostServis.update(req.params.id,req.body,{new:true})
            res.json(updatedPost)
        }catch{
            res.json({message: error})
        }
    }
    async delete(req, res){
        try{
            const deletedPost = await PostServis.delete(req.params.id)
            res.json(deletedPost)
        }catch{
            res.json({message: error})
        }
    }
}

export default new PostControllers()