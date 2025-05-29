import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (<>
  <p style={{fontSize: "2rem", color:"red"}}>{isRouteErrorResponse(error)? "invalid route": (error as ErrorEvent).message}</p>
  </>
    
  )
}

export default ErrorPage