const request = require('request');
const log = require('./logger');

const config = {
  "webhook":"WEBHOOK", // Your webhook here
  "requestURL":"LINK", // Your product link here
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
