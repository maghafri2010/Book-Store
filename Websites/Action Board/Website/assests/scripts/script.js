const leftbar = document.getElementById('left_bar');
const body = document.body;
const pages = {
    profile: "profile.html"
};

function sidebarToggle() {
    // Toggle the 'expanded' class on the sidebar
    leftbar.classList.toggle('expanded');
    

    // Get all the buttons inside the sidebar
    const buttons = leftbar.querySelectorAll('button');

    // Loop through each button to add/remove text
    buttons.forEach(button => {
        const span = button.querySelector('.button-text');
        if (leftbar.classList.contains('expanded')) {
            // Add text to the button when expanded
            if (button === buttons[0]) span.textContent = "";  // Example for the first button
            if (button === buttons[1]) span.textContent = "Profile";  
            if (button === buttons[2]) span.textContent = "Home";  // Example for the second button
            if (button === buttons[3]) span.textContent = "Add";  // And so on...
            if (button === buttons[4]) span.textContent = "Tasks";
            if (button === buttons[5]) span.textContent = "Calendar";
            if (button === buttons[6]) span.textContent = "Notifications";
            if (button === buttons[7]) span.textContent = "Settings";
        } else {
            // Remove text when collapsed
            span.textContent = "";
        }
    });
}


function stretch(event) {
    const holder = event.target.closest('.center_bar'); // Get the closest .center_bar to the clicked button
    if (holder) {
        holder.classList.toggle('expanded');
    }
}
const sections = document.querySelectorAll("section");
const buttons = leftbar.querySelectorAll('button');

function showSection(sectionID)
{
    sections.forEach(section => section.classList.add('hidden'));

    const sectionToShow = document.getElementById(sectionID);
    sectionToShow.classList.remove("hidden");
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const sectionID = button.getAttribute('data-section');

        showSection(sectionID);

    });
});

