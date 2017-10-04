var express    = require('express');
var app        = express();
var os         = require('os');

var port = process.env.PORT || 8080;

var router = express.Router();

//helper function to calculate average cpu load
var calculateLoad = function () {
    let cpuInfo = os.cpus();
    const numCores = cpuInfo.length;
    let totalTime = 0, totalIdle = 0;

    cpuInfo = cpuInfo.map((obj) => { return obj.times;});
    for(let ctr = 0; ctr < numCores; ctr++) {
      for (const key in cpuInfo[ctr]) {
        totalTime += cpuInfo[ctr][key];
        if (key === "idle") { totalIdle += cpuInfo[ctr][key]; }
      }
    }
    let avgTime = Math.floor((totalTime - totalIdle) / numCores);
    return avgTime;
}

router.get('/', function(req, res) {
    const data = {
      "load" : calculateLoad(),
      "time" : Math.floor(Date.now() / 1000)
    }
    //console.log("average cpuload is: "+data.load+" at "+data.time);
    res.jsonp(data);
});

app.use('/api', router);

app.listen(port);
console.log('Please use port# ' + port);