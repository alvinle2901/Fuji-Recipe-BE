const presetTypeDef = `#graphql
  type Preset {
    id: ID!
    name: String!
    sensor: String!
    images: [String!]!
    settings: PresetSettings!
}

  type PresetSettings {
    filmSimulation: String!
    dynamicRange: String!
    highlight: Int!
    shadow: Int!
    color: Int!
    noiseReduction: Int!
    sharpening: Int!
    clarity: Int
    grainEffect: GrainEffect
    colorChromeEffect: String
    colorChromeEffectBlue: String
    whiteBalance: WhiteBalance!
    iso: ISOSettings!
    exposureCompensation: ExposureCompensation
  }

  type GrainEffect {
    strength: String
    size: String
  }

  type WhiteBalance {
    mode: String!
    redShift: Int!
    blueShift: Int!
  }

  type ISOSettings {
    mode: String!
    maxIso: Int!
  }

  type ExposureCompensation {
    min: Float!
    max: Float!
  }

  # Input types for mutations to create or update a preset
  input PresetInput {
    name: String!
    sensor: String!
    images: [String!]!
    settings: PresetSettingsInput!
  }

  input PresetSettingsInput {
    filmSimulation: String!
    dynamicRange: String!
    highlight: Int!
    shadow: Int!
    color: Int!
    noiseReduction: Int!
    sharpening: Int!
    clarity: Int
    grainEffect: GrainEffectInput
    colorChromeEffect: String
    colorChromeEffectBlue: String
    whiteBalance: WhiteBalanceInput!
    iso: ISOSettingsInput!
    exposureCompensation: ExposureCompensationInput
  }

  input GrainEffectInput {
    strength: String!
    size: String!
  }

  input WhiteBalanceInput {
    mode: String!
    redShift: Int!
    blueShift: Int!
  }

  input ISOSettingsInput {
    mode: String!
    maxIso: Int!
  }

  input ExposureCompensationInput {
    min: Float
    max: Float
  }

  # Query and Mutation types for managing presets
  type Query {
    getPreset(id: ID!): Preset
    getAllPresets: [Preset!]!
  }

  type Mutation {
    createPreset(input: PresetInput!): Preset!
    updatePreset(id: ID!, input: PresetInput!): Preset!
    deletePreset(id: ID!): Preset!
  }
`;

export default presetTypeDef;
