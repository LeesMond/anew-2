{"filter":false,"title":"app.js","tooltip":"/node/restful/app.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":23,"column":3},"action":"insert","lines":["const express = require('express');","const morgan = require('morgan');","const path = require('path');","const app = express();","const bodyParser = require('body-parser');","const cookieParser = require('cookie-parser');","const router = express.Router();","","// view engine setup","app.set('view engine', 'jade');","app.set('port', process.env.PORT || 3000)","","app.use(morgan('dev'));","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","var restful = require('./routes/restful.js');","app.use('/', restful);","","app.listen(app.get('port'), () =>{","\tconsole.log('3000 Port : 서버 실행 중')","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":23,"column":3},"end":{"row":23,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1670207434726,"hash":"189582ba60aea51275b539f865d67d285e9675c5"}