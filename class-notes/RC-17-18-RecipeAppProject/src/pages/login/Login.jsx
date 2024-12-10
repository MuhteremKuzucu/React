
import { RecipeContext } from "../../context/RecipeProvider";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";

import meal from "../../assets/meal.svg"

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

  // Consume işlemi
  const {name,setName,password,setPassword}=useContext(RecipeContext)
  /* ---------------- Navigate için ------------------------ */
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    // Varsa database yoksa o görevi gören bir yapıya kayıt işlemi, Biz local storage kullanıyoruz
    localStorage.setItem("username",name)
    localStorage.setItem("password",password)
    navigate("/home")
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header> {"<CLARUSWAY/>"}<span>Recipe</span></Header>
        <StyledForm onSubmit={handleSubmit} >
          <StyledInput type="text" placeholder="username" onChange={(e)=>setName(e.target.value)}  required />
          <StyledInput type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
