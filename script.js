var toggleButton = document.getElementById('work-more-btn');
var workContent = document.getElementById('work-more-content');
if (toggleButton && workContent) {
    toggleButton.addEventListener('click', function () {
        if (workContent.style.display === 'none') {
            workContent.style.display = 'block';
        }
        else {
            workContent.style.display = 'none';
        }
    });
}
var ToggleButton = document.getElementById('faq-more-btn');
var faqContent = document.getElementById('faq-more-content');
if (ToggleButton && faqContent) {
    ToggleButton.addEventListener('click', function () {
        if (faqContent.style.display === 'none') {
            faqContent.style.display = 'block';
        }
        else {
            faqContent.style.display = 'none';
        }
    });
}
var Togglebutton = document.getElementById('resume-more-btn');
var ResumeContent = document.getElementById('resume-more-content');
if (Togglebutton && ResumeContent) {
    Togglebutton.addEventListener('click', function () {
        if (ResumeContent.style.display === 'none') {
            ResumeContent.style.display = 'block';
        }
        else {
            ResumeContent.style.display = 'none';
        }
    });
}
var form = document.getElementById("form");
var resumeDisplayElement = document.getElementById("displayed-resume");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("pdf-download");
// Form fields
var usernameInput = document.getElementById("username");
var nameInput = document.getElementById("name");
var contactNoInput = document.getElementById("contact-no");
var emailInput = document.getElementById("email");
var dobInput = document.getElementById("dob");
var addressInput = document.getElementById("address");
var degreeInput = document.getElementById("degree");
var institutionInput = document.getElementById("institution");
var yearInput = document.getElementById("year");
var jobTitleInput = document.getElementById("job-title");
var companyInput = document.getElementById("company");
var durationInput = document.getElementById("duration");
var skillsInput = document.getElementById("skills");
// Education and Experience Lists
var educationList = document.getElementById("education-list");
var experienceList = document.getElementById("experience-list");
var skillsList = document.getElementById("skills-list");
// Store the arrays for education, experience, and skills
var educationData = [];
var experienceData = [];
var skillsData = [];
// Add Education Function
function addEducation() {
    var degree = degreeInput.value.trim();
    var institution = institutionInput.value.trim();
    var year = yearInput.value.trim();
    if (degree && institution && year) {
        educationData.push("".concat(degree, " - ").concat(institution, " (").concat(year, ")"));
        renderEducationList();
        degreeInput.value = "";
        institutionInput.value = "";
        yearInput.value = "";
    }
    else {
        alert("Please fill in all education fields.");
    }
}
// Render Education List
function renderEducationList() {
    educationList.innerHTML = "";
    educationData.forEach(function (edu, index) {
        var li = document.createElement("li");
        li.textContent = edu;
        educationList.appendChild(li);
    });
}
// Add Experience Function
function addExperience() {
    var jobTitle = jobTitleInput.value.trim();
    var company = companyInput.value.trim();
    var duration = durationInput.value.trim();
    if (jobTitle && company && duration) {
        experienceData.push("".concat(jobTitle, " at ").concat(company, " (").concat(duration, ")"));
        renderExperienceList();
        jobTitleInput.value = "";
        companyInput.value = "";
        durationInput.value = "";
    }
    else {
        alert("Please fill in all experience fields.");
    }
}
// Render Experience List
function renderExperienceList() {
    experienceList.innerHTML = "";
    experienceData.forEach(function (exp, index) {
        var li = document.createElement("li");
        li.textContent = exp;
        experienceList.appendChild(li);
    });
}
// Add Skill Function
function addSkill() {
    var skill = skillsInput.value.trim();
    if (skill) {
        skillsData.push(skill);
        renderSkillsList();
        skillsInput.value = "";
    }
    else {
        alert("Please enter a skill.");
    }
}
// Render Skills List
function renderSkillsList() {
    skillsList.innerHTML = "";
    skillsData.forEach(function (skill, index) {
        var li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}
// Handle Form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload on form submit
    var username = usernameInput.value;
    var name = nameInput.value;
    var contactno = contactNoInput.value;
    var email = emailInput.value;
    var dob = dobInput.value;
    var address = addressInput.value;
    // Save form data in localStorage with username as key
    var resumeData = {
        username: username,
        name: name,
        contactno: contactno,
        email: email,
        dob: dob,
        address: address,
        education: educationData,
        experience: experienceData,
        skills: skillsData,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Dynamically generated resume HTML
    var HtmlResume = "\n    <form>\n    <h2><b>Resume</b></h2>\n    <fieldset>\n\n    <legend>PERSONAL INFORMATION</legend>\n\n    <ul>\n    <li><u>Name:</u>  \n    <span contenteditable=\"true\"> ".concat(name, "</span>\n    </li>\n    <li><u>Contact:</u>  \n    <span contenteditable=\"true\"> ").concat(contactno, "</span>\n    </li>\n    <li><u>Email:</u>  \n    <span contenteditable=\"true\"> ").concat(email, "</span\n    ></li>\n    <li><u>Date of Birth:</u> \n     <span contenteditable=\"true\"> ").concat(dob, "</span>\n     </li>\n    <li><u>Address:</u>  \n    <span contenteditable=\"true\"> ").concat(address, "</span>\n    </li>\n    </ul>\n\n    </fieldset>\n\n    <fieldset>\n    \n    <legend>EDUCATION</legend>\n    <ul>\n        ").concat(educationData.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(""), "\n    </ul>\n\n    </fieldset>\n\n    </fieldset>\n\n    <fieldset>\n\n    <legend>EXPERIENCE</legend>\n    <ul>\n        ").concat(experienceData.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(""), "\n    </ul>\n    \n    </fieldset>\n\n    </fieldset>\n\n    <fieldset>\n\n    <legend>SKILLS</legend>\n    <ul>\n        ").concat(skillsData.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n    </ul>\n\n    </fieldset>\n\n    </form>\n    ");
    // Display the generated resume
    resumeDisplayElement.innerHTML = HtmlResume;
    // Generate a shareable URL with username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF Download
downloadPdfButton.addEventListener("click", function () {
    window.print();
});
// Prefill the form based on username in the URL
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            usernameInput.value = username;
            nameInput.value = resumeData.name;
            contactNoInput.value = resumeData.contactno;
            emailInput.value = resumeData.email;
            dobInput.value = resumeData.dob;
            addressInput.value = resumeData.address;
            educationData = resumeData.education || [];
            experienceData = resumeData.experience || [];
            skillsData = resumeData.skills || [];
            renderEducationList();
            renderExperienceList();
            renderSkillsList();
        }
    }
});
