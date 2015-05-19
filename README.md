# Slack-client
Adapating a NPM package into Meteor - https://www.npmjs.com/package/slack-client 

# Install
`meteor add hiukim:slack-client`

## Example

```
var authUrl = 'https://slack.com/api/rtm.start';
var authToken = 'YOUR_AUTH_TOKEN';
var autoReconnect = true;
var autoMark = true;
var slack = new Slack(authToken, autoReconnect, autoMark);
slack.on('open', function() {
  console.log("opened");           
});
slack.on('message', function(message) {
  console.log('received message: ', message);
});                                
slack.login();   
```

## References
NPM package
https://www.npmjs.com/package/slack-client

Slack RTM
https://api.slack.com/rtm
