// Simple Cosmic Portal
console.log('Cosmic Portal Starting...');

class CosmicPortal {
    constructor() {
        this.init();
    }

    init() {
        console.log('Initializing...');
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
            
            const cosmicOm = document.getElementById('cosmicOmButton');
            if (cosmicOm) {
                cosmicOm.addEventListener('click', () => {
                    this.activatePortal();
                });
            }
        }
    }

    activatePortal() {
        console.log('Activating portal...');
        const cosmicOm = document.getElementById('cosmicOmButton');
        const omExperience = document.getElementById('omExperience');
        
        if (cosmicOm) {
            cosmicOm.style.transition = 'all 1s ease-in-out';
            cosmicOm.style.transform = 'scale(3)';
            cosmicOm.style.opacity = '0';
        }
        
        setTimeout(() => {
            if (omExperience) {
                omExperience.style.opacity = '0';
                setTimeout(() => {
                    omExperience.style.display = 'none';
                    this.addMovableOm();
                }, 500);
            }
        }, 1000);
    }

    addMovableOm() {
        console.log('Adding movable Om...');
        const movableOm = document.createElement('button');
        movableOm.className = 'floating-om';
        movableOm.innerHTML = 'ॐ';
        movableOm.style.display = 'block';
        
        document.body.appendChild(movableOm);
        
        this.makeDraggable(movableOm);
    }

    makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragTouchStart;

        function dragMouseDown(e) {
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

// Start the portal
document.addEventListener('DOMContentLoaded', function() {
    new CosmicPortal();
});
