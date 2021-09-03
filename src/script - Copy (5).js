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

// Ground grid helper
const size = 100
const divisions = 100
const gridHelper = new THREE.GridHelper(size, divisions)
scene.add(gridHelper)

// create 3 plasma stream instances
var plasmaCircleGroup = new THREE.Group();
var plasmaGroup = new THREE.Group();
var plasmaGroup2 = new THREE.Group();

var plasmaConduitArray = [];
var plasmaGroupArray = [];
var mesh, mesh2, mesh3, pivot, pivot2, pivot3

var amount = parseInt( window.location.search.substr( 1 ) ) || 10;
var count = Math.pow( amount, 3 );
var dummy = new THREE.Object3D();
var matrix = new THREE.Matrix4();
var position = new THREE.Vector3();
console.log(count)

var loader = new THREE.BufferGeometryLoader();
loader.load( './round.json', function ( geometry ) {

  geometry.computeVertexNormals();
  geometry.scale( 0.5, 0.5, 0.5 );

  var material = new THREE.MeshNormalMaterial();

  mesh2 = new THREE.InstancedMesh( geometry, material, count );
  mesh2.instanceMatrix.setUsage( THREE.DynamicDrawUsage ); // will be updated every frame
  scene.add( mesh2 );
  
  var i = 0;
  var offset = ( amount - 1 ) / 2;

  for ( var x = 0; x < amount; x ++ ) {

    for ( var y = 0; y < amount; y ++ ) {

      for ( var z = 0; z < amount; z ++ ) {
        dummy.rotation.set(offset - x, 0, 0)
        dummy.position.set( offset - x, offset - y, offset - z );
        dummy.updateMatrix();

        mesh2.setMatrixAt( i ++, dummy.matrix );

      }

    }

  }

} );





