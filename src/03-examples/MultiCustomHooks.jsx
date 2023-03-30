import { useFetch, useCounter } from "../Hooks/index";
import { Loading, Quotes } from "./Components";

export const MultiCustomHooks = () => {
  const { counter, increment } = useCounter();

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`
  );

  const { quote, author } = !!data && data[0]

  return (
    <>
      <h1> Breaking Bad Quotes </h1>

      <hr />

      {
        isLoading ? <Loading /> : <Quotes Quote={ quote } Author={ author } />
      }

      <button 
        className="btn btn-danger" 
        onClick={() => increment(1)}
        disabled={ isLoading }
        >
        Next Quote
      </button>
    </>
  );
};
