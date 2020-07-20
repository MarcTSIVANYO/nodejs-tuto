const {Blog, Comment} =require('../sequelize');


exports.createBlog = (req,res,next) =>{
    Blog.create(req.body)
        .then(() => res.status(201).json({message: "Blog ajouter !"})) // Add
        .catch(error => res.status(400).json({error}));
 };

 exports.listBlog = (req,res,next) =>{
    Blog.findAll({ include : [Comment] })
        .then(blogs=> res.status(200).json(blogs))//Liste des blogs
        .catch(error => res.status(400).json({error}));
 };

 
 exports.getOneBlog = (req,res,next) =>{
    Blog.findOne({
        where : {
            id:req.params.id
        }
    })
    .then(blog=> res.status(200).json(blog))//Liste de blog
    .catch(error => res.status(404).json({error}));
     
 };

  
 exports.updateBlog = (req,res,next) =>{
    Blog.update(req.body, {
        where : {
            id:req.params.id
        }
    })
    .then(() => res.status(200).json({message: "Opération éffectuée avec succès!"}))
    .catch(error => res.status(400).json({error}));
     
 };

 exports.deleteBlog = (req,res,next) =>{
    Blog.destroy({
        where : {
            id:req.params.id
        }
    })
    .then(() => res.status(200).json({message: "Opération de supression éffectuée avec succès!"}))
    .catch(error => res.status(404).json({error}));
     
 };