import axios from "axios"
import { useCallback, useEffect, useState } from "react"

const getData = async <T>(endPoint: string) => {
  return await axios.get<T>(endPoint)
}

/** Custom hook to call queries with the help of end-points */
const useQuery = <T>(endPoint: string) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>()

  const query = useCallback(() => {
    getData<T>(endPoint)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
      })

    setLoading(false)
  }, [endPoint])

  useEffect(() => {
    query()
  }, [query])

  return { data, loading, error }
}

export default useQuery
