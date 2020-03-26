const express =  require("express");
const routes = express.Router();

const ProductController = require('./controllers/ProductsController');

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

// // Primeira Rota
// routes.get("/products", (req, res) => {
//     Product.create({
//         titles: "React Native",
//         description: "Build a aplication with Node",
//         url: 'http://github.com/facebook/react-native',
//     }); // Essse produto já vai te seus metadados inseridos dentro da base de dados
    
//     return res.send("acesse a api em /products");
// });



module.exports = routes;