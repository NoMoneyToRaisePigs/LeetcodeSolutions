import { api } from './api.js'


// const data = await api.get('users')

// console.log(data)


const xxx = await api.post('users', {
   "name": "gf",
   "password": "password1",
   "profession": "king",
   "id": 1
})
 
console.log(xxx)