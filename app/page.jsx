import React from 'react'
import Hero from '@/components/Hero'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Link href="/properties">Show Properties</Link>
    </div>
  )
}

export default HomePage