var app = require("express");
var cors = require('cors')
var app2 = app();
app2.use(cors())
app2.use(app.json())
app2.get('/Big5',function(req,res, next){
    
    console.log("api Called");
    var base = req.query.baseCurrency;
    var target= req.query.secondaryCurrency;
    var amount = req.query.amount;
    var raw = 0;
    if(base=='inr' && target=='thi') {
        raw=amount/51.23;
    } 
    else if (base=='thi' && target=='inr') {
        raw = amount * 51.23;
    }
    res.send({
        data : raw
    })
})

var server = app2.listen(8081, function () {
        console.log('listening on port 8081')

  })