import { useState } from "react";
import { Collapse, useDisclosure, Input, Box, Badge, Stack } from "@chakra-ui/react"
import usersStore from "../Store/userStore"
import { observer } from 'mobx-react'
import { json } from "stream/consumers";

function CollapseCard(props: any) {
  const { isOpen, onToggle } = useDisclosure()
  const { user, refetch } = props

  const [tagString, setTagString] = useState('');


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
          
          {
            user.tags.map((tag: string) =>
              <Stack direction='row'>
                <Badge>
                  {tag}
                </Badge>
              </Stack>
            )
          }


        </div>
        <div>
          <h1 onClick={onToggle}>-</h1>
        </div>

      </div>




      <Input id="tag" type='text'
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
      />


      {/* <Button onClick={onToggle}>Click Me</Button> */}
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


          {/* <Lorem count={1} /> */}
        </Box>
      </Collapse>
      <br />
    </div>
  )
}


export default observer(CollapseCard);