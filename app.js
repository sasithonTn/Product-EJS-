const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var items = ["iPhone 14 pro max", "iPad gen 10", "macbook pro 13"];
var productShow = ""
var searchItem = "";
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req,res)=>{
   res.render("product", {newListItems:items, product:searchItem, show:productShow});
})

app.post("/", (req,res)=>{
    searchItem = req.body.SearchItem
    if(searchItem === items[0]) res.redirect("/product1")
    else if (searchItem ===  items[1]) res.redirect("/product2")
    else if (searchItem ===  items[2]) res.redirect("/product3")
    else{
       searchItem = "Product not found" 
       res.redirect("/")
    } 
});

app.get("/product1", (req, res)=>{
    productShow = ["product1.png","iPhone 14 pro max", "เริ่มต้นที่ ฿41,900", 
    "สเปค iPhone 14 Pro Max หน้าจอ 6.7 นิ้ว 120Hz มาพร้อม iOS 16 ชิปเซ็ต"]
    console.log(productShow)
    res.redirect("/");
});
app.get("/product2", (req, res)=>{
    productShow = ["product2.png","iPad gen 10", "เริ่มต้นที่ ฿17,900", 
    "จอภาพ Liquid Retina ขนาด 10.9 นิ้ว","กล้องหลังความละเอียด 12MP รองรับการบันทึกวิดีโอความละเอียด 4K ที่ 60 fps"]
    console.log(productShow)
    res.redirect("/");
});
app.get("/product3", (req, res)=>{
    productShow = ["product3.png","maxbook pro 13", "เริ่มต้นที่ ฿43,900", 
    "ด้วยชิป M2 ใหม่ ทำให้ตอนนี้ MacBook Pro รุ่น 13 นิ้ว นั้นมากความสามารถยิ่งกว่าครั้งไหนๆ โดยมาในดีไซน์กะทัดรัดเช่นเคย พร้อมด้วยแบตเตอรี่ที่ใช้งานได้นานสูงสุด 20 ชั่วโมง1 และระบบระบายความร้อนแบบแอ็คทีฟที่ช่วยคงไว้ซึ่งประสิทธิภาพอันยอดเยี่ยมยิ่งขึ้น ทั้งยังมีจอภาพ Retina ที่สวยสดงดงาม รวมถึงกล้อง FaceTime HD และไมโครโฟนคุณภาพระดับสตูดิโอ บอกเลยว่านี่คือแล็ปท็อประดับโปรที่พกพาง่ายที่สุดเท่าที่เคยมีมาของเรา"]
    console.log(productShow);
    res.redirect("/");
});



app.listen(3000, ()=>{
   console.log("Server is running at port 3000");
})


