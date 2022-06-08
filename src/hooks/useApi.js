import axios from "axios"
import { useEffect, useState } from "react"

const useApi = () => {
    const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(res => setUser(res.data.results[0]))
      .catch(err => console.log(err))
  }, [])

  const getRandomUser = () => {
    axios.get('https://randomuser.me/api/')
      .then(res => setUser(res.data.results[0]))
      .catch(err => console.log(err))
  }
  return {user, getRandomUser}
}

export default useApi