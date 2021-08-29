import axios from 'axios';
export default class Connector{
    async api_calls(url, payload){
        try {
            var response = await axios.post(url,payload);
            return await response;
        }catch(error){ 
            return await error.response;
        } 
    }

}