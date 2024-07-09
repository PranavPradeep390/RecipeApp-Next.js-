import Link from 'next/link'
import React from 'react'
function notfound() {
  return (
    <div>
      <p>PAGE NOT FOUND</p>
      <Link href={'/'}>Go To Home Page...</Link>
    </div>
  )
}

export default notfound