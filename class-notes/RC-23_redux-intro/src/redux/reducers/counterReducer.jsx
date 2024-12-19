import React from 'react'

const counterReducer = (state={sayac:0, yazi:""},{type,payload1}) => {

  switch (type) {
    case "OKE":
      
      return {sayac: state.sayac+1, yazi:payload1}
    
    case"REDUZIEREN":
      return {sayac:state.sayac-1,yazi:payload1}
      
      
    case "RESETLE":
      return {sayac:0}

    default:
      return state;
  }
}

export default counterReducer