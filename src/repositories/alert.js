import { Dialog } from 'quasar'

export const alert ={

    methods:{


        alert (obj) {
            Dialog.create({
              dark: true,
              title: obj.title,
              message: obj.message
            }).onOk(() => {
              return true;
            }).onCancel(() => {
              return false;
            }).onDismiss(() => {
              return false;
            })
        },
      
        confirm (obj) {
            
            Dialog.create({
              title: obj.title,
              message: obj.message,
              
              ok: 'PROCEED',
              cancel: 'CANCEL',
              persistent: true
            }).onOk(() => {
              console.log('Yesssss');
              return true;
            }).onOk(() => {
              return true;
            }).onCancel(() => {
              return false;
            }).onDismiss(() => {
              return false;
            })
        },

        closeDialog(){

          Dialog.hide();

        },
      
        prompt (obj) {
            Dialog.create({
                title: obj.title,
                message: obj.message,
                prompt: {
                model: '',
                type: 'text' // optional
                },
                cancel: true,
                persistent: true
            }).onOk(data => {

                return { status: true, data: data}

            }).onCancel(() => {
                return { status: false, data: null}
            }).onDismiss(() => {
                return { status: false, data: null}
            })
        }
        
        
          

    }
   
}