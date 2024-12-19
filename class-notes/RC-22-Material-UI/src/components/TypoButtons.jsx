import React from 'react'
import {Box, Button, Container, Typography} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ background: "red" }}>
        {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}
        <Typography variant="h1" component="h2">
          h1. Heading
        </Typography>
        <Typography variant="h1">h1. Heading</Typography>
        <Typography variant="h6">h6. Heading</Typography>

        {/* body1: p etiketidir,body1=16px daha büyük fontsize ,body2=14px daha küçük font lu.  button=span etiketidir+büyük harf */}
        <Typography variant="body1">
          bu bir p etiketidir Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officiis ipsum autem cum sapiente deleniti iure optio nihil,
          nulla amet alias porro dolore incidunt totam quisquam iusto blanditiis
          eaque eos similique.
        </Typography>
        <Typography variant="body2">
          bu bir p etiketidir Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officiis ipsum autem cum sapiente deleniti iure optio nihil,
          nulla amet alias porro dolore incidunt totam quisquam iusto blanditiis
          eaque eos similique.
        </Typography>

        <Typography variant="button"> bu bir span etiketidir</Typography>
        <Typography variant="button"> bu bir span etiketidir</Typography>
      </Container>

      <Box sx={{marginTop:4, display:"flex",  flexDirection:"column",gap:2}}>
        
        <Button endIcon={<DeleteForeverIcon/>}  color="success" sx={{color:"aqua"}}    variant="contained">DELETE</Button>
       
        <Button color="error" variant="outlined" startIcon={<SendIcon/>}>SEND</Button>
      </Box>
    </div>
  );
}

export default TypoButtons