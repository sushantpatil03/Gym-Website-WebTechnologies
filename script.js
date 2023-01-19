function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let text = "Please enter ";
    if (name == null || name == "") {
        text = text+"name,";
    }
    if (email == null || email == "") {
        text = text+"email,";
    }
    if (phone == null || phone == "") {
        text = text+"phone,";
    }

    alert(text);
    return false
}