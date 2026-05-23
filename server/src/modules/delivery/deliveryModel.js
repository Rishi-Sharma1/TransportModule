import mongoose from 'mongoose'

const deliverySchema =
  new mongoose.Schema(
    {
      pickupLocation: {
        type: String,
        required: true
      },

      dropLocation: {
        type: String,
        required: true
      },

      assignedVehicle: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
      },

      assignedDriver: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        required: true
      },

      status: {
        type: String,
        enum: [
          'PENDING',
          'IN_TRANSIT',
          'DELIVERED'
        ],
        default: 'PENDING'
      },

      deliveryDate: {
        type: Date,
        default: Date.now
      },

      isDeleted: {
        type: Boolean,
        default: false
      }
    },
    {
      timestamps: true
    }
  )

const Delivery = mongoose.model(
  'Delivery',
  deliverySchema
)

export default Delivery