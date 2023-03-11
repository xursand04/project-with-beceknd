import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const SelectedUser = () => {
  const [newdata, setnewData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((items) => setnewData(items))
  }, [])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/`)
      .then((res) => res.json())
      .then((items) =>(items))
  }, [])
  return (
    <div>
      <Box sx={{ textAlign: 'center' }}>
        <img src={newdata.url} alt='' width={'600px'} />
        <h1>{newdata.title}</h1>
      </Box>
    </div>
  )
}

export default SelectedUser