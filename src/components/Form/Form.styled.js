import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
`
export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: auto;   
    color: #434455;
`

export const StyledField = styled(Field)`
      
    padding: 8px 16px;
    width: 398px;
    height: 40px;
    outline: transparent;
    border: 1px solid #8e8f99;
    border-radius: 4px;    
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    

`
export const AddContact = styled.button`
    font-weight: 500; 
    width: 150px;
    height: 26px;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #fff;
    background-color: #31d0aa;
    transition: box-shadow
`