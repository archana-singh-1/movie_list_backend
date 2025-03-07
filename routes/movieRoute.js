import router from 'express'
import movie from '../model/movieSchema.js'


const route=router()

route.get("/movieList",async (req,resp)=>{
    const movies=await movie.find()
    resp.json(movies)
    
})

route.get("/getByid/:id",async (req,resp)=>{
    try{
        const movieByid= await movie.findById(req.params.id)
        if (!movieByid){
            return resp.status(404).json({mess:"Movie not Found"})
        }
        resp.json(movieByid)
    } catch (error) {
        resp.status(500).json("Error fetching movie");
    }

})

route.delete("/deleteByid/:id",function(req,resp){
    const movieDeleteByid= movie.findByIdAndDelete(req.params.id)
    if (!movieDeleteByid){
        return resp.status(404).json({mess:"Movie not Found"})
    }
    resp.json({message:"Movie Delete succesfully"})


})


route.post("/post",async (req,resp)=>{
    try{
        const {title,year,genre,rating,poster}=req.body;
        if (!title || !year|| !genre || !rating || !poster){
            return resp.status(400).json({error:"All filds are required"});

        }
        const newMovieList=new movie({title,year,genre,rating,poster})
        await newMovieList.save()
        resp.status(201).json({ message: "Movie added successfully", movie: newMovieList });

    }
    catch (error) {
        resp.status(500).json({ error: "Failed to add movie", details: error.message });
    }

})

export default route;



