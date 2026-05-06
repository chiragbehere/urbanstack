// === URBANSTACK 3D FLOATING PARTICLES ===
// Lightweight Three.js particle system for inner pages
// Requires: three.min.js loaded before this script

(function() {
  'use strict';
  const canvas = document.getElementById('page-particles');
  if (!canvas || typeof THREE === 'undefined') return;

  // Reduce particles on mobile
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 500 : 1200;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));

  // --- Particle Field ---
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3]     = (Math.random() - 0.5) * 50;
    positions[i3 + 1] = (Math.random() - 0.5) * 50;
    positions[i3 + 2] = (Math.random() - 0.5) * 50;

    const shade = 0.6 + Math.random() * 0.4;
    colors[i3]     = shade;
    colors[i3 + 1] = shade * 0.95;
    colors[i3 + 2] = shade * 0.88;

    velocities.push({
      x: (Math.random() - 0.5) * 0.008,
      y: (Math.random() - 0.5) * 0.008 + 0.003,
      z: (Math.random() - 0.5) * 0.008
    });
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: isMobile ? 0.12 : 0.15,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // --- Connecting Lines (sparse) ---
  if (!isMobile) {
    const linePositions = [];
    const lineColors = [];
    const maxCheck = Math.min(particleCount, 200);
    for (let i = 0; i < maxCheck; i++) {
      for (let j = i + 1; j < maxCheck; j++) {
        const dx = positions[i*3] - positions[j*3];
        const dy = positions[i*3+1] - positions[j*3+1];
        const dz = positions[i*3+2] - positions[j*3+2];
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < 4 && Math.random() > 0.85) {
          linePositions.push(positions[i*3], positions[i*3+1], positions[i*3+2]);
          linePositions.push(positions[j*3], positions[j*3+1], positions[j*3+2]);
          const a = 0.08;
          lineColors.push(0.78*a, 0.76*a, 0.72*a, 0.78*a, 0.76*a, 0.72*a);
        }
      }
    }
    if (linePositions.length > 0) {
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
      const lineMat = new THREE.LineBasicMaterial({ 
        vertexColors: true, transparent: true, opacity: 0.15, 
        blending: THREE.AdditiveBlending 
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);
    }
  }

  camera.position.z = 30;

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Scroll-based parallax
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  function animate() {
    requestAnimationFrame(animate);
    const t = Date.now() * 0.001;

    // Float particles upward with gentle drift
    const pos = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      pos[i3]     += velocities[i].x;
      pos[i3 + 1] += velocities[i].y;
      pos[i3 + 2] += velocities[i].z;

      // Wrap around boundaries
      if (pos[i3 + 1] > 25) pos[i3 + 1] = -25;
      if (pos[i3] > 25) pos[i3] = -25;
      if (pos[i3] < -25) pos[i3] = 25;
      if (pos[i3 + 2] > 25) pos[i3 + 2] = -25;
      if (pos[i3 + 2] < -25) pos[i3 + 2] = 25;

      // Gentle wave motion
      pos[i3] += Math.sin(t * 0.3 + i * 0.1) * 0.002;
      pos[i3 + 2] += Math.cos(t * 0.2 + i * 0.1) * 0.002;
    }
    geometry.attributes.position.needsUpdate = true;

    // Slow rotation
    points.rotation.y += 0.0003;
    points.rotation.x = Math.sin(t * 0.1) * 0.05;

    // Mouse parallax
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.01;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.01;

    // Scroll parallax
    points.position.y = scrollY * 0.01;

    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
