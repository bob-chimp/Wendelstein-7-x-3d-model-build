import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { SVGRenderer, SVGObject } from 'three/examples/jsm/renderers/SVGRenderer.js';
import { TorusGeometry } from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

for (var w = 1; w < 37; w++) 
{
  const k = w * 10
  const svgMarkup = document.getElementById('segments'+w).outerHTML;
  console.log(svgMarkup)
  const loader = new SVGLoader();
  const svgData = loader.parse(svgMarkup);
  console.log(svgData)
  // Group that will contain all of our paths
  const svgGroup = new THREE.Group();

  const material = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true })

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
        mesh.rotation.y = (k + p) * (( Math.PI / 2 ) / 90)
        svgGroup.add(mesh);
      }
    });
  });
  
  svgGroup.scale.x = .01
  svgGroup.scale.y = .01
  svgGroup.scale.z = .01
  scene.add(svgGroup)
}


for (var w = 1; w < 37; w++) 
{
  const k = w * 10
  const svgId = 'greenPlasmaFlow'+w
  const svgMarkup = document.getElementById('greenPlasmaFlow'+w).outerHTML;
  console.log(svgMarkup)
  const loader = new SVGLoader();
  const svgData = loader.parse(svgMarkup);
  console.log(svgData)
  // Group that will contain all of our paths
  const svgGroup = new THREE.Group();

  const material = new THREE.MeshBasicMaterial({ color: 0x33ff33, wireframe: true })

  // Loop through all of the parsed paths
  svgData.paths.forEach((path, i) => {
    const shapes = path.toShapes(true);

    // Each path has array of shapes
    shapes.forEach((shape, j) => {
      // Finally we can take each shape and extrude it
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 1,
        bevelEnabled: false
      });
      for ( var p = 0; p < 10; p++ )
      {
        // Create a mesh and add it to the group
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.y = (k + p) * (( Math.PI / 2 ) / 90)
        svgGroup.add(mesh);
        console.log(k, p)
      }
    });
  });
  
  svgGroup.scale.x = .01
  svgGroup.scale.y = .01
  svgGroup.scale.z = .01
  scene.add(svgGroup)
}


for (var w = 1; w < 37; w++) 
{
  const k = w * 10
  const svgId = 'redPlasmaFlow'+w
  const svgMarkup = document.getElementById('redPlasmaFlow'+w).outerHTML;
  console.log(svgMarkup)
  const loader = new SVGLoader();
  const svgData = loader.parse(svgMarkup);
  console.log(svgData)
  // Group that will contain all of our paths
  const svgGroup = new THREE.Group();

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
        mesh.rotation.y = (k + p) * (( Math.PI / 2 ) / 90)
        svgGroup.add(mesh);
      }
    });
  });
  
  svgGroup.scale.x = .01
  svgGroup.scale.y = .01
  svgGroup.scale.z = .01
  scene.add(svgGroup)
}

// heptagon path

function  createShapes () 
{ 
  let dataString = getSvgData()   
  let shape = transformToShapePath (dataString) 
  let geometry = new THREE.ShapeGeometry (shape)
  let material = new THREE.LineBasicMaterial ( { 
    color: 0x999999,
    linewidth: 1 })
  let mesh = new THREE.Line(geometry, material)
  
  mesh.scale.x = 5
  mesh.scale.y = 5
  mesh.scale.z = 5
  scene.add (mesh)
  //camera.lookAt (mesh.position)
  console.log(dataString, shape, mesh)
  var box = new THREE.Box3().setFromObject( mesh )
  console.log( mesh.position.x, mesh.position.y, mesh.position.z )
}

//Get svg data
function getSvgData () 
{ 
  let svgData = "M35,67.9h-9.7c-3.6,0-7-1.6-9.2-4.4l-12-15.1c-2.2-2.8-3.1-6.5-2.3-10 l4.3-18.8c0.8-3.5,3.1-6.4,6.4-8l17.4-8.4c3.2-1.6,7-1.6,10.2,0l17.4,8.4c3.2,1.6,5.6,4.5,6.4,8l4.3,18.8c0.8,3.5,0,7.2-2.3,10 l-12,15.1c-2.2,2.8-5.6,4.4-9.2,4.4H35"
  return svgData;
}

//Convert to ShapePath means 
function  transformToShapePath (dataString) 
{ 
  let path = new THREE.ShapePath ();
   let dataArr = dataString.split ( "" )
   var currIndex = 0
   while (currIndex <dataArr.length) 
   {
      let command = dataArr [currIndex] [ 0 ]
      switch (command) 
      {
        case  'M' : {
          let inc = moveParse (currIndex, dataArr, path)
          currIndex += inc;
          break;
        }
        case  'C' : {
          let inc = curveParse (currIndex, dataArr, path)
          currIndex += inc
          break;
        }
        default : {
          //Error handling
          currIndex ++
        }
     }
  }
  return path.toShapes () [ 0 ]
}

/************** The following are converters for various commands ****************/

//moveTo command converter 
function  moveParse (currIndex , dataArr, path) 
{ 
  let paramsLength = 2
  let data = [dataArr [currIndex] .substring ( 1 ), dataArr [currIndex + 1 ]]
  toThreejsCoor (data)
  path.moveTo (data [ 0 ], data [ 1 ])
  return paramsLength
}

//Curve command converter 
function  curveParse (currIndex, dataArr, path) 
{ 
  let paramsLength = 6 ; // Number of required parameters 
  let data = [
    dataArr [currIndex] .substring ( 1 ),
    dataArr [currIndex + 1 ],
    dataArr [currIndex + 2 ],
    dataArr [currIndex + 3 ],
    dataArr [currIndex + 4 ],
    dataArr [currIndex + 5 ]
  ]
  toThreejsCoor (data)
  path.bezierCurveTo (data [ 0 ], data [ 1 ], data [ 2 ], data [ 3 ], data [ 4 ], data [ 5 ])
  return paramsLength
}

//Screen coordinates to threejs coordinates 
function  toThreejsCoor (data) 
{ 
  for ( let i = 0 ; i <data.length; i += 2 ) 
  {
    data [i] = data [i]-window.innerWidth/2
    data [i + 1 ] = window.innerHeight/2 -data [i + 1 ]
  }
}

// INIT HEPTAGONAL 
createShapes()

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

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor( 0x000000, 0 )

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()
    //console.log(camera.getWorldPosition())
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()