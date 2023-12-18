function validateForm(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() !== '' || email.trim() !== '' || message.trim() !== '') {
        alert('The form is already filled out. Please submit only once.');
        return;
    }

    
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

  
    if (message.trim() === '') {
        alert('Please enter your message.');
        return;
    }

    alert('Form submitted successfully!');
    
}
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var sections = document.querySelectorAll('.section');

    sections.forEach(function (section) {
        if (isInViewport(section)) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);


handleScroll();