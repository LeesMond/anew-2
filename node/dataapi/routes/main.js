const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const request = require("request")
const moment = require("moment")
const dateutil = require("data-utils")
const mongoClient = require("mongodb").MongoClient

let day = new Date().toLocaleDateString('sv').replaceAll('-','');

var keys = "u0BuRxVNDmf8%2FUeOTM3XKWiK5NIc1xxLcmlQy%2BE3GzcDTmfyWtov4zWia1xsygjVNQK1%2B2H7dQvHiVad80eWjQ%3D%3D";
var url = "http://apis.data.go.kr/1360000/WthrChartInfoService/getSurfaceChart";

var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + keys;
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
queryParams += '&' + encodeURIComponent('code') + '=' + encodeURIComponent('3');
queryParams += '&' + encodeURIComponent('time') + '=' + encodeURIComponent(day);

// define schema
var DataSchema = mongoose.Schema({
    resultcode : String,
    resultMsg : String,
    dataType : String,
    manfile : String
})

// create model with mongodb collection and schema
var Data = mongoose.model('weather', DataSchema);

// getdata
router.get('/getdata', function(req, res, next) {
    request({
            url : url + queryParams,
            method : "GET"
    }, function (error, response, body) {
        Data.find({}).remove().exec();
        if (error) console.log(error)
//        console.log('resultCode', response.resultCode);
//        console.log('Headers', JSON.stringify(response.headers));
        let data = JSON.parse(body)
        let imgSrcArr = data['response']['body']['items']['item'][0]['man-file'].split(',');
        let imgSrc1 = imgSrcArr[0].slice(1);
        let imgSrc2 = imgSrcArr[1].trim().slice(0, -1);
        console.log(imgSrc1);
        console.log(imgSrc2);
        
        res.writeHead(200);
        var template = `
             <!DOCTYPE html>
        <html>
        <head>
            <title>Result</title>
            <meta charset="utf-8">
        </head>
        <body>
            <img src = ${imgSrc1}> <br>
            <img src = ${imgSrc2}> <br>
        </body>
        </html>`;
        res.end(template)

    })
})

module.exports = router;