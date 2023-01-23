// const http = require('http');
// const colors=require('colors');
// const data=require('./data');
// http.createServer((req,res)=>{
//     //res.write("Server Started");
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
//     console.log("Server Running...".green);
// }).listen(8000);



// const fs = require('fs');

// const input=process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else
//     console.log("Invalid Operation");


const fs = require('fs');
const path = require('path');

const dirpath=path.join(__dirname,'files');
for (let index = 0; index < 5; index++) {
    fs.writeFileSync(dirpath+`/Hello${index}.txt`,'Hii this is file');
    //fs.writeFileSync(dirpath+"/Hello"+index+".txt","Hii this is file");
    
}

fs.readdir(dirpath,(err,files)=>{
    files.forEach((item) => {
        console.log(item);
        
    });
})