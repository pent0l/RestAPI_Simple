import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Kelas = db.define('kelas',{
    name: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default Kelas;
 
(async()=>{
    await db.sync();
})();