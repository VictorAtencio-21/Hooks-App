import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {

    console.log('Re render :(')

  return (
    <button
        className="btn btn-primary"
        onClick={() => {
            increment( 5 );
        }}
    >
        Increment +5
    </button>
  )
})
