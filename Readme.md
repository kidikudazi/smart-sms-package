# A Simple Smart Sms Api @kidikudazi/smart-sms

[![npm (scoped)](https://img.shields.io/npm/v/@kidikudazi/smart-sms.svg)](https://www.npmjs.com/package/@kidikudazi/smart-sms)
[![npm (scoped)](https://img.shields.io/badge/npm-@kidikudazi/smart--sms-brightgreen.svg)](https://www.npmjs.com/package/@kidikudazi/smart-sms)
```
# A basic sms api for smart sms solutions api.

# It can be used to send quick sms and also receive response.
```

# Features 
```
# Little and Easy To Use.
```
# Install Package
```
# $ npm install @kidikudazi/smart-sms
```

# Usage with Node.js And Express
```js
// require request package
var request = require('request');
// require the package
var {sendSms, smsBalance} = require('@kidikudazi/smart-sms')(request);
var express = require('express');
var app = express();

// send message
app.post('/send_message', (req,res)=>{

	var smsOptions = {
		username: process.env.SMART_SMS_USERNAME,
		password: process.env.SMART_SMS_PASSWORD,
		message: 'Your Message',
		sender: 'Sender Id',
		recipient: 'recipient phone number'
	}

	// call the send sms instance
	sendSms(smsOptions, (err, response)=>{
		if(err)throw err;
		console.log(response);
	});
});

// get sms unit balance
app.get('/sms_unit_balance', (req, res)=>{
	var Credentials = {
		username: process.env.SMART_SMS_USERNAME,
		password: process.env.SMART_SMS_PASSWORD
	}

	smsBalance(Credentials, (error, response)=>{
		if(error)throw error;
		console.log('Sms Unit Balance ', response);
	});
});
```
# Sending sms with api token
```js
// require request package
var request = require('request');
// require the package
var {sendTokenSms} = require('@kidikudazi/smart-sms')(request);
var express = require('express');
var app = express();

// send message
app.post('/send_message', (req,res)=>{
	// set sms options
	var smsOptions = {
		'sender': 'Sender Id',
		'to' : 'recipient phone number',
		'message': 'Your Message',
		'type':'0',
		'routing': 3,
		'token':process.env.SMART_SMS_TOKEN
	}

	// call the send sms instance
	sendTokenSms(smsOptions, (err, response)=>{
		if(err)throw err;
		console.log(response);
	});
});

```

# Check SMS Unit Balance With Token
```js
// require request package
var request = require('request');
// require the package
var {checkUnitBalance} = require('@kidikudazi/smart-sms')(request);
var express = require('express');
var app = express();

// get sms unit balance
app.get('/sms_unit_balance', (req, res)=>{
	// get smart sms token
	var SMS_Token = process.env.SMART_SMS_TOKEN;

	checkUnitBalance(SMS_Token, (error, response)=>{
		if(error) throw error;
		console.log(response);
	});
});

```
# Create Smart Sms Credentials
  [SmartSmsSolutions](https://smartsmssolutions.com)
