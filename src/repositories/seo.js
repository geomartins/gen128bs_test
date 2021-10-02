import { LocalStorage } from 'quasar'

export const seo ={

    data(){
        
    },

    methods:{  
        seoMetaTitle(title){
            return LocalStorage.set('meta_title',title);
        },
    },
    meta: {
        // sets document title
        title: 'AgroPark',   
        titleTemplate(titleChunk){
            let dynamicTitle = LocalStorage.getItem('meta_title');

            if(dynamicTitle){
                return titleChunk ? `${dynamicTitle} |  ${titleChunk}` : 'Site Title';
            }
            return titleChunk ? `${titleChunk} ` : 'Site Title';
        }, 
    
        // meta tags
        meta: {
          description: { name: 'description', content: 'Page 1' },
          keywords: { name: 'keywords', content: 'AgroPark website' },
          equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
        },
    },


}