module.exports=(sequelize, type) => {
    return sequelize.define('blogs', {
        id:{ type:type.INTEGER, primaryKey:true, autoIncrement:true},
        type:{ type:type.STRING, alloNull: false},
        title:{ type:type.STRING, alloNull: false},
        detail:{ type:type.STRING, alloNull: false},
        view:{ type:type.INTEGER, alloNull: false }
    })
}
 