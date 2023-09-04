import React from 'react'

export default function CustomVideo({ src }) {
  return (
    <video className="video " controls autoPlay muted>
      <source src={src} type="video/mp4" />
    </video>
  )
}
