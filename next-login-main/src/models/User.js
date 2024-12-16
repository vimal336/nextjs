import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, default: 'USER' },
  },
  { timestamps: true },
)

const User = models?.User || model('User', UserSchema)
export default User
