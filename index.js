const darkMode = document.getElementById("dark");
darkMode.addEventListener('click', switchToDark);
const lightMode = document.getElementById("light");
lightMode.addEventListener('click', switchToLight);

function switchToDark() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    showLightLogo();
}

function switchToLight() {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    showDarkLogo();
}

function showDarkLogo() {
    darkMode.style.display = 'block';
    lightMode.style.display = 'none';
}

function showLightLogo() {
    darkMode.style.display = 'none';
    lightMode.style.display = 'block';
}


// Get current theme from local storage
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    showDarkLogo();
    if (currentTheme === 'dark') {
        showLightLogo();
    }
}

// Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const element = entry.target;
            element.classList.add("is-visible");
        }
    });
});

const fadeInElements = document.querySelectorAll(".fadeInSection");
fadeInElements.forEach(fadeIn => {
    observer.observe(fadeIn);
});