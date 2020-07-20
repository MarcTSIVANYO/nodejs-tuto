const Sequelize =require('sequelize');
const BlogModel =require('./Entity/Blog'); 
const CommentModel =require('./Entity/Comment'); 

const sequelize = new Sequelize('tuto_nodejs', 'postgres', 'password', {
    host:'localhost',
    dialect:'postgres',
    logging:false
});

const Blog= BlogModel(sequelize, Sequelize);
const Comment= CommentModel(sequelize, Sequelize);
Blog.hasMany(Comment);
Comment.belongsTo(Blog)

sequelize.sync({ force: false, alter: true})
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports={Blog,Comment}