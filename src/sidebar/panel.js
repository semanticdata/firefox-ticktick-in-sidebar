// Sidebar panel script for TickTick in Sidebar extension
// Handles loading and error states for TickTick webapp

/**
 * Logs errors to the console with extension context
 * @param {Error} e - The error to log
 */
function onError(e) {
    console.error("TickTick Sidebar Panel Error:", e);
}

/**
 * Shows error state and hides loading state
 */
function showErrorState() {
    try {
        const loadingElement = document.getElementById('loading');
        const errorElement = document.getElementById('error');

        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
        if (errorElement) {
            errorElement.style.display = 'block';
        }
    } catch (e) {
        onError(e);
    }
}

/**
 * Redirects to TickTick webapp
 */
function redirectToTickTick() {
    try {
        window.location.href = 'https://ticktick.com/webapp/';
    } catch (e) {
        onError(e);
        showErrorState();
    }
}

// Initialize the panel
redirectToTickTick();