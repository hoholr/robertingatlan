const aboutSection = document.querySelector('.about');

const aboutObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.25
    }
);

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

console.log("Hohol Róbert ingatlaközvetítő oldala, minden jog fenntartva! &copy; 2026");