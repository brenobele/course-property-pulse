import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
  mongoose.set('strictQuery', true)

  // Se estiver conectado não conecta novamente
  if (connected) {
    console.log('MongoDB conectado')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
