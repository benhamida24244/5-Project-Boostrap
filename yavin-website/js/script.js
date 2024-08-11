const counters = document.querySelectorAll('[data-target]');

window.addEventListener('load', () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;

        const updateCounter = () => {
            if (count < target) {
                count++;
                counter.textContent = count;
            } else {
                clearInterval(interval);
            }
        };

        const interval = setInterval(updateCounter, 5);
    });
});
