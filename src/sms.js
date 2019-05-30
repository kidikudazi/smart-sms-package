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
	return {sendSms};
}

module.exports = smsApi;