// Sample Data for Workshops
const workshops = [
    { name: "Personal Branding and LinkedIn Optimization", details: "Enhance your personal brand and optimize your LinkedIn profile to attract potential employers and clients.", instructor: "Kalyan Vara Prasad T", date: "Soon", time: "Soon", status: "upcoming" },
    { name: "Personal Branding and LinkedIn Optimization", details: "Enhance your personal brand and optimize your LinkedIn profile to attract potential employers and clients.", instructor: "Kalyan Vara Prasad T", date: "Soon", time: "Soon", status: "completed" }

    // { name: "Data Analysis with Python", details: "Master pandas and NumPy for data science.", instructor: "Jane Smith", date: "2025-03-20", time: "02:00 PM", status: "upcoming" },
    // { name: "Cybersecurity Basics", details: "Learn ethical hacking and security fundamentals.", instructor: "Alex Brown", date: "2025-02-10", time: "11:00 AM", status: "completed" },
    // { name: "Cloud Computing Essentials", details: "AWS, Azure, and Google Cloud fundamentals.", instructor: "Sarah Lee", date: "2025-01-30", time: "04:00 PM", status: "completed" }
];

// Get Containers
const upcomingContainer = document.getElementById("upcoming-workshops");
const completedContainer = document.getElementById("completed-workshops");

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
        <button class="register-btn ${workshop.status === 'completed' ? 'disabled-btn' : ''}" 
            ${workshop.status === 'completed' ? 'disabled' : `onclick="openModal('${workshop.name}')"`}>
            ${workshop.status === 'completed' ? 'Completed' : 'Register'}
        </button>
        ${workshop.status === 'completed' ? `<button class="visit-gallery-btn" onclick="window.location.href='gallery.html#${workshop.name.replace(/\s+/g, '-').toLowerCase()}'">Visit Gallery</button>` : ''}
    `;
    // Append to correct section
    if (workshop.status === "upcoming") {
        upcomingContainer.appendChild(workshopCard);
    } else {
        completedContainer.appendChild(workshopCard);
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
