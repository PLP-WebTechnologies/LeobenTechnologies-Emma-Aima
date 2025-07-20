document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }
    
    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count
    function updateCartCount() {
        const countElement = document.getElementById('cart-count');
        if (countElement) {
            countElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        }
    }
    // Testimonial slider functionality
    document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Show first testimonial initially
    showTestimonial(currentIndex);
});

    // Better dropdown control with JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-container');
    
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        
        // Toggle on click (for mobile)
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                menu.classList.toggle('show');
            }
        });
        
        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
    });
});

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productName = this.parentElement.querySelector('h3').textContent;
            const productPrice = parseFloat(this.parentElement.querySelector('.price').textContent.replace('$', ''));
            
            // Check if product already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart count
            updateCartCount();
            
            // Show confirmation
            alert(`${productName} has been added to your cart!`);
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real app, you would send this to your server
            console.log('Subscribed email:', email);
            
            // Show confirmation
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Initialize cart count
    updateCartCount();
});

// Mobile menu toggle functionality
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.main-nav').classList.toggle('active');
    });
    
    // Dropdown functionality for mobile
    document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    //About Page JavaScript
// Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav ul');
        
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Scroll Animation
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
        
        // Counter Animation
        const statNumbers = document.querySelectorAll('.stat-number');
        
        function animateCounters() {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const counter = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        clearInterval(counter);
                        stat.textContent = target;
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 16);
            });
        }
        
        // Only animate counters when stats section is visible
        const statsSection = document.querySelector('.stats-section');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        });
        
        statsObserver.observe(statsSection);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Blog Posts
        // Sticky header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.main-header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                header.style.background = 'var(--white)';
            }
        });

    // Scroll Animation for Blog Posts
        const blogPosts = document.querySelectorAll('.blog-post');
        
        const blogObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 150); // Staggered delay
                    blogObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        blogPosts.forEach(post => {
            blogObserver.observe(post);
        });
        
        // Category Filtering
        const categoryBtns = document.querySelectorAll('.category-btn');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // In a real implementation, you would filter posts here
                // This is just for the demo
                console.log(`Filtering by: ${btn.textContent}`);
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
   
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to each shipping option
    const shippingOptions = document.querySelectorAll('.shipping-section li');
    
    shippingOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            shippingOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // You could add code here to update a selected shipping method
            // in your cart/checkout system
        });
    });
    
    // You could also add a function to calculate estimated delivery date
    function calculateDeliveryDate(daysToAdd) {
        const date = new Date();
        date.setDate(date.getDate() + daysToAdd);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
        });
    }
    
    // Example usage - you would call this when an option is selected
    // console.log("Estimated delivery: " + calculateDeliveryDate(3));
});
        
        // Simple cart counter
        const addToCartButtonsSimple = document.querySelectorAll('.product-card .btn');
        const cartCountSimple = document.getElementById('cart-count');
        let countSimple = 0;
        
        addToCartButtonsSimple.forEach(button => {
            button.addEventListener('click', function() {
                countSimple++;
                cartCountSimple.textContent = countSimple;
                
                // Add animation
                button.textContent = 'Added!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.style.backgroundColor = '';
                }, 1000);
            });
        });

    // Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.main-nav ul').classList.toggle('active');
        });
        
        // Simple cart counter
        const addToCartButtons = document.querySelectorAll('.product-card .btn');
        const cartCount = document.getElementById('cart-count');
        let count = 0;
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                count++;
                cartCount.textContent = count;
                
                // Add animation
                button.textContent = 'Added!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.style.backgroundColor = '';
                }, 1000);
            });
        });
        
        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        if(newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input').value;
                alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
                this.reset();
            });
        }
