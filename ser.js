const http = require('http');
const fs = require('fs');

let filepath = "./front"

const server = http.createServer((req,resp)=>{
    switch (req.url) {
        case "/":
            filepath = "./front/Home.html"
            break;

         case "/about":
            filepath = "./front/About.html"
            break;

        case "/contact":
            filepath = "./front/Contact.html"
            break;
    
        default:
            filepath = "./front/Error.html"
            break;
    }

    fs.readFile(filepath,(err,data)=>{
        if (err) {
            resp.end("server error")
        }else{
            resp.end(data)
        }
    })


})

server.listen(1000,()=>{
    console.log("server running on port 1000");
})