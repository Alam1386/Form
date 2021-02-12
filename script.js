const init =()=>{
  document.querySelector('#cancel').addEventListener('click', cancel);
  document.querySelector('#send').addEventListener('click', send); 
}
const cancel = (e) =>{
  e.preventDefault(); 
  document.querySelector('#form').reset(); 
}
const send=(e)=>{
  e.preventDefault(); 
  let fails = validate(); 
  if(fails.length === 0){
    console.log("Type some thing. ")
  }
}
 const validate = () =>{
  let fname = document.querySelector('#fname'); 
  let failure = []; 
  if(fname.value ===''){
    failure.push({
      input: 'input',
      msg: 'Please add your name.'
    })
  }
  return failure; 
 }
window.addEventListener('DOMContentLoaded', init); 