const loginEmail = document.querySelector(".inpEmail");
const loginPassword = document.querySelector(".inpPassword");
const loginForm = document.querySelector('.btnLogin');
loginForm.addEventListener("click",()=>{
    let loginUser = {
        email:loginEmail.value,
        password:loginPassword.value,
    }
    fetch("https://forme-k06z.onrender.com/api/login",{
        method:"Post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(loginUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

        console.log(data.role);
     
            
        if(data.role == "admin"){
            window.location.href = "../HTML/admin.html"
            localStorage.setItem("tokenAdmin",JSON.stringify(data.access_tocen))

         }
         else if(data.role == "student"){
             window.location.href = "../HTML/student.html"
            localStorage.setItem("tokenUser",JSON.stringify(data.access_tocen))

         }
    

        
        else{
            alert("qandaydur xatolikka uchradingiz")
        }
    })
})