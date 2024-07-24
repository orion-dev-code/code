document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.querySelector('.logo','.navigation','.main img','.cards','.info','.rate');
    setTimeout(() => {
        animationContainer.style.animation = 'fadeInUp 1s forwards';
    }, 700);
});

