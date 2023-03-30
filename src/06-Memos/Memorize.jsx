import { useCounter } from "../Hooks"
import { Small } from "./Components/Small"
import { useState } from "react"

export const Memorize = () => {

    const { counter, increment } = useCounter(10)

    const [Show, setShow] = useState(true)

  return (
    <>
        <h1> Memorize, Counter: <Small value={ counter } /> </h1>

        <hr/>

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className="btn btn-outline-danger"
            onClick={ () => setShow( !Show )}
        >
            Show/Hide {JSON.stringify(Show)}
        </button>
    </>
  )
}
