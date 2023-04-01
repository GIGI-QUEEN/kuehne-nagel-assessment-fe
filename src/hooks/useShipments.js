import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0"
const LOCAL_API_URL = "shipments.json" //in case real API url limits will be reached
export const useShipments = () => {
  const [shipments, setShipments] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true)
      await axios
        .get(LOCAL_API_URL)
        .then((res) => {
          setShipments(res.data)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setError(err)
          setLoading(false)
        })
    }
    dataFetch()
  }, [])
  return { shipments, setShipments, loading, error }
}
