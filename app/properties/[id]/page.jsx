'use client'

import React from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'

const Property = () => {
  const router = useRouter()
  const seachParams = useSearchParams()
  const { id } = useParams()
  const name = seachParams.get('name')

  return (
    <div>
      <h1 className="text-3xl bg-lime-50 rounded m-1 py-1 px-2">{id} | {name}</h1>
      <button onClick={() => router.push('/')} className="bg-blue-500 p2 rounded m-1 py-1 px-2">Go home</button>
      </div>
  )
}

export default Property