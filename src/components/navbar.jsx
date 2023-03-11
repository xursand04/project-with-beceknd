import { Box, Button } from "@mui/material"
import { NavLink,useLocation} from "react-router-dom"



const  Navbar = () => {
    const location = useLocation()
    return(
        <>
        <Box sx={{background:'gray',display:'flex',justifyContent:'space-evenly',padding:'20px 0'}}>
            <NavLink   to='/' style={({isActive})=>{
                    return isActive ? {color:'black',fontSize:'22px'} : {color:'white',fontSize:'22px'}}}
                    >Home</NavLink>
            <NavLink  to='/users' style={({isActive})=>{
                    return isActive ? {color:'black',fontSize:'22px'} : {color:'white',fontSize:'22px'}}}
                    >Users</NavLink>
            <NavLink  to='/about' style={({isActive})=>{
                    return isActive ? {color:'black',fontSize:'22px'} : {color:'white',fontSize:'22px'}}}
                    >About</NavLink>
            <NavLink  to='/contact' style={({isActive})=>{
                    return isActive ? {color:'black',fontSize:'22px'} : {color:'white',fontSize:'22px'}}}
                    >Contact</NavLink>
                    {location.pathname === '/' && <Button variant="contained" >Login</Button> }
        </Box>
        </>
    )
}
export default Navbar