
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resumeDisplay") as HTMLDivElement;

// handling Form Submission
form.addEventListener("click", (event:Event)=>{
 event.preventDefault(); // restricting the page reload

//  collectiong information
const name = (document.getElementById("name") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const phone = (document.getElementById("phone") as HTMLInputElement).value;
const education = (document.getElementById("education") as HTMLInputElement).value;
const experience = (document.getElementById("experience") as HTMLInputElement).value;
const skills = (document.getElementById("skills") as HTMLInputElement).value;


// Generating Resume content dynamically

const resumeHtml = `
<h1><b> Dynamic Resume </b></h1>
<h2> Personal Information </h2>
<br>
<p><b>Name :</b> ${name}</p><br>
<p><b>Email :</b> ${email}</p><br>
<p><b>Phone:</b> ${phone}</p><br>

<h3><b>Education:</b></h3> <p>${education}</p><br>


<h3><b>Experience :</b></h3> 
<p>${experience}</p><br>

<h3>Skills:</h3>
 <p>${skills}</p>
`;

//  Displaying Resume Information

if(resumeDisplay){
    resumeDisplay.innerHTML = resumeHtml;
}else{
    console.error("All Fields are Required to Display")
}

})