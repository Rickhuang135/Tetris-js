import http from 'http';
import fs from 'fs';
import path from 'path';

function FileSender(res,path){
    var myReadStream = fs.createReadStream(path);
    myReadStream.pipe(res);
}

http.createServer((req,res)=>{
    console.log(req.url);
    console.log(path.extname(req.url));
    if(req.method==="GET"){
        if(path.extname(req.url)==='.png'){
            res.writeHead(200, {'content-type':'image/png'});
            FileSender(res,path.join(".",req.url));
        }else{
            switch(req.url){
                case '/': res.writeHead(200,{'Content-Type':'text/html'}); 
                FileSender(res,'./Mobilegame.html');
                break;
                case '/game.css': res.writeHead(200, {'Content-Type':'text/css'});
                FileSender(res,'./game.css');
                break;
                case '/game.js': res.writeHead(200, {'Content-Type':'text/html'});
                FileSender(res,'./game.js');
                break;
                case '/Images/background2.jpg': res.writeHead(200, {'Content-Type':'image/jpg'});
                FileSender(res,'./Images/background2.jpg');
                break;
                case '/audio/soundtrack.mp3': res.writeHead(200, {'Content-Type':'audio/mpeg'});
                FileSender(res,'./audio/soundtrack.mp3');
                break;
                case '/favicon.ico': res.writeHead(200, {'Content-Type':'image/png'});
                FileSender(res,'./Images/red.png');
                break;
                default: res.writeHead(404, {'Content-Type':'text/plain'});
                res.end("Route not found");
            }
        }
    
    
    }
}).listen(8080);