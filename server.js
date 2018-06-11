const restify  = require('restify')
const csv = require('csvtojson')
const bodyParser = require('body-parser')
const fs = require('fs')
const serializeError = require('serialize-error')

const PORT = 8081

let server = restify.createServer()

// see http://restify.com/docs/request-api/#getquery
server.use(restify.plugins.queryParser())

// see https://www.npmjs.com/package/body-parser
server.use(bodyParser.text({ limit: '100mb' })) // this allows the server to read req.body
server.use(bodyParser.urlencoded({ extended: true })) // not sure what this does but it is needed

server.get('/:filename', (req, res) => {
  csv().fromFile(`${__dirname}/${req.params.filename}.csv`).then(json => {
    /**
     * This will filter through the result of csvtojson and
     * filter out anything that doesn't match the query.
     * Array.filter() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     * decodeURI() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
     */
    let data = json.filter(row => {
      for (let key in req.query) {
        if (decodeURI(req.query[key]) != row[key]){
          return false;
        }
      }
      return true
    })
    res.json({ data })
  }).catch(err => {
    let error = serializeError(err)
    res.json({ error })
  })
})

server.post('/:filename', (req, res) => {
  try {
    fs.writeFileSync(`${req.params.filename}.csv`, req.body) // https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
    res.json({ message: "Success" })
  } catch (err) {
    let error = serializeError(err) //https://www.npmjs.com/package/serialize-error 
    res.json({ error })
  }
})

server.listen(PORT, () => console.log(`Magic is happening on port ${PORT}`))