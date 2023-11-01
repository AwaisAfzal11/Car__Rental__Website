const express = require("express")
const app = express()
const hbs = require("hbs")
app.set("view engine","hbs");


const path = require("path")
const static_path = path.join(__dirname,"./public");
const views_path = path.join(__dirname,"./templates/views");
const partials_path = path.join(__dirname,"./templates/partials");
app.use(express.static(static_path));
app.set("views",views_path);
hbs.registerPartials(partials_path);


// app.get("/",async(req,res)=>{
//     Product.getAll((products) => {
//         const menProducts = products.filter(product => product.category === 'Men');
//         const womenProducts = products.filter(product => product.category === 'women');
//         const kidsProducts = products.filter(product => product.category === 'kids');
//         res.render('index', { menProducts, womenProducts,kidsProducts });
//     });
// })

app.get("/",async(req,res)=>{
    res.render("index")
})

app.get("/cars",async(req,res)=>{
    res.render("cars")
})

app.get("/test",async(req,res)=>{
    Product.getAll((products) => {
        res.render('test', { products });
      });
})


const port = 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})