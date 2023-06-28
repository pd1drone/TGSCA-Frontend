
document.addEventListener("DOMContentLoaded", () => {
    var redirect = document.getElementById("enrollmentpage");
    redirect.addEventListener("click",(e) => {
        e.preventDefault();
        
        var userType = sessionStorage.getItem("UserType");
        console.log(userType);
        if (userType == "Student"){
            window.location.href = '/student/enrollment.html';
        }else{
            window.location.href = 'login.html';
        }
    });


    var redirectlogin = document.getElementById("loginpage")
    redirectlogin.addEventListener("click",(e) => {
        e.preventDefault();
        
        var userType = sessionStorage.getItem("UserType");
        console.log(userType);
        if (userType == "Student"){
            window.location.href = '/student/';
        }else{
            window.location.href = 'login.html';
        }
    });
});

