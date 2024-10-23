// Smooth scroll for navigation links
$(document).ready(function() {
    $('nav ul li a').click(function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        var target = $(this).attr('href'); // Get target section
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // Smooth scroll to target section
    });

    // Handle form submission
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting

        var name = $('input[type="text"]').val().trim();
        var email = $('input[type="email"]').val().trim();
        var message = $('textarea').val().trim();

        // Simple validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate form submission (replace this with actual AJAX request if needed)
        alert("Thank you for contacting us, " + name + "!");
        $('#contact-form')[0].reset(); // Clear the form
    });
});
