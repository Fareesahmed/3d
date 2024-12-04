// main.js

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Create rotating objects
const objects = [];

// Sphere
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347 }); // Tomato color
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = -4;
scene.add(sphere);
objects.push(sphere);

// Cube
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x3498db }); // Blue color
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = 0;
scene.add(cube);
objects.push(cube);

// Pyramid (Tetrahedron)
const pyramidGeometry = new THREE.TetrahedronGeometry(1.5);
const pyramidMaterial = new THREE.MeshStandardMaterial({ color: 0x2ecc71 }); // Green color
const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
pyramid.position.x = 4;
scene.add(pyramid);
objects.push(pyramid);

// Position the camera
camera.position.z = 7;

// Handle window resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the objects
  objects.forEach((obj) => {
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01;
  });

  renderer.render(scene, camera);
}
animate();
