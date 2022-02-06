import { timeStamp } from "console";
import { observable, action, computed, reaction, makeAutoObservable, runInAction, autorun, toJS, makeObservable } from "mobx"
import { createContext } from "react"

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;

  },
  tags: string[]
}



class UserStore {
  @observable users: User[] = [];
  loading = false



  constructor() {
    makeAutoObservable(this);
  }

  @action
  filterUserByName(param: string) {
    const filteredResult = this.users.filter(user =>
      user.name.toLowerCase().includes(param.toLowerCase())   
    )
    return filteredResult
  }


  @action
  filterUserByTag(param: string) {
    console.log(param)
    const filteredResult = this.users.filter(user =>
      user.tags.includes(param.toLowerCase())   
    )
    return filteredResult
  }


  @action
  addTagToUser(id:number, tag:string) {
    if(this.users.some( (user)=> user.id===id)){
      const newUsers = this.users.map((user)=> user.id===id ? {...user, tags:[...user.tags, tag.toLowerCase()] }:user )
      this.users = newUsers
    }
  } 



  logData() {
    console.log('logg data')
  }




  @action
  async fetchUsers() {
    try {
      this.loading = true
      const response = await fetchUsersjson('https://jsonplaceholder.typicode.com/users');
      const mappedResponse = response.map( (user:any) => ({...user, tags:[]}))
      this.users = mappedResponse
      this.loading = false

    } catch (error) {
      this.loading = false
      console.log(error)
    }
  }
}

const usersStore = new UserStore();

autorun(() => {
  console.log('hello ', toJS(usersStore.users))
})


const fetchUsersjson = async (url: any) => {
  try {
    const response = await fetch(url);
    // this.users = response;
    return response.json()

  } catch (error: any) {
    throw new Error(error.message)
    // console.log(error)
  }
}


export default usersStore;