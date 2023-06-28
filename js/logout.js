
document.addEventListener("DOMContentLoaded", () => {
    var logoutSession = document.querySelector('li a[href="/index.html"].smoothScroll');
    logoutSession.addEventListener("click",function(){
        sessionStorage.clear();
        window.location.href = '/';
    });
});

