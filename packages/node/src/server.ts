import express from 'express';
const app = express();
const port = 5000;

export interface QueryPayload{
    foo: string
}

app.get('/data', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({ foo: "successful!!" });
    res.json({ fooo: "successful!!" });
    
});


app.listen(port, () => {
    console.log("running server in port: " + port);
});
