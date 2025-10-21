// Mobile-Optimized Om Button Movement - Complete Script
document.addEventListener('DOMContentLoaded', function() {
    console.log("MATRIARCH1 - Portal Initialized");
    
    const omButton = document.querySelector('.om-button-diamond');
    
    // Make Om button draggable on mobile
    let isDragging = false;
    let currentX, currentY, initialX, initialY;
    
    if (omButton) {
        omButton.addEventListener('touchstart', dragStart);
        omButton.addEventListener('touchmove', drag);
        omButton.addEventListener('touchend', dragEnd);
        
        console.log("Om button movement activated");
    }

    function dragStart(e) {
        initialX = e.touches[0].clientX - omButton.offsetLeft;
        initialY = e.touches[0].clientY - omButton.offsetTop;
        isDragging = true;
        
        // Visual feedback
        omButton.style.transform = 'scale(1.1)';
        omButton.style.boxShadow = '0 0 40px gold, 0 0 80px orange';
        console.log("Dragging started");
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
        
        // Move the button
        omButton.style.left = currentX + 'px';
        omButton.style.top = currentY + 'px';
        omButton.style.transform = 'translate(0, 0) scale(1.1)';
    }
    
    function dragEnd() {
        isDragging = false;
        console.log("Dragging ended");
        
        // If moved significantly, trigger next step
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const movedDistance = Math.sqrt(
            Math.pow(currentX - centerX, 2) + 
            Math.pow(currentY - centerY, 2)
        );
        
        if (movedDistance > 100) {
            console.log("Portal activation triggered");
            revealPortal();
        }
        
        // Reset appearance
        setTimeout(() => {
            omButton.style.transform = '';
            omButton.style.boxShadow = '';
        }, 500);
    }
    
    function revealPortal() {
        // Scroll to portal section
        document.getElementById('portal-revelation').scrollIntoView({
            behavior: 'smooth'
        });
        
        // Show success message
        setTimeout(() => {
            alert('🎉 Portal Activated! Welcome to the Cosmic Journey');
        }, 1000);
    }

    // Existing functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.getElementById('portal-revelation').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Sound toggle functionality
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
        soundToggle.addEventListener('click', function() {
            const icon = this.querySelector('.sound-icon');
            const text = this.querySelector('.sound-text');
            
            if (icon.textContent === '🔇') {
                icon.textContent = '🔊';
                text.textContent = 'Sound Off';
            } else {
                icon.textContent = '🔇';
                text.textContent = 'Sound On';
            }
        });
    }

    // Portal navigation
    const prevButton = document.querySelector('.portal-nav.prev');
    const nextButton = document.querySelector('.portal-nav.next');
    const dots = document.querySelectorAll('.dot');
    let currentProject = 0;
    const projects = ['kotravayi', 'markaindai', 'sivan-revelation', 'chidambaram'];

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', showPrevProject);
        nextButton.addEventListener('click', showNextProject);
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showProject(index));
        });
    }

    function showProject(index) {
        // Hide all projects
        projects.forEach(project => {
            document.getElementById(project).classList.remove('active');
        });
        
        // Show selected project
        document.getElementById(projects[index]).classList.add('active');
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentProject = index;
    }

    function showNextProject() {
        currentProject = (currentProject + 1) % projects.length;
        showProject(currentProject);
    }

    function showPrevProject() {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        showProject(currentProject);
    }

    // Eye tracking reset
    window.resetCalibration = function() {
        alert('Eye calibration reset. Please recalibrate.');
    };

    console.log("All MATRIARCH1 features loaded successfully");
});