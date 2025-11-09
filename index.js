
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/calculate' , (req  ,res) => {

    const {p , r , t} = req.query;

    //validation of the query params

    if(!p || !r || !t) {
        res.status(400).json({
            success : false,
            message : "Please provide p (principle), r (rate), t (time) in query parameters"
        })
    }

    const principle = parseFloat(p);
    const rate = parseFloat(r);
    const time = parseFloat(t);

    const ans = (principle * rate * time) / 100;
    const total = ans + principle;

    res.json({
        Simple_interest : ans,
        total_amount : total,
    });
});


app.get("/" , (req , res) => {

    res.send(`Simple Intreset API - use calculate/?p=principle&r=rate&t=time to get simple intreset`);
})


app.listen(PORT , () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})

