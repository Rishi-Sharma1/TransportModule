import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      required: true,
      unique: true
    },

    type: {
      type: String,
      enum: [
        'TRUCK',
        'VAN',
        'CONTAINER'
      ],
      required: true
    },

    manufacturer: {
      type: String,
      required: true
    },

    model: {
      type: String,
      required: true
    },

    fuelCapacity: {
      type: Number,
      required: true
    },

    currentFuelLevel: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: [
        'ACTIVE',
        'INACTIVE',
        'MAINTENANCE'
      ],
      default: 'ACTIVE'
    },

    assignedDriver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Driver',
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

const Vehicle = mongoose.model(
  'Vehicle',
  vehicleSchema
)

export default Vehicle