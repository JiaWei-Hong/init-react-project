import React from 'react'
import { useParams } from 'react-router-dom'

function Test() {
  const params = useParams()
  console.log(params)

  return <div>Test {params.id}</div>
}

export default Test
