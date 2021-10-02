export const notifier ={

    data(){
        
    },

    methods:{


        showNotif (obj) {

            let x = this;

            if(obj.type == 'warning'){

                if (typeof obj.message === 'object'){

                    for (var key in obj.message) {
                        if (obj.message.hasOwnProperty(key)) {

                            x.$q.notify({

                                position: obj.position ? obj.position : 'bottom-right' ,
                                message: obj.message[key],
                                timeout: 10000,
                                textColor: 'white',
                                color: 'red',
                                actions: [{ icon: 'close', color: 'white' }]
                  
                            })

                            
                        }
                    }
                }else{

                    this.$q.notify({

                        position: obj.position ? obj.position : 'bottom-right',
                        message: obj.message,
                        timeout: 10000,
                        textColor: 'white',
                        color: 'red',
                        actions: [{ icon: 'close', color: 'white' }]
          
                    })

                }

                

            }


            if(obj.type == 'success'){
                

                this.$q.notify({

                    position: 'bottom-right',
                    message: obj.message,
                    timeout: 10000,
                    textColor: 'white',
                    color: 'green',
                    actions: [{ icon: 'close', color: 'white' }]
      
                })

            }



            if(obj.type == 'info'){

                this.$q.notify({

                    position: 'top-right',
                    message: obj.message,
                    timeout: 10000,
                    textColor: 'white',
                    color: 'teal',
                    actions: [{ icon: 'close', color: 'white' }]
      
                })

            }
            
        },

        
          

    },
    filters: {
        
    },
   
}