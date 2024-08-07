const express = require("express");
const app = express();
// console.dir(app);
let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request received");
//     // res.send({
//     //     name: "nitin",
//     //     age: 11,
//     // });
//     let code = "<h1>fruits</h1><ul><li>mango</li><li>apple</li></ul>";
//     res.send(code);
// });
//--------------------------------------------
// app.get("/",(req,res)=>{
//     res.send("i am root path");
// })
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// })
// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// })
//----------------------------------------------------
// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
    
//     res.send("Hello ,i am root path");
// })
//-----------------------------------------
app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q}=req.query;
    res.send(`searched:${q}`);
})