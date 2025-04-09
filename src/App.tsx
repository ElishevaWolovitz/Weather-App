//import React from 'react'
import { Card } from './components/Card/Card.tsx' 

function App() {
  return (
    <>
    {/* I know there is a better logical way to do this and to use API as apose static mock data - will come back to this if time */}
      <Card LocationCardProp="Tel Aviv" TempCardProp={25} UVCardProp={8}/>
      {/* <Card LocationCardProp="Johannesburg" TempCardProp={13} UVCardProp={4}/>
      <Card LocationCardProp="Antarctica" TempCardProp={-5} UVCardProp={0}/>
      <Card LocationCardProp="Texas" TempCardProp={31} UVCardProp={12}/> */}
    </>
  )
}

export default App