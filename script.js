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
    document.querySelector('#form').submit(); 
    console.log("Thank you for submitting your data!"); 
  } else {
    fails.forEach(obj => {
      console.log("object", obj); 
      let p = document.createElement('p');
      let field = document.getElementById(obj.inputID); 
      console.log("Child nodes are; ",  field)
      let x = field.parentElement.append(p);
      p.innerHTML = obj.errorMSG; 
      p.classList.add('error');
      // field.parentElement.setAttribute('data-er', obj.errorMSG);
    })
  }
}
 const validate = () =>{
  let fname = document.querySelector('#fname'); 
  let failures = []; 
  if(fname.value ===''){
    failures.push({
      inputID: 'fname',
      errorMSG: 'Please add your name.'
    })
  }
  return failures; 
 }
window.addEventListener('DOMContentLoaded', init); 