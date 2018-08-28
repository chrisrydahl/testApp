import axios from 'axios';

async function sendMessage(message) {
	const url = 'http://localhost:1337/api/message/create';
	try {
		const result = await axios({
	        method: 'post',
	        headers: {
	            'Accept': 'application/json, text/plain, */*',
	            'Content-Type': 'application/json',
	        }, 
	        data: JSON.stringify(message),
	        url,
		});
		return result;
	} catch (err) {
		console.log('Oops! There is something wrong in server side...', err);
		throw new Error(err.body);
	}
}

export default sendMessage;