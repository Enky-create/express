import express from 'express';

const app = express();
app.get('/',(req,res)=>{
    res.send('<h1>I wanna live</h1>');
})
app.listen(3000, ()=>{
    console.log(`Server runnig on 3000`);
})