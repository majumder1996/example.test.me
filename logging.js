var fs = require('fs');

var logging = (log) => {
    fs.writeFile('./log/dugga.log',log+"\n",{ flag: 'a+' },err => {
        if (err) {
            console.error(err);
        }
    })
}

module.exports = logging;