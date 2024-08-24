import express from 'express'
const app = express();
const port =  4000;

app.get('/api/jokes',(req,res)=>{
    const jokes =[{
        id :1,
        tittle : "Jokes1",
        content : "This is joke"
    },{
        id :2,
        tittle : "Jokes2",
        content : "This is my 2nd joke"
    },{
        id :3,
        tittle : "Jokes3 ",
        content : "This is another joke"
    },{
        id :4,
        tittle : "Jokes4",
        content : "plz dont laughfing"
    }]
    res.send(jokes)
})
app.listen(port,()=>{console.log(`Server running at http://localhost:${port}`);
})