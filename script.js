var deptOptons = {
  "Computer Science Engineering":["CSE A","CSE B","CSE AI"],
  "Electronics and telecommunication":["ETC A","ETC B"],
  "Mechanical Engineering":["MECH"],
  "Civil Engineering":["CIVIL"],
  "Electrical Engineering":["ELE"],
  "Textile":["TC","TT","FT"]
}

window.onload = function () {
 
  // Get the select element and the divs
   // Define function to show/hide divs based on selected option
   function updateDisplay() {
    // Get the select element and the divs
    const permitOpt = document.getElementById("permitOpt");
    const medicalDiv = document.getElementById("Medial");
    const otherLeaveDiv = document.getElementById("OtherLeave");
    const permissionDiv = document.getElementById("Permisson");

    // Hide all divs by default
    medicalDiv.style.display = "none";
    otherLeaveDiv.style.display = "none";
    permissionDiv.style.display = "none";

    // Check which option is selected and show the corresponding div
    if (permitOpt.value === "Medical") {
      medicalDiv.style.display = "block";
    } else if (permitOpt.value === "Leave") {
      otherLeaveDiv.style.display = "block";
    } else if (permitOpt.value === "Permission") {
      permissionDiv.style.display = "block";
    }
  }

  // Call the function to update the display when the page loads
  updateDisplay();

  // Add event listener to the select element to update the display when it changes
  const permitOpt = document.getElementById("permitOpt");
  permitOpt.addEventListener("change", updateDisplay);


}
// Get the form and its inputs
const form = document.querySelector('#medical-leave-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const dateFromInput = document.querySelector('#date-from');
const dateToInput = document.querySelector('#date-to');
const reasonInput = document.querySelector('#reason');
const agreeInput = document.querySelector('#agree');
const submitBtn = document.querySelector('#submit-btn');

// Add event listener to the form submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Validate the form inputs
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const dateFromValue = dateFromInput.value.trim();
  const dateToValue = dateToInput.value.trim();
  const reasonValue = reasonInput.value.trim();
  const agreeValue = agreeInput.checked;

  if (nameValue === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (emailValue === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }

  if (!isValidEmail(emailValue)) {
    alert('Please enter a valid email.');
    emailInput.focus();
    return;
  }

  if (dateFromValue === '') {
    alert('Please enter the start date of your medical leave.');
    dateFromInput.focus();
    return;
  }

  if (dateToValue === '') {
    alert('Please enter the end date of your medical leave.');
    dateToInput.focus();
    return;
  }

  if (!isValidDate(dateFromValue) || !isValidDate(dateToValue)) {
    alert('Please enter valid dates (yyyy-mm-dd).');
    return;
  }

  if (new Date(dateFromValue) > new Date(dateToValue)) {
    alert('The start date should be earlier than the end date.');
    return;
  }

  if (reasonValue === '') {
    alert('Please enter the reason for your medical leave.');
    reasonInput.focus();
    return;
  }

  if (!agreeValue) {
    alert('Please agree to the terms and conditions.');
    agreeInput.focus();
    return;
  }

  // If all inputs are valid, submit the form
  alert('Your medical leave request has been submitted.');
  form.reset();
});

// Helper function to validate email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Helper function to validate date
function isValidDate(dateString) {
  const re = /^\d{4}-\d{2}-\d{2}$/;
  if (!re.test(dateString)) return false;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return false;
  return date.toISOString().slice(0, 10) === dateString;
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notification-text');

  notificationText.innerText = message;
  notification.style.display = 'block';

  const closeNotificationBtn = document.getElementById('close-notification');
  closeNotificationBtn.addEventListener('click', hideNotification);
  
  setTimeout(hideNotification, 5000);
}

function hideNotification() {
  const notification = document.getElementById('notification');
  notification.style.display = 'none';
}
// Get the progress bar
var progressBar = document.querySelector(".progress-bar .progress");

// Function to update the progress bar
function updateProgressBar(progress) {
  progressBar.style.width = progress + "%";
}

