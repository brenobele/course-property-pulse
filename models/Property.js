import { Schema, model, models } from 'mongoose'

const propertySchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, require: true },
    type: { type: String, require: true },
    description: { type: String },
    location: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipcode: { type: String },
    },
    beds: {
      type: Number,
      require: true,
    },
    baths: {
      type: Number,
      require: true,
    },
    square_feet: {
      type: Number,
      require: true,
    },
    amenities: [{ type: Array }],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [
      {
        Type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Property = models.Property || model('Property', propertySchema)

export default Property
