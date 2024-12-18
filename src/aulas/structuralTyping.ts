type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = {name: string, password: string};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.name === sentValue.name && user.password === sentValue.password
};

const user1 = { name: 'post', password: 'hahaha'}

console.log(verifyUser(user1,{name: 'post', password: 'hahaha'})) // true
console.log(verifyUser(user1,{name: 'alelek', password: 'zzz'})) // false
