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
  @observable tags: any = ['React', 'hello'];
  loading = false



  constructor() {
    makeAutoObservable(this);
  }


  @action
  filterUserByName(param: string) {
    if(param.trim()===""){
      return this.users
    }
    const filteredResult = this.users.filter(user =>
      user.name.toLowerCase().includes(param.toLowerCase())   
    )
    return filteredResult
  }



  @action
  createNewTagOption(tagOption: string){
    this.tags = [...this.tags, tagOption]
  }



  @action
  filterUserByTag(param: string) {
    // console.log(param)
    if(param.trim()===""){
      return this.users
    }const filteredResult = this.users.map(user =>{
      const isIn  = user.tags.some((option)=> (option.toLowerCase().includes(param.toLowerCase())))  
      return isIn ? user : null 
    }
    
    ).filter(user=>(user))
    
    console.log("filtered result",filteredResult)
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
  }
}


export default usersStore;