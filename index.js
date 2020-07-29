const express = require("express")
const path = require('path')
const app = express();

console.log(path.join(__dirname,'plugin'))
app.use('/plugin',express.static('plugin/lib'))
app.listen(8000,()=>{
    console.log("listening on port 8000")
})