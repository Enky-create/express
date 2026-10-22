import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    
    res.sendFile(__dirname + '/public/index.html')
    
});
app.post('/submit',(req,res)=>{
    //res.sendStatus(201);
    res.send(req.body);
});
app.put('/user/vadim',(req,res)=>{
    res.sendStatus(200);
});
app.patch('/contacts',(req,res)=>{
    res.sendStatus(200);
});
app.delete('/user/angela',(req,res)=>{
    res.sendStatus(200);
})
app.listen(3000, ()=>{
    console.log(`Server runnig on 3000`);
});