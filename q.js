const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'temp',
  password: 'abcd@12345',
  port: 5432,
})



const getProduct = (request, response) => {
    pool.query('SELECT * FROM product', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getProduct,
    
  }
