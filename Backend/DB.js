const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://ankushyd14:systemcall14@cluster0.afibww7.mongodb.net/news"

const connectToMongo =()=>{
mongoose.connect(mongoURI)
console.log('Mongo connected')

}
// const connectToMongo = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(mongoURI) 
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

module.exports =connectToMongo;