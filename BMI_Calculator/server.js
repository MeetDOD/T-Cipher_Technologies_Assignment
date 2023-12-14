const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
})); 
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const userName = req.body.Name;
    const weight = parseFloat(req.body.Weight);
    const height = parseFloat(req.body.Height);

    const bmi = (weight / (height * height));

    if(bmi <= 18.4){
        res.send(`  <center>
                        <h1>Hello, ${userName}! Your BMI is ${bmi.toFixed(2)} and you are Underweight.</h1>
                    </center>`)
    }else if(bmi >= 25.0){
        res.send(`  <center>
                        <h1>Hello, ${userName}! Your BMI is ${bmi.toFixed(2)} and you are OverWeight.</h1>
                    </center>`)
    }else{
        res.send(`  <center>
                        <h1>Hello, ${userName}! Your BMI is ${bmi.toFixed(2)} and you are Fit/Normal.</h1>
                    </center>`)
    }
});

app.listen(5000, () => {
    console.log('Running on Port 5000');
});
