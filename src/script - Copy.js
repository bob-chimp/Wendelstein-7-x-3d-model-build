import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { SVGRenderer, SVGObject } from 'three/examples/jsm/renderers/SVGRenderer.js';
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// groups
const machineTotalGroup = new THREE.Group();
const segmentsSvgGroup = new THREE.Group();

for (var w = 1; w < 2; w++) 
{
  const k = w * 10
  const svgMarkup = document.getElementById('segments'+w).outerHTML
  console.log(svgMarkup)
  const loader = new SVGLoader()
  const svgData = loader.parse(svgMarkup)
  console.log(svgData)

  // Group that will contain all of our paths
  //const segmentsSvgGroup = new THREE.Group();

  const material = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true })

  // Loop through all of the parsed paths
  svgData.paths.forEach((path, i) => 
  {
    const shapes = path.toShapes(true)

    // Each path has array of shapes
    shapes.forEach((shape, j) => {
      // Finally we can take each shape and extrude it
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 5,
        bevelEnabled: false
      });
      for ( var p = 0; p < 10; p++ )
      {
        // Create a mesh and add it to the group
        const mesh = new THREE.Mesh(geometry, material);
        // mesh.scale.x = .01
        // mesh.scale.y = .01
        // mesh.scale.z = .01
        mesh.rotation.y = (k + p) * (( Math.PI / 2 ) / 90)
        segmentsSvgGroup.add(mesh);
        //svgGroup.add(mesh);
      }
    });
  });
  
  machineTotalGroup.add(segmentsSvgGroup)
}

// groups


const greenPlasmaSvgGroup = new THREE.Group();

for (var w = 1; w < 2; w++) 
{
  const k = w * 10
  const svgId = 'greenPlasmaFlow'+w
  const svgMarkup = document.getElementById('greenPlasmaFlow1').outerHTML;
  console.log(svgMarkup)
  const loader = new SVGLoader();
  const svgData = loader.parse(svgMarkup);
  console.log(svgData)


  const material = new THREE.MeshBasicMaterial({ color: 0x33ff33, wireframe: true })

  // Loop through all of the parsed paths
  svgData.paths.forEach((path, i) => {
    const shapes = path.toShapes(true);

    // Each path has array of shapes
    shapes.forEach((shape, j) => {
      // Finally we can take each shape and extrude it
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 5,
        bevelEnabled: false
      });
      for ( var p = 0; p < 10; p++ )
      {
        // Create a mesh and add it to the group
        const mesh = new THREE.Mesh(geometry, material);
        // mesh.scale.x = .01
        // mesh.scale.y = .01
        // mesh.scale.z = .01
        mesh.rotation.y = (k + p) * (( Math.PI / 2 ) / 90)
        mesh.rotation.z = (k + p) * (( Math.PI / 2 ) / 90)
        mesh.rotation.x = (k + p) * (( Math.PI / 2 ) / 90)
        greenPlasmaSvgGroup.add(mesh);
      }
    });
  });
  
  machineTotalGroup.add(greenPlasmaSvgGroup)
}

const redPlasmaSvgGroup = new THREE.Group();

for (var w = 1; w < 2; w++) 
{
  const k = w * 10
  const svgId = 'redPlasmaFlow'+w
  const svgMarkup = document.getElementById('redPlasmaFlow'+w).outerHTML;
  console.log(svgMarkup)
  const loader = new SVGLoader();
  const svgData = loader.parse(svgMarkup);
  console.log(svgData)


  const material = new THREE.MeshBasicMaterial({ color: 0xff3333, wireframe: true })

  // Loop through all of the parsed paths
  svgData.paths.forEach((path, i) => {
    const shapes = path.toShapes(true);

    // Each path has array of shapes
    shapes.forEach((shape, j) => {
      // Finally we can take each shape and extrude it
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 5,
        bevelEnabled: false
      });
      for ( var p = 0; p < 10; p++ )
      {
        // Create a mesh and add it to the group
        const mesh = new THREE.Mesh(geometry, material);
        // mesh.scale.x = .01
        // mesh.scale.y = .01
        // mesh.scale.z = .01
        mesh.rotation.y = (k + p) * (( Math.PI / 2 ) / 90)
        redPlasmaSvgGroup.add(mesh);
      }
    });
  });
  
  machineTotalGroup.add(redPlasmaSvgGroup)
}

