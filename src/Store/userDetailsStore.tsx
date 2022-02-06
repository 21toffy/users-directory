// import { observable, action, computed, reaction, makeAutoObservable } from "mobx"
// import { createContext } from "react"

// export interface User {
//     id: string;
//     name: string;
//     username: string;
//     email: string;
//     address: {
//         street: string;
//         username: string;
//         suite: string;
//         city: string;
//         zipcode: string;
//         geo: {
//             lat: string;
//             lng: string;
//         }
//     };
//     phone: string;
//     website: string;
//     company: {
//         name: string;
//         catchPhrase: string;
//         bs: string;

//     }
//   }



// class UserStore {
  
//   @observable users: User[] = [];
//   tag: string = "";
//   @observable filter = ""
//   @observable excludeColumns = ["address", "username", "name"];




//   @computed get filtered() {
//       let filteredList = this.users.filter(item =>
//         item.name.toLowerCase().includes("Leanne")
//       );

//       if (filteredList.length) return filteredList;
//       return this.users;
//     } 

//   constructor() {
//     makeAutoObservable(this);

//   }

//   load(url: string) {
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => (this.users = json))
//       .catch((error) => new Error(error.message))
//   }

// }

// const userstore = new UserStore()

// export default userstore;
// //   export default createContext(new TodoStore())
































// import { action, autorun, makeObservable, observable } from "mobx";

// export interface User {
//   id: string;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     username: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     }
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;

//   }
// }


// class UserStore {

//   constructor() {
//     makeObservable(this, {
//       users: observable,
//       // filterUserByName: action,
//       getAllUsers: action,

//     })
//     // autorun(this.logUserStoreDetails)
//   }


//   users: User[] = [];
//   // users = [];


//   getAllUsers(url: string) {
//     fetch(url)
//       .then((res) => res.json())
//       .then((users) => (this.users = users))
//       // .then((users) => console.log(users))

//       // .catch((error) => new Error(error.message))
//   }

//   // filterUserByName(param: string) {
//   //   this.users.filter(user =>
//   //     Object.keys(user).some(name => user.name.toLowerCase().includes(param.toLowerCase())));
//   // }





//   logUserStoreDetails() {
//     console.log({ users: this.users })
//   }
// }

// const userstore = new UserStore()

// export default userstore;



import React from 'react';
import PropTypes from 'prop-types';

const userDetailsStore = () => {
  return <div></div>;
};

userDetailsStore.propTypes = {};

export default userDetailsStore;
