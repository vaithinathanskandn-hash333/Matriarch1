// Cosmic Portal Main JavaScript
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
            
            document.getElementById('omButton').addEventListener('click', () => {
                this.activatePortal();
            });
        }
    }

    activatePortal() {
        const omButton = document.getElementById('omButton');
        const omExperience = document.getElementById('omExperience');
        
        omButton.style.transition = 'all 1s ease-in-out';
        omButton.style.transform = 'scale(3)';
        omButton.style.opacity = '0';
        
        setTimeout(() => {
            if (omExperience) {
                omExperience.style.opacity = '0';
                setTimeout(() => {
                    omExperience.style.display = 'none';
                }, 500);
            }
        }, 1000);
    }
}

// Start when page loads
document.addEventListener('DOMContentLoaded', () => {
    new CosmicPortal();
});
