var hasDownloadedResume = false;
const name = "Ethan";
var resumeDownloads = 0;
function showGreeting(name) { 
    document.getElementById("greeting").textContent=
    "Hello, my name is " + name + "! Welcome to my portfolio!";
}

const codingProjectArr = [
    ["Other1 Projects", '2027-02-13', "All Coding Projects"],   
    ["Other2 Projects", '2026-05-08', "All Gaming Projects"],
    ["Other3 Projects", '2024-01-29', "All Cooking Projects"]
];
var skillList = [""];
function downloadBubble(hasDownloadedResume){
    if(hasDownloadedResume === false){
        window['hasDownloadedResume'] = true;
        alert('Your resume is downloaded successfully!');  
    }
}

function calculateDaysFromToday(endDate) {
    // Create Date object for the current date
    let currentDate = new Date();

    // Create Date object for the end date
    let end = new Date(endDate);

    // Calculate time difference in milliseconds
    let timeDifference = end - currentDate;

    // Convert milliseconds to days and use Math.ceil to avoid fractional days
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
}

function daysUntilDeadline(project, endDate){
    let daysUntilEndDate = calculateDaysFromToday(endDate);
    if(daysUntilEndDate <= 0){
        document.getElementById(project).textContent= " Completed";
    }
    else{
        document.getElementById(project).textContent=
        "Ongoing: " + daysUntilEndDate + " Days Until Due";
    }
}

function addSkills(){
    let userResponse = document.getElementById("inputSkills").value;
    skillList.push(userResponse);
    document.getElementById("skillListTxt").textContent+= skillList[(skillList.length)-1] + " ";
    ////////////////;
}


//project due date code
daysUntilDeadline("CodingDue", '2027-12-23');

daysUntilDeadline("GamingDue", '2026-10-19');
///

//greeting code
showGreeting(name);
///
//resume download code
const button = document.getElementById("resumebtn");

button.addEventListener("click", () =>{
    alert("Download Count: " + resumeDownloads);
    downloadBubble(hasDownloadedResume);
    window.open("./resume.html", "_blank");
    resumeDownloads++;
    document.getElementById("resumebtn").textContent=
    "Download My Resume " + (resumeDownloads + 1) + " Times!";
},);

///
//skil addon prompt
//need to incorporate a list to the skills ol items
const skillButton = document.getElementById("skillButton");
skillButton.addEventListener("click", () =>{
    let userResponse = window.prompt("Please enter a skill I should learn:")
    if(userResponse !== null){
        addSkills(userResponse);
    }
});
///
for(let i = 0; i < codingProjectArr.length; i++){
    let projectHeader = document.querySelector(("#ongoingH" + i));
    let projectDeadline = calculateDaysFromToday(codingProjectArr[i][1]);
    let projectDescription = document.querySelector(("#ongoingDesc" + i));
    if(projectDeadline <= 0){
        projectHeader.textContent = codingProjectArr[i][0] + " Completed";
        projectDescription.textContent = codingProjectArr[i][2];
    }
    else{
    projectHeader.textContent = codingProjectArr[i][0] + " Due: " + projectDeadline + "days";
    projectDescription.textContent = codingProjectArr[i][2];
    }
}

