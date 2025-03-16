import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '🎁 GiftHive – Secret Gift Ideas from Friends & Family',
    short_name: 'GiftHive',
    description: 'GiftHive is the fun and heartwarming way to collaborate on birthday gift ideas—without ruining the surprise! Create a group, brainstorm secret gift ideas for each other, and keep the magic alive. Everyone can see the ideas—except the recipient! Perfect for friends, family, and loved ones. 🐝🎉',
    start_url: '/',
    display: "standalone",
    background_color: "#d7bf9e",
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}