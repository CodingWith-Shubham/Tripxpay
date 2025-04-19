import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Earth3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0x404040)); // soft light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Texture Loader
    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load('/earthcartoon.jpg');
    const bumpMap = loader.load('/earthbump.jpg');
    // const specularMap = loader.load('/earthspecular.jpg');

    // Earth Mesh
    const geometry = new THREE.SphereGeometry(1.2, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: bumpMap,
      bumpScale: 0.05,
    //   specularMap: specularMap,
      emissive: new THREE.Color(0x111111), // subtle brightness
      emissiveIntensity: 0.5               // tweak as needed
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;  // disable scroll zoom
    controls.enablePan = false;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.005;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '450px' }} />;
}
