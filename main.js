const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const header = document.getElementById('main-header');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

function toggleDropdownMenu() {
    const toggleBtnVisibility = window.getComputedStyle(toggleBtn).display;

    if (toggleBtnVisibility === 'none') {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('sticky');
        header.style.backgroundColor = 'var(--color-dark-blue)';
    } else {
        header.classList.remove('sticky');
        header.style.backgroundColor = 'transparent';
    }
});

window.addEventListener('resize', function() {
  toggleDropdownMenu();
});


function clearFormFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

 
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

   
    fetch(event.target.action, {
      method: "POST",
      body: new FormData(event.target),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
         
          clearFormFields();
        
          alert("Your message has been sent successfully!");
        } else {
         
          alert("An error occurred while sending the message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error sending the form:", error);
        alert("An error occurred while sending the message. Please try again.");
      });
  });

toggleDropdownMenu();