import * as THREE from 'three';


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry( 1, 3, 1 );
let material = new THREE.MeshBasicMaterial( { color: 0xF0ff00 } );
const cube = new THREE.Mesh( geometry, material );

camera.position.set(0, 0, 10);

camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

scene.add(cube);

material = new THREE.LineBasicMaterial({color: 0x00f0f0})

const points = [];

points.push(new THREE.Vector3(-1, 0, 0));
points.push(new THREE.Vector3(0, 1, 0));
points.push(new THREE.Vector3(1, 0, 0));

geometry = new THREE.BufferGeometry().setFromPoints(points);

let line = new THREE.Line(geometry, material);

scene.add(line);

renderer.render(scene, camera);


function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    

	renderer.render( scene, camera );
}

animate();