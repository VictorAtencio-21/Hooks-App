import { useCounter } from "../Hooks"
import { useState, useMemo } from "react"


const heavyStuff = ( iterations = 100 ) => {
    for( let i=0; i< iterations; i++ ) {
        console.log('Here we go');
    }

    return `${ iterations } iterations done.`
}

export const MemoHook = () => {

    const { counter, increment } = useCounter( 500 );
    const [Show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1> Memorize, Counter: <small>{ counter }</small> </h1>

        <hr/>

        <h4>{ memorizedValue }</h4>

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
