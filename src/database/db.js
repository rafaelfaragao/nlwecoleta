const sqlite = require("sqlite3").verbose()

//criar o objeto que irá fazerr operações de banco de dados

const db = new sqlite.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados, para nossas operações

// db.serialize(()=>{
//     // com comandos SQL:
    
//     // 1. criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)
//     // //2. inserir dados na tabela
//     // const query =`
//     // INSERT INTO places (
//     //     image,
//     //     name,
//     //     address,
//     //     address2,
//     //     state,
//     //     city,
//     //     items
//     // ) VALUES (?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     //     "Papersider",
//     //     "Rua Guilherme Gembala, Jardim América",
//     //     "numero 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]

//     // function afterInsertData(err){
//     //     if(err){
//     //         return console.log(err)
//     //     } 
//     //         console.log("cadastrado com sucesso")
//     //         console.log(this)
//     // }
    
//     // db.run(query, values, afterInsertData)
      
//     // 3. consultar dados na tabela
//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão seus registros:")
//     //     console.log(rows)
//     // })
//     //4. deletar dados da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [7], function(err){
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Regsitro deletado com sucesso")
//     // })

// })