import mongoose from 'mongoose'

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    licenseNumber: {
      type: String,
      required: true,
      unique: true
    },

    phone: {
      type: String,
      required: true
    },

    experience: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: [
        'ACTIVE',
        'ON_LEAVE'
      ],
      default: 'ACTIVE'
    },

    assignedVehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
      default: null
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

const Driver = mongoose.model(
  'Driver',
  driverSchema
)

export default Driver