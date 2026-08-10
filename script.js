// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';

htmlElement.setAttribute('data-theme', savedTheme);
themeToggleBtn.textContent = savedTheme === 'light' ? 'Dark Mode' : 'Light Mode';

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'light' ? 'Dark Mode' : 'Light Mode';
});

// Profile Data (Replace image properties with your own real image URLs)
const profiles = [
    { 
        name: "Firstname Lastname", 
        role: "Senior Product Designer", 
        company: "Previous Company",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", 
        description: "Focuses on 0-1 product design, design systems, and interaction design for consumer fintech.", 
        tags: ["Design", "Full-time"] 
    },
    { 
        name: "Firstname Lastname", 
        role: "Staff Engineer", 
        company: "Previous Company",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", 
        description: "Specializes in scalable backend architecture, distributed systems, and team leadership.", 
        tags: ["Engineering", "Contract"] 
    },
    { 
        name: "Firstname Lastname", 
        role: "Head of Product", 
        company: "Previous Company",
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop", 
        description: "Driving product vision, strategy, and execution for high-growth SaaS startups.", 
        tags: ["Product", "Full-time"] 
    }
];

// Render grid
const profilesGrid = document.getElementById('profiles-grid');

profiles.forEach(profile => {
    const tagsHtml = profile.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    const cardHtml = `
        <div class="card">
            <img src="${profile.image}" alt="Work sample by ${profile.name}" class="card-image">
            <div class="card-content">
                <div class="card-header">
                    <div class="card-title">${profile.name}</div>
                    <div class="card-subtitle">${profile.role} at ${profile.company}</div>
                </div>
                <div class="card-description">${profile.description}</div>
                <div class="card-tags">${tagsHtml}</div>
            </div>
        </div>
    `;
    profilesGrid.insertAdjacentHTML('beforeend', cardHtml);
});
