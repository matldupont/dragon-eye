import { defineField, defineType } from "sanity";

export const cryptidFile = defineType({
  name: 'cryptidFile',
  title: 'Cryptid File',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The file title (e.g., "The Banshee File")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The cryptid name (e.g., "Banshee")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'caseNumber',
      title: 'Case Number',
      type: 'string',
      description: 'Unique case identifier',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'alias',
      title: 'Alias',
      type: 'string',
      description: 'Alternative names or aliases'
    }),
    defineField({
      name: 'address',
      title: 'Address/Location',
      type: 'string',
      description: 'Primary location or origin',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'knownAssociates',
      title: 'Known Associates',
      type: 'string',
      description: 'Related entities, creatures, or phenomena'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the cryptid',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Alt text for the image',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'caseNumber',
      media: 'image'
    }
  }
})