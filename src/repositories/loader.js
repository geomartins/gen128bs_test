import { Loading, QSpinnerGears } from 'quasar'

export const loader ={

    methods:{
        showLoading() {
            Loading.show({
              spinner: QSpinnerGears,
              message: 'Some important <b>process</b> is in progress.<br/><span class="text-primary">Hang on...</span>'
            });
        },     
        hideLoading(){
            Loading.hide()
        }
    },
    filters: {
        
    },
   
}