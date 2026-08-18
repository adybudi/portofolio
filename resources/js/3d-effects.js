import * as THREE from 'three';

/**
 * 1. Hero 3D Particle Constellation / Wave Field
 */
export function initHeroParticleWave() {
    const container = document.getElementById('hero-3d-canvas');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Grid Creation
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialY = new Float32Array(particleCount);

    let i = 0;
    const cols = 40;
    const rows = 30;
    const spacing = 25;

    for (let x = 0; x < cols; x++) {
        for (let z = 0; z < rows; z++) {
            const posX = (x - cols / 2) * spacing;
            const posZ = (z - rows / 2) * spacing;
            const posY = Math.sin(x * 0.3) * 20 + Math.cos(z * 0.3) * 20;

            positions[i * 3] = posX;
            positions[i * 3 + 1] = posY;
            positions[i * 3 + 2] = posZ;

            initialY[i] = posY;
            i++;
        }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x0096c7,
        size: 3.5,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
        mouseX = (event.clientX - window.innerWidth / 2) * 0.15;
        mouseY = (event.clientY - window.innerHeight / 2) * 0.15;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        camera.position.x = targetX * 0.8;
        camera.position.y = -targetY * 0.8 + 100;
        camera.lookAt(scene.position);

        const posAttr = geometry.attributes.position;
        const posArray = posAttr.array;

        for (let j = 0; j < particleCount; j++) {
            const px = posArray[j * 3];
            const pz = posArray[j * 3 + 2];
            posArray[j * 3 + 1] = initialY[j] + Math.sin(elapsedTime * 2 + px * 0.02 + pz * 0.02) * 15;
        }

        posAttr.needsUpdate = true;
        renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });
}

/**
 * 2. Interactive 3D Tech Stack Globe / Sphere
 */
export function initTech3DGlobe() {
    const container = document.getElementById('tech-3d-canvas');
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const sphereGeo = new THREE.IcosahedronGeometry(75, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x0096c7,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
    });
    const wireframeSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(wireframeSphere);

    const ringGeo = new THREE.TorusGeometry(85, 0.8, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x48cae4, transparent: true, opacity: 0.6 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    globeGroup.add(ringMesh);

    const techItems = [
        'LARAVEL', 'PHP 8+', 'JAVASCRIPT', 'TAILWIND',
        'ALPINE.JS', 'MYSQL', 'REDIS', 'DOCKER',
        'REST API', 'AWS CLOUD', 'THREE.JS', 'GIT'
    ];

    function createTextSprite(text) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgba(0, 150, 199, 0.15)';
        ctx.strokeStyle = '#0096c7';
        ctx.lineWidth = 2;
        ctx.fillRect(4, 4, 248, 56);
        ctx.strokeRect(4, 4, 248, 56);

        ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 128, 32);

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;

        const spriteMat = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            opacity: 0.9,
        });

        const sprite = new THREE.Sprite(spriteMat);
        sprite.scale.set(40, 10, 1);
        return sprite;
    }

    const phi = Math.PI * (3 - Math.sqrt(5));
    const total = techItems.length;

    techItems.forEach((itemText, index) => {
        const y = 1 - (index / (total - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * index;

        const radius = 95;
        const x = Math.cos(theta) * radiusAtY * radius;
        const z = Math.sin(theta) * radiusAtY * radius;

        const sprite = createTextSprite(itemText);
        sprite.position.set(x, y * radius, z);
        globeGroup.add(sprite);
    });

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0.005 };

    container.addEventListener('pointerdown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointermove', (e) => {
        if (!isDragging) return;

        const deltaMove = {
            x: e.clientX - previousMousePosition.x,
            y: e.clientY - previousMousePosition.y,
        };

        rotationVelocity.y = deltaMove.x * 0.005;
        rotationVelocity.x = deltaMove.y * 0.005;

        globeGroup.rotation.y += rotationVelocity.y;
        globeGroup.rotation.x += rotationVelocity.x;

        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', () => {
        isDragging = false;
    });

    function animateGlobe() {
        requestAnimationFrame(animateGlobe);

        if (!isDragging) {
            globeGroup.rotation.y += 0.004;
            globeGroup.rotation.x *= 0.95;
            ringMesh.rotation.z += 0.002;
        }

        renderer.render(scene, camera);
    }

    animateGlobe();

    const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });
}
