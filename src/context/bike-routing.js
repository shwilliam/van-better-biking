import React, {useState} from 'react'

const BikeRoutingContext = React.createContext()

export const BikeRoutingContextProvider = ({children}) => {
  const [activeRoute, setActiveRoute] = useState()

  return (
    <BikeRoutingContext.Provider
      value={{activeRoute, setActiveRoute}}
    >
      {children}
    </BikeRoutingContext.Provider>
  )
}

export default BikeRoutingContext
