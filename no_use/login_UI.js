const express = require('express');
const path = require('path');

const router = express.Router();

const login = '../../../html/login.html'

router.get('/special', (req,res)=>{
    //res.sendFile(path.join(__dirname + login));

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const fs = require('fs');
const html = fs.readFileSync('./html/login.html').toString();
const dom = new JSDOM(html);
const document = dom.window.document;
document.getElementById('test').textContent="잉섹";

const modified_loginHTML = dom.serialize();
res.send(modified_loginHTML);
//paragraph.innerText = '되나';
});

module.exports = router;