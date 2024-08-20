import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const {status, statusText} = useRouteError()

  return (
    <div>
      <h1>{status}: {statusText}</h1>
    </div>
  )
}

export default Error
