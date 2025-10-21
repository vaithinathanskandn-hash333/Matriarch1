// Cosmic Portal Main JavaScript - FIXED
class CosmicPortal {
    constructor() {
        this.init();
    }

    init() {
        setTimeout(() => {
            this.hideLoadingScreen();
            this.showOmExperience();
        }, 2000);
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }

    showOmExperience() {
        const omExperience = document.getElementById('omExperience');
        if (omExperience) {
            omExperience.style.display = 'flex';
            
            document.getElementById('cosmicOmButton').addEventListener('click', () => {
                this.activatePortal();
            });
        }
    }

    activatePortal() {
        const cosmicOmButton = document.getElementById('cosmicOmButton');
        const omExperience = document.getElementById('omExperience');
        
        // Cosmic Om animation
        cosmicOmButton.style.transition = 'all 1s ease-in-out';
        cosmicOmButton.style.transform = 'scale(3)';
        cosmicOmButton.style.opacity = '0';
        
        setTimeout(() => {
            if (omExperience) {
                omExperience.style.opacity = '0';
                setTimeout(() => {
                    omExperience.style.display = 'none';
                    this.showMovableOm(); // Show movable Om after transition
                }, 500);
            }
        }, 1000);
    }

    showMovableOm() {
        // Create and show movable Om
        const movableOm = document.createElement('button');
        movableOm.className = 'floating-om';
        movableOm.innerHTML = 'ॐ';
        movableOm.setAttribute('title', 'Drag me around!');
        movableOm.style.display = 'block';
        
        document.body.appendChild(movableOm);
        
        // Make it draggable
        this.makeDraggable(movableOm);
    }

    makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragTouchStart;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function dragTouchStart(e) {
            e.preventDefault();
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            
            if (e.type === 'touchmove') {
                pos1 = pos3 - e.touches[0].clientX;
                pos2 = pos4 - e.touches[0].clientY;
                pos3 = e.touches[0].clientX;
                pos4 = e.touches[0].clientY;
            } else {
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
            }
            
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    }
}

// Start when page loads
document.addEventListener('DOMContentLoaded', () => {
    new CosmicPortal();
});
