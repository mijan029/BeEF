document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.querySelector('#login');
    const stories = document.querySelectorAll('#stories article');
    const navItems = document.querySelectorAll('nav ul li a');
    const profilePic = document.querySelector('#about img');
    const windowWidthOutput = () => console.log(`Window width: ${window.innerWidth}px`);

    // Interaction 1: Log In Alert
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('The login feature is coming soon!');
    });

    // Interaction 2: Toggle Stories Visibility
    stories.forEach(story => {
        story.addEventListener('click', () => {
            const isVisible = story.dataset.visible === 'true';
            story.dataset.visible = !isVisible;
            story.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Interaction 3: Change Text Color of Nav Items on Hover
    navItems.forEach(navItem => {
        navItem.addEventListener('mouseover', () => navItem.style.color = 'blue');
        navItem.addEventListener('mouseout', () => navItem.style.color = '');
    });

    // Interaction 4: Profile Picture Messages
    profilePic.addEventListener('mouseenter', () => console.log('Mouse entered the profile picture area.'));
    profilePic.addEventListener('mouseleave', () => console.log('Mouse left the profile picture area.'));

    // Interaction 5: Console Log Window Width on Resize
    window.addEventListener('resize', windowWidthOutput);
});

