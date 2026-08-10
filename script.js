// --- Theme Toggling Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Initialize theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateButtonText(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});

function updateButtonText(theme) {
    themeToggleBtn.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
}

// --- Dummy Data Generation for the Grid ---
const profilesGrid = document.getElementById('profiles-grid');

const dummyProfiles = [
    { name: "Alex R.", role: "Senior Product Designer", location: "Remote", description: "Specializing in 0-1 product design, design systems, and interaction design.", tools: ["Figma", "Framer", "React"] },
    { name: "Jordan M.", role: "Full Stack Engineer", location: "New York", description: "Building scalable web applications. Former lead engineer at a Series B fintech startup.", tools: ["TypeScript", "Node.js", "AWS"] },
    { name: "Casey T.", role: "UX Researcher", location: "Remote", description: "Mixed-methods researcher passionate about accessibility and deep user empathy.", tools: ["UserTesting", "Dovetail", "Miro"] },
    { name: "Sam K.", role: "Frontend Developer", location: "London", description: "Crafting pixel-perfect, highly animated marketing sites and web experiences.", tools: ["Vue", "GSAP", "Three.js"] },
    { name: "Taylor P.", role: "Growth Designer", location: "San Francisco", description: "Focused on conversion rate optimization, onboarding flows, and A/B testing.", tools: ["Figma", "Webflow", "Mixpanel"] },
    { name: "Morgan L.", role: "Backend Engineer", location: "Remote", description: "Designing robust APIs and microservices architecture for high-traffic platforms.", tools: ["Go", "PostgreSQL", "Docker"] }
];

function renderProfiles() {
    profilesGrid.innerHTML = '';
    
    dummyProfiles.forEach(profile => {
        const tagsHtml = profile.tools.map(tool => `<span class="tag">${tool}</span>`).join('');
        
        const cardHtml = `
            <div class="card">
                <div class="card-header">
                    <div>
                        <div class="card-title">${profile.name}</div>
                        <div class="card-subtitle">${profile.role} • ${profile.location}</div>
                    </div>
                </div>
                <div class="card-description">
                    ${profile.description}
                </div>
                <div class="card-footer">
                    ${tagsHtml}
                </div>
            </div>
        `;
        
        profilesGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Render the grid on load
document.addEventListener('DOMContentLoaded', renderProfiles);
