    const registerForm = document.querySelector('.btnRegister');
const resgisterUsername = document.querySelector(".inpName");
const registerEmail = document.querySelector(".inpEmail");
const registerPassword = document.querySelector(".inpPassword");
const registerCourse = document.querySelector(".inpCourse");
const courseDirection= document.querySelector(".inpDirection");
const courseLanguage= document.querySelector(".inpLanguage");


registerForm.addEventListener('click', async (e) => {
    e.preventDefault();

    let user = {
        fullname:resgisterUsername.value,
        email:registerEmail.value,
        password:registerPassword.value,
       course:registerCourse.value,
        course_direction:courseDirection.value,
        technology:courseLanguage.value,
    }
fetch("https://forme-k06z.onrender.com/api/register",{
method:"POST",
headers:{
   "Content-type":"application/json"
},
body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    
   if(data){

    window.location.href = "../HTML/login.html"
   }
    
})
  

})