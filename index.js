const request = require('request');
const log = require('./logger');

const config = {
  "webhook":"https://discordapp.com/api/webhooks/482003297977368576/ILKa6L4FN6g2zLFqEi--av7KRJCQc0p3pzCMhTL5QBB7Ib89JGXqnrNvcqK6opgDFv7j", // Your webhook here
  "requestURL":"https://www.ebay.com/itm/173561322320", // Your product link here
  "refreshRate":1000
}
log("Starting...");
function send() {
  let requestLoop = setInterval(function(){
  request({
      url: config.requestURL,
      method: "GET",
      timeout: 1000,
      followRedirect: true,
      maxRedirects: 10
  },function(error, response, body){
    if(error){
      console.log("You're banned, try using a VPN!")
    }
    let opts = {
        url: config.webhook,
        method: 'POST',
        json: {
            "embeds": [{
                "title": "View Added!",
                "color": 175559,
                "footer": {
                  "text": "Ebay View Bot ~ By @sharkmigu3"
                },
                "fields": [
                  {
                    "name": "Item",
                    "value": config.requestURL,
                    "inline": true
                  },
                ]
            }]
        }
    }
    request(opts);
    log("+1 View")
  });
}, config.refreshRate);
}
send();
