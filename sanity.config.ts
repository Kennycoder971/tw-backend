import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'twitter-backend',

  projectId: 'o2t2wltz',
  dataset: 'twitter',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
