import mongoose from "mongoose";

const presetSchema = new mongoose.Schema({
  name: {
    type: String,  // Preset name, e.g., "Classic Chrome"
    required: true
  },
  sensor: {
    type: String,  // Sensor type, e.g., "APS-C", "Full Frame"
    required: true
  },
  images: [{
    type: String,  // Array of image URLs
    required: true
  }],
  settings: {
    filmSimulation: {
      type: String,   
      default: "Classic Chrome",
      required: true
    },
    dynamicRange: {
      type: String,
      enum: ["DR100", "DR200", "DR400", "Auto"],
      default: "DR200"
    },
    highlight: {
      type: Number,
      default: 0
    },
    shadow: {
      type: Number,
      default: 0
    },
    color: {
      type: Number,
      min: -4,
      max: 4,
      default: 2
    },
    noiseReduction: {
      type: Number,
      min: -4,
      max: 4,
      default: -4
    },
    sharpening: {
      type: Number,
      min: -4,
      max: 4,
      default: 1
    },
    clarity: {
      type: Number,
      min: -5,
      max: 5,
    },
    grainEffect: {
      strength: {
        type: String,
        enum: ["Off", "Weak", "Strong"],
      },
      size: {
        type: String,
        enum: ["Small", "Large", "Off"],
      }
    },
    colorChromeEffect: {
      type: String,
      enum: ["Off", "Weak", "Strong"],
    },
    colorChromeEffectBlue: {
      type: String,
      enum: ["Off", "Weak", "Strong"],
    },
    whiteBalance: {
      mode: {
        type: String,
        default: "Daylight"
      },
      redShift: {
        type: Number,
        default: 2
      },
      blueShift: {
        type: Number,
        default: -5
      }
    },
    iso: {
      mode: {
        type: String,
        enum: ["Auto", "Manual"],
        default: "Auto"
      },
      maxIso: {
        type: Number,
        default: 6400
      }
    },
    exposureCompensation: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 0.67
      }
    }
  },
});

const Preset = mongoose.model("Preset", presetSchema);

export default Preset;
