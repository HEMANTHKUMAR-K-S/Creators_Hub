const mobileMenu = document.getElementById('mobile-menu');
const navbarContainer = document.getElementById('toggleBar');
const body = document.body;

mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    navbarContainer.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
    if (navbarContainer.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

document.addEventListener('click', (e) => {
    if (!navbarContainer.contains(e.target) && !mobileMenu.contains(e.target)) {
        navbarContainer.classList.remove('active');
        mobileMenu.classList.remove('is-active');
        body.style.overflow = '';
    }
});

        let scene, camera, renderer, particles, animationId;
        let isHomeVisible = false;

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 50;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            let geometry = new THREE.BufferGeometry();
            let vertices = [];
            for (let i = 0; i < 1000; i++) {
                vertices.push((Math.random() - 0.5) * 200);
                vertices.push((Math.random() - 0.5) * 200);
                vertices.push((Math.random() - 0.5) * 200);
            }
            geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

            let material = new THREE.PointsMaterial({ color: 0x00ffff, size: 1 });
            particles = new THREE.Points(geometry, material);
            scene.add(particles);
        }

        function animate() {
            animationId = requestAnimationFrame(animate);
            particles.rotation.y += 0.002;
            renderer.render(scene, camera);
        }

        // Initialize and animate the scene
        init();
        animate();

        // Resize Handling
        window.addEventListener("resize", () => {
            if (renderer) {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            }
        });

        
