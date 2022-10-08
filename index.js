const express=require('express');
const app=express();


const port = 3000

app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.end('merhaba');
  })
app.post('/', (req, res) => {
  res.end(req.body)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})