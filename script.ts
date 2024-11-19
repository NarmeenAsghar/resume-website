
const toggleButton = document.getElementById('work-more-btn') as HTMLElement | null;
const workContent = document.getElementById('work-more-content') as HTMLElement | null;

if (toggleButton && workContent) {
    toggleButton.addEventListener('click', () => {

        if (workContent.style.display === 'none') {
            workContent.style.display = 'block';  
        } else {
            workContent.style.display = 'none';  
        }
    });
}

const ToggleButton = document.getElementById('faq-more-btn') as HTMLElement | null;
const faqContent = document.getElementById('faq-more-content') as HTMLElement | null;

if (ToggleButton && faqContent) {
    ToggleButton.addEventListener('click', () => {

        if (faqContent.style.display === 'none') {
            faqContent.style.display = 'block';  
        } else {
            faqContent.style.display = 'none';  
        }
    });
}

const Togglebutton = document.getElementById('resume-more-btn') as HTMLElement | null;
const ResumeContent = document.getElementById('resume-more-content') as HTMLElement | null;

if (Togglebutton && ResumeContent) {
    Togglebutton.addEventListener('click', () => {

        if (ResumeContent.style.display === 'none') {
            ResumeContent.style.display = 'block';  
        } else {
            ResumeContent.style.display = 'none';  
        }
    });
}

const form = document.getElementById("form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "displayed-resume"
) as HTMLDivElement;
const shareableLinkContainer = document.getElementById(
  "shareable-link-container"
) as HTMLDivElement;
const shareableLinkElement = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement;
const downloadPdfButton = document.getElementById(
  "pdf-download"
) as HTMLButtonElement;

// Form fields
const usernameInput = document.getElementById("username") as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const contactNoInput = document.getElementById(
  "contact-no"
) as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const dobInput = document.getElementById("dob") as HTMLInputElement;
const addressInput = document.getElementById("address") as HTMLTextAreaElement;
const degreeInput = document.getElementById("degree") as HTMLInputElement;
const institutionInput = document.getElementById(
  "institution"
) as HTMLInputElement;
const yearInput = document.getElementById("year") as HTMLInputElement;
const jobTitleInput = document.getElementById("job-title") as HTMLInputElement;
const companyInput = document.getElementById("company") as HTMLInputElement;
const durationInput = document.getElementById("duration") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;

// Education and Experience Lists
const educationList = document.getElementById(
  "education-list"
) as HTMLUListElement;
const experienceList = document.getElementById(
  "experience-list"
) as HTMLUListElement;
const skillsList = document.getElementById("skills-list") as HTMLUListElement;

// Store the arrays for education, experience, and skills
let educationData: string[] = [];
let experienceData: string[] = [];
let skillsData: string[] = [];

// Add Education Function
function addEducation() {
  const degree = degreeInput.value.trim();
  const institution = institutionInput.value.trim();
  const year = yearInput.value.trim();

  if (degree && institution && year) {
    educationData.push(`${degree} - ${institution} (${year})`);
    renderEducationList();
    degreeInput.value = "";
    institutionInput.value = "";
    yearInput.value = "";
  } else {
    alert("Please fill in all education fields.");
  }
}

// Render Education List
function renderEducationList() {
  educationList.innerHTML = "";
  educationData.forEach((edu, index) => {
    const li = document.createElement("li");
    li.textContent = edu;
    educationList.appendChild(li);
  });
}

// Add Experience Function
function addExperience() {
  const jobTitle = jobTitleInput.value.trim();
  const company = companyInput.value.trim();
  const duration = durationInput.value.trim();

  if (jobTitle && company && duration) {
    experienceData.push(`${jobTitle} at ${company} (${duration})`);
    renderExperienceList();
    jobTitleInput.value = "";
    companyInput.value = "";
    durationInput.value = "";
  } else {
    alert("Please fill in all experience fields.");
  }
}

// Render Experience List
function renderExperienceList() {
  experienceList.innerHTML = "";
  experienceData.forEach((exp, index) => {
    const li = document.createElement("li");
    li.textContent = exp;
    experienceList.appendChild(li);
  });
}

// Add Skill Function
function addSkill() {
  const skill = skillsInput.value.trim();
  if (skill) {
    skillsData.push(skill);
    renderSkillsList();
    skillsInput.value = "";
  } else {
    alert("Please enter a skill.");
  }
}

// Render Skills List
function renderSkillsList() {
  skillsList.innerHTML = "";
  skillsData.forEach((skill, index) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

// Handle Form Submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // Prevent page reload on form submit

  const username = usernameInput.value;
  const name = nameInput.value;
  const contactno = contactNoInput.value;
  const email = emailInput.value;
  const dob = dobInput.value;
  const address = addressInput.value;

  // Save form data in localStorage with username as key
  const resumeData = {
    username,
    name,
    contactno,
    email,
    dob,
    address,
    education: educationData,
    experience: experienceData,
    skills: skillsData,
  };
  localStorage.setItem(username, JSON.stringify(resumeData));

  // Dynamically generated resume HTML
  const HtmlResume = `
    <form>
    <h2><b>Resume</b></h2>
    <fieldset>

    <legend>PERSONAL INFORMATION</legend>

    <ul>
    <li><u>Name:</u>  
    <span contenteditable="true"> ${name}</span>
    </li>
    <li><u>Contact:</u>  
    <span contenteditable="true"> ${contactno}</span>
    </li>
    <li><u>Email:</u>  
    <span contenteditable="true"> ${email}</span
    ></li>
    <li><u>Date of Birth:</u> 
     <span contenteditable="true"> ${dob}</span>
     </li>
    <li><u>Address:</u>  
    <span contenteditable="true"> ${address}</span>
    </li>
    </ul>

    </fieldset>

    <fieldset>
    
    <legend>EDUCATION</legend>
    <ul>
        ${educationData.map((edu) => `<li>${edu}</li>`).join("")}
    </ul>

    </fieldset>

    </fieldset>

    <fieldset>

    <legend>EXPERIENCE</legend>
    <ul>
        ${experienceData.map((exp) => `<li>${exp}</li>`).join("")}
    </ul>
    
    </fieldset>

    </fieldset>

    <fieldset>

    <legend>SKILLS</legend>
    <ul>
        ${skillsData.map((skill) => `<li>${skill}</li>`).join("")}
    </ul>

    </fieldset>

    </form>
    `;

  // Display the generated resume
  resumeDisplayElement.innerHTML = HtmlResume;

  // Generate a shareable URL with username only
  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    username
  )}`;

  // Display the shareable link
  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});

// Handle PDF Download
downloadPdfButton.addEventListener("click", () => {
  window.print();
});

// Prefill the form based on username in the URL
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");

  if (username) {
    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
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

