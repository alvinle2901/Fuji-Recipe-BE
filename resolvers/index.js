import { mergeResolvers } from '@graphql-tools/merge';

import presetResolver from './preset.resolver.js';

const mergedResolvers = mergeResolvers([presetResolver]);

export default mergedResolvers;
