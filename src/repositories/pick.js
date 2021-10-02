
import { Cookies } from 'quasar'
import { LocalStorage, SessionStorage } from 'quasar'
import router from '../router/index'
// import Router from '../router'; 

export const pick ={


    
    
    data(){
        return {
            loading: false,
            toggle: false,
            visible: false,
            showSimulatedReturnData: false


        }
    },

    methods:{


        displayUserProfileImage(url= null){

            if(!url || url == null || url == undefined || url == 'null' ){
                return 'https://agropark.com.ng/theme20/avatar.jpeg';
            }else{
                return 'https://agropark.com.ng/storage/passports/'+url;
            }
           
        },


        convertCropToArray(crop_type, land_size){
            let result = [];

            if(land_size){

                for(var i= 1; i <= parseInt(land_size); i++){

                    
                        result.push(crop_type);
                    

                    

                    
    
                }

            }

            return result;
        },

        convertNumberToArray(number,land_type){

            let result = [];

            if(number){
                for(var i= 1; i <= parseInt(number); i++){

                    if(i > 1){
                        result.push(i+' '+land_type+'s');
                    }else{
                        result.push(i+' '+land_type);
                    }

                    

                    
    
                }

            }

           
            

            return result;
        },


        displayAvatar(){

            if(!LocalStorage.getItem('avatar') || LocalStorage.getItem('avatar') == null || LocalStorage.getItem('avatar') == undefined || LocalStorage.getItem('avatar') == 'null' ){
                return 'https://agropark.com.ng/theme20/avatar.jpeg';
            }else{
                return 'https://agropark.com.ng/theme2/uploads/featured_image/'+LocalStorage.getItem('avatar');
            }
           
        },

        yearConverter(year){


            let data = {
                '1': 'First Year',
                '2': 'Second Year',
                '3': 'Third Year',
                '4': 'Fourth Year',
                '5': 'Fifth Year',
                '6': 'Sixth Year',
                '7': 'Seventh Year',
                '8': 'Eight Year',
                '9': 'Nineth Year',
                '10': 'Tenth Year',
                '11': 'Eleventh Year',
                '12': 'Twelveth Year',
                '13': 'Thirteenth Year',
                '13': 'Fourteenth Year',


            }

            return data[year.toString()];

        },

        cycleConverter(cycle){
            let data = {
                '1': 'First Cycle',
                '2': 'Second Cycle',
                '3': 'Third Cycle',
                '4': 'Fourth Cycle',
                '5': 'Fifth Cycle',
                '6': 'Sixth Cycle',
                '7': 'Seventh Cycle',
                '8': 'Eight Cycle',
                '9': 'Nineth Cycle'

            }

            return data[cycle.toString()];
        },

        calculateBirdsFromPenSize(quantity){

            if(quantity){
                return quantity * 250;
            }

            return 0;

            

        },

        calculateFishesFromPondSize(quantity){

            if(quantity){
                return quantity * 1000;
            }

            return 0;
            
        },

        number_format (number, decimals, decPoint, thousandsSep) { // eslint-disable-line camelcase
            //  discuss at: http://locutus.io/php/number_format/
            // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            // improved by: Kevin van Zonneveld (http://kvz.io)
            // improved by: davook
            // improved by: Brett Zamir (http://brett-zamir.me)
            // improved by: Brett Zamir (http://brett-zamir.me)
            // improved by: Theriault (https://github.com/Theriault)
            // improved by: Kevin van Zonneveld (http://kvz.io)
            // bugfixed by: Michael White (http://getsprink.com)
            // bugfixed by: Benjamin Lupton
            // bugfixed by: Allan Jensen (http://www.winternet.no)
            // bugfixed by: Howard Yeend
            // bugfixed by: Diogo Resende
            // bugfixed by: Rival
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
            //  revised by: Luke Smith (http://lucassmith.name)
            //    input by: Kheang Hok Chin (http://www.distantia.ca/)
            //    input by: Jay Klehr
            //    input by: Amir Habibi (http://www.residence-mixte.com/)
            //    input by: Amirouche
            //   example 1: number_format(1234.56)
            //   returns 1: '1,235'
            //   example 2: number_format(1234.56, 2, ',', ' ')
            //   returns 2: '1 234,56'
            //   example 3: number_format(1234.5678, 2, '.', '')
            //   returns 3: '1234.57'
            //   example 4: number_format(67, 2, ',', '.')
            //   returns 4: '67,00'
            //   example 5: number_format(1000)
            //   returns 5: '1,000'
            //   example 6: number_format(67.311, 2)
            //   returns 6: '67.31'
            //   example 7: number_format(1000.55, 1)
            //   returns 7: '1,000.6'
            //   example 8: number_format(67000, 5, ',', '.')
            //   returns 8: '67.000,00000'
            //   example 9: number_format(0.9, 0)
            //   returns 9: '1'
            //  example 10: number_format('1.20', 2)
            //  returns 10: '1.20'
            //  example 11: number_format('1.20', 4)
            //  returns 11: '1.2000'
            //  example 12: number_format('1.2000', 3)
            //  returns 12: '1.200'
            //  example 13: number_format('1 000,50', 2, '.', ' ')
            //  returns 13: '100 050.00'
            //  example 14: number_format(1e-8, 8, '.', '')
            //  returns 14: '0.00000001'
          
            number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
            var n = !isFinite(+number) ? 0 : +number
            var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
            var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
            var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
            var s = ''
          
            var toFixedFix = function (n, prec) {
              if (('' + n).indexOf('e') === -1) {
                return +(Math.round(n + 'e+' + prec) + 'e-' + prec)
              } else {
                var arr = ('' + n).split('e')
                var sig = ''
                if (+arr[1] + prec > 0) {
                  sig = '+'
                }
                return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec)
              }
            }
          
            // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.')
            if (s[0].length > 3) {
              s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
            }
            if ((s[1] || '').length < prec) {
              s[1] = s[1] || ''
              s[1] += new Array(prec - s[1].length + 1).join('0')
            }
          
            return s.join(dec)
          },

        
        updateCredentials(payload){
            LocalStorage.set('admin_token', payload.admin_token);
            LocalStorage.set('name',payload.name);
            LocalStorage.set('email',payload.email);
            LocalStorage.set('dept_code',payload.dept_code);
        },

        authMiddleware(){
             /** verify admin token */
            if(!LocalStorage.getItem('admin_token')){
                return false;
            }else{
                return true;
            }
        },

        completeProfileMiddleware(){
            
            if(LocalStorage.getItem('personal_detail_status') == 'true' || LocalStorage.getItem('personal_detail_status') == true  ){
                return true;
               
            }

            if(LocalStorage.getItem('personal_detail_status') == 'false' ||  LocalStorage.getItem('personal_detail_status') == false ){
                return false;
               
            }
           
        },




        removeCredentials(){

            LocalStorage.set('admin_token', '');
            LocalStorage.set('name', '');
            LocalStorage.set('email', '');
            LocalStorage.set('dept_code', '');
            
        },


        innerLoading(obj){

            if(obj == true){
                this.visible = true
                this.showSimulatedReturnData = false

            }

            if(obj == false){
                this.visible = false
                this.showSimulatedReturnData = true
            }
        },



        gridList(){
            return [
                
                    
                    // {
                    //   icon: 'fas fa-water',
                    //   label: 'Farmland Unit',
                    //   bgColor: 'info-box bg-b-blue',
                    //   boxSize: 'col-xs-12 col-md-3',
                    //   url: '/farmland_unit',
                    //   separator: true
                    // },
    
                    // {
                    //     icon: 'fas fa-pepper-hot',
                    //     label: 'Cash Crop Unit',
                    //     bgColor: 'info-box bg-b-pink',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/cashcrop_unit',
                    //     separator: true
                    // },
    
                    // {
                    //     icon: 'fas fa-fish',
                    //     label: 'Fishery Unit',
                    //     bgColor: 'info-box bg-b-green',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/fishery_unit',
                    //     separator: true
                    // },
    
    
                    // {
                    //     icon: 'fas fa-kiwi-bird',
                    //     label: 'Poultry Unit',
                    //     bgColor: 'info-box bg-b-yellow',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/poultry_unit',
                    //     separator: true
                    // },
    
    
                    
                    // {
                    //     icon: 'fas fa-leaf',
                    //     label: 'Crop Unit',
                    //     bgColor: 'info-box bg-b-blue',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/crop_unit',
                    //     separator: true
                    // },

                    // {
                    //     icon: 'fas fa-exchange-alt',
                    //     label: 'Transaction History',
                    //     bgColor: 'info-box bg-b-pink',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/transaction_history',
                    //     separator: true
                    // },

                    // {
                    //     icon: 'fas fa-mars-double',
                    //     label: 'Relationship Officer',
                    //     bgColor: 'info-box bg-b-blue',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/relationship_officer',
                    //     separator: true
                    // },

                    // {
                    //     icon: 'fas fa-envelope',
                    //     label: 'Newsletter',
                    //     bgColor: 'info-box bg-b-pink',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/newsletter',
                    //     separator: true
                    // },
    
    
                    // {
                    //     icon: 'fas fa-landmark',
                    //     label: 'Account Merge',
                    //     bgColor: 'info-box bg-b-green',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/account_merge',
                    //     separator: true
                    // },
    
                    // {
                    //     icon: 'fas fa-mars-double',
                    //     label: 'Relationship Officer',
                    //     bgColor: 'info-box bg-b-yellow',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/relationship_officer',
                    //     separator: true
                    // },
    
                    // {
                    //     icon: 'fas fa-comment',
                    //     label: 'Bulk Sms',
                    //     bgColor: 'info-box bg-b-blue',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/bulk_sms',
                    //     separator: true
                    // },

                    // {
                    //     icon: 'fas fa-address-card',
                    //     label: 'Contact History',
                    //     bgColor: 'info-box bg-b-pink',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/contact_history',
                    //     separator: true
                    // },

                    // {
                    //     icon: 'fas fa-users',
                    //     label: 'Registered Users',
                    //     bgColor: 'info-box bg-b-blue',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/registered_users',
                    //     separator: true
                    // },

                    // {
                    //     icon: 'fas fa-globe',
                    //     label: 'Food Park',
                    //     bgColor: 'info-box bg-b-pink',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/food-park',
                    //     separator: true
                    // },



                    // {
                    //     icon: 'fas fa-globe',
                    //     label: 'Report',
                    //     bgColor: 'info-box bg-b-pink',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/report',
                    //     separator: true
                    // },

                    // {
                    //     icon: 'fas fa-globe',
                    //     label: 'Refferals',
                    //     bgColor: 'info-box bg-b-pink',
                    //     boxSize: 'col-xs-12 col-md-3',
                    //     url: '/referrals',
                    //     separator: true
                    // },
                    
                   
                    // {
                    //   icon: 'feedback',
                    //   label: 'Logout',
                    //   separator: false
                    // },
                    
                  ]
            
        },
    

        avatar(firstname, secondname){

            var str1 =firstname;
            var str2 = secondname;
            var res1 = str1.substr(0, 1).toUpperCase();
            var res2 = str2.substr(0, 1).toUpperCase();

            return res1+res2;




        },

        masterNav(){
            return [
                { name: 'Login', icon: 'fas fa-sign-in-alt', url: '/'},
                { name: 'Register', icon: 'alarm', url: '/register'},
                { name: 'Templates', icon: 'fas fa-list-ul', url: '/subscription_templates'},
        
              ]
        },


        cashcropType(){
            return [
                { name: 'oilpalm'},
                { name: 'cashew' },
                
        
              ]
        },

        cashcropSize(){
            return [
                { name: 'hectare'},
                { name: 'acre' },
                
        
              ]
        },
        
        toggle_loading: function(value){
          this.loading = value;
          
        },

        storeCredentials(obj){
            localStorage.setItem('token', obj.admin_token)
            localStorage.setItem('surname', obj.surname)
            localStorage.setItem('lastname', obj.lastname )
            localStorage.setItem('username', obj.lastname )
            localStorage.setItem('avatar', obj.avatar )
        },

        redirectTo(url){
            window.location.href = url;
        },

        platformDetector(){
            let platform;

            if(this.$q.platform.is.desktop){
                platform = 'desktop'
            }
            if(this.$q.platform.is.mobile){
                platform = 'mobile'
            }

            if(this.$q.platform.is.electron){
                platform = 'electron'
            }

            return {
                platform: platform
            }
        },

        currentUrl(){
            return {
                url: window.location.href,
            }
        },


        customLogout(){
            localStorage.removeItem('token');
            localStorage.removeItem('fullname');

            this.customRedirect('/'); 
        },
        customAlert(obj){

            
            return this.$swal({
                type: obj.type,
                title: obj.title,
                text: obj.text,
                footer: obj.footer
              });

              

        },

        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [year, month, day].join('-');
        },
        clearInputField(obj){
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key] = '';
                }
            }
        },
        requiredValidator(obj, value){

            let result = true

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {

                    if(value == 'required'){

                        if(obj[key].length < 1){
                            return false;
                        }

                    }
                    
                }
            }

            return result;

        },

        isValidToken(token){
            const payload = this.payload(token);

           

            if(payload){

                return true;

                // if(payload.iss == "https://lumen.lilycourt.ng/api/v1/users/login"){
                //     return true;
                // }
                // return false;
            }

            return false;
        },

        isValidTokenX(token){
            const payload = this.payload(token);

            if(payload){

            
                    return true;
                
                
            }

            return false;
        },
        payload(token){
            const payload  = token.split('.')[1];
            return this.decode(payload);

        },
        decode(payload){
            return JSON.parse(atob(payload));
        },
        

       
        
          

    },
    filters: {
        ucwords: function (input = null){

            if(input){
                var str = input;
                str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });

                return str;
            }else{
                return '';
            }
            
        },
        dateToHumanReadableForm: function (value) {
          if (!value) return ''
          value = value.toString()
          var dateData, dateObject, dateReadable;

            dateData = value.replace(/-/g,'/').replace('T',' ').replace(/\..*|\+.*/,"") //For example

            dateObject = new Date(Date.parse(dateData));

            dateReadable = dateObject.toDateString();

            return dateReadable;
        },
        getNameFromId: function(value){

            

        //    var array1 = store.getters.getUsersData;
        //    return array1;
           

            //looping through array
            for(var arr in array1[0]){
                return arr.id;
            }

            return 2;
        }
    },

    

}