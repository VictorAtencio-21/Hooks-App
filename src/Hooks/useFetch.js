import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [State, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch  = async () => {
        const res = await fetch(url);
        const data = await res.json();

        try {
            setState({
                data,
                isLoading: false,
                hasError: null
            })
        } catch (error) {
            setState({
                ...State,
                isLoading: false,
                hasError: error
            })
        }
    }
        
    useEffect(() => {
        getFetch();
    }, [url])
    

  return {
    data: State.data,
    isLoading: State.isLoading,
    hasError: State.hasError,
  }
}
