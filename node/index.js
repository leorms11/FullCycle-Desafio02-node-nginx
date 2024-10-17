const express = require('express')
const axios = require('axios').default;
const app = express()
const port = 3000
const config = {
  host: 'db-desafio-02',
  user: 'root',
  password: 'fullcycle',
  database: 'db_desafio_02'
}

const mysql = require('mysql')
let connection = mysql.createConnection(config)
connection.query('CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255), primary key (id))')

async function dropDatabase() {
  connection.query(`DELETE FROM people WHERE 1=1`)
}
dropDatabase()

async function initializeDatabase() {
  const response = await axios.get('https://swapi.dev/api/people')
  for (i=0; i<10; i++)
    connection.query(`INSERT INTO people(name) values('${response.data.results[i].name}')`)
}
initializeDatabase()

app.get('/', (req, res) => {
  connection.query('SELECT id, name FROM people', (err, results) => {
    if (err) {
      console.log(`Error getting people: ${err}`);
      res.status(500).send('Error getting people');
      return;
    }
  
    const tableData = results.map((person) =>
      `<tr>
          <td>${person.id}</td>
          <td>${person.name}</td>
        </tr>`).join('');
  
    const table = `
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>${tableData}
      </table>`;
  
    res.send(
    `
      <h1>Full Cycle Rocks!</h1>
      ${table}
    `);
  })
});
  

app.listen(port, () => {
  console.log('Aplicação inicializada com sucesso! 🚀')
})