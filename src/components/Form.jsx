import { Box ,InputBase,styled,Button} from '@mui/material'
import { useState } from 'react';
import { getWeather } from '../sevices/api';
const Container = styled(Box)({
    background: '#445A6F',
    padding: 10
});
const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18
});
const GetButton =styled(Button)({
    background:'#e67e22'
})
const Form= ({setResult})=> {
    const [data,setData]=useState({city :'', country :''})
    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    //   console.log(e.target.name,e.target.value);
    }
   const getWeatherInfo= async()=>{
      let response=  await getWeather(data.city,data.country);
      setResult(response);
   }
    return(
        <Container>
            <Input
            placeholder="city"
            onChange={(e)=> handleChange(e)} 
            name="city"/>
            <Input
            placeholder="country"
            onChange={(e)=>handleChange(e) }
            name="country"/>
            <GetButton variant="contained"
             onClick={()=>getWeatherInfo()}    >Get Weather</GetButton>
        </Container>   )
}
export default Form;