module.exports=(sequelize, type) => {
    return sequelize.define('comments', {
        id:{ type:type.INTEGER, primaryKey:true, autoIncrement:true},
        nom:{ type:type.STRING, alloNull: false},
        prenoms:{ type:type.STRING, alloNull: false},
        messages:{ type:type.STRING, alloNull: false
        }
    })
}
 