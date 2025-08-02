// Debug iframe loading
document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe');

    iframe.addEventListener('load', function () {
        console.log('TickTick iframe loaded successfully');
    });

    iframe.addEventListener('error', function (e) {
        console.error('TickTick iframe failed to load:', e);
        // Show error message if elements exist
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        if (loading) loading.style.display = 'none';
        if (error) error.style.display = 'block';
    });

    // Log CSP violations
    window.addEventListener('securitypolicyviolation', function (e) {
        console.error('CSP Violation:', e.violatedDirective, e.blockedURI);
    });

    console.log('Panel loaded, attempting to load TickTick in iframe');
});