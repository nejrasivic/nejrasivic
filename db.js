  
const Sequelize = require("sequelize");
const sequelize = new Sequelize("projekatsi","root","",{host:"localhost",dialect:"mysql",logging:false});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//importovanje modela(tabela)
db.user = sequelize.import(__dirname+'/user.js');


//export
module.exports=db;