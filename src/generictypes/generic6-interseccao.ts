export function uniaoFn<T,U>(obj1:T,obj2:U): T & U{
  return {...obj1, ...obj2}
  // ou
  // return Object.assign({},obj1,obj2)
}
const obj1 = {macarena:'cosa buena'};
const obj2 = {snake: 'metal gear'};
const uniao = uniaoFn(obj1,obj2);
console.log(uniao)

