import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// helpers
const size = 10
const divisions = 10

const gridHelper = new THREE.GridHelper(size, divisions)
scene.add(gridHelper)

var countBob = -1.8
var plasmaConduitArray = [];
for (var q = 0; q <= (360 * ((Math.PI / 2) / 90)); q += (1 * ((Math.PI / 2) / 90))) {
  // groups
  var plasmaGroup = new THREE.Group();
  var plasmaConduitGroup = new THREE.Group();

  // redPlasmaMesh
  const redPlasmaGeometry = new THREE.CylinderGeometry(1, 1, .1, 32)
  const redPlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
  var i = 0, radius = 2, count = 3, r = Math.PI * 2 / count * i
  var redPlasmaMesh = new THREE.Mesh(redPlasmaGeometry, redPlasmaMaterial)
  redPlasmaMesh.position.set(
    Math.cos(r) * radius,
    0,
    Math.sin(r) * radius)
  // add mesh to the group
  plasmaGroup.add(redPlasmaMesh)

  // greenPlasmaMesh
  const greenPlasmaGeometry = new THREE.CylinderGeometry(1, 1, .1, 32)
  const greenPlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
  var i = 1, radius = 2, count = 3, r = Math.PI * 2 / count * i
  var greenPlasmaMesh = new THREE.Mesh(greenPlasmaGeometry, greenPlasmaMaterial)
  greenPlasmaMesh.position.set(
    Math.cos(r) * radius,
    0,
    Math.sin(r) * radius)
  // add mesh to the group
  plasmaGroup.add(greenPlasmaMesh)

  // bluePlasmaMesh
  const bluePlasmaGeometry = new THREE.CylinderGeometry(1, 1, .1, 32)
  const bluePlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
  var i = 2, radius = 2, count = 3, r = Math.PI * 2 / count * i
  var bluePlasmaMesh = new THREE.Mesh(bluePlasmaGeometry, bluePlasmaMaterial)
  bluePlasmaMesh.position.set(
    Math.cos(r) * radius,
    0,
    Math.sin(r) * radius)
  // add mesh to the group
  plasmaGroup.add(bluePlasmaMesh)

  // changing position and rotation of the group
  plasmaGroup.position.set(0, 0, 0);
  plasmaGroup.rotation.z = Math.PI / 180 * 90;

  plasmaGroup.rotation.x = q;
  plasmaGroup.position.x = countBob;
    
  plasmaConduitGroup.add(plasmaGroup);

  plasmaConduitGroup.scale.x = .1
  plasmaConduitGroup.scale.y = .1
  plasmaConduitGroup.scale.z = .1

  plasmaConduitArray.push(plasmaConduitGroup)
  
  countBob += 0.1
}

plasmaConduitArray.forEach(element => {
  scene.add(element)
});



// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)


camera.position.x = 1.8983228259303235
camera.position.y = 4.493543036151675
camera.position.z = 1.93908140545973
scene.add(camera)

const stats = Stats()
document.body.appendChild(stats.dom)

const gui = new GUI()

// const redPlasmaFolder = gui.addFolder('Red Plasma')
// redPlasmaFolder.add(redPlasmaSvgGroup.position, 'x', -10, 10).name('x position')
// redPlasmaFolder.add(redPlasmaSvgGroup.position, 'y', -10, 10).name('y position')
// redPlasmaFolder.add(redPlasmaSvgGroup.position, 'z', -10, 10).name('z position')
// redPlasmaFolder.add(redPlasmaSvgGroup.scale, 'x', 0.1, 1.5).name('x scale')
// redPlasmaFolder.add(redPlasmaSvgGroup.scale, 'y', 0.1, 1.5).name('y scale')
// redPlasmaFolder.add(redPlasmaSvgGroup.scale, 'z', 0.1, 1.5).name('z scale')
// redPlasmaFolder.add(redPlasmaSvgGroup.rotation, "x", 0, Math.PI * 2, 0.01).name('x rotation')
// redPlasmaFolder.add(redPlasmaSvgGroup.rotation, "y", 0, Math.PI * 2, 0.01).name('y rotation')
// redPlasmaFolder.add(redPlasmaSvgGroup.rotation, "z", 0, Math.PI * 2, 0.01).name('z rotation')
// redPlasmaFolder.close()

const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'x', -10, 10)
cameraFolder.add(camera.position, 'y', -10, 10)
cameraFolder.add(camera.position, 'z', -10, 10)
cameraFolder.open()

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  rotate: true,
  antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x000000, 0)

// Animate
const clock = new THREE.Clock()

var SPEED = 0.01;

function rotatePlasma() {
  plasmaGroup.rotation.x += SPEED;
  if (plasmaGroup.rotation.x >= (360 * ((Math.PI / 2) / 90))) {
    plasmaGroup.rotation.x = 0
  }
}

const tick = () => {
  //requestAnimationFrame(tick) 

  //rotatePlasma()
  // Update controls 
  stats.update()
  controls.update()
  //console.log(plasmaGroup.rotation.x)
  //console.log((1 * (( Math.PI / 2 ) / 90)))
  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()