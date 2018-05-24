var Nightmare = require('nightmare')

var google = async()=>{
try{
var nightmare = new Nightmare({show:true,typeInterval:50})
await nightmare.goto('http://192.168.0.17:3000/login')
.type('#name','Ian Macharia')
.type('#password','paramecium')
.click('#login').evaluate(()=>{

})
}catch(e){
console.error(e)
}
}

google()
