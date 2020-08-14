import React from 'react'
import UseStateFetchAPI from './UseStateFetchAPI'
import UseStateFetchApiBySearchingID from './UseStateFetchApiBySearchingID'
import FetchApiBySearchingIdUsingButton from './FetchApiBySearchingIdUsingButton'

function FetchApi(){
  return(
    <>
    <UseStateFetchAPI />
<UseStateFetchApiBySearchingID />
<FetchApiBySearchingIdUsingButton />
    </>
  )
}

export default FetchApi