document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btn1, .btn2');
    
    // Function to check if an element is in view
    const isInView = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0 &&
            rect.left < window.innerWidth && rect.right > 0
        );
    };

    // Function to add or remove the 'in-view' class based on visibility
    const checkVisibility = () => {
        buttons.forEach(button => {
            if (isInView(button)) {
                if (!button.classList.contains('in-view')) {
                    button.classList.add('in-view');
                }
            } else {
                if (button.classList.contains('in-view')) {
                    button.classList.remove('in-view');
                    // Trigger reflow to reset the animation
                    void button.offsetWidth;
                }
            }
        });
    };

    // Run the checkVisibility function on scroll and resize events
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Run the checkVisibility function initially in case the elements are already in view
    checkVisibility();
});
