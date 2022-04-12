import React from 'react'

export default {
  name: 'bodyImage',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Image URL',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'mediaCaption',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
    },
  ],
  preview: {
    select: {url: 'url', alt: 'alt', caption: 'caption'},
    component: ({value}) => {
      const {url, alt, caption} = value
      return (
        <>
          <div>
            <img src={url} alt={alt} />
          </div>
          {alt && <b>{alt}</b>} {caption && <i>caption: {caption}</i>}
        </>
      )
    },
  },
}