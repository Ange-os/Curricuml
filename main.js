import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.module.js'; // Importa Three.js desde un CDN
import { OctahedronGeometry } from 'three';


// Obtiene el contenedor de la animación
const animationContainer = document.getElementById('animation');

// Obtiene las dimensiones del contenedor
const width = animationContainer.clientWidth;
const height = animationContainer.clientHeight;

// Configura la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, width / height, 0.400, 1000);
camera.position.z = 3.2;

// Configura el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
animationContainer.appendChild(renderer.domElement);

let targetX = 0;
let targetY = 0;

window.addEventListener('scroll', function(){
    const scrollPositionY = this.window.scrollY;
    const elementRact = animationContainer.getBoundingClientRect();
    const elementTop = elementRact.top + scrollPositionY;
    const elementButton = elementRact.bottom + scrollPositionY;
    const windowHeight = this.window.innerHeight;
    const halfWindowHeight = windowHeight/2

    if(elementTop < scrollPositionY + halfWindowHeight && halfWindowHeight && elementButton > scrollPositionY+halfWindowHeight){
        // Calcula el desplazamiento basado en el scroll
        const displacementX = scrollPositionY * 0.002; // Cambia 0.1 por el valor que desees
        const displacementY = scrollPositionY * 0.3; 
        targetX = -displacementX;
        targetY =  500 - displacementY * 0.1;
    } else {
        if(scrollPositionY < 600){
            targetX = 1
        }else{
            targetY = -4
        }
    }

});

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(-5,5,5)
scene.add( directionalLight );

const sphereGeometry = new THREE.SphereGeometry(0.6, 10, 60);
const othergeometry = new THREE.OctahedronGeometry(1.4,20,4,10,20,20)
const material2 = new THREE.MeshStandardMaterial({ color: 0x13ff24, wireframe: true });

const octa = new THREE.Mesh(othergeometry, material2);
const sphere = new THREE.Mesh(sphereGeometry, material2)

scene.add(octa);
scene.add(sphere)
// Función de animación
function animate() {
    requestAnimationFrame(animate);

    octa.position.x = THREE.MathUtils.lerp(octa.position.x, targetX, 0.05);
    sphere.position.x = THREE.MathUtils.lerp(sphere.position.x, targetX, 0.05);
    directionalLight.position.y = THREE.MathUtils.lerp(directionalLight.position.y, targetY, 0.02);

    octa.rotation.y += 0.02,
    sphere.rotation.x += 0.02,
    renderer.render(scene, camera);
};
animate();