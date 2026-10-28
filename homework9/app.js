
//variables
var hasDownloadedResume = false;
const name = "Ethan";
var resumeDownloads = 0;
function showGreeting(name) { 
    document.getElementById("greeting").textContent=
    "Hello, my name is " + name + "! Welcome to my portfolio!";
}
let navbarItems = document.querySelectorAll('.navbar-brand');
$(".hider").on("click", function(){
    $(navbarItems).slideToggle();
    
});


const allProjectsArr = [
    {title: 'Movie Ranking Project',
    description: 'Something about the project1',
    deadline: new Date("07/06/2028"),
    imageURL: './assets/images/movie-ranking.png'},
    {title: 'Birthday Invite Project',
    description: 'Something about the project2',
    deadline: new Date("12/14/2026"),
    imageURL: './assets/images/birthday-invite.png'},
    {title: 'Gaming Projects',
    description: 'Something about the project3',
    deadline: new Date("12/14/2027"),
    imageURL: './assets/images/steam.jpg'},
    {title: 'Coding Projects',
    description: 'Something about the project4',
    deadline: new Date("09/14/2027"),
    imageURL: './assets/images/coding.jpg'},
    {title: 'Cooking Projects',
    description: 'Something about the project5',
    deadline: new Date("12/9/2026"),
    imageURL: './assets/images/kitchen.jpg'},
    {title: 'Ongoing Coding Projects',
    description: 'Something about the project6',
    deadline: new Date("12/09/2027"),
    imageURL: 'newspaper.jpg'},
    {title: 'Ongoing Gaming Projects',
    description: 'Something about the project7',
    deadline: new Date("3/27/2027"),
    imageURL: './assets/images/counter-strike.jpg'},
];

















const codingProjectArr = [
    ["WEEK 8 ONLY", '2027-02-13', "All Coding Projects"],   
    ["WEEK 8 ONLY", '2026-05-08', "All Gaming Projects"],
    ["WEEK 8 ONLY", '2024-01-29', "All Cooking Projects"]
];
var skillList = [""];
var skillList2 = [""];


//functions
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

    button.addEventListener("click", function (){
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
skillButton.addEventListener("click", function () {
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

//keypress

$("#dynamicInput").on('keydown', function dynamicEnter(event){
    let userInput = $(this).val();
    let i = 0;
    switch(event.key){
    
        case 'Enter':
             i++;
             $(`<div id='newli${i} style='display: none;'><li>${userInput}<button class='dynamicEdit'>Edit</button><button class='dynamicDelete'>Delete</button></li></div>`).hide().appendTo("#dynamicList").show('slow');
            break;
        case 'Escape':
            $(this).val('');

            break;
        default:
        

        break;
    }
});
$("#dynamicList, .dynamicDelete").on('click', function() {
    $("li").remove();
});
$("#dynamicList, .dynamicEdit").on('click', function() {
    
});