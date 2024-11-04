import Preset from '../models/preset.model.js';

const presetResolver = {
  Query: {
    getAllPresets: async () => {
      try {
        const presets = await Preset.find();
        return presets;
      } catch (err) {
        console.error('Error getting presets:', err);
        throw new Error('Error getting presets');
      }
    },
    getPreset: async (_, { presetId }) => {
      try {
        const preset = await Preset.findById(presetId);
        return preset;
      } catch (err) {
        console.error('Error getting preset:', err);
        throw new Error('Error getting preset');
      }
    }
  },
  Mutation: {
    createPreset: async (_, { input }, context) => {
      try {
        const newPerset = new Preset({
          ...input
        });
        await newPerset.save();
        return newPerset;
      } catch (err) {
        console.error('Error creating preset:', err);
        throw new Error('Error creating preset');
      }
    },
    updatePreset: async (_, { input }) => {
      try {
        const updatedPreset = await Preset.findByIdAndUpdate(
          input.presetId,
          input,
          {
            new: true
          }
        );
        return updatedPreset;
      } catch (err) {
        console.error('Error updating preset:', err);
        throw new Error('Error updating preset');
      }
    },
    deletePreset: async (_, { presetId }) => {
      try {
        const deletedPreset = await Preset.findByIdAndDelete(
          presetId
        );
        return deletedPreset;
      } catch (err) {
        console.error('Error deleting preset:', err);
        throw new Error('Error deleting preset');
      }
    }
  }
};

export default presetResolver;