for(var p=1; p<=360; p+=1)
{
  console.log("\n\n")
  console.log("#############  plasmaGroup count - ", p, "  #############")
  // redPlasmaMesh
  const redPlasmaGeometry = new THREE.CylinderGeometry(1, 1, 1, 32)
  const redPlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
  var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
  var redPlasmaMesh = new THREE.Mesh(redPlasmaGeometry, redPlasmaMaterial)
  redPlasmaMesh.position.set( Math.cos(r) * radius, p, Math.sin(r) * radius )
  // redPlasmaMesh.rotation.x = (r * ((Math.PI / 2) / 90))
  // redPlasmaMesh.rotation.y = (r * ((Math.PI / 2) / 90))
  // redPlasmaMesh.rotation.z = (r * ((Math.PI / 2) / 90))
  console.log("redPlasmaGeometry")
  console.log("count - p", p)
  console.log("instance - i", i)
  console.log("rotation - r", r)
  plasmaGroup.add(redPlasmaMesh)

  // greenPlasmaMesh
  const greenPlasmaGeometry = new THREE.CylinderGeometry(1, 1, 1, 32)
  const greenPlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
  var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
  var greenPlasmaMesh = new THREE.Mesh(greenPlasmaGeometry, greenPlasmaMaterial)
  greenPlasmaMesh.position.set( Math.cos(r) * radius, p, Math.sin(r) * radius )
  // greenPlasmaMesh.rotation.x = (r * ((Math.PI / 2) / 90))
  // greenPlasmaMesh.rotation.y = (r * ((Math.PI / 2) / 90))
  // greenPlasmaMesh.rotation.z = (r * ((Math.PI / 2) / 90))
  console.log("greenPlasmaGeometry")
  console.log("count - p", p)
  console.log("instance - i", i)
  console.log("rotation - r", r)
  plasmaGroup.add(greenPlasmaMesh)

  // bluePlasmaMesh
  const bluePlasmaGeometry = new THREE.CylinderGeometry(1, 1, 1, 32)
  const bluePlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
  var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
  var bluePlasmaMesh = new THREE.Mesh(bluePlasmaGeometry, bluePlasmaMaterial)
  bluePlasmaMesh.position.set( Math.cos(r) * radius, p, Math.sin(r) * radius)
  // bluePlasmaMesh.rotation.x = (r * ((Math.PI / 2) / 90))
  // bluePlasmaMesh.rotation.y = (r * ((Math.PI / 2) / 90))
  // bluePlasmaMesh.rotation.z = (r * ((Math.PI / 2) / 90))
  console.log("bluePlasmaGeometry")
  console.log("count - p", p)
  console.log("instance - i", i)
  console.log("rotation - r", r)
  plasmaGroup.add(bluePlasmaMesh)

  // changing position and rotatio n of the group
  //plasmaGroup.position.set(0, 0, 0)

  plasmaGroup.rotation.x = Math.PI / 180 * p
  plasmaGroup.rotation.z = Math.PI / 180 * p
  //plasmaGroup.rotation.y = (p * ((Math.PI / 2) / 90))
//   plasmaGroup2.add(plasmaGroup)
//   plasmaGroup2.position.set(0, 0, 0);
// plasmaGroup2.rotation.x = (p * ((Math.PI / 2) / 90));
  // mesh = plasmaGroup.clone();
  // console.log(mesh.position.x,mesh.position.y,mesh.position.z)
  // pivot = new THREE.Object3D()
  // pivot.add(mesh)
  // mesh.position.set(new THREE.Vector3(2,0,0))
  // pivot.rotation.x = (p * ((Math.PI / 2) / 90))
  // console.log(pivot.position.z)
  // pivot2 = new THREE.Object3D()
  // pivot2.add(pivot)
  // pivot.position.set(new THREE.Vector3(4,0,0))
  //pivot2.rotation.y = (p * ((Math.PI / 2) / 90))
  
  scene.add(plasmaGroup)

//   // pivot3 = new THREE.Object3D()
//   // pivot3.add(pivot2)
//   // pivot2.position.set(new THREE.Vector3(10,0,0))
//   // pivot3.rotation.y = (p * ((Math.PI / 2) / 90)) 



//   // mesh = plasmaGroup.clone();
//   // mesh.position.set(0, 0, 0);
//   // mesh.rotation.x = (p * ((Math.PI / 2) / 90))


//   // mesh2 = mesh.clone();
//   // mesh2.position.set(0, 0, 0);
//   // mesh2.rotation.y = (p * ((Math.PI / 2) / 90))

//   // mesh3 = mesh2.clone();
//   // mesh3.position.x = (Math.sin((p * ((Math.PI / 2) / 90) ))) * 10;
//   // mesh3.position.z = (Math.cos((p * ((Math.PI / 2) / 90) ))) * 10;
//   // scene.add(mesh2);
// }

// // // Mesh cloned a bunch of times from original
// // var i = 0, mesh, rad, x, z;
// // while (i < 360) {
// //     //plasmaCircleGroup.clone();
// //     mesh = plasmaGroup.clone();
// //     mesh.rotation.x = (i * ((Math.PI / 2) / 90))
// //     plasmaCircleGroup.add(mesh)
// //     plasmaCircleGroup.position.set(0, 0, 0);
// //     // changes made to position and rotation to not effect original
// //     //rad = Math.PI * 2 * (i / 10);
// //     // x = Math.cos(rad) * 3;
// //     //z = Math.sin(rad) * 3;
// //     mesh.position.x = (Math.sin((i * ((Math.PI / 2) / 90) ))) * 10;
// //     mesh.position.z = (Math.cos((i * ((Math.PI / 2) / 90) ))) * 10;
// //     //mesh.position.set((i/10), 0, z);
// //     // mesh.lookAt(plasmaGroup.position);
// //     mesh.rotation.y = (i * ((Math.PI / 2) / 90))
// //     scene.add(mesh);
// //     i += 10;
// // }






// // var plasmaConduitArray = [];
// // var countBob = 10 / 7
// // var deg = 1
// //     var plasmaConduitGroup = new THREE.Group();
// // for( var w = 1; w <= 7; w++ )
// // {
// //   for (var q = 0; q <= (360 * ((Math.PI / 2) / 90)); q += (10 * ((Math.PI / 2) / 90))) {
// //     // groups
// //     var plasmaGroup = new THREE.Group();

// //     // redPlasmaMesh
// //     const redPlasmaGeometry = new THREE.CylinderGeometry(1, 1, 1, 32)
// //     const redPlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// //     var i = 0, radius = 2, count = 3, r = Math.PI * 2 / count * i
// //     var redPlasmaMesh = new THREE.Mesh(redPlasmaGeometry, redPlasmaMaterial)
// //     redPlasmaMesh.position.set(
// //       Math.cos(r) * radius,
// //       0,
// //       Math.sin(r) * radius)
// //     // add mesh to the group
// //     plasmaGroup.add(redPlasmaMesh)

// //     // greenPlasmaMesh
// //     const greenPlasmaGeometry = new THREE.CylinderGeometry(1, 1, 1, 32)
// //     const greenPlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
// //     var i = 1, radius = 2, count = 3, r = Math.PI * 2 / count * i
// //     var greenPlasmaMesh = new THREE.Mesh(greenPlasmaGeometry, greenPlasmaMaterial)
// //     greenPlasmaMesh.position.set(
// //       Math.cos(r) * radius,
// //       0,
// //       Math.sin(r) * radius)
// //     // add mesh to the group
// //     plasmaGroup.add(greenPlasmaMesh)

// //     // bluePlasmaMesh
// //     const bluePlasmaGeometry = new THREE.CylinderGeometry(1, 1, 1, 32)
// //     const bluePlasmaMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
// //     var i = 2, radius = 2, count = 3, r = Math.PI * 2 / count * i
// //     var bluePlasmaMesh = new THREE.Mesh(bluePlasmaGeometry, bluePlasmaMaterial)
// //     bluePlasmaMesh.position.set(
// //       Math.cos(r) * radius,
// //       0,
// //       Math.sin(r) * radius)
// //     // add mesh to the group
// //     plasmaGroup.add(bluePlasmaMesh)

// //     // changing position and rotatio n of the group
// //     plasmaGroup.position.set(0, 0, 0);
// //     plasmaGroup.rotation.z = Math.PI / 180 * 90;

// //     plasmaGroup.rotation.x = q;
// //     plasmaGroup.position.x = (Math.sin((countBob * ((Math.PI / 2) / 90) ))) * 28;
// //     plasmaGroup.position.z = (Math.cos((countBob * ((Math.PI / 2) / 90) ))) * 28;
      
// //     plasmaGroup.rotation.y = (countBob * ((Math.PI / 2) / 90));
// //     plasmaConduitGroup.add(plasmaGroup);

// //     plasmaConduitGroup.scale.x = .1
// //     plasmaConduitGroup.scale.y = .1
// //     plasmaConduitGroup.scale.z = .1

// //     plasmaConduitArray.push(plasmaConduitGroup)
// //     countBob += 10 / 7
// //   }
// // }

// // plasmaConduitArray.forEach(element => {
// //  //element.rotation.y = (countBob * ((Math.PI / 2) / 90))
  
// //   scene.add(element)
// // });



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

// const plasmaGroupFolder = gui.addFolder('plasmaGroup')
// plasmaGroupFolder.add(plasmaGroup.position, 'x', -10, 10).name('x position')
// plasmaGroupFolder.add(plasmaGroup.position, 'y', -10, 10).name('y position')
// plasmaGroupFolder.add(plasmaGroup.position, 'z', -10, 10).name('z position')
// plasmaGroupFolder.add(plasmaGroup.scale, 'x', 0.1, 1.5).name('x scale')
// plasmaGroupFolder.add(plasmaGroup.scale, 'y', 0.1, 1.5).name('y scale')
// plasmaGroupFolder.add(plasmaGroup.scale, 'z', 0.1, 1.5).name('z scale')
// plasmaGroupFolder.add(plasmaGroup.rotation, "x", 0, Math.PI * 2, 0.01).name('x rotation')
// plasmaGroupFolder.add(plasmaGroup.rotation, "y", 0, Math.PI * 2, 0.01).name('y rotation')
// plasmaGroupFolder.add(plasmaGroup.rotation, "z", 0, Math.PI * 2, 0.01).name('z rotation')
// plasmaGroupFolder.close()

const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'x', -10, 10)
cameraFolder.add(camera.position, 'y', -10, 10)
cameraFolder.add(camera.position, 'z', -10, 10)
cameraFolder.close()

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
	if ( mesh2 ) {

		mesh2.getMatrixAt( 0, matrix );
		
		position.setFromMatrixPosition( matrix ); // extract position form transformationmatrix
		position.x += 0.01; // move
		matrix.setPosition( position ); // write new positon back
		
		mesh2.setMatrixAt( 0, matrix );
		
		mesh2.instanceMatrix.needsUpdate = true;

	}
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