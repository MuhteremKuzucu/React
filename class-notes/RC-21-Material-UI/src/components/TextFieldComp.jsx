import { Avatar, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const TextFieldComp = () => {

  let errorr=true;

  const [goster,setGoster]=useState(false)

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <div>
        {/* inputa tıklandığında defaultta (variant="outlined") label, input outline çizgisinde gelir, variant=filled diyerek label ı input alanında tutabiliriz */}
       {/* variant="filled"=required yazısı kutunun border ın içinde */}
       {/* margin="dense"=  az bir margin verir */}
       <TextField
        id="outlined-basic"
        label="Required"
        variant="outlined"
        defaultValue="Hello World"
        margin="dense"
      />
        {/* errorr değişkeni normalde yanlış email-password girildiğinde true olur, ona göre altta border kırmızı, helperTextte de yanlış girdiniz görünür. biz burada şimdilik manuel errorr değişkeni yaptık */}    
        <TextField
          error={errorr}
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText={errorr===true && "yanlış girdiniz" }
          fullWidth
          margin="dense"
        />


        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

       <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={goster ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label= "hide the password" edge="end"
                onClick={()=>setGoster(!goster)}
                >
                {goster ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                 
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button sx={{gap:3}} variant="contained"
      fullWidth
      color="error">
        SUBMİT
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Button>
    </div>
  )
}

export default TextFieldComp