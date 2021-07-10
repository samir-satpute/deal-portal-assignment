import Dexie from "dexie";

//
// Declare Database
//
const db = new Dexie("SkillStoreDB");
db.version(1).stores({
  registerUser: "++id,userName,email,mobileNumber,password",
});

export default db;
