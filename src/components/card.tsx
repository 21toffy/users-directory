import React, { useEffect, useState } from 'react';
// import userstore from '../Store/userStore';
import { set, toJS } from 'mobx'
import { observer } from 'mobx-react'
import Form from './form';
import CollapseCard from './tab';
import UserStore from '../Store/userStore';
import usersStore from '../Store/userStore';

import {
    FormControl,
    Badge,
    Input
} from '@chakra-ui/react'



interface CardProps {

}

const Card: React.FC<CardProps> = (props: any) => {

    const [allUsers, setAllUsers]: any = useState([]);

    useEffect(() => {

        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const response = await UserStore.fetchUsers();
            setAllUsers(toJS(UserStore.users))
        } catch (err: any) {
            console.log(err.message)
        }
    }


    const [searchParam, setSearchParam] = useState({ name: "", tag: "" });


    return <div className=''>
        <div className='forms__container'>

            <FormControl>
                <Input id="name" type='text'
                    placeholder="Search by name"
                    name="name"
                    onKeyUp={(e: any) => {
                        const userFilterText = UserStore.filterUserByName(e.target.value)
                        setAllUsers(toJS(userFilterText))

                    }}
                    onChange={(e: any) => setSearchParam(e.target.value)} value={searchParam.name}
                    autoComplete='off'
                />
            </FormControl>

            <FormControl>
                <Input id="tag" type='text'
                    placeholder="Search by tags"
                    name="tag"
                    onKeyUp={(e: any) => {
                        const userFilterText = UserStore.filterUserByTag(e.target.value)
                        setAllUsers(toJS(userFilterText))

                    }}
                    onChange={(e: any) => setSearchParam(e.target.value)} value={searchParam.tag}
                    autoComplete='off'
                />
            </FormControl>
        </div>
        
        <div className=''>
            {
                allUsers.map((user: any) => (
                    <div key={user.id}>
                        <CollapseCard key={user.id} user={user} refetch={() => setAllUsers(toJS(UserStore.users))} />

                    </div>

                ))
            }

        </div>
    </div>;
};

export default observer(Card);
