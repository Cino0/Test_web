const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World mori spinanmode ')
})


app.get('/prodotto/:codiceprodotto', (req, res) => {


    //cercare prodotto nel database con una select 
    //costruire la pagina html
    var paginawebprod = "<html><body>";
    paginawebprod += "<div>"+req.params.codiceprodotto+"</div>";
    paginawebprod += "</body></html>"
    //res.send('Hello prodotto: '+req.params.codiceprodotto)
  })
  
  
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
