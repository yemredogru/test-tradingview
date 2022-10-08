const express=require('express');
const app=express();


const port = 3000

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', (req, res) => {
    console.log(req)
    res.send('POST request to the homepage')
  })

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})