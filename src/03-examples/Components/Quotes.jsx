import { useLayoutEffect, useRef, useState } from "react";

export const Quotes = ({Quote, Author}) => {

  const pRef = useRef();
  const [BoxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { height, width } = (pRef.current.getBoundingClientRect())

    setBoxSize({
      height,
      width
    })

  }, [Quote])

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex '}}>
      <p ref={ pRef } className="mb-3">{Quote ? Quote : "No quote to show"}</p>
      <footer className="blockquote-footer">
        {Author ? Author : "No one"}
      </footer>
    </blockquote>

    <code>{JSON.stringify(BoxSize)}</code>
    </>

    
  );
};
