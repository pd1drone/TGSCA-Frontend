
//sessionStorage.setItem("UserType", "Student");
var userType = sessionStorage.getItem("UserType");
console.log(userType);

if (userType != 'Admin'){
    window.location.href = '/access-denied.html';
}
