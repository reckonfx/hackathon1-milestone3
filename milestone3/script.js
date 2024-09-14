var form = document.getElementById("resumeForm");
var resumeDisplay = document.getElementById("resumeDisplay");
// handling Form Submission
form.addEventListener("click", function (event) {
    event.preventDefault(); // restricting the page reload
    //  collectiong information
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generating Resume content dynamically
    var resumeHtml = "\n<h1><b> Dynamic Resume </b></h1>\n<h2> Personal Information </h2>\n<br>\n<p><b>Name :</b> ".concat(name, "</p><br>\n<p><b>Email :</b> ").concat(email, "</p><br>\n<p><b>Phone:</b> ").concat(phone, "</p><br>\n\n<h3><b>Education:</b></h3> <p>").concat(education, "</p><br>\n\n\n<h3><b>Experience :</b></h3> \n<p>").concat(experience, "</p><br>\n\n<h3>Skills:</h3>\n <p>").concat(skills, "</p>\n");
    //  Displaying Resume Information
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error("All Fields are Required to Display");
    }
});
