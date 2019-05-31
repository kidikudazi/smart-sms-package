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
var {sendSms} = require('@kidikudazi/smart-sms')(request);
var express = require('express');
var app = express();

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
})
```
# Get Smart Sms Credentials
```
 [SmartSmsSolutions](https://smartsmssolutions.com);
```