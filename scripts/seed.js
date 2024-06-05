const fs = require('fs')
const db = require('../lib/db')

const stream = fs.createReadStream('./data/projects.csv')

let data = ''
let headers = []

stream.on('data', chunk => {
  data += chunk.toString()

  const lines = data.split('\n')
  data = lines.pop()

  lines.forEach(line => {
    const values = line.split(',')

    if (!headers.length) {
      headers = values
      return
    }

    const project = headers.reduce((obj, header, i) => {
      obj[header] = values[i]
      return obj
    }, {})

    const projectId = project['Project ID']
    db.hmset(`project:${projectId}`, project, (err) => {
      err
        ? console.error(`Error storing project ${projectId} in Redis:`, err)
        : console.log(`Project ${projectId} stored in Redis`)
    })
  })
})

stream.on('end', () => {
  db.quit((err) => {
    if (err) return console.error('Error closing database connection:', err)
    console.log('Database connection closed')
  })
})
