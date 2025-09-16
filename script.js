document.addEventListener('DOMContentLoaded', function () {
    console.log('Bubble loader initialized');
    setTimeout(function () {
        var loadingText = document.querySelector('loading-text');
        if (loadingText) {
            loadingText.textContent = 'Still loading...';
        }
    }, 5000);
});
