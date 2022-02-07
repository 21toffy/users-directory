import { useState } from "react";
import { Collapse, useDisclosure, Input, Box, Badge, Stack } from "@chakra-ui/react"
import usersStore from "../Store/userStore"
import { observer } from 'mobx-react'
import { json } from "stream/consumers";
// import Select from 'react-select'

import Select from 'react-select/creatable';
import { toJS } from "mobx";

import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const customStyles = {

  // option: (provided:any, state:any) => ({
  //   ...provided,
  //   borderBottom: '1px dotted pink',
  //   color: state.isSelected ? 'red' : 'blue',
  //   padding: 20,
  // }),


  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300,
    // border:'1px dotted grey',

  }),

  // singleValue: (provided:any, state:any) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // }
}




function CollapseCard(props: any) {
  const { isOpen, onToggle } = useDisclosure()
  console.log(isOpen)
  const { user, refetch } = props

  const [tagString, setTagString] = useState('');


  const [DropDownOptions, setDropDownOptions] = useState({ value: '', label: '' });


  const options: any = [
    { value: '', label: '' }
  ];



  const handleChangemy = (selectedOption: string) => {
    console.log(selectedOption)
  };



  return (
    <div>


      <div key={user.name} className='card__container'>
        <img className="profile__img" src="https://www.w3schools.com/howto/img_avatar2.png" alt="picture" />
        <div className='card__listing '>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>company name: {user.company.name}</p>
          <p>website:{user.website}</p>
        </div>
        <div>
          <h1 onClick={onToggle}>
             {!isOpen? <AddIcon /> : <MinusIcon /> } 
             </h1>
        </div>

      </div>



      <div className="card__container">
        <div></div>
        <div className="dropdown__class">
          <span className="tags__container">
            {
              user.tags.map((tag: string) =>
                <Stack ml='1' direction='row'>
                  <Badge>
                    {tag}
                  </Badge>
                </Stack>
              )}
          </span>



          <Select
            // formatCreateLabel = 
            // styles={customStyles}
            placeholder='Add a Tag'
            onChange={(e: any) => {
              usersStore.addTagToUser(user.id, e.value)
              refetch()
            }}

            onCreateOption = { 
              (e: any) => {
                console.log(e)
                usersStore.createNewTagOption(e);
                usersStore.addTagToUser( user.id ,e)
                refetch()
              }
            }
            options={toJS(usersStore.tags).map( (option:any) => ({label:option, value:option}))} />



          {/* <Input id="tag" type='text'
            placeholder="Add a tag"
            name="name"
            onKeyUp={(e: any) => {
              if (e.keyCode === 13) {
                usersStore.addTagToUser(user.id, e.target.value)
                setTagString('')
                refetch()
              }
            }}
            onChange={(e: any) => setTagString(e.target.value)} value={tagString}
            autoComplete='off'
          /> */}
        </div>
        <div></div>
      </div>



      <Collapse in={isOpen} animateOpacity>
        <Box
          p='40px'
          color='black'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
          background='white'
        >
          <div className="card__container">
            <div></div>
            <div className="dropdown__class">
              <p>Street: {user.address.street}</p>
              <p>Suite: {user.address.suite}</p>
              <p>City: {user.address.city}</p>
              <p>Zipcode:{user.address.zipcode}</p>
            </div>
            <div></div>
          </div>


        </Box>
      </Collapse>
      <br />
    </div>
  )
}


export default observer(CollapseCard);