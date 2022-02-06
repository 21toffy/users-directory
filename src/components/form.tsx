import React from 'react';
import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

  
  const Form = ({formName, labelName, placeholder, value, onChange}: any) => {


    return(
            <FormControl>
                <FormLabel htmlFor={formName}>{labelName}</FormLabel>
                <Input id={formName} type='text' placeholder={placeholder} name={formName} onChange={onChange} value={value}/>
            </FormControl>
        )

  };
  
  export default Form;
  