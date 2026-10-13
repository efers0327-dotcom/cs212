const hasDownloadedResume = false;


function showGreeting(name) { 
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
};



// 1. Select the download button using its ID
const downloadButton = document.getElementById('resumebtn');

// 2. Add the click event listener to trigger the alert
if(hasDownloadedResume == false){
    downloadButton.addEventListener('click', () => {
        alert('Your resume is downloaded successfully!');
        window.location.href = "./resume.html";
        hasDownloadedResume = true;
})};


function daysUntilDeadline(deadlineDate) {
    const today = new Date();
    const deadline = new Date(deadlineDate);
    
    today.setHours(0, 0, 0, 0);
    deadline.setHours(0, 0, 0, 0);
    
    
    const differenceInMs = deadline - today;
    
   
    const daysLeft = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    
    return daysLeft;
}


