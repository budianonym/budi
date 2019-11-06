//====================c================== Express ======================================\\
var express = require('express')
var fs = require('fs');
var app = express()
const port = 3000
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.post('/expedia/score', jsonParser, function (req, res) {
    var nids = req.body.data.channelid.split(',')
    var dataCookie = req.body.data.cookie
})
res.set('Content-Type', 'application/json')
res.send()
res.download(path.join(__dirname, '/download/aaa.pdf'))
res.json()
res.render()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



//====================================== Selenium ======================================\\
const { Builder, Session, By, Key, until } = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');

var driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build()

driver.get('http://example.com/')
driver.getCurrentUrl()
driver.wait(until.elementLocated(By.xpath('//*[@id="content"]/')))
driver.findElement(By.xpath('//*[@id="content"]/div/')).getText()
driver.quit()
driver.switchTo().alert().accept()
driver.sleep(1000)
driver.findElement(By.id('edit-action-facility-type')).sendKeys('venoweb', Key.RETURN)
driver.findElement(By.id('edit-action-facility-type')).click()
driver.executeScript(`document.getElementById("bulk_action").value = 'edit_selected';`)
driver.executeScript(`document.querySelector("#wrap-facility-type > div").style.display = 'block';`)
driver.wait(until.titleIs('venoweb - Google Search'), 1000)
driver.findElement(By.id('edit-action-facility-type')).isSelected()

.then(() => console.log('a'))
aa.replace(/(\r\n|\n|\r)/gm, '')
    .then(qq => qq.replace('Level: ', ''))
    .catch((e) => {
        if (e.name === 'NoSuchElementError') {
            return 'NULL';
        }
    })

    .then(() => {
        for (i in dataCookie)
            driver.manage().addCookie({
                name: dataCookie[i].name,
                value: dataCookie[i].value,
                domain: dataCookie[i].domain,
                path: dataCookie[i].path
            })

    })                      



//====================================== csv and file handling  ======================================//
const jsonfile = require('jsonfile')
const file = 'cookie.json'
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const theNow = Math.floor(Date.now() / 1000);
const theUrl = `/home/mindo-pc18/Code/nodejs/score-${theNow}.csv`;
const csvWriter = createCsvWriter({
    path: theUrl,
    header: [
        { id: 'id', title: 'Channel ID' },
        { id: 'overall', title: 'Overall' },
        { id: 'ame', title: 'Property amenities' },
        { id: 'room', title: 'Room amenities' },
        { id: 'poli', title: 'Policies and deposits' },
        { id: 'photos', title: 'Photos' },
    ]
})

records.push({
    id: `${nid}`,
    overall: `Can't be Accessed`,
    ame: `Can't be Accessed`,
    room: `Can't be Accessed`,
    poli: `Can't be Accessed`,
    photos: `Can't be Accessed`
})
csvWriter.writeRecords(records)



//====================================== gmap API ======================================//
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Gmail API.
  authorize(JSON.parse(content), listLabels);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

   


function listLabels(auth) {
  // gmap API
  var gmail = google.gmail({auth: auth, version: 'v1'});
  gmail.users.messages.list({
    userId: 'me',
    q: "from:airbnbphone@redawning.com label:no reply subject:Message is:unread 'Your Expedia verification code is: '",
  }, function(err, res) {
    if (err) {
      console.log('The Gmail API returned an error: ' + err);
      return;
    }
    var messageId = res.data.messages[0].id


  const gmail = google.gmail({version: 'v1', auth});
  gmail.users.messages.get({
    'userId': 'budi.hermawan@redawning.com',
    'id': messageId
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    // const labels = res.data.labels;
    const verifNumber = res.data.snippet.split('').reverse().join('').slice(0, 6).split('').reverse().join('')
    // console.log(verifNumber)
    console.log(verifNumber)
      });
// end gmap API




  });
  
}



//====================================== etc ======================================\\
setTimeout(()=> console.log('a'),1000)
for (nid of nids) {}
const str = "Hi, You have received a message from 8503973342 Your Expedia verification code is: 854154"
console.log(str.split('').reverse().join('').slice(0, 6).split('').reverse().join(''))



//====================================== axios ======================================\\ 
const axios = require('axios');

async function getNumberOfFollowers() {
  
  let res = await axios.get('http://192.168.1.90:3000/');
// console.log(res)  
  let nOfFollowers = res.data.menu.id;
  // let location = res.data.location;

  console.log(`# of followers: ${nOfFollowers}`)
  // console.log(`Location: ${location}`)
}
getNumberOfFollowers();



//====================================== mysql ======================================\\
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'radbw2a-cluster.cluster-ro-cqyy7fkqd6u0.us-west-2.rds.amazonaws.com',
  user: 'bhermawan',
  password: 'lTNM0d6CS3Eb%7(_',
  database: 'radb'
})

connection.connect()

connection.query(
    `SELECT * FROM node  
    where type = 'rental_property'
    order by nid
    desc
    LIMIT 200
    `
    , function (err, rows, fields) {
  if (err) throw err
  app.post('/', (req, res) => {
    return res.send(rows);
  });
  // console.log(rows)
})

connection.end()

// git
echo "# budi" >> README.md
git init
git add README.md
git commit -m "first commit"
git config --global user.email "budianonym@gmail.com"
git config --global user.name "budianonym"
git commit -m "first commit"
git remote add origin https://github.com/budianonym/budi.git
git push -u origin master
11

// read write data
var fs = require("fs");

var data = "New File Contents";

fs.writeFile("temp.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});


var fs = require("fs");

fs.readFile("temp.txt", "utf-8", (err, data) => {
  console.log(data);
});