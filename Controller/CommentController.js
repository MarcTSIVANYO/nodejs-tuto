const {Comment} =require('../sequelize');


exports.createComment = (req,res,next) =>{
    Comment.create(req.body)
        .then(() => res.status(201).json({message: "Comment ajouter !"})) // Add
        .catch(error => res.status(400).json({error}));
 };

 exports.listComment = (req,res,next) =>{
    Comment.findAll()
        .then(comments=> res.status(200).json(comments))//Liste des blogs
        .catch(error => res.status(400).json({error}));
 };

 
 exports.getOneComment = (req,res,next) =>{
    Comment.findOne({
        where : {
            id:req.params.id
        }
    })
    .then(comment=> res.status(200).json(comment))//Liste de blog
    .catch(error => res.status(404).json({error}));
     
 };

  
 exports.updateComment = (req,res,next) =>{
    Comment.update(req.body, {
        where : {
            id:req.params.id
        }
    })
    .then(() => res.status(200).json({message: "Opération éffectuée avec succès!"}))
    .catch(error => res.status(400).json({error}));
     
 };

 exports.deleteComment= (req,res,next) =>{
    Comment.destroy({
        where : {
            id:req.params.id
        }
    })
    .then(() => res.status(200).json({message: "Opération de supression éffectuée avec succès!"}))
    .catch(error => res.status(404).json({error}));
 };