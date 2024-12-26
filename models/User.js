import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email já existe'],
      require: [true, 'Email é obrigatório'],
    },
    username: {
      type: String,
      require: [true, 'Usuário é obrigatório'],
    },
    image: {
      type: String,
    },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
  },
  {
    timestamps: true,
  }
)

const User = models.User || model('User', userSchema)

export default User
