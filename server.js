const express = require('express');
const app = express();
const port = 3000;
const Discord = require('discord.js');

const webhook = new Discord.WebhookClient({url: ''});

app.use(express.json());

app.post('/webhook',(req,res)=>{
    console.log(req);
    //webhook.send(req.body.message);
    res.send(204);
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
