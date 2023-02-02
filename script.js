// function validate() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;

//     let invalid = false
//     let text = "Please enter ";
//     if (name == null || name == "") {
//         text = text+"Name,";
//         invalid = true;
//     }
//     if (email == null || email == "") {
//         text = text+"Email,";
//         invalid = true;
//     }
//     if (phone == null || phone == "") {
//         text = text+"Phone,";
//         invalid = true;
//     }else if(phone.length <10){
//         alert("Your contact number must contain 10 digits!");
//         return false;
//     }

//     if(invalid){
//         alert(text);
//     }else{
//         alert("Thanks for joining! Our team will call back you very soon!");
//         return true;
//     }
//     return false
// }