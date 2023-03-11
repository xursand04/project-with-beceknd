import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
    const [ photo , setPhoto ] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((items) => setPhoto(items))
    },[])
    console.log(photo);
    return(
        <>
           <Typography sx={{textAlign:'center'}} variant="h1">Photo List</Typography>
        <Box sx={{display:'flex',flexWrap:'wrap',gap:'160px'}}>
            { photo.slice(0,9).map((value)=> {
                return(
                    <Link key={value.id}  to={`/users/${value.id}`}>
                        <Box sx={{border:'1px solid red',width:'500px',height:'600px',marginTop:'50px',marginLeft:'7%'}}>
                            <img src={value.url} width={500} alt="" />
                            <Typography sx={{marginTop:'20px'}}>{value.title}</Typography>
                        </Box>

                    </Link>
                )
            }) }
       </Box>
        </>
    )
}
export default User