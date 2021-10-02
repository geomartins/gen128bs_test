import axios from 'axios'
import { Platform } from 'quasar'
import { openURL } from 'quasar'
import { exportFile } from 'quasar'


export const downloader ={

    actions:{

        async downloadExcel(url, value){

          let x = this;

                axios({
                    url: url,
                    data: value,
                    method: "POST",
                    responseType: 'blob'
                }).then(response => {
                    console.log(response)
                    var fileURL = window.URL.createObjectURL(new Blob([response.data],{type: 'application/vnd.ms-excel'}));
            
                    var fileLink = document.createElement("a");
            
                    fileLink.href = fileURL;
            
                    fileLink.setAttribute("download","excel.xlsx");
            
                    document.body.appendChild(fileLink);
            
                    fileLink.click();
    
                });

            
       
            
        },

        downloadPDF ( url) {

            let x = this;

            

            if(Platform.is.cordova){
             

              

                axios({
                    url: url,
                    method: "GET",
                    responseType: 'arraybuffer'
                }).then(response => {
                   
                    var blob = new Blob([response.data])

                   
                      
                    if (typeof cordova !== 'undefined') {
                      
                    x.saveBlob2File("file.pdf", blob)

                    }
                    
    
                });

                
               

            }else{

                axios({
                    url: url,
                    method: "GET",
                    responseType: 'arraybuffer'
                }).then(response => {
                    var fileURL = window.URL.createObjectURL(new Blob([response.data],{type: 'application/pdf'}));
            
                    var fileLink = document.createElement("a");
            
                    fileLink.href = fileURL;
            
                    fileLink.setAttribute("download", "file.pdf");
            
                    document.body.appendChild(fileLink);
            
                    fileLink.click();
    
                });

            }



            
        },

        
        saveBlob2File (fileName, blob) {
            let x = this;
            

            var folder = cordova.file.externalRootDirectory + 'Download'
            
            window.resolveLocalFileSystemURL(folder, function (dirEntry) {
              //alert('file system open: ' + dirEntry.name)
              x.createFile(dirEntry, fileName, blob, folder)
            }, x.onErrorLoadFs)
        },
    
        createFile (dirEntry, fileName, blob, folder) {
         // alert('zzzzz');
            let x = this;

            // Creates a new file
            dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
             // alert(dirEntry.name)
              x.writeFile(fileEntry, blob, folder)
            }, x.onErrorCreateFile)
        },
    
        writeFile (fileEntry, dataObj, folder) {
            let x = this;

            // Create a FileWriter object for our FileEntry
            fileEntry.createWriter(function (fileWriter) {
              fileWriter.onwriteend = function () {


              //This opens up the file
                cordova.plugins.fileOpener2.open(
                  folder+'/file.pdf', // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Downloads/starwars.pdf
                  'application/pdf',
                  {
                      error : function(e) {
                          //alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                      },
                      success : function () {
                          //alert('file opened successfully');
                      }
                  }
              );

                //alert(folder+'/file.pdf')

                

                //alert('Successful file write...'+fileEntry)
              }
    
              fileWriter.onerror = function (error) {
               // alert('Failed file write: ' + error)
              }
              fileWriter.write(dataObj)
            })
          },
    
          onErrorLoadFs (error) {
            //alert(error);
          },
    
          onErrorCreateFile (error) {
            //alert(error)
          }
      
        
          

    }
   
}