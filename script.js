// Matriarch1 Website JavaScript - MOBILE FOCUSED
console.log('MATRIARCH1 Website Loaded');

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile debugging started');
    
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Welcome to MATRIARCH1 - The Future of Storytelling!');
        });
    }
    
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // MOBILE TOUCH TRACKING ONLY
    const omButton = document.querySelector('.om-button-diamond');
    if (!omButton) {
        console.log('Om button not found!');
        return;
    }

    console.log('Om button found, setting up touch tracking...');

    let isDragging = false;
    let startX, startY;
    
    // Visual indicator - change border color when ready
    omButton.style.border = '3px solid red';
    
    // Touch events for mobile
    omButton.addEventListener('touchstart', function(e) {
        console.log('Touch started!');
        isDragging = true;
        
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        
        // Visual feedback
        omButton.style.border = '3px solid green';
        omButton.style.background = 'rgba(0, 255, 0, 0.3)';
        
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', function(e) {
        if (isDragging && e.touches.length > 0) {
            const touch = e.touches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;
            
            console.log('Moving:', deltaX, deltaY);
            
            // Move the entire button
            omButton.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
        }
    });
    
    document.addEventListener('touchend', function() {
        console.log('Touch ended');
        isDragging = false;
        
        // Reset visual
        omButton.style.border = '3px solid gold';
        omButton.style.background = '';
    });

    // Remove desktop/eye tracking code completely for mobile testing
    console.log('Touch tracking setup complete');
});

// Simple reset function for mobile
window.resetCalibration = function() {
    const omButton = document.querySelector('.om-button-diamond');
    if (omButton) {
        omButton.style.transform = 'translate(-50%, -50%)';
        alert('Om position reset to center!');
    }
};

// Add this to your existing script.jd file

// Portal Revelation Navigation
function initPortalRevelation() {
    const projects = document.querySelectorAll('.project-reveal');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.portal-nav.prev');
    const nextBtn = document.querySelector('.portal-nav.next');
    
    let currentProject = 0;
    
    function showProject(index) {
        // Hide all projects
        projects.forEach(project => project.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show selected project
        projects[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentProject = index;
    }
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showProject(index));
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        let newIndex = currentProject - 1;
        if (newIndex < 0) newIndex = projects.length - 1;
        showProject(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        let newIndex = currentProject + 1;
        if (newIndex >= projects.length) newIndex = 0;
        showProject(newIndex);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initPortalRevelation();
    
    // Update "Enter the Portal" button to scroll to revelation section
    const enterPortalBtn = document.querySelector('.cta-button');
    if (enterPortalBtn) {
        enterPortalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const portalSection = document.getElementById('portal-revelation');
            if (portalSection) {
                portalSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
