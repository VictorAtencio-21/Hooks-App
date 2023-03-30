import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [Counter, setCounter] = useState(10)

    const incrementFather = useCallback(
      ( increment ) => {
        setCounter( (value) => value + increment );
      },
      [],
    )


  return (

    <>
        <h1> useCallback Hook: { Counter }</h1>
        <hr />

        <ShowIncrement increment={ incrementFather }/>
    
    </>

  )
}
