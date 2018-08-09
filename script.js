function idCard(){
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userPhone = document.getElementById("phone").value;
    var userZip = document.getElementById("zip").value;

    document.getElementById("userName").innerHTML = userName;
    document.getElementById("userEmail").innerHTML = userEmail;
    document.getElementById("userPhone").innerHTML = userPhone;
    document.getElementById("userZip").innerHTML = userZip;
}