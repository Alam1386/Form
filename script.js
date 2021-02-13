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
      field.parentElement.append(p);
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
  let lname = document.querySelector('#lname'); 
  if(lname.value === ''){
    failures.push({
      inputID: 'lname',
      errorMSG: 'Please enter your last name.'
    })
  }
  let email = document.querySelector('#email'); 
  if(email.value === ""){
    failures.push({
      inputID: 'email',
      errorMSG: 'Please type your email address.'
    })
  }
  let password = document.querySelector('#password'); 
  if(password.value ==="" || password.value.length < 5){
    failures.push({
      inputID: 'password',
      errorMSG: 'Please enter your password. Your password must be more than 5 char'
    })
  }
  let age = document.querySelector('#age'); 
  if(age.selectedIndex === 0) {
    failures.push({
      inputID: 'age',
      errorMSG: 'Your age should be more than 20 years'
    })
  }
  let alive = document.querySelector('#alive');
  if(!alive.checked) {
    failures.push({
      inputID: 'alive',
      errorMSG: 'Not checked!'
    })
  }
  return failures; 
 }
window.addEventListener('DOMContentLoaded', init); 