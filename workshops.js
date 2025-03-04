// Sample Data for Workshops
const workshops = [
    {
        name: "Personal Branding and LinkedIn Optimization", details: "Build a standout LinkedIn profile & portfolio (GitHub, Notion, Canva) Find internship opportunities without prior experience."
        , instructor: "Kalyan Vara Prasad T", date: "07-03-2025", time: "7:00 PM - 8:00 PM", status: "upcoming"
    },
    { name: "Public Speaking & Communication Skills", details: "Overcome stage fear & master storytelling. Practice elevator pitches for confidence.", instructor: "Maddy Chittoor", date: "Coming Soon", time: "Coming Soon", status: "coming-soon" },
];

// Get Containers
const upcomingContainer = document.getElementById("upcoming-workshops") || document.createElement('div');
const completedContainer = document.getElementById("completed-workshops") || document.createElement('div');
const comingSoonContainer = document.getElementById("coming-soon-workshops") || document.createElement('div');

// Populate Workshops
workshops.forEach(workshop => {
    let workshopCard = document.createElement("div");
    workshopCard.classList.add("workshop-card");

    // Workshop HTML
    workshopCard.innerHTML = `
        <h2>${workshop.name}</h2>
        <p>${workshop.details}</p>
        <div class="instructor-info">
            <strong>Instructor:</strong> ${workshop.instructor}
        </div>
        <div class="date-time"><strong>Date:</strong> ${workshop.date} | <strong>Time:</strong> ${workshop.time}</div>
        <button class="register-btn ${workshop.status !== 'upcoming' ? 'disabled-btn' : ''}" 
            ${workshop.status !== 'upcoming' ? 'disabled' : `onclick="openModal('${workshop.name}')"`}>
            ${workshop.status === 'completed' ? 'Completed' : (workshop.status === 'coming-soon' ? 'Coming Soon' : 'Register')}
        </button>
        ${workshop.status === 'completed' ? `<button class="visit-gallery-btn" onclick="window.location.href='gallery.html#${workshop.name.replace(/\s+/g, '-').toLowerCase()}'">Visit Gallery</button>` : ''}
    `;
    // Append to correct section
    if (workshop.status === "upcoming") {
        upcomingContainer.appendChild(workshopCard);
    } else if (workshop.status === "completed") {
        completedContainer.appendChild(workshopCard);
    } else if (workshop.status === "coming-soon") {
        comingSoonContainer.appendChild(workshopCard);
    }
});

// Open Registration Modal
function openModal(workshopName) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("workshop").value = workshopName;
}

// Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Visit Gallery
function visitGallery() {
    // Implement the logic to visit the gallery
    alert("Visiting the gallery...");
}
