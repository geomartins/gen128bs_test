
import { downloader }  from '../Repositories/downloader'
import axios from 'axios'

const state = {}
const getters = {}
const mutations = {}
const actions = {


    async generate_report({ commit }, value) {
        let response;


        try {            
            let url = value.link;
            response = downloader.actions.downloadExcel(url,value);

            console.log(response);
            return await response;
           

        }catch(error){

           
           
            return await error.response;
        } 
        
    },


    async  fetch_report_preloader({commit},value){

        try {            
            var response = await axios
            .post(
                "https://www.agropark.com.ng/api/v1/admin/report",value
            );

            return await response;

        }catch(error){

           console.log(error.response)
           
            return await error.response;
        } 
  
    },






}

export default {
    state,
    getters,
    mutations,
    actions,
}

