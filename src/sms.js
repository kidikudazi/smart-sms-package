const smsApi = (request) =>{
	const sendSms = (form, mycallback)=>{
		const options = {
			url: 'https://api.smartsmssolutions.com/smsapi.php',
			headers : {
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            },
            form
		}

		const callback = (error, response, body)=>{
			return mycallback(error, body);
		}

		request.post(options, callback);
	}

	const smsBalance = (credentials, mycallback)=>{
		const options = {
			url:`http://api.smartsmssolutions.com/smsapi.php?username=${credentials.username}&password=${credentials.password}&balance=true`,
			headers : {
				'content-type' : 'application/json',
				'cache-control' : 'no-cache'
			}
		}

		const callback = (error, response, body)=>{
			return mycallback(error, body);
		}

		request(options, callback);
	}
	return {sendSms, smsBalance};
}

module.exports = smsApi;