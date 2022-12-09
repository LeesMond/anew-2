const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const env = require("dotenv").config({path : " ../../../.env"})
const app = express()
//create signature2
//
var CryptoJS = require("crypto-js")
var SHA256 = require("crypto-js/sha256")
var Base64 = require("crypto-js/enc-base64")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/Hello', (req, res) => {
    res.send("Hello SMS service")
})

app.post('/send_sms', (req, res)=>{
    const user_name = req.body.name
    const user_phone_number = req.body.phone_number
    const user_msg = req.body.msg
    
    var resultCode = 200;
    const date = Date.now().toString();
    
    const serviceId = process.env.ServiceId;
    const accesskey = process.env.AccessKey;
    const secretKey = process.env.SecretKey;
    const my_number = process.env.My_number;
    
    const method = "POST";
    const space = " ";
    const newLine = "\n";
    const url =`https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`;
    const url2 = `/sms/v2/services/${serviceId}/messages`;
    
    // const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    // hmac.update(method);
    // hmac.update(space);
    // hmac.update(url2);
    // hmac.update(newLine);
    // hmac.update(date);
    // hmac.update(newLine);
    // hmac.update(accesskey);
    // const hash = hmac.finalize();
    // const signature = hash.toString(CryptoJS.enc.Base64);
    
    const makeSignature = (method, url, timestamp, accesskey, secretKey)=>{
        var space = " ";
        var newLine = "\n";
        const hmac = crypto.createHmac('SHA256', secretKey);
        hmac.update(method);
        hmac.update(space);
        hmac.update(url2);
        hmac.update(newLine);
        hmac.update(date);
        hmac.update(newLine);
        hmac.update(accesskey);
        return hmac.digest('base64');
        // const hash = hmac.finalize();
        // const signature = hash.toString(CryptoJS.enc.Base64);
        // return signature;
    }
    
    request({
        method : method,
        json : true,
        uri : url,
        headers : {
            'Contenc-type' : 'application/json; charset=utf-8',
            'x-ncp-iam-access-key' : accesskey,
            'x-ncp-apigw-timestamp':date,
            //'x-ncp-apigw-signature-v2': makeSignature
            'x-ncp-apigw-signature-v2': makeSignature
            
        },
        body : {
            'type' : 'SMS',
            'countryCode' : '82',
            'from' : my_number,
            'content' : `${user_name} 발송 메세지 ${user_msg}`,
            'messages' : [
                {
                    'to' : `${user_phone_number}`        
                }
            ]
        }
    }, function(err, res, html){
        if(err)console.log(err);
        else{
            resultCode = 200;
            console.log(html);
        }
    });
    res.json({
        'Code' : resultCode, 'Name' : user_name, 'Phone_Number' : user_phone_number, 'Message' : user_msg
    });
    
});
module.exports = app;