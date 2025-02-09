import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productModel from './db.js'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.post('/vans', async function(req, res) {
    const { name, price, description, imageUrl, type } = req.body

    console.log(name, price, description, imageUrl, type)
    try {
        await productModel.create({
            name,
            price,
            description,
            imageUrl,
            type
        })
        res.status(200).json({
            message: "Product Added"
        })
    } catch (error) {
        res.status(502).json({
            message: "Server side issue"
        })
    }
})

app.get('/vans', async function(req, res) {
    try {
        const product = await productModel.find()
        res.status(200).json({
            product: product
        })
    } catch (error) {
        res.status(502).json({
            message: "Server side issue"
        })
    }
})

app.post('/van', async function(req, res) {
    const productId = req.body.productId
    console.log(productId)
    try {
        const product = await productModel.findById(productId)
        res.status(200).json({
            product: product
        })
    } catch (error) {
        res.status(502).json({
            message: "Server side issue"
        })
    }
})

async function main() {
    await mongoose.connect(process.env.MONGOOSE_URL)
    app.listen(3000, ()=> {
        console.log("Server is running on port 3000.")
    })
}

main()