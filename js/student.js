
//sessionStorage.setItem("UserType", "Admin");
var userType = sessionStorage.getItem("UserType");
console.log(userType);

if (userType != 'Student'){
    window.location.href = '/access-denied.html';
}
