// MATRIARCH1 - Complete Mobile Script
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 MATRIARCH1 Portal Activated");
    
    // Om Button Movement - Mobile Optimized
    const omButton = document.querySelector('.om-button-diamond');
    
    if (omButton) {
        let isDragging = false;
        let startX, startY, currentX, currentY;
        
        // Touch events for mobile
        omButton.addEventListener('touchstart', function(e) {
            isDragging = true;
            startX = e.touches[0].clientX - omButton.offsetLeft;
            startY = e.touches[0].clientY - omButton.offsetTop;
            
            // Visual feedback
            omButton.style.transform = 'scale(1.2)';
            omButton.style.boxShadow = '0 0 50px gold, 0 0 100px orange';
        });
        
        omButton.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            
            e.preventDefault();
            currentX = e.touches[0].clientX - startX;
            currentY = e.touches[0].clientY - startY;
            
            // Move button
            omButton.style.left = currentX + 'px';
            omButton.style.top = currentY + 'px';
        });
        
        omButton.addEventListener('touchend', function() {
            isDragging = false;
            
            // Check if moved significantly
            const movedDistance = Math.sqrt(
                Math.pow(currentX - window.innerWidth/2, 2) + 
                Math.pow(currentY - window.innerHeight/2, 2)
            );
            
            if (movedDistance > 100) {
                // Trigger portal reveal
                document.getElementById('portal-revelation').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Success effect
                omButton.style.boxShadow = '0 0 80px #00ff00, 0 0 120px #00ff00';
                setTimeout(() => {
                    omButton.style.boxShadow = '';
                }, 2000);
            }
            
            // Reset appearance
            setTimeout(() => {
                omButton.style.transform = '';
            }, 500);
        });
    }
    
    // CTA Button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.getElementById('portal-revelation').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Portal Navigation
    const prevBtn = document.querySelector('.portal-nav.prev');
    const nextBtn = document.querySelector('.portal-nav.next');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all
        document.querySelectorAll('.project-reveal').forEach(slide => {
            slide.classList.remove('active');
        });
        // Show current
        document.querySelectorAll('.project-reveal')[index].classList.add('active');
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            showSlide((currentSlide + 1) % 4);
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            showSlide((currentSlide - 1 + 4) % 4);
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Sound Toggle
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
    
    console.log("✅ All features loaded successfully");
});

// Eye calibration reset
function resetCalibration() {
    alert("Eye calibration reset. Please look at the Om button to recalibrate.");
}
