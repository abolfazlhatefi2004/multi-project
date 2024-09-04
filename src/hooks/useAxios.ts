import axios from "axios"
import { useEffect, useState } from "react"
import useLanguge from "./useLanguage"




const useAxios = <T>(dataUrl: string) => {
  const [data, setData] = useState<T | {}>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const {isEnglish} = useLanguge()

  useEffect(() => {
    let isMounted: boolean = true
    const source = axios.CancelToken.source()

    const getData = async (url: string) => {
      setIsLoading(true)

      try {
        const response = await axios.get<T>(url, {
          cancelToken: source.token
        })
        if (isMounted) {
          setData(response.data)
          setFetchError(null)
        }
      } catch (error) {
        if (isLoading) {
          setData({})
          setFetchError((error as Error).message)
        }

      } finally {
        isMounted && setIsLoading(false)
      }
    }
    // IIFE
    (async () => await getData(dataUrl))()


    const cleanUp = () => {
      isMounted = false
      source.cancel(`${isEnglish ? 'loading...' : 'درحال بارگذاری...'}`)
    }

    return cleanUp

  }, [dataUrl])


  type ReturnType = [
    T | {},
    boolean,
    string | null,
  ]

  return [
    data,
    isLoading,
    fetchError
  ] as ReturnType

}

export default useAxios