machineTotalGroup.scale.x = .01
machineTotalGroup.scale.y = .01
machineTotalGroup.scale.z = .01
scene.add(machineTotalGroup)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
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
const machineTotalGroupFolder = gui.addFolder('Adjust all objects')
machineTotalGroupFolder.add(machineTotalGroup.position, 'x', -10, 10).name('x position')
machineTotalGroupFolder.add(machineTotalGroup.position, 'y', -10, 10).name('y position')
machineTotalGroupFolder.add(machineTotalGroup.position, 'z', -10, 10).name('z position')
machineTotalGroupFolder.add(machineTotalGroup.scale, 'x', 0.1, 1.5).name('x scale')
machineTotalGroupFolder.add(machineTotalGroup.scale, 'y', 0.1, 1.5).name('y scale')
machineTotalGroupFolder.add(machineTotalGroup.scale, 'z', 0.1, 1.5).name('z scale')
machineTotalGroupFolder.add(machineTotalGroup.rotation, "x", 0, Math.PI * 2, 0.01).name('x rotation')
machineTotalGroupFolder.add(machineTotalGroup.rotation, "y", 0, Math.PI * 2, 0.01).name('y rotation')
machineTotalGroupFolder.add(machineTotalGroup.rotation, "z", 0, Math.PI * 2, 0.01).name('z rotation')
machineTotalGroupFolder.open()

const outerPlasmaTubeFolder = gui.addFolder('Outer Plasma Tube')
outerPlasmaTubeFolder.add(segmentsSvgGroup.position, 'x', -10, 10).name('x position')
outerPlasmaTubeFolder.add(segmentsSvgGroup.position, 'y', -10, 10).name('y position')
outerPlasmaTubeFolder.add(segmentsSvgGroup.position, 'z', -10, 10).name('z position')
outerPlasmaTubeFolder.add(segmentsSvgGroup.scale, 'x', 0.1, 1.5).name('x scale')
outerPlasmaTubeFolder.add(segmentsSvgGroup.scale, 'y', 0.1, 1.5).name('y scale')
outerPlasmaTubeFolder.add(segmentsSvgGroup.scale, 'z', 0.1, 1.5).name('z scale')
outerPlasmaTubeFolder.add(segmentsSvgGroup.rotation, "x", 0, Math.PI * 2, 0.01).name('x rotation')
outerPlasmaTubeFolder.add(segmentsSvgGroup.rotation, "y", 0, Math.PI * 2, 0.01).name('y rotation')
outerPlasmaTubeFolder.add(segmentsSvgGroup.rotation, "z", 0, Math.PI * 2, 0.01).name('z rotation')
outerPlasmaTubeFolder.close()

const greenPlasmaFolder = gui.addFolder('Green Plasma')
greenPlasmaFolder.add(greenPlasmaSvgGroup.position, 'x', -10, 10).name('x position')
greenPlasmaFolder.add(greenPlasmaSvgGroup.position, 'y', -10, 10).name('y position')
greenPlasmaFolder.add(greenPlasmaSvgGroup.position, 'z', -10, 10).name('z position')
greenPlasmaFolder.add(greenPlasmaSvgGroup.scale, 'x', 0.1, 1.5).name('x scale')
greenPlasmaFolder.add(greenPlasmaSvgGroup.scale, 'y', 0.1, 1.5).name('y scale')
greenPlasmaFolder.add(greenPlasmaSvgGroup.scale, 'z', 0.1, 1.5).name('z scale')
greenPlasmaFolder.add(greenPlasmaSvgGroup.rotation, "x", 0, Math.PI * 2, 0.01).name('x rotation')
greenPlasmaFolder.add(greenPlasmaSvgGroup.rotation, "y", 0, Math.PI * 2, 0.01).name('y rotation')
greenPlasmaFolder.add(greenPlasmaSvgGroup.rotation, "z", 0, Math.PI * 2, 0.01).name('z rotation')
greenPlasmaFolder.close()

const redPlasmaFolder = gui.addFolder('Red Plasma')
redPlasmaFolder.add(redPlasmaSvgGroup.position, 'x', -10, 10).name('x position')
redPlasmaFolder.add(redPlasmaSvgGroup.position, 'y', -10, 10).name('y position')
redPlasmaFolder.add(redPlasmaSvgGroup.position, 'z', -10, 10).name('z position')
redPlasmaFolder.add(redPlasmaSvgGroup.scale, 'x', 0.1, 1.5).name('x scale')
redPlasmaFolder.add(redPlasmaSvgGroup.scale, 'y', 0.1, 1.5).name('y scale')
redPlasmaFolder.add(redPlasmaSvgGroup.scale, 'z', 0.1, 1.5).name('z scale')
redPlasmaFolder.add(redPlasmaSvgGroup.rotation, "x", 0, Math.PI * 2, 0.01).name('x rotation')
redPlasmaFolder.add(redPlasmaSvgGroup.rotation, "y", 0, Math.PI * 2, 0.01).name('y rotation')
redPlasmaFolder.add(redPlasmaSvgGroup.rotation, "z", 0, Math.PI * 2, 0.01).name('z rotation')
redPlasmaFolder.close()

const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'z', 0, 10)
cameraFolder.close()

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    rotate: true,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor( 0x000000, 0 )

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
  //requestAnimationFrame(tick)

    // Update controls
    stats.update()
    controls.update()
    //console.log(camera.getWorldPosition())
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()