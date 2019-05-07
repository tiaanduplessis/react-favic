import React from 'react'

const ReactFavic = ({ href, name, color, onRender }) => {
  const links = [
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '57x57',
      name: 'apple-touch-icon-57x57.png',
      tag: 'link'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '60x60',
      name: 'apple-touch-icon-60x60.png',
      tag: 'link'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '72x72',
      name: 'apple-touch-icon-72x72.png',
      tag: 'link'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '76x76',
      name: 'apple-touch-icon-76x76.png',
      tag: 'link'
    },
    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '114x114',
      name: 'apple-touch-icon-114x114.png',
      tag: 'link'
    },

    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '120x120',
      name: 'apple-touch-icon-120x120.png',
      tag: 'link'
    },

    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '144x144',
      name: 'apple-touch-icon-144x144.png',
      tag: 'link'
    },

    {
      rel: 'apple-touch-icon-precomposed',
      sizes: '152x152',
      name: 'apple-touch-icon-152x152.png',
      tag: 'link'
    },

    {
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      name: 'favicon-16x16.png',
      tag: 'link'
    },
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      name: 'favicon-32x32.png',
      tag: 'link'
    },
    {
      rel: 'icon',
      sizes: '96x96',
      type: 'image/png',
      name: 'favicon-96x96.png',
      tag: 'link'
    },
    {
      rel: 'icon',
      sizes: '128x128',
      type: 'image/png',
      name: 'favicon-128.png',
      tag: 'link'
    },
    {
      rel: 'icon',
      sizes: '128x128',
      type: 'image/png',
      name: 'favicon-128x128.png',
      tag: 'link'
    },

    {
      rel: 'icon',
      sizes: '196x196',
      type: 'image/png',
      name: 'favicon-196x196.png',
      tag: 'link'
    },

    {
      tag: 'meta',
      name: 'application-name',
      content: name
    },
    {
      tag: 'meta',
      name: 'msapplication-TileColor',
      content: color
    },
    {
      tag: 'meta',
      name: 'msapplication-TileImage',
      content: `${href}/mstile-144x144.png`
    },
    {
      tag: 'meta',
      name: 'msapplication-square70x70logo',
      content: `${href}/mstile-70x70.png`
    },
    {
      tag: 'meta',
      name: 'msapplication-square150x150logo',
      content: `${href}/mstile-150x150.png`
    },
    {
      tag: 'meta',
      name: 'msapplication-wide310x150logo',
      content: `${href}/mstile-310x150.png`
    },
    {
      tag: 'meta',
      name: 'msapplication-square310x310logo',
      content: `${href}/mstile-310x310.png`
    }
  ]

  return onRender(links).map(({ tag, name, ...args }) => {
    if (tag === 'meta') {
      return <meta key={name} name={name} {...args} />
    }

    if (tag === 'link') {
      return <link key={name} href={`${href}/${name}`} {...args} />
    }

    return null
  })
}

ReactFavic.defaultProps = {
  href: '/static',
  name: 'App',
  color: '#fff',
  onRender: val => val
}

export default ReactFavic
