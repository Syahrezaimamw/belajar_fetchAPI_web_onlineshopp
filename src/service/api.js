import axios from "axios"
export const getApi=async()=>{
    return await axios.get('https://api.escuelajs.co/api/v1/products')
    .then(res=>{
        
        const datas=res.data
        datas.map(a=>{
            if(a.title=='New Product'){
                a.images[0]=gambarNewProduct()
            }
        })
        return res.data
    })

}
export const searchProduct=async(search)=>{
    return await axios.get('https://dummyjson.com/products/search?q='+search)
    .then(res=>res.data)
}
export const category=async()=>{
    return await axios.get('https://api.escuelajs.co/api/v1/categories')
    .then(a=>a.data)
}
function gambarNewProduct(){
    return 'https://img.lovepik.com/free-png/20220109/lovepik-white-question-mark-png-image_401351771_wh860.png'
}