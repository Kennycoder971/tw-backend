import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blockeTweet',
      title: 'Block Tweet',
      type: 'boolean',
      description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile image',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    }),
  ],
})
