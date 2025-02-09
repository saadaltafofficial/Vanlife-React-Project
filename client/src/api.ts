import axios from 'axios'

export async function getVans() {
    const res = await axios.get('http://localhost:3000/vans')
    return res.data.product
}

export async function getVanDetail() {
    const data = {
        productId: "67a83e022a8a434ad8164375"
    }
    const res = await axios.post("http://localhost:3000/van", {data})
    console.log("VanDetail", res.data)
    return res.data
}

