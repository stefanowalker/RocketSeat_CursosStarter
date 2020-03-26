// lidar com as operações com determinado módulo
const mongoose = require ('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    // lista todos os registros na base // para página que carrega tudo
    // async index(req, res){
    //     const products = await Product.find();
    //     return res.json(products);
    // },

    async index(req, res) {
        const {page = 1} = req.query; // page é parametro get. Vem depos da interrogacao (?page=x)
        // inica como 1, mas pega o valor de req.query
        const products = await Product.paginate({}, {page:page, limit:10 });
        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    // criacao de registro
    async store(req, res){ // método para adicionar e retornar o que mandou.
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // new é para retornar o parametro novo, ao finalizar.
        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },

};

