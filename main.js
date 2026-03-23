import { cars } from './data/cars.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('TriWow Website Loaded');

    // Render Cars if on fleet page
    const carsGrid = document.getElementById('cars-grid');
    if (carsGrid) {
        renderCars(cars, carsGrid);
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth Scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close menu on click (mobile)
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    // Populate Car Dropdown if on contact page
    const carSelect = document.getElementById('car');
    if (carSelect) {
        // Clear existing options except the first one
        carSelect.innerHTML = '<option value="">Select a Car</option>';

        cars.forEach(car => {
            const option = document.createElement('option');
            option.value = car.name;
            option.textContent = car.name;
            carSelect.appendChild(option);
        });

        // Pre-select car if URL parameter exists
        const urlParams = new URLSearchParams(window.location.search);
        const selectedCar = urlParams.get('car');
        if (selectedCar) {
            carSelect.value = selectedCar;
        }
    }
});

function renderCars(carsData, container) {
    container.innerHTML = ''; // Clear existing content

    carsData.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';

        // Features list HTML
        const featuresHtml = car.features.map(f => `<li>${f}</li>`).join('');

        carCard.innerHTML = `
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
            </div>
            <div class="car-details">
                <h3>${car.name}</h3>
                <!--
                <div class="pricing-table">
                    <div class="price-row">
                        <span>1-10 Days</span>
                        <span class="price-val">${car.prices['1-10 Days']}</span>
                    </div>
                    <div class="price-row">
                        <span>11-29 Days</span>
                        <span class="price-val">${car.prices['11-29 Days']}</span>
                    </div>
                    <div class="price-row">
                        <span>30+ Days</span>
                        <span class="price-val">${car.prices['30+ Days']}</span>
                    </div>
                </div>
                -->
                <ul class="car-features">
                    ${featuresHtml}
                </ul>
                <a href="contact.html?car=${encodeURIComponent(car.name)}" class="btn-primary full-width">Book Now</a>
            </div>
        `;

        container.appendChild(carCard);
    });
}
