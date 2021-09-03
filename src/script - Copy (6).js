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

const plasmaConduitGroup = new THREE.Group()

// plasmaGroup1		###############################################################################
const plasmaGroup1 = new THREE.Group()

const plasmaGroupB1 = new THREE.Group()

const plasmaGroupC1 = new THREE.Group()

// redPlasmaMesh1
const redPlasmaGeometry1 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh1 = new THREE.Mesh(redPlasmaGeometry1, redPlasmaMaterial1)
redPlasmaMesh1.position.set( (Math.cos((7 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((7 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup1.add(redPlasmaMesh1)

// greenPlasmaMesh1
const greenPlasmaGeometry1 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial1 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh1 = new THREE.Mesh(greenPlasmaGeometry1, greenPlasmaMaterial1)
greenPlasmaMesh1.position.set( (Math.cos((847 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((847 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup1.add(greenPlasmaMesh1)

// bluePlasmaMesh1
const bluePlasmaGeometry1 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial1 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh1 = new THREE.Mesh(bluePlasmaGeometry1, bluePlasmaMaterial1)
bluePlasmaMesh1.position.set( (Math.cos((1687 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1687 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup1.add(bluePlasmaMesh1)

plasmaGroup1.rotation.z = Math.PI / 180 * 90
plasmaGroupB1.add(plasmaGroup1)

plasmaGroupB1.rotation.y = (1 * ((Math.PI / 2) / 90))
plasmaGroupC1.add(plasmaGroupB1)

plasmaGroupC1.position.x = (Math.sin((1 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC1.position.z = (Math.cos((1 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC1)

// plasmaGroup2		###############################################################################
const plasmaGroup2 = new THREE.Group()

const plasmaGroupB2 = new THREE.Group()

const plasmaGroupC2 = new THREE.Group()

// redPlasmaMesh2
const redPlasmaGeometry2 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial2 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh2 = new THREE.Mesh(redPlasmaGeometry2, redPlasmaMaterial2)
redPlasmaMesh2.position.set( (Math.cos((14 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((14 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup2.add(redPlasmaMesh2)

// greenPlasmaMesh2
const greenPlasmaGeometry2 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh2 = new THREE.Mesh(greenPlasmaGeometry2, greenPlasmaMaterial2)
greenPlasmaMesh2.position.set( (Math.cos((854 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((854 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup2.add(greenPlasmaMesh2)

// bluePlasmaMesh2
const bluePlasmaGeometry2 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial2 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh2 = new THREE.Mesh(bluePlasmaGeometry2, bluePlasmaMaterial2)
bluePlasmaMesh2.position.set( (Math.cos((1694 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1694 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup2.add(bluePlasmaMesh2)

plasmaGroup2.rotation.z = Math.PI / 180 * 90
plasmaGroupB2.add(plasmaGroup2)

plasmaGroupB2.rotation.y = (2 * ((Math.PI / 2) / 90))
plasmaGroupC2.add(plasmaGroupB2)

plasmaGroupC2.position.x = (Math.sin((2 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC2.position.z = (Math.cos((2 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC2)

// plasmaGroup3		###############################################################################
const plasmaGroup3 = new THREE.Group()

const plasmaGroupB3 = new THREE.Group()

const plasmaGroupC3 = new THREE.Group()

// redPlasmaMesh3
const redPlasmaGeometry3 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial3 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh3 = new THREE.Mesh(redPlasmaGeometry3, redPlasmaMaterial3)
redPlasmaMesh3.position.set( (Math.cos((21 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((21 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup3.add(redPlasmaMesh3)

// greenPlasmaMesh3
const greenPlasmaGeometry3 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial3 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh3 = new THREE.Mesh(greenPlasmaGeometry3, greenPlasmaMaterial3)
greenPlasmaMesh3.position.set( (Math.cos((861 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((861 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup3.add(greenPlasmaMesh3)

// bluePlasmaMesh3
const bluePlasmaGeometry3 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial3 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh3 = new THREE.Mesh(bluePlasmaGeometry3, bluePlasmaMaterial3)
bluePlasmaMesh3.position.set( (Math.cos((1701 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1701 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup3.add(bluePlasmaMesh3)

plasmaGroup3.rotation.z = Math.PI / 180 * 90
plasmaGroupB3.add(plasmaGroup3)

plasmaGroupB3.rotation.y = (3 * ((Math.PI / 2) / 90))
plasmaGroupC3.add(plasmaGroupB3)

plasmaGroupC3.position.x = (Math.sin((3 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC3.position.z = (Math.cos((3 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC3)

// plasmaGroup4		###############################################################################
const plasmaGroup4 = new THREE.Group()

const plasmaGroupB4 = new THREE.Group()

const plasmaGroupC4 = new THREE.Group()

// redPlasmaMesh4
const redPlasmaGeometry4 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial4 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh4 = new THREE.Mesh(redPlasmaGeometry4, redPlasmaMaterial4)
redPlasmaMesh4.position.set( (Math.cos((28 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((28 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup4.add(redPlasmaMesh4)

// greenPlasmaMesh4
const greenPlasmaGeometry4 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial4 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh4 = new THREE.Mesh(greenPlasmaGeometry4, greenPlasmaMaterial4)
greenPlasmaMesh4.position.set( (Math.cos((868 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((868 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup4.add(greenPlasmaMesh4)

// bluePlasmaMesh4
const bluePlasmaGeometry4 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial4 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh4 = new THREE.Mesh(bluePlasmaGeometry4, bluePlasmaMaterial4)
bluePlasmaMesh4.position.set( (Math.cos((1708 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1708 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup4.add(bluePlasmaMesh4)

plasmaGroup4.rotation.z = Math.PI / 180 * 90
plasmaGroupB4.add(plasmaGroup4)

plasmaGroupB4.rotation.y = (4 * ((Math.PI / 2) / 90))
plasmaGroupC4.add(plasmaGroupB4)

plasmaGroupC4.position.x = (Math.sin((4 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC4.position.z = (Math.cos((4 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC4)

// plasmaGroup5		###############################################################################
const plasmaGroup5 = new THREE.Group()

const plasmaGroupB5 = new THREE.Group()

const plasmaGroupC5 = new THREE.Group()

// redPlasmaMesh5
const redPlasmaGeometry5 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial5 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh5 = new THREE.Mesh(redPlasmaGeometry5, redPlasmaMaterial5)
redPlasmaMesh5.position.set( (Math.cos((35 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((35 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup5.add(redPlasmaMesh5)

// greenPlasmaMesh5
const greenPlasmaGeometry5 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial5 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh5 = new THREE.Mesh(greenPlasmaGeometry5, greenPlasmaMaterial5)
greenPlasmaMesh5.position.set( (Math.cos((875 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((875 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup5.add(greenPlasmaMesh5)

// bluePlasmaMesh5
const bluePlasmaGeometry5 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial5 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh5 = new THREE.Mesh(bluePlasmaGeometry5, bluePlasmaMaterial5)
bluePlasmaMesh5.position.set( (Math.cos((1715 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1715 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup5.add(bluePlasmaMesh5)

plasmaGroup5.rotation.z = Math.PI / 180 * 90
plasmaGroupB5.add(plasmaGroup5)

plasmaGroupB5.rotation.y = (5 * ((Math.PI / 2) / 90))
plasmaGroupC5.add(plasmaGroupB5)

plasmaGroupC5.position.x = (Math.sin((5 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC5.position.z = (Math.cos((5 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC5)

// plasmaGroup6		###############################################################################
const plasmaGroup6 = new THREE.Group()

const plasmaGroupB6 = new THREE.Group()

const plasmaGroupC6 = new THREE.Group()

// redPlasmaMesh6
const redPlasmaGeometry6 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial6 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh6 = new THREE.Mesh(redPlasmaGeometry6, redPlasmaMaterial6)
redPlasmaMesh6.position.set( (Math.cos((42 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((42 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup6.add(redPlasmaMesh6)

// greenPlasmaMesh6
const greenPlasmaGeometry6 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial6 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh6 = new THREE.Mesh(greenPlasmaGeometry6, greenPlasmaMaterial6)
greenPlasmaMesh6.position.set( (Math.cos((882 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((882 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup6.add(greenPlasmaMesh6)

// bluePlasmaMesh6
const bluePlasmaGeometry6 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial6 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh6 = new THREE.Mesh(bluePlasmaGeometry6, bluePlasmaMaterial6)
bluePlasmaMesh6.position.set( (Math.cos((1722 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1722 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup6.add(bluePlasmaMesh6)

plasmaGroup6.rotation.z = Math.PI / 180 * 90
plasmaGroupB6.add(plasmaGroup6)

plasmaGroupB6.rotation.y = (6 * ((Math.PI / 2) / 90))
plasmaGroupC6.add(plasmaGroupB6)

plasmaGroupC6.position.x = (Math.sin((6 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC6.position.z = (Math.cos((6 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC6)

// plasmaGroup7		###############################################################################
const plasmaGroup7 = new THREE.Group()

const plasmaGroupB7 = new THREE.Group()

const plasmaGroupC7 = new THREE.Group()

// redPlasmaMesh7
const redPlasmaGeometry7 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial7 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh7 = new THREE.Mesh(redPlasmaGeometry7, redPlasmaMaterial7)
redPlasmaMesh7.position.set( (Math.cos((49 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((49 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup7.add(redPlasmaMesh7)

// greenPlasmaMesh7
const greenPlasmaGeometry7 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial7 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh7 = new THREE.Mesh(greenPlasmaGeometry7, greenPlasmaMaterial7)
greenPlasmaMesh7.position.set( (Math.cos((889 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((889 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup7.add(greenPlasmaMesh7)

// bluePlasmaMesh7
const bluePlasmaGeometry7 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial7 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh7 = new THREE.Mesh(bluePlasmaGeometry7, bluePlasmaMaterial7)
bluePlasmaMesh7.position.set( (Math.cos((1729 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1729 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup7.add(bluePlasmaMesh7)

plasmaGroup7.rotation.z = Math.PI / 180 * 90
plasmaGroupB7.add(plasmaGroup7)

plasmaGroupB7.rotation.y = (7 * ((Math.PI / 2) / 90))
plasmaGroupC7.add(plasmaGroupB7)

plasmaGroupC7.position.x = (Math.sin((7 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC7.position.z = (Math.cos((7 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC7)

// plasmaGroup8		###############################################################################
const plasmaGroup8 = new THREE.Group()

const plasmaGroupB8 = new THREE.Group()

const plasmaGroupC8 = new THREE.Group()

// redPlasmaMesh8
const redPlasmaGeometry8 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial8 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh8 = new THREE.Mesh(redPlasmaGeometry8, redPlasmaMaterial8)
redPlasmaMesh8.position.set( (Math.cos((56 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((56 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup8.add(redPlasmaMesh8)

// greenPlasmaMesh8
const greenPlasmaGeometry8 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial8 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh8 = new THREE.Mesh(greenPlasmaGeometry8, greenPlasmaMaterial8)
greenPlasmaMesh8.position.set( (Math.cos((896 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((896 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup8.add(greenPlasmaMesh8)

// bluePlasmaMesh8
const bluePlasmaGeometry8 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial8 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh8 = new THREE.Mesh(bluePlasmaGeometry8, bluePlasmaMaterial8)
bluePlasmaMesh8.position.set( (Math.cos((1736 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1736 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup8.add(bluePlasmaMesh8)

plasmaGroup8.rotation.z = Math.PI / 180 * 90
plasmaGroupB8.add(plasmaGroup8)

plasmaGroupB8.rotation.y = (8 * ((Math.PI / 2) / 90))
plasmaGroupC8.add(plasmaGroupB8)

plasmaGroupC8.position.x = (Math.sin((8 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC8.position.z = (Math.cos((8 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC8)

// plasmaGroup9		###############################################################################
const plasmaGroup9 = new THREE.Group()

const plasmaGroupB9 = new THREE.Group()

const plasmaGroupC9 = new THREE.Group()

// redPlasmaMesh9
const redPlasmaGeometry9 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial9 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh9 = new THREE.Mesh(redPlasmaGeometry9, redPlasmaMaterial9)
redPlasmaMesh9.position.set( (Math.cos((63 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((63 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup9.add(redPlasmaMesh9)

// greenPlasmaMesh9
const greenPlasmaGeometry9 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial9 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh9 = new THREE.Mesh(greenPlasmaGeometry9, greenPlasmaMaterial9)
greenPlasmaMesh9.position.set( (Math.cos((903 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((903 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup9.add(greenPlasmaMesh9)

// bluePlasmaMesh9
const bluePlasmaGeometry9 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial9 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh9 = new THREE.Mesh(bluePlasmaGeometry9, bluePlasmaMaterial9)
bluePlasmaMesh9.position.set( (Math.cos((1743 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1743 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup9.add(bluePlasmaMesh9)

plasmaGroup9.rotation.z = Math.PI / 180 * 90
plasmaGroupB9.add(plasmaGroup9)

plasmaGroupB9.rotation.y = (9 * ((Math.PI / 2) / 90))
plasmaGroupC9.add(plasmaGroupB9)

plasmaGroupC9.position.x = (Math.sin((9 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC9.position.z = (Math.cos((9 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC9)

// plasmaGroup10		###############################################################################
const plasmaGroup10 = new THREE.Group()

const plasmaGroupB10 = new THREE.Group()

const plasmaGroupC10 = new THREE.Group()

// redPlasmaMesh10
const redPlasmaGeometry10 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial10 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh10 = new THREE.Mesh(redPlasmaGeometry10, redPlasmaMaterial10)
redPlasmaMesh10.position.set( (Math.cos((70 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((70 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup10.add(redPlasmaMesh10)

// greenPlasmaMesh10
const greenPlasmaGeometry10 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial10 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh10 = new THREE.Mesh(greenPlasmaGeometry10, greenPlasmaMaterial10)
greenPlasmaMesh10.position.set( (Math.cos((910 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((910 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup10.add(greenPlasmaMesh10)

// bluePlasmaMesh10
const bluePlasmaGeometry10 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial10 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh10 = new THREE.Mesh(bluePlasmaGeometry10, bluePlasmaMaterial10)
bluePlasmaMesh10.position.set( (Math.cos((1750 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1750 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup10.add(bluePlasmaMesh10)

plasmaGroup10.rotation.z = Math.PI / 180 * 90
plasmaGroupB10.add(plasmaGroup10)

plasmaGroupB10.rotation.y = (10 * ((Math.PI / 2) / 90))
plasmaGroupC10.add(plasmaGroupB10)

plasmaGroupC10.position.x = (Math.sin((10 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC10.position.z = (Math.cos((10 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC10)

// plasmaGroup11		###############################################################################
const plasmaGroup11 = new THREE.Group()

const plasmaGroupB11 = new THREE.Group()

const plasmaGroupC11 = new THREE.Group()

// redPlasmaMesh11
const redPlasmaGeometry11 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial11 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh11 = new THREE.Mesh(redPlasmaGeometry11, redPlasmaMaterial11)
redPlasmaMesh11.position.set( (Math.cos((77 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((77 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup11.add(redPlasmaMesh11)

// greenPlasmaMesh11
const greenPlasmaGeometry11 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial11 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh11 = new THREE.Mesh(greenPlasmaGeometry11, greenPlasmaMaterial11)
greenPlasmaMesh11.position.set( (Math.cos((917 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((917 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup11.add(greenPlasmaMesh11)

// bluePlasmaMesh11
const bluePlasmaGeometry11 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial11 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh11 = new THREE.Mesh(bluePlasmaGeometry11, bluePlasmaMaterial11)
bluePlasmaMesh11.position.set( (Math.cos((1757 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1757 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup11.add(bluePlasmaMesh11)

plasmaGroup11.rotation.z = Math.PI / 180 * 90
plasmaGroupB11.add(plasmaGroup11)

plasmaGroupB11.rotation.y = (11 * ((Math.PI / 2) / 90))
plasmaGroupC11.add(plasmaGroupB11)

plasmaGroupC11.position.x = (Math.sin((11 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC11.position.z = (Math.cos((11 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC11)

// plasmaGroup12		###############################################################################
const plasmaGroup12 = new THREE.Group()

const plasmaGroupB12 = new THREE.Group()

const plasmaGroupC12 = new THREE.Group()

// redPlasmaMesh12
const redPlasmaGeometry12 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial12 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh12 = new THREE.Mesh(redPlasmaGeometry12, redPlasmaMaterial12)
redPlasmaMesh12.position.set( (Math.cos((84 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((84 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup12.add(redPlasmaMesh12)

// greenPlasmaMesh12
const greenPlasmaGeometry12 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial12 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh12 = new THREE.Mesh(greenPlasmaGeometry12, greenPlasmaMaterial12)
greenPlasmaMesh12.position.set( (Math.cos((924 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((924 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup12.add(greenPlasmaMesh12)

// bluePlasmaMesh12
const bluePlasmaGeometry12 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial12 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh12 = new THREE.Mesh(bluePlasmaGeometry12, bluePlasmaMaterial12)
bluePlasmaMesh12.position.set( (Math.cos((1764 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1764 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup12.add(bluePlasmaMesh12)

plasmaGroup12.rotation.z = Math.PI / 180 * 90
plasmaGroupB12.add(plasmaGroup12)

plasmaGroupB12.rotation.y = (12 * ((Math.PI / 2) / 90))
plasmaGroupC12.add(plasmaGroupB12)

plasmaGroupC12.position.x = (Math.sin((12 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC12.position.z = (Math.cos((12 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC12)

// plasmaGroup13		###############################################################################
const plasmaGroup13 = new THREE.Group()

const plasmaGroupB13 = new THREE.Group()

const plasmaGroupC13 = new THREE.Group()

// redPlasmaMesh13
const redPlasmaGeometry13 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial13 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh13 = new THREE.Mesh(redPlasmaGeometry13, redPlasmaMaterial13)
redPlasmaMesh13.position.set( (Math.cos((91 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((91 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup13.add(redPlasmaMesh13)

// greenPlasmaMesh13
const greenPlasmaGeometry13 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial13 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh13 = new THREE.Mesh(greenPlasmaGeometry13, greenPlasmaMaterial13)
greenPlasmaMesh13.position.set( (Math.cos((931 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((931 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup13.add(greenPlasmaMesh13)

// bluePlasmaMesh13
const bluePlasmaGeometry13 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial13 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh13 = new THREE.Mesh(bluePlasmaGeometry13, bluePlasmaMaterial13)
bluePlasmaMesh13.position.set( (Math.cos((1771 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1771 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup13.add(bluePlasmaMesh13)

plasmaGroup13.rotation.z = Math.PI / 180 * 90
plasmaGroupB13.add(plasmaGroup13)

plasmaGroupB13.rotation.y = (13 * ((Math.PI / 2) / 90))
plasmaGroupC13.add(plasmaGroupB13)

plasmaGroupC13.position.x = (Math.sin((13 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC13.position.z = (Math.cos((13 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC13)

// plasmaGroup14		###############################################################################
const plasmaGroup14 = new THREE.Group()

const plasmaGroupB14 = new THREE.Group()

const plasmaGroupC14 = new THREE.Group()

// redPlasmaMesh14
const redPlasmaGeometry14 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial14 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh14 = new THREE.Mesh(redPlasmaGeometry14, redPlasmaMaterial14)
redPlasmaMesh14.position.set( (Math.cos((98 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((98 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup14.add(redPlasmaMesh14)

// greenPlasmaMesh14
const greenPlasmaGeometry14 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial14 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh14 = new THREE.Mesh(greenPlasmaGeometry14, greenPlasmaMaterial14)
greenPlasmaMesh14.position.set( (Math.cos((938 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((938 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup14.add(greenPlasmaMesh14)

// bluePlasmaMesh14
const bluePlasmaGeometry14 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial14 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh14 = new THREE.Mesh(bluePlasmaGeometry14, bluePlasmaMaterial14)
bluePlasmaMesh14.position.set( (Math.cos((1778 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1778 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup14.add(bluePlasmaMesh14)

plasmaGroup14.rotation.z = Math.PI / 180 * 90
plasmaGroupB14.add(plasmaGroup14)

plasmaGroupB14.rotation.y = (14 * ((Math.PI / 2) / 90))
plasmaGroupC14.add(plasmaGroupB14)

plasmaGroupC14.position.x = (Math.sin((14 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC14.position.z = (Math.cos((14 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC14)

// plasmaGroup15		###############################################################################
const plasmaGroup15 = new THREE.Group()

const plasmaGroupB15 = new THREE.Group()

const plasmaGroupC15 = new THREE.Group()

// redPlasmaMesh15
const redPlasmaGeometry15 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial15 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh15 = new THREE.Mesh(redPlasmaGeometry15, redPlasmaMaterial15)
redPlasmaMesh15.position.set( (Math.cos((105 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((105 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup15.add(redPlasmaMesh15)

// greenPlasmaMesh15
const greenPlasmaGeometry15 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial15 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh15 = new THREE.Mesh(greenPlasmaGeometry15, greenPlasmaMaterial15)
greenPlasmaMesh15.position.set( (Math.cos((945 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((945 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup15.add(greenPlasmaMesh15)

// bluePlasmaMesh15
const bluePlasmaGeometry15 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial15 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh15 = new THREE.Mesh(bluePlasmaGeometry15, bluePlasmaMaterial15)
bluePlasmaMesh15.position.set( (Math.cos((1785 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1785 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup15.add(bluePlasmaMesh15)

plasmaGroup15.rotation.z = Math.PI / 180 * 90
plasmaGroupB15.add(plasmaGroup15)

plasmaGroupB15.rotation.y = (15 * ((Math.PI / 2) / 90))
plasmaGroupC15.add(plasmaGroupB15)

plasmaGroupC15.position.x = (Math.sin((15 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC15.position.z = (Math.cos((15 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC15)

// plasmaGroup16		###############################################################################
const plasmaGroup16 = new THREE.Group()

const plasmaGroupB16 = new THREE.Group()

const plasmaGroupC16 = new THREE.Group()

// redPlasmaMesh16
const redPlasmaGeometry16 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial16 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh16 = new THREE.Mesh(redPlasmaGeometry16, redPlasmaMaterial16)
redPlasmaMesh16.position.set( (Math.cos((112 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((112 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup16.add(redPlasmaMesh16)

// greenPlasmaMesh16
const greenPlasmaGeometry16 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial16 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh16 = new THREE.Mesh(greenPlasmaGeometry16, greenPlasmaMaterial16)
greenPlasmaMesh16.position.set( (Math.cos((952 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((952 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup16.add(greenPlasmaMesh16)

// bluePlasmaMesh16
const bluePlasmaGeometry16 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial16 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh16 = new THREE.Mesh(bluePlasmaGeometry16, bluePlasmaMaterial16)
bluePlasmaMesh16.position.set( (Math.cos((1792 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1792 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup16.add(bluePlasmaMesh16)

plasmaGroup16.rotation.z = Math.PI / 180 * 90
plasmaGroupB16.add(plasmaGroup16)

plasmaGroupB16.rotation.y = (16 * ((Math.PI / 2) / 90))
plasmaGroupC16.add(plasmaGroupB16)

plasmaGroupC16.position.x = (Math.sin((16 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC16.position.z = (Math.cos((16 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC16)

// plasmaGroup17		###############################################################################
const plasmaGroup17 = new THREE.Group()

const plasmaGroupB17 = new THREE.Group()

const plasmaGroupC17 = new THREE.Group()

// redPlasmaMesh17
const redPlasmaGeometry17 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial17 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh17 = new THREE.Mesh(redPlasmaGeometry17, redPlasmaMaterial17)
redPlasmaMesh17.position.set( (Math.cos((119 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((119 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup17.add(redPlasmaMesh17)

// greenPlasmaMesh17
const greenPlasmaGeometry17 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial17 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh17 = new THREE.Mesh(greenPlasmaGeometry17, greenPlasmaMaterial17)
greenPlasmaMesh17.position.set( (Math.cos((959 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((959 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup17.add(greenPlasmaMesh17)

// bluePlasmaMesh17
const bluePlasmaGeometry17 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial17 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh17 = new THREE.Mesh(bluePlasmaGeometry17, bluePlasmaMaterial17)
bluePlasmaMesh17.position.set( (Math.cos((1799 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1799 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup17.add(bluePlasmaMesh17)

plasmaGroup17.rotation.z = Math.PI / 180 * 90
plasmaGroupB17.add(plasmaGroup17)

plasmaGroupB17.rotation.y = (17 * ((Math.PI / 2) / 90))
plasmaGroupC17.add(plasmaGroupB17)

plasmaGroupC17.position.x = (Math.sin((17 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC17.position.z = (Math.cos((17 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC17)

// plasmaGroup18		###############################################################################
const plasmaGroup18 = new THREE.Group()

const plasmaGroupB18 = new THREE.Group()

const plasmaGroupC18 = new THREE.Group()

// redPlasmaMesh18
const redPlasmaGeometry18 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial18 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh18 = new THREE.Mesh(redPlasmaGeometry18, redPlasmaMaterial18)
redPlasmaMesh18.position.set( (Math.cos((126 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((126 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup18.add(redPlasmaMesh18)

// greenPlasmaMesh18
const greenPlasmaGeometry18 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial18 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh18 = new THREE.Mesh(greenPlasmaGeometry18, greenPlasmaMaterial18)
greenPlasmaMesh18.position.set( (Math.cos((966 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((966 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup18.add(greenPlasmaMesh18)

// bluePlasmaMesh18
const bluePlasmaGeometry18 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial18 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh18 = new THREE.Mesh(bluePlasmaGeometry18, bluePlasmaMaterial18)
bluePlasmaMesh18.position.set( (Math.cos((1806 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1806 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup18.add(bluePlasmaMesh18)

plasmaGroup18.rotation.z = Math.PI / 180 * 90
plasmaGroupB18.add(plasmaGroup18)

plasmaGroupB18.rotation.y = (18 * ((Math.PI / 2) / 90))
plasmaGroupC18.add(plasmaGroupB18)

plasmaGroupC18.position.x = (Math.sin((18 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC18.position.z = (Math.cos((18 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC18)

// plasmaGroup19		###############################################################################
const plasmaGroup19 = new THREE.Group()

const plasmaGroupB19 = new THREE.Group()

const plasmaGroupC19 = new THREE.Group()

// redPlasmaMesh19
const redPlasmaGeometry19 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial19 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh19 = new THREE.Mesh(redPlasmaGeometry19, redPlasmaMaterial19)
redPlasmaMesh19.position.set( (Math.cos((133 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((133 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup19.add(redPlasmaMesh19)

// greenPlasmaMesh19
const greenPlasmaGeometry19 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial19 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh19 = new THREE.Mesh(greenPlasmaGeometry19, greenPlasmaMaterial19)
greenPlasmaMesh19.position.set( (Math.cos((973 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((973 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup19.add(greenPlasmaMesh19)

// bluePlasmaMesh19
const bluePlasmaGeometry19 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial19 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh19 = new THREE.Mesh(bluePlasmaGeometry19, bluePlasmaMaterial19)
bluePlasmaMesh19.position.set( (Math.cos((1813 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1813 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup19.add(bluePlasmaMesh19)

plasmaGroup19.rotation.z = Math.PI / 180 * 90
plasmaGroupB19.add(plasmaGroup19)

plasmaGroupB19.rotation.y = (19 * ((Math.PI / 2) / 90))
plasmaGroupC19.add(plasmaGroupB19)

plasmaGroupC19.position.x = (Math.sin((19 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC19.position.z = (Math.cos((19 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC19)

// plasmaGroup20		###############################################################################
const plasmaGroup20 = new THREE.Group()

const plasmaGroupB20 = new THREE.Group()

const plasmaGroupC20 = new THREE.Group()

// redPlasmaMesh20
const redPlasmaGeometry20 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial20 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh20 = new THREE.Mesh(redPlasmaGeometry20, redPlasmaMaterial20)
redPlasmaMesh20.position.set( (Math.cos((140 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((140 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup20.add(redPlasmaMesh20)

// greenPlasmaMesh20
const greenPlasmaGeometry20 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial20 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh20 = new THREE.Mesh(greenPlasmaGeometry20, greenPlasmaMaterial20)
greenPlasmaMesh20.position.set( (Math.cos((980 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((980 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup20.add(greenPlasmaMesh20)

// bluePlasmaMesh20
const bluePlasmaGeometry20 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial20 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh20 = new THREE.Mesh(bluePlasmaGeometry20, bluePlasmaMaterial20)
bluePlasmaMesh20.position.set( (Math.cos((1820 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1820 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup20.add(bluePlasmaMesh20)

plasmaGroup20.rotation.z = Math.PI / 180 * 90
plasmaGroupB20.add(plasmaGroup20)

plasmaGroupB20.rotation.y = (20 * ((Math.PI / 2) / 90))
plasmaGroupC20.add(plasmaGroupB20)

plasmaGroupC20.position.x = (Math.sin((20 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC20.position.z = (Math.cos((20 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC20)

// plasmaGroup21		###############################################################################
const plasmaGroup21 = new THREE.Group()

const plasmaGroupB21 = new THREE.Group()

const plasmaGroupC21 = new THREE.Group()

// redPlasmaMesh21
const redPlasmaGeometry21 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial21 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh21 = new THREE.Mesh(redPlasmaGeometry21, redPlasmaMaterial21)
redPlasmaMesh21.position.set( (Math.cos((147 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((147 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup21.add(redPlasmaMesh21)

// greenPlasmaMesh21
const greenPlasmaGeometry21 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial21 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh21 = new THREE.Mesh(greenPlasmaGeometry21, greenPlasmaMaterial21)
greenPlasmaMesh21.position.set( (Math.cos((987 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((987 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup21.add(greenPlasmaMesh21)

// bluePlasmaMesh21
const bluePlasmaGeometry21 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial21 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh21 = new THREE.Mesh(bluePlasmaGeometry21, bluePlasmaMaterial21)
bluePlasmaMesh21.position.set( (Math.cos((1827 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1827 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup21.add(bluePlasmaMesh21)

plasmaGroup21.rotation.z = Math.PI / 180 * 90
plasmaGroupB21.add(plasmaGroup21)

plasmaGroupB21.rotation.y = (21 * ((Math.PI / 2) / 90))
plasmaGroupC21.add(plasmaGroupB21)

plasmaGroupC21.position.x = (Math.sin((21 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC21.position.z = (Math.cos((21 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC21)

// plasmaGroup22		###############################################################################
const plasmaGroup22 = new THREE.Group()

const plasmaGroupB22 = new THREE.Group()

const plasmaGroupC22 = new THREE.Group()

// redPlasmaMesh22
const redPlasmaGeometry22 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial22 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh22 = new THREE.Mesh(redPlasmaGeometry22, redPlasmaMaterial22)
redPlasmaMesh22.position.set( (Math.cos((154 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((154 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup22.add(redPlasmaMesh22)

// greenPlasmaMesh22
const greenPlasmaGeometry22 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial22 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh22 = new THREE.Mesh(greenPlasmaGeometry22, greenPlasmaMaterial22)
greenPlasmaMesh22.position.set( (Math.cos((994 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((994 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup22.add(greenPlasmaMesh22)

// bluePlasmaMesh22
const bluePlasmaGeometry22 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial22 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh22 = new THREE.Mesh(bluePlasmaGeometry22, bluePlasmaMaterial22)
bluePlasmaMesh22.position.set( (Math.cos((1834 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1834 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup22.add(bluePlasmaMesh22)

plasmaGroup22.rotation.z = Math.PI / 180 * 90
plasmaGroupB22.add(plasmaGroup22)

plasmaGroupB22.rotation.y = (22 * ((Math.PI / 2) / 90))
plasmaGroupC22.add(plasmaGroupB22)

plasmaGroupC22.position.x = (Math.sin((22 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC22.position.z = (Math.cos((22 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC22)

// plasmaGroup23		###############################################################################
const plasmaGroup23 = new THREE.Group()

const plasmaGroupB23 = new THREE.Group()

const plasmaGroupC23 = new THREE.Group()

// redPlasmaMesh23
const redPlasmaGeometry23 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial23 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh23 = new THREE.Mesh(redPlasmaGeometry23, redPlasmaMaterial23)
redPlasmaMesh23.position.set( (Math.cos((161 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((161 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup23.add(redPlasmaMesh23)

// greenPlasmaMesh23
const greenPlasmaGeometry23 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial23 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh23 = new THREE.Mesh(greenPlasmaGeometry23, greenPlasmaMaterial23)
greenPlasmaMesh23.position.set( (Math.cos((1001 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1001 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup23.add(greenPlasmaMesh23)

// bluePlasmaMesh23
const bluePlasmaGeometry23 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial23 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh23 = new THREE.Mesh(bluePlasmaGeometry23, bluePlasmaMaterial23)
bluePlasmaMesh23.position.set( (Math.cos((1841 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1841 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup23.add(bluePlasmaMesh23)

plasmaGroup23.rotation.z = Math.PI / 180 * 90
plasmaGroupB23.add(plasmaGroup23)

plasmaGroupB23.rotation.y = (23 * ((Math.PI / 2) / 90))
plasmaGroupC23.add(plasmaGroupB23)

plasmaGroupC23.position.x = (Math.sin((23 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC23.position.z = (Math.cos((23 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC23)

// plasmaGroup24		###############################################################################
const plasmaGroup24 = new THREE.Group()

const plasmaGroupB24 = new THREE.Group()

const plasmaGroupC24 = new THREE.Group()

// redPlasmaMesh24
const redPlasmaGeometry24 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial24 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh24 = new THREE.Mesh(redPlasmaGeometry24, redPlasmaMaterial24)
redPlasmaMesh24.position.set( (Math.cos((168 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((168 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup24.add(redPlasmaMesh24)

// greenPlasmaMesh24
const greenPlasmaGeometry24 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial24 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh24 = new THREE.Mesh(greenPlasmaGeometry24, greenPlasmaMaterial24)
greenPlasmaMesh24.position.set( (Math.cos((1008 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1008 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup24.add(greenPlasmaMesh24)

// bluePlasmaMesh24
const bluePlasmaGeometry24 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial24 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh24 = new THREE.Mesh(bluePlasmaGeometry24, bluePlasmaMaterial24)
bluePlasmaMesh24.position.set( (Math.cos((1848 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1848 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup24.add(bluePlasmaMesh24)

plasmaGroup24.rotation.z = Math.PI / 180 * 90
plasmaGroupB24.add(plasmaGroup24)

plasmaGroupB24.rotation.y = (24 * ((Math.PI / 2) / 90))
plasmaGroupC24.add(plasmaGroupB24)

plasmaGroupC24.position.x = (Math.sin((24 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC24.position.z = (Math.cos((24 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC24)

// plasmaGroup25		###############################################################################
const plasmaGroup25 = new THREE.Group()

const plasmaGroupB25 = new THREE.Group()

const plasmaGroupC25 = new THREE.Group()

// redPlasmaMesh25
const redPlasmaGeometry25 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial25 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh25 = new THREE.Mesh(redPlasmaGeometry25, redPlasmaMaterial25)
redPlasmaMesh25.position.set( (Math.cos((175 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((175 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup25.add(redPlasmaMesh25)

// greenPlasmaMesh25
const greenPlasmaGeometry25 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial25 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh25 = new THREE.Mesh(greenPlasmaGeometry25, greenPlasmaMaterial25)
greenPlasmaMesh25.position.set( (Math.cos((1015 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1015 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup25.add(greenPlasmaMesh25)

// bluePlasmaMesh25
const bluePlasmaGeometry25 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial25 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh25 = new THREE.Mesh(bluePlasmaGeometry25, bluePlasmaMaterial25)
bluePlasmaMesh25.position.set( (Math.cos((1855 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1855 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup25.add(bluePlasmaMesh25)

plasmaGroup25.rotation.z = Math.PI / 180 * 90
plasmaGroupB25.add(plasmaGroup25)

plasmaGroupB25.rotation.y = (25 * ((Math.PI / 2) / 90))
plasmaGroupC25.add(plasmaGroupB25)

plasmaGroupC25.position.x = (Math.sin((25 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC25.position.z = (Math.cos((25 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC25)

// plasmaGroup26		###############################################################################
const plasmaGroup26 = new THREE.Group()

const plasmaGroupB26 = new THREE.Group()

const plasmaGroupC26 = new THREE.Group()

// redPlasmaMesh26
const redPlasmaGeometry26 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial26 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh26 = new THREE.Mesh(redPlasmaGeometry26, redPlasmaMaterial26)
redPlasmaMesh26.position.set( (Math.cos((182 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((182 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup26.add(redPlasmaMesh26)

// greenPlasmaMesh26
const greenPlasmaGeometry26 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial26 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh26 = new THREE.Mesh(greenPlasmaGeometry26, greenPlasmaMaterial26)
greenPlasmaMesh26.position.set( (Math.cos((1022 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1022 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup26.add(greenPlasmaMesh26)

// bluePlasmaMesh26
const bluePlasmaGeometry26 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial26 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh26 = new THREE.Mesh(bluePlasmaGeometry26, bluePlasmaMaterial26)
bluePlasmaMesh26.position.set( (Math.cos((1862 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1862 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup26.add(bluePlasmaMesh26)

plasmaGroup26.rotation.z = Math.PI / 180 * 90
plasmaGroupB26.add(plasmaGroup26)

plasmaGroupB26.rotation.y = (26 * ((Math.PI / 2) / 90))
plasmaGroupC26.add(plasmaGroupB26)

plasmaGroupC26.position.x = (Math.sin((26 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC26.position.z = (Math.cos((26 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC26)

// plasmaGroup27		###############################################################################
const plasmaGroup27 = new THREE.Group()

const plasmaGroupB27 = new THREE.Group()

const plasmaGroupC27 = new THREE.Group()

// redPlasmaMesh27
const redPlasmaGeometry27 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial27 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh27 = new THREE.Mesh(redPlasmaGeometry27, redPlasmaMaterial27)
redPlasmaMesh27.position.set( (Math.cos((189 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((189 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup27.add(redPlasmaMesh27)

// greenPlasmaMesh27
const greenPlasmaGeometry27 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial27 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh27 = new THREE.Mesh(greenPlasmaGeometry27, greenPlasmaMaterial27)
greenPlasmaMesh27.position.set( (Math.cos((1029 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1029 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup27.add(greenPlasmaMesh27)

// bluePlasmaMesh27
const bluePlasmaGeometry27 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial27 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh27 = new THREE.Mesh(bluePlasmaGeometry27, bluePlasmaMaterial27)
bluePlasmaMesh27.position.set( (Math.cos((1869 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1869 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup27.add(bluePlasmaMesh27)

plasmaGroup27.rotation.z = Math.PI / 180 * 90
plasmaGroupB27.add(plasmaGroup27)

plasmaGroupB27.rotation.y = (27 * ((Math.PI / 2) / 90))
plasmaGroupC27.add(plasmaGroupB27)

plasmaGroupC27.position.x = (Math.sin((27 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC27.position.z = (Math.cos((27 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC27)

// plasmaGroup28		###############################################################################
const plasmaGroup28 = new THREE.Group()

const plasmaGroupB28 = new THREE.Group()

const plasmaGroupC28 = new THREE.Group()

// redPlasmaMesh28
const redPlasmaGeometry28 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial28 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh28 = new THREE.Mesh(redPlasmaGeometry28, redPlasmaMaterial28)
redPlasmaMesh28.position.set( (Math.cos((196 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((196 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup28.add(redPlasmaMesh28)

// greenPlasmaMesh28
const greenPlasmaGeometry28 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial28 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh28 = new THREE.Mesh(greenPlasmaGeometry28, greenPlasmaMaterial28)
greenPlasmaMesh28.position.set( (Math.cos((1036 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1036 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup28.add(greenPlasmaMesh28)

// bluePlasmaMesh28
const bluePlasmaGeometry28 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial28 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh28 = new THREE.Mesh(bluePlasmaGeometry28, bluePlasmaMaterial28)
bluePlasmaMesh28.position.set( (Math.cos((1876 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1876 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup28.add(bluePlasmaMesh28)

plasmaGroup28.rotation.z = Math.PI / 180 * 90
plasmaGroupB28.add(plasmaGroup28)

plasmaGroupB28.rotation.y = (28 * ((Math.PI / 2) / 90))
plasmaGroupC28.add(plasmaGroupB28)

plasmaGroupC28.position.x = (Math.sin((28 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC28.position.z = (Math.cos((28 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC28)

// plasmaGroup29		###############################################################################
const plasmaGroup29 = new THREE.Group()

const plasmaGroupB29 = new THREE.Group()

const plasmaGroupC29 = new THREE.Group()

// redPlasmaMesh29
const redPlasmaGeometry29 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial29 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh29 = new THREE.Mesh(redPlasmaGeometry29, redPlasmaMaterial29)
redPlasmaMesh29.position.set( (Math.cos((203 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((203 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup29.add(redPlasmaMesh29)

// greenPlasmaMesh29
const greenPlasmaGeometry29 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial29 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh29 = new THREE.Mesh(greenPlasmaGeometry29, greenPlasmaMaterial29)
greenPlasmaMesh29.position.set( (Math.cos((1043 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1043 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup29.add(greenPlasmaMesh29)

// bluePlasmaMesh29
const bluePlasmaGeometry29 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial29 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh29 = new THREE.Mesh(bluePlasmaGeometry29, bluePlasmaMaterial29)
bluePlasmaMesh29.position.set( (Math.cos((1883 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1883 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup29.add(bluePlasmaMesh29)

plasmaGroup29.rotation.z = Math.PI / 180 * 90
plasmaGroupB29.add(plasmaGroup29)

plasmaGroupB29.rotation.y = (29 * ((Math.PI / 2) / 90))
plasmaGroupC29.add(plasmaGroupB29)

plasmaGroupC29.position.x = (Math.sin((29 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC29.position.z = (Math.cos((29 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC29)

// plasmaGroup30		###############################################################################
const plasmaGroup30 = new THREE.Group()

const plasmaGroupB30 = new THREE.Group()

const plasmaGroupC30 = new THREE.Group()

// redPlasmaMesh30
const redPlasmaGeometry30 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial30 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh30 = new THREE.Mesh(redPlasmaGeometry30, redPlasmaMaterial30)
redPlasmaMesh30.position.set( (Math.cos((210 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((210 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup30.add(redPlasmaMesh30)

// greenPlasmaMesh30
const greenPlasmaGeometry30 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial30 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh30 = new THREE.Mesh(greenPlasmaGeometry30, greenPlasmaMaterial30)
greenPlasmaMesh30.position.set( (Math.cos((1050 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1050 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup30.add(greenPlasmaMesh30)

// bluePlasmaMesh30
const bluePlasmaGeometry30 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial30 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh30 = new THREE.Mesh(bluePlasmaGeometry30, bluePlasmaMaterial30)
bluePlasmaMesh30.position.set( (Math.cos((1890 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1890 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup30.add(bluePlasmaMesh30)

plasmaGroup30.rotation.z = Math.PI / 180 * 90
plasmaGroupB30.add(plasmaGroup30)

plasmaGroupB30.rotation.y = (30 * ((Math.PI / 2) / 90))
plasmaGroupC30.add(plasmaGroupB30)

plasmaGroupC30.position.x = (Math.sin((30 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC30.position.z = (Math.cos((30 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC30)

// plasmaGroup31		###############################################################################
const plasmaGroup31 = new THREE.Group()

const plasmaGroupB31 = new THREE.Group()

const plasmaGroupC31 = new THREE.Group()

// redPlasmaMesh31
const redPlasmaGeometry31 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial31 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh31 = new THREE.Mesh(redPlasmaGeometry31, redPlasmaMaterial31)
redPlasmaMesh31.position.set( (Math.cos((217 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((217 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup31.add(redPlasmaMesh31)

// greenPlasmaMesh31
const greenPlasmaGeometry31 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial31 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh31 = new THREE.Mesh(greenPlasmaGeometry31, greenPlasmaMaterial31)
greenPlasmaMesh31.position.set( (Math.cos((1057 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1057 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup31.add(greenPlasmaMesh31)

// bluePlasmaMesh31
const bluePlasmaGeometry31 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial31 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh31 = new THREE.Mesh(bluePlasmaGeometry31, bluePlasmaMaterial31)
bluePlasmaMesh31.position.set( (Math.cos((1897 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1897 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup31.add(bluePlasmaMesh31)

plasmaGroup31.rotation.z = Math.PI / 180 * 90
plasmaGroupB31.add(plasmaGroup31)

plasmaGroupB31.rotation.y = (31 * ((Math.PI / 2) / 90))
plasmaGroupC31.add(plasmaGroupB31)

plasmaGroupC31.position.x = (Math.sin((31 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC31.position.z = (Math.cos((31 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC31)

// plasmaGroup32		###############################################################################
const plasmaGroup32 = new THREE.Group()

const plasmaGroupB32 = new THREE.Group()

const plasmaGroupC32 = new THREE.Group()

// redPlasmaMesh32
const redPlasmaGeometry32 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial32 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh32 = new THREE.Mesh(redPlasmaGeometry32, redPlasmaMaterial32)
redPlasmaMesh32.position.set( (Math.cos((224 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((224 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup32.add(redPlasmaMesh32)

// greenPlasmaMesh32
const greenPlasmaGeometry32 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial32 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh32 = new THREE.Mesh(greenPlasmaGeometry32, greenPlasmaMaterial32)
greenPlasmaMesh32.position.set( (Math.cos((1064 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1064 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup32.add(greenPlasmaMesh32)

// bluePlasmaMesh32
const bluePlasmaGeometry32 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial32 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh32 = new THREE.Mesh(bluePlasmaGeometry32, bluePlasmaMaterial32)
bluePlasmaMesh32.position.set( (Math.cos((1904 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1904 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup32.add(bluePlasmaMesh32)

plasmaGroup32.rotation.z = Math.PI / 180 * 90
plasmaGroupB32.add(plasmaGroup32)

plasmaGroupB32.rotation.y = (32 * ((Math.PI / 2) / 90))
plasmaGroupC32.add(plasmaGroupB32)

plasmaGroupC32.position.x = (Math.sin((32 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC32.position.z = (Math.cos((32 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC32)

// plasmaGroup33		###############################################################################
const plasmaGroup33 = new THREE.Group()

const plasmaGroupB33 = new THREE.Group()

const plasmaGroupC33 = new THREE.Group()

// redPlasmaMesh33
const redPlasmaGeometry33 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial33 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh33 = new THREE.Mesh(redPlasmaGeometry33, redPlasmaMaterial33)
redPlasmaMesh33.position.set( (Math.cos((231 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((231 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup33.add(redPlasmaMesh33)

// greenPlasmaMesh33
const greenPlasmaGeometry33 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial33 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh33 = new THREE.Mesh(greenPlasmaGeometry33, greenPlasmaMaterial33)
greenPlasmaMesh33.position.set( (Math.cos((1071 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1071 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup33.add(greenPlasmaMesh33)

// bluePlasmaMesh33
const bluePlasmaGeometry33 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial33 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh33 = new THREE.Mesh(bluePlasmaGeometry33, bluePlasmaMaterial33)
bluePlasmaMesh33.position.set( (Math.cos((1911 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1911 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup33.add(bluePlasmaMesh33)

plasmaGroup33.rotation.z = Math.PI / 180 * 90
plasmaGroupB33.add(plasmaGroup33)

plasmaGroupB33.rotation.y = (33 * ((Math.PI / 2) / 90))
plasmaGroupC33.add(plasmaGroupB33)

plasmaGroupC33.position.x = (Math.sin((33 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC33.position.z = (Math.cos((33 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC33)

// plasmaGroup34		###############################################################################
const plasmaGroup34 = new THREE.Group()

const plasmaGroupB34 = new THREE.Group()

const plasmaGroupC34 = new THREE.Group()

// redPlasmaMesh34
const redPlasmaGeometry34 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial34 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh34 = new THREE.Mesh(redPlasmaGeometry34, redPlasmaMaterial34)
redPlasmaMesh34.position.set( (Math.cos((238 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((238 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup34.add(redPlasmaMesh34)

// greenPlasmaMesh34
const greenPlasmaGeometry34 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial34 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh34 = new THREE.Mesh(greenPlasmaGeometry34, greenPlasmaMaterial34)
greenPlasmaMesh34.position.set( (Math.cos((1078 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1078 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup34.add(greenPlasmaMesh34)

// bluePlasmaMesh34
const bluePlasmaGeometry34 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial34 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh34 = new THREE.Mesh(bluePlasmaGeometry34, bluePlasmaMaterial34)
bluePlasmaMesh34.position.set( (Math.cos((1918 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1918 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup34.add(bluePlasmaMesh34)

plasmaGroup34.rotation.z = Math.PI / 180 * 90
plasmaGroupB34.add(plasmaGroup34)

plasmaGroupB34.rotation.y = (34 * ((Math.PI / 2) / 90))
plasmaGroupC34.add(plasmaGroupB34)

plasmaGroupC34.position.x = (Math.sin((34 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC34.position.z = (Math.cos((34 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC34)

// plasmaGroup35		###############################################################################
const plasmaGroup35 = new THREE.Group()

const plasmaGroupB35 = new THREE.Group()

const plasmaGroupC35 = new THREE.Group()

// redPlasmaMesh35
const redPlasmaGeometry35 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial35 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh35 = new THREE.Mesh(redPlasmaGeometry35, redPlasmaMaterial35)
redPlasmaMesh35.position.set( (Math.cos((245 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((245 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup35.add(redPlasmaMesh35)

// greenPlasmaMesh35
const greenPlasmaGeometry35 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial35 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh35 = new THREE.Mesh(greenPlasmaGeometry35, greenPlasmaMaterial35)
greenPlasmaMesh35.position.set( (Math.cos((1085 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1085 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup35.add(greenPlasmaMesh35)

// bluePlasmaMesh35
const bluePlasmaGeometry35 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial35 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh35 = new THREE.Mesh(bluePlasmaGeometry35, bluePlasmaMaterial35)
bluePlasmaMesh35.position.set( (Math.cos((1925 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1925 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup35.add(bluePlasmaMesh35)

plasmaGroup35.rotation.z = Math.PI / 180 * 90
plasmaGroupB35.add(plasmaGroup35)

plasmaGroupB35.rotation.y = (35 * ((Math.PI / 2) / 90))
plasmaGroupC35.add(plasmaGroupB35)

plasmaGroupC35.position.x = (Math.sin((35 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC35.position.z = (Math.cos((35 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC35)

// plasmaGroup36		###############################################################################
const plasmaGroup36 = new THREE.Group()

const plasmaGroupB36 = new THREE.Group()

const plasmaGroupC36 = new THREE.Group()

// redPlasmaMesh36
const redPlasmaGeometry36 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial36 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh36 = new THREE.Mesh(redPlasmaGeometry36, redPlasmaMaterial36)
redPlasmaMesh36.position.set( (Math.cos((252 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((252 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup36.add(redPlasmaMesh36)

// greenPlasmaMesh36
const greenPlasmaGeometry36 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial36 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh36 = new THREE.Mesh(greenPlasmaGeometry36, greenPlasmaMaterial36)
greenPlasmaMesh36.position.set( (Math.cos((1092 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1092 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup36.add(greenPlasmaMesh36)

// bluePlasmaMesh36
const bluePlasmaGeometry36 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial36 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh36 = new THREE.Mesh(bluePlasmaGeometry36, bluePlasmaMaterial36)
bluePlasmaMesh36.position.set( (Math.cos((1932 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1932 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup36.add(bluePlasmaMesh36)

plasmaGroup36.rotation.z = Math.PI / 180 * 90
plasmaGroupB36.add(plasmaGroup36)

plasmaGroupB36.rotation.y = (36 * ((Math.PI / 2) / 90))
plasmaGroupC36.add(plasmaGroupB36)

plasmaGroupC36.position.x = (Math.sin((36 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC36.position.z = (Math.cos((36 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC36)

// plasmaGroup37		###############################################################################
const plasmaGroup37 = new THREE.Group()

const plasmaGroupB37 = new THREE.Group()

const plasmaGroupC37 = new THREE.Group()

// redPlasmaMesh37
const redPlasmaGeometry37 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial37 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh37 = new THREE.Mesh(redPlasmaGeometry37, redPlasmaMaterial37)
redPlasmaMesh37.position.set( (Math.cos((259 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((259 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup37.add(redPlasmaMesh37)

// greenPlasmaMesh37
const greenPlasmaGeometry37 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial37 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh37 = new THREE.Mesh(greenPlasmaGeometry37, greenPlasmaMaterial37)
greenPlasmaMesh37.position.set( (Math.cos((1099 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1099 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup37.add(greenPlasmaMesh37)

// bluePlasmaMesh37
const bluePlasmaGeometry37 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial37 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh37 = new THREE.Mesh(bluePlasmaGeometry37, bluePlasmaMaterial37)
bluePlasmaMesh37.position.set( (Math.cos((1939 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1939 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup37.add(bluePlasmaMesh37)

plasmaGroup37.rotation.z = Math.PI / 180 * 90
plasmaGroupB37.add(plasmaGroup37)

plasmaGroupB37.rotation.y = (37 * ((Math.PI / 2) / 90))
plasmaGroupC37.add(plasmaGroupB37)

plasmaGroupC37.position.x = (Math.sin((37 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC37.position.z = (Math.cos((37 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC37)

// plasmaGroup38		###############################################################################
const plasmaGroup38 = new THREE.Group()

const plasmaGroupB38 = new THREE.Group()

const plasmaGroupC38 = new THREE.Group()

// redPlasmaMesh38
const redPlasmaGeometry38 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial38 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh38 = new THREE.Mesh(redPlasmaGeometry38, redPlasmaMaterial38)
redPlasmaMesh38.position.set( (Math.cos((266 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((266 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup38.add(redPlasmaMesh38)

// greenPlasmaMesh38
const greenPlasmaGeometry38 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial38 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh38 = new THREE.Mesh(greenPlasmaGeometry38, greenPlasmaMaterial38)
greenPlasmaMesh38.position.set( (Math.cos((1106 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1106 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup38.add(greenPlasmaMesh38)

// bluePlasmaMesh38
const bluePlasmaGeometry38 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial38 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh38 = new THREE.Mesh(bluePlasmaGeometry38, bluePlasmaMaterial38)
bluePlasmaMesh38.position.set( (Math.cos((1946 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1946 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup38.add(bluePlasmaMesh38)

plasmaGroup38.rotation.z = Math.PI / 180 * 90
plasmaGroupB38.add(plasmaGroup38)

plasmaGroupB38.rotation.y = (38 * ((Math.PI / 2) / 90))
plasmaGroupC38.add(plasmaGroupB38)

plasmaGroupC38.position.x = (Math.sin((38 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC38.position.z = (Math.cos((38 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC38)

// plasmaGroup39		###############################################################################
const plasmaGroup39 = new THREE.Group()

const plasmaGroupB39 = new THREE.Group()

const plasmaGroupC39 = new THREE.Group()

// redPlasmaMesh39
const redPlasmaGeometry39 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial39 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh39 = new THREE.Mesh(redPlasmaGeometry39, redPlasmaMaterial39)
redPlasmaMesh39.position.set( (Math.cos((273 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((273 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup39.add(redPlasmaMesh39)

// greenPlasmaMesh39
const greenPlasmaGeometry39 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial39 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh39 = new THREE.Mesh(greenPlasmaGeometry39, greenPlasmaMaterial39)
greenPlasmaMesh39.position.set( (Math.cos((1113 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1113 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup39.add(greenPlasmaMesh39)

// bluePlasmaMesh39
const bluePlasmaGeometry39 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial39 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh39 = new THREE.Mesh(bluePlasmaGeometry39, bluePlasmaMaterial39)
bluePlasmaMesh39.position.set( (Math.cos((1953 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1953 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup39.add(bluePlasmaMesh39)

plasmaGroup39.rotation.z = Math.PI / 180 * 90
plasmaGroupB39.add(plasmaGroup39)

plasmaGroupB39.rotation.y = (39 * ((Math.PI / 2) / 90))
plasmaGroupC39.add(plasmaGroupB39)

plasmaGroupC39.position.x = (Math.sin((39 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC39.position.z = (Math.cos((39 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC39)

// plasmaGroup40		###############################################################################
const plasmaGroup40 = new THREE.Group()

const plasmaGroupB40 = new THREE.Group()

const plasmaGroupC40 = new THREE.Group()

// redPlasmaMesh40
const redPlasmaGeometry40 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial40 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh40 = new THREE.Mesh(redPlasmaGeometry40, redPlasmaMaterial40)
redPlasmaMesh40.position.set( (Math.cos((280 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((280 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup40.add(redPlasmaMesh40)

// greenPlasmaMesh40
const greenPlasmaGeometry40 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial40 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh40 = new THREE.Mesh(greenPlasmaGeometry40, greenPlasmaMaterial40)
greenPlasmaMesh40.position.set( (Math.cos((1120 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1120 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup40.add(greenPlasmaMesh40)

// bluePlasmaMesh40
const bluePlasmaGeometry40 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial40 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh40 = new THREE.Mesh(bluePlasmaGeometry40, bluePlasmaMaterial40)
bluePlasmaMesh40.position.set( (Math.cos((1960 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1960 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup40.add(bluePlasmaMesh40)

plasmaGroup40.rotation.z = Math.PI / 180 * 90
plasmaGroupB40.add(plasmaGroup40)

plasmaGroupB40.rotation.y = (40 * ((Math.PI / 2) / 90))
plasmaGroupC40.add(plasmaGroupB40)

plasmaGroupC40.position.x = (Math.sin((40 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC40.position.z = (Math.cos((40 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC40)

// plasmaGroup41		###############################################################################
const plasmaGroup41 = new THREE.Group()

const plasmaGroupB41 = new THREE.Group()

const plasmaGroupC41 = new THREE.Group()

// redPlasmaMesh41
const redPlasmaGeometry41 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial41 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh41 = new THREE.Mesh(redPlasmaGeometry41, redPlasmaMaterial41)
redPlasmaMesh41.position.set( (Math.cos((287 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((287 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup41.add(redPlasmaMesh41)

// greenPlasmaMesh41
const greenPlasmaGeometry41 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial41 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh41 = new THREE.Mesh(greenPlasmaGeometry41, greenPlasmaMaterial41)
greenPlasmaMesh41.position.set( (Math.cos((1127 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1127 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup41.add(greenPlasmaMesh41)

// bluePlasmaMesh41
const bluePlasmaGeometry41 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial41 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh41 = new THREE.Mesh(bluePlasmaGeometry41, bluePlasmaMaterial41)
bluePlasmaMesh41.position.set( (Math.cos((1967 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1967 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup41.add(bluePlasmaMesh41)

plasmaGroup41.rotation.z = Math.PI / 180 * 90
plasmaGroupB41.add(plasmaGroup41)

plasmaGroupB41.rotation.y = (41 * ((Math.PI / 2) / 90))
plasmaGroupC41.add(plasmaGroupB41)

plasmaGroupC41.position.x = (Math.sin((41 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC41.position.z = (Math.cos((41 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC41)

// plasmaGroup42		###############################################################################
const plasmaGroup42 = new THREE.Group()

const plasmaGroupB42 = new THREE.Group()

const plasmaGroupC42 = new THREE.Group()

// redPlasmaMesh42
const redPlasmaGeometry42 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial42 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh42 = new THREE.Mesh(redPlasmaGeometry42, redPlasmaMaterial42)
redPlasmaMesh42.position.set( (Math.cos((294 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((294 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup42.add(redPlasmaMesh42)

// greenPlasmaMesh42
const greenPlasmaGeometry42 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial42 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh42 = new THREE.Mesh(greenPlasmaGeometry42, greenPlasmaMaterial42)
greenPlasmaMesh42.position.set( (Math.cos((1134 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1134 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup42.add(greenPlasmaMesh42)

// bluePlasmaMesh42
const bluePlasmaGeometry42 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial42 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh42 = new THREE.Mesh(bluePlasmaGeometry42, bluePlasmaMaterial42)
bluePlasmaMesh42.position.set( (Math.cos((1974 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1974 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup42.add(bluePlasmaMesh42)

plasmaGroup42.rotation.z = Math.PI / 180 * 90
plasmaGroupB42.add(plasmaGroup42)

plasmaGroupB42.rotation.y = (42 * ((Math.PI / 2) / 90))
plasmaGroupC42.add(plasmaGroupB42)

plasmaGroupC42.position.x = (Math.sin((42 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC42.position.z = (Math.cos((42 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC42)

// plasmaGroup43		###############################################################################
const plasmaGroup43 = new THREE.Group()

const plasmaGroupB43 = new THREE.Group()

const plasmaGroupC43 = new THREE.Group()

// redPlasmaMesh43
const redPlasmaGeometry43 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial43 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh43 = new THREE.Mesh(redPlasmaGeometry43, redPlasmaMaterial43)
redPlasmaMesh43.position.set( (Math.cos((301 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((301 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup43.add(redPlasmaMesh43)

// greenPlasmaMesh43
const greenPlasmaGeometry43 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial43 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh43 = new THREE.Mesh(greenPlasmaGeometry43, greenPlasmaMaterial43)
greenPlasmaMesh43.position.set( (Math.cos((1141 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1141 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup43.add(greenPlasmaMesh43)

// bluePlasmaMesh43
const bluePlasmaGeometry43 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial43 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh43 = new THREE.Mesh(bluePlasmaGeometry43, bluePlasmaMaterial43)
bluePlasmaMesh43.position.set( (Math.cos((1981 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1981 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup43.add(bluePlasmaMesh43)

plasmaGroup43.rotation.z = Math.PI / 180 * 90
plasmaGroupB43.add(plasmaGroup43)

plasmaGroupB43.rotation.y = (43 * ((Math.PI / 2) / 90))
plasmaGroupC43.add(plasmaGroupB43)

plasmaGroupC43.position.x = (Math.sin((43 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC43.position.z = (Math.cos((43 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC43)

// plasmaGroup44		###############################################################################
const plasmaGroup44 = new THREE.Group()

const plasmaGroupB44 = new THREE.Group()

const plasmaGroupC44 = new THREE.Group()

// redPlasmaMesh44
const redPlasmaGeometry44 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial44 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh44 = new THREE.Mesh(redPlasmaGeometry44, redPlasmaMaterial44)
redPlasmaMesh44.position.set( (Math.cos((308 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((308 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup44.add(redPlasmaMesh44)

// greenPlasmaMesh44
const greenPlasmaGeometry44 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial44 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh44 = new THREE.Mesh(greenPlasmaGeometry44, greenPlasmaMaterial44)
greenPlasmaMesh44.position.set( (Math.cos((1148 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1148 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup44.add(greenPlasmaMesh44)

// bluePlasmaMesh44
const bluePlasmaGeometry44 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial44 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh44 = new THREE.Mesh(bluePlasmaGeometry44, bluePlasmaMaterial44)
bluePlasmaMesh44.position.set( (Math.cos((1988 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1988 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup44.add(bluePlasmaMesh44)

plasmaGroup44.rotation.z = Math.PI / 180 * 90
plasmaGroupB44.add(plasmaGroup44)

plasmaGroupB44.rotation.y = (44 * ((Math.PI / 2) / 90))
plasmaGroupC44.add(plasmaGroupB44)

plasmaGroupC44.position.x = (Math.sin((44 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC44.position.z = (Math.cos((44 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC44)

// plasmaGroup45		###############################################################################
const plasmaGroup45 = new THREE.Group()

const plasmaGroupB45 = new THREE.Group()

const plasmaGroupC45 = new THREE.Group()

// redPlasmaMesh45
const redPlasmaGeometry45 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial45 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh45 = new THREE.Mesh(redPlasmaGeometry45, redPlasmaMaterial45)
redPlasmaMesh45.position.set( (Math.cos((315 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((315 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup45.add(redPlasmaMesh45)

// greenPlasmaMesh45
const greenPlasmaGeometry45 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial45 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh45 = new THREE.Mesh(greenPlasmaGeometry45, greenPlasmaMaterial45)
greenPlasmaMesh45.position.set( (Math.cos((1155 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1155 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup45.add(greenPlasmaMesh45)

// bluePlasmaMesh45
const bluePlasmaGeometry45 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial45 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh45 = new THREE.Mesh(bluePlasmaGeometry45, bluePlasmaMaterial45)
bluePlasmaMesh45.position.set( (Math.cos((1995 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1995 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup45.add(bluePlasmaMesh45)

plasmaGroup45.rotation.z = Math.PI / 180 * 90
plasmaGroupB45.add(plasmaGroup45)

plasmaGroupB45.rotation.y = (45 * ((Math.PI / 2) / 90))
plasmaGroupC45.add(plasmaGroupB45)

plasmaGroupC45.position.x = (Math.sin((45 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC45.position.z = (Math.cos((45 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC45)

// plasmaGroup46		###############################################################################
const plasmaGroup46 = new THREE.Group()

const plasmaGroupB46 = new THREE.Group()

const plasmaGroupC46 = new THREE.Group()

// redPlasmaMesh46
const redPlasmaGeometry46 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial46 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh46 = new THREE.Mesh(redPlasmaGeometry46, redPlasmaMaterial46)
redPlasmaMesh46.position.set( (Math.cos((322 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((322 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup46.add(redPlasmaMesh46)

// greenPlasmaMesh46
const greenPlasmaGeometry46 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial46 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh46 = new THREE.Mesh(greenPlasmaGeometry46, greenPlasmaMaterial46)
greenPlasmaMesh46.position.set( (Math.cos((1162 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1162 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup46.add(greenPlasmaMesh46)

// bluePlasmaMesh46
const bluePlasmaGeometry46 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial46 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh46 = new THREE.Mesh(bluePlasmaGeometry46, bluePlasmaMaterial46)
bluePlasmaMesh46.position.set( (Math.cos((2002 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2002 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup46.add(bluePlasmaMesh46)

plasmaGroup46.rotation.z = Math.PI / 180 * 90
plasmaGroupB46.add(plasmaGroup46)

plasmaGroupB46.rotation.y = (46 * ((Math.PI / 2) / 90))
plasmaGroupC46.add(plasmaGroupB46)

plasmaGroupC46.position.x = (Math.sin((46 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC46.position.z = (Math.cos((46 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC46)

// plasmaGroup47		###############################################################################
const plasmaGroup47 = new THREE.Group()

const plasmaGroupB47 = new THREE.Group()

const plasmaGroupC47 = new THREE.Group()

// redPlasmaMesh47
const redPlasmaGeometry47 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial47 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh47 = new THREE.Mesh(redPlasmaGeometry47, redPlasmaMaterial47)
redPlasmaMesh47.position.set( (Math.cos((329 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((329 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup47.add(redPlasmaMesh47)

// greenPlasmaMesh47
const greenPlasmaGeometry47 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial47 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh47 = new THREE.Mesh(greenPlasmaGeometry47, greenPlasmaMaterial47)
greenPlasmaMesh47.position.set( (Math.cos((1169 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1169 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup47.add(greenPlasmaMesh47)

// bluePlasmaMesh47
const bluePlasmaGeometry47 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial47 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh47 = new THREE.Mesh(bluePlasmaGeometry47, bluePlasmaMaterial47)
bluePlasmaMesh47.position.set( (Math.cos((2009 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2009 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup47.add(bluePlasmaMesh47)

plasmaGroup47.rotation.z = Math.PI / 180 * 90
plasmaGroupB47.add(plasmaGroup47)

plasmaGroupB47.rotation.y = (47 * ((Math.PI / 2) / 90))
plasmaGroupC47.add(plasmaGroupB47)

plasmaGroupC47.position.x = (Math.sin((47 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC47.position.z = (Math.cos((47 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC47)

// plasmaGroup48		###############################################################################
const plasmaGroup48 = new THREE.Group()

const plasmaGroupB48 = new THREE.Group()

const plasmaGroupC48 = new THREE.Group()

// redPlasmaMesh48
const redPlasmaGeometry48 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial48 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh48 = new THREE.Mesh(redPlasmaGeometry48, redPlasmaMaterial48)
redPlasmaMesh48.position.set( (Math.cos((336 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((336 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup48.add(redPlasmaMesh48)

// greenPlasmaMesh48
const greenPlasmaGeometry48 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial48 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh48 = new THREE.Mesh(greenPlasmaGeometry48, greenPlasmaMaterial48)
greenPlasmaMesh48.position.set( (Math.cos((1176 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1176 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup48.add(greenPlasmaMesh48)

// bluePlasmaMesh48
const bluePlasmaGeometry48 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial48 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh48 = new THREE.Mesh(bluePlasmaGeometry48, bluePlasmaMaterial48)
bluePlasmaMesh48.position.set( (Math.cos((2016 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2016 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup48.add(bluePlasmaMesh48)

plasmaGroup48.rotation.z = Math.PI / 180 * 90
plasmaGroupB48.add(plasmaGroup48)

plasmaGroupB48.rotation.y = (48 * ((Math.PI / 2) / 90))
plasmaGroupC48.add(plasmaGroupB48)

plasmaGroupC48.position.x = (Math.sin((48 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC48.position.z = (Math.cos((48 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC48)

// plasmaGroup49		###############################################################################
const plasmaGroup49 = new THREE.Group()

const plasmaGroupB49 = new THREE.Group()

const plasmaGroupC49 = new THREE.Group()

// redPlasmaMesh49
const redPlasmaGeometry49 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial49 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh49 = new THREE.Mesh(redPlasmaGeometry49, redPlasmaMaterial49)
redPlasmaMesh49.position.set( (Math.cos((343 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((343 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup49.add(redPlasmaMesh49)

// greenPlasmaMesh49
const greenPlasmaGeometry49 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial49 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh49 = new THREE.Mesh(greenPlasmaGeometry49, greenPlasmaMaterial49)
greenPlasmaMesh49.position.set( (Math.cos((1183 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1183 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup49.add(greenPlasmaMesh49)

// bluePlasmaMesh49
const bluePlasmaGeometry49 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial49 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh49 = new THREE.Mesh(bluePlasmaGeometry49, bluePlasmaMaterial49)
bluePlasmaMesh49.position.set( (Math.cos((2023 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2023 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup49.add(bluePlasmaMesh49)

plasmaGroup49.rotation.z = Math.PI / 180 * 90
plasmaGroupB49.add(plasmaGroup49)

plasmaGroupB49.rotation.y = (49 * ((Math.PI / 2) / 90))
plasmaGroupC49.add(plasmaGroupB49)

plasmaGroupC49.position.x = (Math.sin((49 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC49.position.z = (Math.cos((49 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC49)

// plasmaGroup50		###############################################################################
const plasmaGroup50 = new THREE.Group()

const plasmaGroupB50 = new THREE.Group()

const plasmaGroupC50 = new THREE.Group()

// redPlasmaMesh50
const redPlasmaGeometry50 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial50 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh50 = new THREE.Mesh(redPlasmaGeometry50, redPlasmaMaterial50)
redPlasmaMesh50.position.set( (Math.cos((350 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((350 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup50.add(redPlasmaMesh50)

// greenPlasmaMesh50
const greenPlasmaGeometry50 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial50 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh50 = new THREE.Mesh(greenPlasmaGeometry50, greenPlasmaMaterial50)
greenPlasmaMesh50.position.set( (Math.cos((1190 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1190 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup50.add(greenPlasmaMesh50)

// bluePlasmaMesh50
const bluePlasmaGeometry50 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial50 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh50 = new THREE.Mesh(bluePlasmaGeometry50, bluePlasmaMaterial50)
bluePlasmaMesh50.position.set( (Math.cos((2030 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2030 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup50.add(bluePlasmaMesh50)

plasmaGroup50.rotation.z = Math.PI / 180 * 90
plasmaGroupB50.add(plasmaGroup50)

plasmaGroupB50.rotation.y = (50 * ((Math.PI / 2) / 90))
plasmaGroupC50.add(plasmaGroupB50)

plasmaGroupC50.position.x = (Math.sin((50 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC50.position.z = (Math.cos((50 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC50)

// plasmaGroup51		###############################################################################
const plasmaGroup51 = new THREE.Group()

const plasmaGroupB51 = new THREE.Group()

const plasmaGroupC51 = new THREE.Group()

// redPlasmaMesh51
const redPlasmaGeometry51 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial51 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh51 = new THREE.Mesh(redPlasmaGeometry51, redPlasmaMaterial51)
redPlasmaMesh51.position.set( (Math.cos((357 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((357 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup51.add(redPlasmaMesh51)

// greenPlasmaMesh51
const greenPlasmaGeometry51 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial51 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh51 = new THREE.Mesh(greenPlasmaGeometry51, greenPlasmaMaterial51)
greenPlasmaMesh51.position.set( (Math.cos((1197 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1197 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup51.add(greenPlasmaMesh51)

// bluePlasmaMesh51
const bluePlasmaGeometry51 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial51 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh51 = new THREE.Mesh(bluePlasmaGeometry51, bluePlasmaMaterial51)
bluePlasmaMesh51.position.set( (Math.cos((2037 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2037 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup51.add(bluePlasmaMesh51)

plasmaGroup51.rotation.z = Math.PI / 180 * 90
plasmaGroupB51.add(plasmaGroup51)

plasmaGroupB51.rotation.y = (51 * ((Math.PI / 2) / 90))
plasmaGroupC51.add(plasmaGroupB51)

plasmaGroupC51.position.x = (Math.sin((51 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC51.position.z = (Math.cos((51 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC51)

// plasmaGroup52		###############################################################################
const plasmaGroup52 = new THREE.Group()

const plasmaGroupB52 = new THREE.Group()

const plasmaGroupC52 = new THREE.Group()

// redPlasmaMesh52
const redPlasmaGeometry52 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial52 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh52 = new THREE.Mesh(redPlasmaGeometry52, redPlasmaMaterial52)
redPlasmaMesh52.position.set( (Math.cos((364 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((364 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup52.add(redPlasmaMesh52)

// greenPlasmaMesh52
const greenPlasmaGeometry52 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial52 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh52 = new THREE.Mesh(greenPlasmaGeometry52, greenPlasmaMaterial52)
greenPlasmaMesh52.position.set( (Math.cos((1204 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1204 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup52.add(greenPlasmaMesh52)

// bluePlasmaMesh52
const bluePlasmaGeometry52 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial52 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh52 = new THREE.Mesh(bluePlasmaGeometry52, bluePlasmaMaterial52)
bluePlasmaMesh52.position.set( (Math.cos((2044 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2044 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup52.add(bluePlasmaMesh52)

plasmaGroup52.rotation.z = Math.PI / 180 * 90
plasmaGroupB52.add(plasmaGroup52)

plasmaGroupB52.rotation.y = (52 * ((Math.PI / 2) / 90))
plasmaGroupC52.add(plasmaGroupB52)

plasmaGroupC52.position.x = (Math.sin((52 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC52.position.z = (Math.cos((52 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC52)

// plasmaGroup53		###############################################################################
const plasmaGroup53 = new THREE.Group()

const plasmaGroupB53 = new THREE.Group()

const plasmaGroupC53 = new THREE.Group()

// redPlasmaMesh53
const redPlasmaGeometry53 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial53 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh53 = new THREE.Mesh(redPlasmaGeometry53, redPlasmaMaterial53)
redPlasmaMesh53.position.set( (Math.cos((371 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((371 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup53.add(redPlasmaMesh53)

// greenPlasmaMesh53
const greenPlasmaGeometry53 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial53 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh53 = new THREE.Mesh(greenPlasmaGeometry53, greenPlasmaMaterial53)
greenPlasmaMesh53.position.set( (Math.cos((1211 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1211 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup53.add(greenPlasmaMesh53)

// bluePlasmaMesh53
const bluePlasmaGeometry53 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial53 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh53 = new THREE.Mesh(bluePlasmaGeometry53, bluePlasmaMaterial53)
bluePlasmaMesh53.position.set( (Math.cos((2051 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2051 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup53.add(bluePlasmaMesh53)

plasmaGroup53.rotation.z = Math.PI / 180 * 90
plasmaGroupB53.add(plasmaGroup53)

plasmaGroupB53.rotation.y = (53 * ((Math.PI / 2) / 90))
plasmaGroupC53.add(plasmaGroupB53)

plasmaGroupC53.position.x = (Math.sin((53 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC53.position.z = (Math.cos((53 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC53)

// plasmaGroup54		###############################################################################
const plasmaGroup54 = new THREE.Group()

const plasmaGroupB54 = new THREE.Group()

const plasmaGroupC54 = new THREE.Group()

// redPlasmaMesh54
const redPlasmaGeometry54 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial54 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh54 = new THREE.Mesh(redPlasmaGeometry54, redPlasmaMaterial54)
redPlasmaMesh54.position.set( (Math.cos((378 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((378 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup54.add(redPlasmaMesh54)

// greenPlasmaMesh54
const greenPlasmaGeometry54 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial54 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh54 = new THREE.Mesh(greenPlasmaGeometry54, greenPlasmaMaterial54)
greenPlasmaMesh54.position.set( (Math.cos((1218 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1218 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup54.add(greenPlasmaMesh54)

// bluePlasmaMesh54
const bluePlasmaGeometry54 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial54 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh54 = new THREE.Mesh(bluePlasmaGeometry54, bluePlasmaMaterial54)
bluePlasmaMesh54.position.set( (Math.cos((2058 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2058 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup54.add(bluePlasmaMesh54)

plasmaGroup54.rotation.z = Math.PI / 180 * 90
plasmaGroupB54.add(plasmaGroup54)

plasmaGroupB54.rotation.y = (54 * ((Math.PI / 2) / 90))
plasmaGroupC54.add(plasmaGroupB54)

plasmaGroupC54.position.x = (Math.sin((54 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC54.position.z = (Math.cos((54 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC54)

// plasmaGroup55		###############################################################################
const plasmaGroup55 = new THREE.Group()

const plasmaGroupB55 = new THREE.Group()

const plasmaGroupC55 = new THREE.Group()

// redPlasmaMesh55
const redPlasmaGeometry55 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial55 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh55 = new THREE.Mesh(redPlasmaGeometry55, redPlasmaMaterial55)
redPlasmaMesh55.position.set( (Math.cos((385 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((385 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup55.add(redPlasmaMesh55)

// greenPlasmaMesh55
const greenPlasmaGeometry55 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial55 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh55 = new THREE.Mesh(greenPlasmaGeometry55, greenPlasmaMaterial55)
greenPlasmaMesh55.position.set( (Math.cos((1225 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1225 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup55.add(greenPlasmaMesh55)

// bluePlasmaMesh55
const bluePlasmaGeometry55 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial55 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh55 = new THREE.Mesh(bluePlasmaGeometry55, bluePlasmaMaterial55)
bluePlasmaMesh55.position.set( (Math.cos((2065 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2065 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup55.add(bluePlasmaMesh55)

plasmaGroup55.rotation.z = Math.PI / 180 * 90
plasmaGroupB55.add(plasmaGroup55)

plasmaGroupB55.rotation.y = (55 * ((Math.PI / 2) / 90))
plasmaGroupC55.add(plasmaGroupB55)

plasmaGroupC55.position.x = (Math.sin((55 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC55.position.z = (Math.cos((55 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC55)

// plasmaGroup56		###############################################################################
const plasmaGroup56 = new THREE.Group()

const plasmaGroupB56 = new THREE.Group()

const plasmaGroupC56 = new THREE.Group()

// redPlasmaMesh56
const redPlasmaGeometry56 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial56 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh56 = new THREE.Mesh(redPlasmaGeometry56, redPlasmaMaterial56)
redPlasmaMesh56.position.set( (Math.cos((392 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((392 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup56.add(redPlasmaMesh56)

// greenPlasmaMesh56
const greenPlasmaGeometry56 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial56 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh56 = new THREE.Mesh(greenPlasmaGeometry56, greenPlasmaMaterial56)
greenPlasmaMesh56.position.set( (Math.cos((1232 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1232 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup56.add(greenPlasmaMesh56)

// bluePlasmaMesh56
const bluePlasmaGeometry56 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial56 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh56 = new THREE.Mesh(bluePlasmaGeometry56, bluePlasmaMaterial56)
bluePlasmaMesh56.position.set( (Math.cos((2072 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2072 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup56.add(bluePlasmaMesh56)

plasmaGroup56.rotation.z = Math.PI / 180 * 90
plasmaGroupB56.add(plasmaGroup56)

plasmaGroupB56.rotation.y = (56 * ((Math.PI / 2) / 90))
plasmaGroupC56.add(plasmaGroupB56)

plasmaGroupC56.position.x = (Math.sin((56 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC56.position.z = (Math.cos((56 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC56)

// plasmaGroup57		###############################################################################
const plasmaGroup57 = new THREE.Group()

const plasmaGroupB57 = new THREE.Group()

const plasmaGroupC57 = new THREE.Group()

// redPlasmaMesh57
const redPlasmaGeometry57 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial57 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh57 = new THREE.Mesh(redPlasmaGeometry57, redPlasmaMaterial57)
redPlasmaMesh57.position.set( (Math.cos((399 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((399 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup57.add(redPlasmaMesh57)

// greenPlasmaMesh57
const greenPlasmaGeometry57 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial57 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh57 = new THREE.Mesh(greenPlasmaGeometry57, greenPlasmaMaterial57)
greenPlasmaMesh57.position.set( (Math.cos((1239 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1239 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup57.add(greenPlasmaMesh57)

// bluePlasmaMesh57
const bluePlasmaGeometry57 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial57 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh57 = new THREE.Mesh(bluePlasmaGeometry57, bluePlasmaMaterial57)
bluePlasmaMesh57.position.set( (Math.cos((2079 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2079 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup57.add(bluePlasmaMesh57)

plasmaGroup57.rotation.z = Math.PI / 180 * 90
plasmaGroupB57.add(plasmaGroup57)

plasmaGroupB57.rotation.y = (57 * ((Math.PI / 2) / 90))
plasmaGroupC57.add(plasmaGroupB57)

plasmaGroupC57.position.x = (Math.sin((57 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC57.position.z = (Math.cos((57 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC57)

// plasmaGroup58		###############################################################################
const plasmaGroup58 = new THREE.Group()

const plasmaGroupB58 = new THREE.Group()

const plasmaGroupC58 = new THREE.Group()

// redPlasmaMesh58
const redPlasmaGeometry58 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial58 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh58 = new THREE.Mesh(redPlasmaGeometry58, redPlasmaMaterial58)
redPlasmaMesh58.position.set( (Math.cos((406 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((406 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup58.add(redPlasmaMesh58)

// greenPlasmaMesh58
const greenPlasmaGeometry58 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial58 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh58 = new THREE.Mesh(greenPlasmaGeometry58, greenPlasmaMaterial58)
greenPlasmaMesh58.position.set( (Math.cos((1246 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1246 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup58.add(greenPlasmaMesh58)

// bluePlasmaMesh58
const bluePlasmaGeometry58 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial58 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh58 = new THREE.Mesh(bluePlasmaGeometry58, bluePlasmaMaterial58)
bluePlasmaMesh58.position.set( (Math.cos((2086 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2086 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup58.add(bluePlasmaMesh58)

plasmaGroup58.rotation.z = Math.PI / 180 * 90
plasmaGroupB58.add(plasmaGroup58)

plasmaGroupB58.rotation.y = (58 * ((Math.PI / 2) / 90))
plasmaGroupC58.add(plasmaGroupB58)

plasmaGroupC58.position.x = (Math.sin((58 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC58.position.z = (Math.cos((58 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC58)

// plasmaGroup59		###############################################################################
const plasmaGroup59 = new THREE.Group()

const plasmaGroupB59 = new THREE.Group()

const plasmaGroupC59 = new THREE.Group()

// redPlasmaMesh59
const redPlasmaGeometry59 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial59 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh59 = new THREE.Mesh(redPlasmaGeometry59, redPlasmaMaterial59)
redPlasmaMesh59.position.set( (Math.cos((413 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((413 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup59.add(redPlasmaMesh59)

// greenPlasmaMesh59
const greenPlasmaGeometry59 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial59 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh59 = new THREE.Mesh(greenPlasmaGeometry59, greenPlasmaMaterial59)
greenPlasmaMesh59.position.set( (Math.cos((1253 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1253 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup59.add(greenPlasmaMesh59)

// bluePlasmaMesh59
const bluePlasmaGeometry59 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial59 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh59 = new THREE.Mesh(bluePlasmaGeometry59, bluePlasmaMaterial59)
bluePlasmaMesh59.position.set( (Math.cos((2093 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2093 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup59.add(bluePlasmaMesh59)

plasmaGroup59.rotation.z = Math.PI / 180 * 90
plasmaGroupB59.add(plasmaGroup59)

plasmaGroupB59.rotation.y = (59 * ((Math.PI / 2) / 90))
plasmaGroupC59.add(plasmaGroupB59)

plasmaGroupC59.position.x = (Math.sin((59 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC59.position.z = (Math.cos((59 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC59)

// plasmaGroup60		###############################################################################
const plasmaGroup60 = new THREE.Group()

const plasmaGroupB60 = new THREE.Group()

const plasmaGroupC60 = new THREE.Group()

// redPlasmaMesh60
const redPlasmaGeometry60 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial60 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh60 = new THREE.Mesh(redPlasmaGeometry60, redPlasmaMaterial60)
redPlasmaMesh60.position.set( (Math.cos((420 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((420 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup60.add(redPlasmaMesh60)

// greenPlasmaMesh60
const greenPlasmaGeometry60 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial60 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh60 = new THREE.Mesh(greenPlasmaGeometry60, greenPlasmaMaterial60)
greenPlasmaMesh60.position.set( (Math.cos((1260 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1260 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup60.add(greenPlasmaMesh60)

// bluePlasmaMesh60
const bluePlasmaGeometry60 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial60 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh60 = new THREE.Mesh(bluePlasmaGeometry60, bluePlasmaMaterial60)
bluePlasmaMesh60.position.set( (Math.cos((2100 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2100 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup60.add(bluePlasmaMesh60)

plasmaGroup60.rotation.z = Math.PI / 180 * 90
plasmaGroupB60.add(plasmaGroup60)

plasmaGroupB60.rotation.y = (60 * ((Math.PI / 2) / 90))
plasmaGroupC60.add(plasmaGroupB60)

plasmaGroupC60.position.x = (Math.sin((60 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC60.position.z = (Math.cos((60 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC60)

// plasmaGroup61		###############################################################################
const plasmaGroup61 = new THREE.Group()

const plasmaGroupB61 = new THREE.Group()

const plasmaGroupC61 = new THREE.Group()

// redPlasmaMesh61
const redPlasmaGeometry61 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial61 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh61 = new THREE.Mesh(redPlasmaGeometry61, redPlasmaMaterial61)
redPlasmaMesh61.position.set( (Math.cos((427 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((427 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup61.add(redPlasmaMesh61)

// greenPlasmaMesh61
const greenPlasmaGeometry61 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial61 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh61 = new THREE.Mesh(greenPlasmaGeometry61, greenPlasmaMaterial61)
greenPlasmaMesh61.position.set( (Math.cos((1267 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1267 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup61.add(greenPlasmaMesh61)

// bluePlasmaMesh61
const bluePlasmaGeometry61 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial61 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh61 = new THREE.Mesh(bluePlasmaGeometry61, bluePlasmaMaterial61)
bluePlasmaMesh61.position.set( (Math.cos((2107 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2107 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup61.add(bluePlasmaMesh61)

plasmaGroup61.rotation.z = Math.PI / 180 * 90
plasmaGroupB61.add(plasmaGroup61)

plasmaGroupB61.rotation.y = (61 * ((Math.PI / 2) / 90))
plasmaGroupC61.add(plasmaGroupB61)

plasmaGroupC61.position.x = (Math.sin((61 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC61.position.z = (Math.cos((61 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC61)

// plasmaGroup62		###############################################################################
const plasmaGroup62 = new THREE.Group()

const plasmaGroupB62 = new THREE.Group()

const plasmaGroupC62 = new THREE.Group()

// redPlasmaMesh62
const redPlasmaGeometry62 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial62 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh62 = new THREE.Mesh(redPlasmaGeometry62, redPlasmaMaterial62)
redPlasmaMesh62.position.set( (Math.cos((434 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((434 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup62.add(redPlasmaMesh62)

// greenPlasmaMesh62
const greenPlasmaGeometry62 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial62 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh62 = new THREE.Mesh(greenPlasmaGeometry62, greenPlasmaMaterial62)
greenPlasmaMesh62.position.set( (Math.cos((1274 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1274 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup62.add(greenPlasmaMesh62)

// bluePlasmaMesh62
const bluePlasmaGeometry62 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial62 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh62 = new THREE.Mesh(bluePlasmaGeometry62, bluePlasmaMaterial62)
bluePlasmaMesh62.position.set( (Math.cos((2114 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2114 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup62.add(bluePlasmaMesh62)

plasmaGroup62.rotation.z = Math.PI / 180 * 90
plasmaGroupB62.add(plasmaGroup62)

plasmaGroupB62.rotation.y = (62 * ((Math.PI / 2) / 90))
plasmaGroupC62.add(plasmaGroupB62)

plasmaGroupC62.position.x = (Math.sin((62 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC62.position.z = (Math.cos((62 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC62)

// plasmaGroup63		###############################################################################
const plasmaGroup63 = new THREE.Group()

const plasmaGroupB63 = new THREE.Group()

const plasmaGroupC63 = new THREE.Group()

// redPlasmaMesh63
const redPlasmaGeometry63 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial63 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh63 = new THREE.Mesh(redPlasmaGeometry63, redPlasmaMaterial63)
redPlasmaMesh63.position.set( (Math.cos((441 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((441 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup63.add(redPlasmaMesh63)

// greenPlasmaMesh63
const greenPlasmaGeometry63 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial63 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh63 = new THREE.Mesh(greenPlasmaGeometry63, greenPlasmaMaterial63)
greenPlasmaMesh63.position.set( (Math.cos((1281 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1281 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup63.add(greenPlasmaMesh63)

// bluePlasmaMesh63
const bluePlasmaGeometry63 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial63 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh63 = new THREE.Mesh(bluePlasmaGeometry63, bluePlasmaMaterial63)
bluePlasmaMesh63.position.set( (Math.cos((2121 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2121 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup63.add(bluePlasmaMesh63)

plasmaGroup63.rotation.z = Math.PI / 180 * 90
plasmaGroupB63.add(plasmaGroup63)

plasmaGroupB63.rotation.y = (63 * ((Math.PI / 2) / 90))
plasmaGroupC63.add(plasmaGroupB63)

plasmaGroupC63.position.x = (Math.sin((63 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC63.position.z = (Math.cos((63 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC63)

// plasmaGroup64		###############################################################################
const plasmaGroup64 = new THREE.Group()

const plasmaGroupB64 = new THREE.Group()

const plasmaGroupC64 = new THREE.Group()

// redPlasmaMesh64
const redPlasmaGeometry64 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial64 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh64 = new THREE.Mesh(redPlasmaGeometry64, redPlasmaMaterial64)
redPlasmaMesh64.position.set( (Math.cos((448 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((448 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup64.add(redPlasmaMesh64)

// greenPlasmaMesh64
const greenPlasmaGeometry64 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial64 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh64 = new THREE.Mesh(greenPlasmaGeometry64, greenPlasmaMaterial64)
greenPlasmaMesh64.position.set( (Math.cos((1288 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1288 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup64.add(greenPlasmaMesh64)

// bluePlasmaMesh64
const bluePlasmaGeometry64 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial64 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh64 = new THREE.Mesh(bluePlasmaGeometry64, bluePlasmaMaterial64)
bluePlasmaMesh64.position.set( (Math.cos((2128 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2128 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup64.add(bluePlasmaMesh64)

plasmaGroup64.rotation.z = Math.PI / 180 * 90
plasmaGroupB64.add(plasmaGroup64)

plasmaGroupB64.rotation.y = (64 * ((Math.PI / 2) / 90))
plasmaGroupC64.add(plasmaGroupB64)

plasmaGroupC64.position.x = (Math.sin((64 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC64.position.z = (Math.cos((64 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC64)

// plasmaGroup65		###############################################################################
const plasmaGroup65 = new THREE.Group()

const plasmaGroupB65 = new THREE.Group()

const plasmaGroupC65 = new THREE.Group()

// redPlasmaMesh65
const redPlasmaGeometry65 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial65 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh65 = new THREE.Mesh(redPlasmaGeometry65, redPlasmaMaterial65)
redPlasmaMesh65.position.set( (Math.cos((455 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((455 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup65.add(redPlasmaMesh65)

// greenPlasmaMesh65
const greenPlasmaGeometry65 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial65 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh65 = new THREE.Mesh(greenPlasmaGeometry65, greenPlasmaMaterial65)
greenPlasmaMesh65.position.set( (Math.cos((1295 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1295 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup65.add(greenPlasmaMesh65)

// bluePlasmaMesh65
const bluePlasmaGeometry65 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial65 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh65 = new THREE.Mesh(bluePlasmaGeometry65, bluePlasmaMaterial65)
bluePlasmaMesh65.position.set( (Math.cos((2135 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2135 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup65.add(bluePlasmaMesh65)

plasmaGroup65.rotation.z = Math.PI / 180 * 90
plasmaGroupB65.add(plasmaGroup65)

plasmaGroupB65.rotation.y = (65 * ((Math.PI / 2) / 90))
plasmaGroupC65.add(plasmaGroupB65)

plasmaGroupC65.position.x = (Math.sin((65 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC65.position.z = (Math.cos((65 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC65)

// plasmaGroup66		###############################################################################
const plasmaGroup66 = new THREE.Group()

const plasmaGroupB66 = new THREE.Group()

const plasmaGroupC66 = new THREE.Group()

// redPlasmaMesh66
const redPlasmaGeometry66 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial66 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh66 = new THREE.Mesh(redPlasmaGeometry66, redPlasmaMaterial66)
redPlasmaMesh66.position.set( (Math.cos((462 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((462 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup66.add(redPlasmaMesh66)

// greenPlasmaMesh66
const greenPlasmaGeometry66 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial66 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh66 = new THREE.Mesh(greenPlasmaGeometry66, greenPlasmaMaterial66)
greenPlasmaMesh66.position.set( (Math.cos((1302 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1302 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup66.add(greenPlasmaMesh66)

// bluePlasmaMesh66
const bluePlasmaGeometry66 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial66 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh66 = new THREE.Mesh(bluePlasmaGeometry66, bluePlasmaMaterial66)
bluePlasmaMesh66.position.set( (Math.cos((2142 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2142 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup66.add(bluePlasmaMesh66)

plasmaGroup66.rotation.z = Math.PI / 180 * 90
plasmaGroupB66.add(plasmaGroup66)

plasmaGroupB66.rotation.y = (66 * ((Math.PI / 2) / 90))
plasmaGroupC66.add(plasmaGroupB66)

plasmaGroupC66.position.x = (Math.sin((66 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC66.position.z = (Math.cos((66 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC66)

// plasmaGroup67		###############################################################################
const plasmaGroup67 = new THREE.Group()

const plasmaGroupB67 = new THREE.Group()

const plasmaGroupC67 = new THREE.Group()

// redPlasmaMesh67
const redPlasmaGeometry67 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial67 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh67 = new THREE.Mesh(redPlasmaGeometry67, redPlasmaMaterial67)
redPlasmaMesh67.position.set( (Math.cos((469 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((469 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup67.add(redPlasmaMesh67)

// greenPlasmaMesh67
const greenPlasmaGeometry67 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial67 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh67 = new THREE.Mesh(greenPlasmaGeometry67, greenPlasmaMaterial67)
greenPlasmaMesh67.position.set( (Math.cos((1309 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1309 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup67.add(greenPlasmaMesh67)

// bluePlasmaMesh67
const bluePlasmaGeometry67 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial67 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh67 = new THREE.Mesh(bluePlasmaGeometry67, bluePlasmaMaterial67)
bluePlasmaMesh67.position.set( (Math.cos((2149 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2149 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup67.add(bluePlasmaMesh67)

plasmaGroup67.rotation.z = Math.PI / 180 * 90
plasmaGroupB67.add(plasmaGroup67)

plasmaGroupB67.rotation.y = (67 * ((Math.PI / 2) / 90))
plasmaGroupC67.add(plasmaGroupB67)

plasmaGroupC67.position.x = (Math.sin((67 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC67.position.z = (Math.cos((67 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC67)

// plasmaGroup68		###############################################################################
const plasmaGroup68 = new THREE.Group()

const plasmaGroupB68 = new THREE.Group()

const plasmaGroupC68 = new THREE.Group()

// redPlasmaMesh68
const redPlasmaGeometry68 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial68 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh68 = new THREE.Mesh(redPlasmaGeometry68, redPlasmaMaterial68)
redPlasmaMesh68.position.set( (Math.cos((476 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((476 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup68.add(redPlasmaMesh68)

// greenPlasmaMesh68
const greenPlasmaGeometry68 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial68 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh68 = new THREE.Mesh(greenPlasmaGeometry68, greenPlasmaMaterial68)
greenPlasmaMesh68.position.set( (Math.cos((1316 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1316 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup68.add(greenPlasmaMesh68)

// bluePlasmaMesh68
const bluePlasmaGeometry68 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial68 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh68 = new THREE.Mesh(bluePlasmaGeometry68, bluePlasmaMaterial68)
bluePlasmaMesh68.position.set( (Math.cos((2156 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2156 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup68.add(bluePlasmaMesh68)

plasmaGroup68.rotation.z = Math.PI / 180 * 90
plasmaGroupB68.add(plasmaGroup68)

plasmaGroupB68.rotation.y = (68 * ((Math.PI / 2) / 90))
plasmaGroupC68.add(plasmaGroupB68)

plasmaGroupC68.position.x = (Math.sin((68 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC68.position.z = (Math.cos((68 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC68)

// plasmaGroup69		###############################################################################
const plasmaGroup69 = new THREE.Group()

const plasmaGroupB69 = new THREE.Group()

const plasmaGroupC69 = new THREE.Group()

// redPlasmaMesh69
const redPlasmaGeometry69 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial69 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh69 = new THREE.Mesh(redPlasmaGeometry69, redPlasmaMaterial69)
redPlasmaMesh69.position.set( (Math.cos((483 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((483 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup69.add(redPlasmaMesh69)

// greenPlasmaMesh69
const greenPlasmaGeometry69 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial69 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh69 = new THREE.Mesh(greenPlasmaGeometry69, greenPlasmaMaterial69)
greenPlasmaMesh69.position.set( (Math.cos((1323 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1323 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup69.add(greenPlasmaMesh69)

// bluePlasmaMesh69
const bluePlasmaGeometry69 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial69 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh69 = new THREE.Mesh(bluePlasmaGeometry69, bluePlasmaMaterial69)
bluePlasmaMesh69.position.set( (Math.cos((2163 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2163 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup69.add(bluePlasmaMesh69)

plasmaGroup69.rotation.z = Math.PI / 180 * 90
plasmaGroupB69.add(plasmaGroup69)

plasmaGroupB69.rotation.y = (69 * ((Math.PI / 2) / 90))
plasmaGroupC69.add(plasmaGroupB69)

plasmaGroupC69.position.x = (Math.sin((69 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC69.position.z = (Math.cos((69 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC69)

// plasmaGroup70		###############################################################################
const plasmaGroup70 = new THREE.Group()

const plasmaGroupB70 = new THREE.Group()

const plasmaGroupC70 = new THREE.Group()

// redPlasmaMesh70
const redPlasmaGeometry70 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial70 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh70 = new THREE.Mesh(redPlasmaGeometry70, redPlasmaMaterial70)
redPlasmaMesh70.position.set( (Math.cos((490 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((490 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup70.add(redPlasmaMesh70)

// greenPlasmaMesh70
const greenPlasmaGeometry70 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial70 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh70 = new THREE.Mesh(greenPlasmaGeometry70, greenPlasmaMaterial70)
greenPlasmaMesh70.position.set( (Math.cos((1330 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1330 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup70.add(greenPlasmaMesh70)

// bluePlasmaMesh70
const bluePlasmaGeometry70 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial70 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh70 = new THREE.Mesh(bluePlasmaGeometry70, bluePlasmaMaterial70)
bluePlasmaMesh70.position.set( (Math.cos((2170 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2170 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup70.add(bluePlasmaMesh70)

plasmaGroup70.rotation.z = Math.PI / 180 * 90
plasmaGroupB70.add(plasmaGroup70)

plasmaGroupB70.rotation.y = (70 * ((Math.PI / 2) / 90))
plasmaGroupC70.add(plasmaGroupB70)

plasmaGroupC70.position.x = (Math.sin((70 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC70.position.z = (Math.cos((70 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC70)

// plasmaGroup71		###############################################################################
const plasmaGroup71 = new THREE.Group()

const plasmaGroupB71 = new THREE.Group()

const plasmaGroupC71 = new THREE.Group()

// redPlasmaMesh71
const redPlasmaGeometry71 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial71 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh71 = new THREE.Mesh(redPlasmaGeometry71, redPlasmaMaterial71)
redPlasmaMesh71.position.set( (Math.cos((497 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((497 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup71.add(redPlasmaMesh71)

// greenPlasmaMesh71
const greenPlasmaGeometry71 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial71 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh71 = new THREE.Mesh(greenPlasmaGeometry71, greenPlasmaMaterial71)
greenPlasmaMesh71.position.set( (Math.cos((1337 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1337 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup71.add(greenPlasmaMesh71)

// bluePlasmaMesh71
const bluePlasmaGeometry71 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial71 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh71 = new THREE.Mesh(bluePlasmaGeometry71, bluePlasmaMaterial71)
bluePlasmaMesh71.position.set( (Math.cos((2177 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2177 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup71.add(bluePlasmaMesh71)

plasmaGroup71.rotation.z = Math.PI / 180 * 90
plasmaGroupB71.add(plasmaGroup71)

plasmaGroupB71.rotation.y = (71 * ((Math.PI / 2) / 90))
plasmaGroupC71.add(plasmaGroupB71)

plasmaGroupC71.position.x = (Math.sin((71 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC71.position.z = (Math.cos((71 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC71)

// plasmaGroup72		###############################################################################
const plasmaGroup72 = new THREE.Group()

const plasmaGroupB72 = new THREE.Group()

const plasmaGroupC72 = new THREE.Group()

// redPlasmaMesh72
const redPlasmaGeometry72 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial72 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh72 = new THREE.Mesh(redPlasmaGeometry72, redPlasmaMaterial72)
redPlasmaMesh72.position.set( (Math.cos((504 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((504 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup72.add(redPlasmaMesh72)

// greenPlasmaMesh72
const greenPlasmaGeometry72 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial72 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh72 = new THREE.Mesh(greenPlasmaGeometry72, greenPlasmaMaterial72)
greenPlasmaMesh72.position.set( (Math.cos((1344 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1344 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup72.add(greenPlasmaMesh72)

// bluePlasmaMesh72
const bluePlasmaGeometry72 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial72 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh72 = new THREE.Mesh(bluePlasmaGeometry72, bluePlasmaMaterial72)
bluePlasmaMesh72.position.set( (Math.cos((2184 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2184 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup72.add(bluePlasmaMesh72)

plasmaGroup72.rotation.z = Math.PI / 180 * 90
plasmaGroupB72.add(plasmaGroup72)

plasmaGroupB72.rotation.y = (72 * ((Math.PI / 2) / 90))
plasmaGroupC72.add(plasmaGroupB72)

plasmaGroupC72.position.x = (Math.sin((72 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC72.position.z = (Math.cos((72 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC72)

// plasmaGroup73		###############################################################################
const plasmaGroup73 = new THREE.Group()

const plasmaGroupB73 = new THREE.Group()

const plasmaGroupC73 = new THREE.Group()

// redPlasmaMesh73
const redPlasmaGeometry73 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial73 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh73 = new THREE.Mesh(redPlasmaGeometry73, redPlasmaMaterial73)
redPlasmaMesh73.position.set( (Math.cos((511 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((511 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup73.add(redPlasmaMesh73)

// greenPlasmaMesh73
const greenPlasmaGeometry73 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial73 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh73 = new THREE.Mesh(greenPlasmaGeometry73, greenPlasmaMaterial73)
greenPlasmaMesh73.position.set( (Math.cos((1351 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1351 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup73.add(greenPlasmaMesh73)

// bluePlasmaMesh73
const bluePlasmaGeometry73 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial73 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh73 = new THREE.Mesh(bluePlasmaGeometry73, bluePlasmaMaterial73)
bluePlasmaMesh73.position.set( (Math.cos((2191 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2191 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup73.add(bluePlasmaMesh73)

plasmaGroup73.rotation.z = Math.PI / 180 * 90
plasmaGroupB73.add(plasmaGroup73)

plasmaGroupB73.rotation.y = (73 * ((Math.PI / 2) / 90))
plasmaGroupC73.add(plasmaGroupB73)

plasmaGroupC73.position.x = (Math.sin((73 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC73.position.z = (Math.cos((73 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC73)

// plasmaGroup74		###############################################################################
const plasmaGroup74 = new THREE.Group()

const plasmaGroupB74 = new THREE.Group()

const plasmaGroupC74 = new THREE.Group()

// redPlasmaMesh74
const redPlasmaGeometry74 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial74 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh74 = new THREE.Mesh(redPlasmaGeometry74, redPlasmaMaterial74)
redPlasmaMesh74.position.set( (Math.cos((518 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((518 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup74.add(redPlasmaMesh74)

// greenPlasmaMesh74
const greenPlasmaGeometry74 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial74 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh74 = new THREE.Mesh(greenPlasmaGeometry74, greenPlasmaMaterial74)
greenPlasmaMesh74.position.set( (Math.cos((1358 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1358 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup74.add(greenPlasmaMesh74)

// bluePlasmaMesh74
const bluePlasmaGeometry74 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial74 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh74 = new THREE.Mesh(bluePlasmaGeometry74, bluePlasmaMaterial74)
bluePlasmaMesh74.position.set( (Math.cos((2198 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2198 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup74.add(bluePlasmaMesh74)

plasmaGroup74.rotation.z = Math.PI / 180 * 90
plasmaGroupB74.add(plasmaGroup74)

plasmaGroupB74.rotation.y = (74 * ((Math.PI / 2) / 90))
plasmaGroupC74.add(plasmaGroupB74)

plasmaGroupC74.position.x = (Math.sin((74 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC74.position.z = (Math.cos((74 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC74)

// plasmaGroup75		###############################################################################
const plasmaGroup75 = new THREE.Group()

const plasmaGroupB75 = new THREE.Group()

const plasmaGroupC75 = new THREE.Group()

// redPlasmaMesh75
const redPlasmaGeometry75 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial75 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh75 = new THREE.Mesh(redPlasmaGeometry75, redPlasmaMaterial75)
redPlasmaMesh75.position.set( (Math.cos((525 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((525 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup75.add(redPlasmaMesh75)

// greenPlasmaMesh75
const greenPlasmaGeometry75 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial75 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh75 = new THREE.Mesh(greenPlasmaGeometry75, greenPlasmaMaterial75)
greenPlasmaMesh75.position.set( (Math.cos((1365 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1365 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup75.add(greenPlasmaMesh75)

// bluePlasmaMesh75
const bluePlasmaGeometry75 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial75 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh75 = new THREE.Mesh(bluePlasmaGeometry75, bluePlasmaMaterial75)
bluePlasmaMesh75.position.set( (Math.cos((2205 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2205 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup75.add(bluePlasmaMesh75)

plasmaGroup75.rotation.z = Math.PI / 180 * 90
plasmaGroupB75.add(plasmaGroup75)

plasmaGroupB75.rotation.y = (75 * ((Math.PI / 2) / 90))
plasmaGroupC75.add(plasmaGroupB75)

plasmaGroupC75.position.x = (Math.sin((75 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC75.position.z = (Math.cos((75 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC75)

// plasmaGroup76		###############################################################################
const plasmaGroup76 = new THREE.Group()

const plasmaGroupB76 = new THREE.Group()

const plasmaGroupC76 = new THREE.Group()

// redPlasmaMesh76
const redPlasmaGeometry76 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial76 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh76 = new THREE.Mesh(redPlasmaGeometry76, redPlasmaMaterial76)
redPlasmaMesh76.position.set( (Math.cos((532 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((532 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup76.add(redPlasmaMesh76)

// greenPlasmaMesh76
const greenPlasmaGeometry76 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial76 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh76 = new THREE.Mesh(greenPlasmaGeometry76, greenPlasmaMaterial76)
greenPlasmaMesh76.position.set( (Math.cos((1372 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1372 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup76.add(greenPlasmaMesh76)

// bluePlasmaMesh76
const bluePlasmaGeometry76 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial76 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh76 = new THREE.Mesh(bluePlasmaGeometry76, bluePlasmaMaterial76)
bluePlasmaMesh76.position.set( (Math.cos((2212 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2212 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup76.add(bluePlasmaMesh76)

plasmaGroup76.rotation.z = Math.PI / 180 * 90
plasmaGroupB76.add(plasmaGroup76)

plasmaGroupB76.rotation.y = (76 * ((Math.PI / 2) / 90))
plasmaGroupC76.add(plasmaGroupB76)

plasmaGroupC76.position.x = (Math.sin((76 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC76.position.z = (Math.cos((76 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC76)

// plasmaGroup77		###############################################################################
const plasmaGroup77 = new THREE.Group()

const plasmaGroupB77 = new THREE.Group()

const plasmaGroupC77 = new THREE.Group()

// redPlasmaMesh77
const redPlasmaGeometry77 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial77 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh77 = new THREE.Mesh(redPlasmaGeometry77, redPlasmaMaterial77)
redPlasmaMesh77.position.set( (Math.cos((539 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((539 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup77.add(redPlasmaMesh77)

// greenPlasmaMesh77
const greenPlasmaGeometry77 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial77 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh77 = new THREE.Mesh(greenPlasmaGeometry77, greenPlasmaMaterial77)
greenPlasmaMesh77.position.set( (Math.cos((1379 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1379 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup77.add(greenPlasmaMesh77)

// bluePlasmaMesh77
const bluePlasmaGeometry77 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial77 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh77 = new THREE.Mesh(bluePlasmaGeometry77, bluePlasmaMaterial77)
bluePlasmaMesh77.position.set( (Math.cos((2219 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2219 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup77.add(bluePlasmaMesh77)

plasmaGroup77.rotation.z = Math.PI / 180 * 90
plasmaGroupB77.add(plasmaGroup77)

plasmaGroupB77.rotation.y = (77 * ((Math.PI / 2) / 90))
plasmaGroupC77.add(plasmaGroupB77)

plasmaGroupC77.position.x = (Math.sin((77 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC77.position.z = (Math.cos((77 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC77)

// plasmaGroup78		###############################################################################
const plasmaGroup78 = new THREE.Group()

const plasmaGroupB78 = new THREE.Group()

const plasmaGroupC78 = new THREE.Group()

// redPlasmaMesh78
const redPlasmaGeometry78 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial78 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh78 = new THREE.Mesh(redPlasmaGeometry78, redPlasmaMaterial78)
redPlasmaMesh78.position.set( (Math.cos((546 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((546 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup78.add(redPlasmaMesh78)

// greenPlasmaMesh78
const greenPlasmaGeometry78 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial78 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh78 = new THREE.Mesh(greenPlasmaGeometry78, greenPlasmaMaterial78)
greenPlasmaMesh78.position.set( (Math.cos((1386 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1386 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup78.add(greenPlasmaMesh78)

// bluePlasmaMesh78
const bluePlasmaGeometry78 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial78 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh78 = new THREE.Mesh(bluePlasmaGeometry78, bluePlasmaMaterial78)
bluePlasmaMesh78.position.set( (Math.cos((2226 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2226 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup78.add(bluePlasmaMesh78)

plasmaGroup78.rotation.z = Math.PI / 180 * 90
plasmaGroupB78.add(plasmaGroup78)

plasmaGroupB78.rotation.y = (78 * ((Math.PI / 2) / 90))
plasmaGroupC78.add(plasmaGroupB78)

plasmaGroupC78.position.x = (Math.sin((78 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC78.position.z = (Math.cos((78 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC78)

// plasmaGroup79		###############################################################################
const plasmaGroup79 = new THREE.Group()

const plasmaGroupB79 = new THREE.Group()

const plasmaGroupC79 = new THREE.Group()

// redPlasmaMesh79
const redPlasmaGeometry79 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial79 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh79 = new THREE.Mesh(redPlasmaGeometry79, redPlasmaMaterial79)
redPlasmaMesh79.position.set( (Math.cos((553 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((553 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup79.add(redPlasmaMesh79)

// greenPlasmaMesh79
const greenPlasmaGeometry79 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial79 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh79 = new THREE.Mesh(greenPlasmaGeometry79, greenPlasmaMaterial79)
greenPlasmaMesh79.position.set( (Math.cos((1393 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1393 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup79.add(greenPlasmaMesh79)

// bluePlasmaMesh79
const bluePlasmaGeometry79 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial79 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh79 = new THREE.Mesh(bluePlasmaGeometry79, bluePlasmaMaterial79)
bluePlasmaMesh79.position.set( (Math.cos((2233 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2233 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup79.add(bluePlasmaMesh79)

plasmaGroup79.rotation.z = Math.PI / 180 * 90
plasmaGroupB79.add(plasmaGroup79)

plasmaGroupB79.rotation.y = (79 * ((Math.PI / 2) / 90))
plasmaGroupC79.add(plasmaGroupB79)

plasmaGroupC79.position.x = (Math.sin((79 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC79.position.z = (Math.cos((79 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC79)

// plasmaGroup80		###############################################################################
const plasmaGroup80 = new THREE.Group()

const plasmaGroupB80 = new THREE.Group()

const plasmaGroupC80 = new THREE.Group()

// redPlasmaMesh80
const redPlasmaGeometry80 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial80 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh80 = new THREE.Mesh(redPlasmaGeometry80, redPlasmaMaterial80)
redPlasmaMesh80.position.set( (Math.cos((560 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((560 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup80.add(redPlasmaMesh80)

// greenPlasmaMesh80
const greenPlasmaGeometry80 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial80 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh80 = new THREE.Mesh(greenPlasmaGeometry80, greenPlasmaMaterial80)
greenPlasmaMesh80.position.set( (Math.cos((1400 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1400 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup80.add(greenPlasmaMesh80)

// bluePlasmaMesh80
const bluePlasmaGeometry80 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial80 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh80 = new THREE.Mesh(bluePlasmaGeometry80, bluePlasmaMaterial80)
bluePlasmaMesh80.position.set( (Math.cos((2240 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2240 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup80.add(bluePlasmaMesh80)

plasmaGroup80.rotation.z = Math.PI / 180 * 90
plasmaGroupB80.add(plasmaGroup80)

plasmaGroupB80.rotation.y = (80 * ((Math.PI / 2) / 90))
plasmaGroupC80.add(plasmaGroupB80)

plasmaGroupC80.position.x = (Math.sin((80 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC80.position.z = (Math.cos((80 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC80)

// plasmaGroup81		###############################################################################
const plasmaGroup81 = new THREE.Group()

const plasmaGroupB81 = new THREE.Group()

const plasmaGroupC81 = new THREE.Group()

// redPlasmaMesh81
const redPlasmaGeometry81 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial81 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh81 = new THREE.Mesh(redPlasmaGeometry81, redPlasmaMaterial81)
redPlasmaMesh81.position.set( (Math.cos((567 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((567 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup81.add(redPlasmaMesh81)

// greenPlasmaMesh81
const greenPlasmaGeometry81 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial81 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh81 = new THREE.Mesh(greenPlasmaGeometry81, greenPlasmaMaterial81)
greenPlasmaMesh81.position.set( (Math.cos((1407 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1407 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup81.add(greenPlasmaMesh81)

// bluePlasmaMesh81
const bluePlasmaGeometry81 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial81 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh81 = new THREE.Mesh(bluePlasmaGeometry81, bluePlasmaMaterial81)
bluePlasmaMesh81.position.set( (Math.cos((2247 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2247 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup81.add(bluePlasmaMesh81)

plasmaGroup81.rotation.z = Math.PI / 180 * 90
plasmaGroupB81.add(plasmaGroup81)

plasmaGroupB81.rotation.y = (81 * ((Math.PI / 2) / 90))
plasmaGroupC81.add(plasmaGroupB81)

plasmaGroupC81.position.x = (Math.sin((81 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC81.position.z = (Math.cos((81 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC81)

// plasmaGroup82		###############################################################################
const plasmaGroup82 = new THREE.Group()

const plasmaGroupB82 = new THREE.Group()

const plasmaGroupC82 = new THREE.Group()

// redPlasmaMesh82
const redPlasmaGeometry82 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial82 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh82 = new THREE.Mesh(redPlasmaGeometry82, redPlasmaMaterial82)
redPlasmaMesh82.position.set( (Math.cos((574 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((574 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup82.add(redPlasmaMesh82)

// greenPlasmaMesh82
const greenPlasmaGeometry82 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial82 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh82 = new THREE.Mesh(greenPlasmaGeometry82, greenPlasmaMaterial82)
greenPlasmaMesh82.position.set( (Math.cos((1414 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1414 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup82.add(greenPlasmaMesh82)

// bluePlasmaMesh82
const bluePlasmaGeometry82 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial82 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh82 = new THREE.Mesh(bluePlasmaGeometry82, bluePlasmaMaterial82)
bluePlasmaMesh82.position.set( (Math.cos((2254 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2254 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup82.add(bluePlasmaMesh82)

plasmaGroup82.rotation.z = Math.PI / 180 * 90
plasmaGroupB82.add(plasmaGroup82)

plasmaGroupB82.rotation.y = (82 * ((Math.PI / 2) / 90))
plasmaGroupC82.add(plasmaGroupB82)

plasmaGroupC82.position.x = (Math.sin((82 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC82.position.z = (Math.cos((82 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC82)

// plasmaGroup83		###############################################################################
const plasmaGroup83 = new THREE.Group()

const plasmaGroupB83 = new THREE.Group()

const plasmaGroupC83 = new THREE.Group()

// redPlasmaMesh83
const redPlasmaGeometry83 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial83 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh83 = new THREE.Mesh(redPlasmaGeometry83, redPlasmaMaterial83)
redPlasmaMesh83.position.set( (Math.cos((581 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((581 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup83.add(redPlasmaMesh83)

// greenPlasmaMesh83
const greenPlasmaGeometry83 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial83 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh83 = new THREE.Mesh(greenPlasmaGeometry83, greenPlasmaMaterial83)
greenPlasmaMesh83.position.set( (Math.cos((1421 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1421 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup83.add(greenPlasmaMesh83)

// bluePlasmaMesh83
const bluePlasmaGeometry83 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial83 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh83 = new THREE.Mesh(bluePlasmaGeometry83, bluePlasmaMaterial83)
bluePlasmaMesh83.position.set( (Math.cos((2261 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2261 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup83.add(bluePlasmaMesh83)

plasmaGroup83.rotation.z = Math.PI / 180 * 90
plasmaGroupB83.add(plasmaGroup83)

plasmaGroupB83.rotation.y = (83 * ((Math.PI / 2) / 90))
plasmaGroupC83.add(plasmaGroupB83)

plasmaGroupC83.position.x = (Math.sin((83 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC83.position.z = (Math.cos((83 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC83)

// plasmaGroup84		###############################################################################
const plasmaGroup84 = new THREE.Group()

const plasmaGroupB84 = new THREE.Group()

const plasmaGroupC84 = new THREE.Group()

// redPlasmaMesh84
const redPlasmaGeometry84 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial84 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh84 = new THREE.Mesh(redPlasmaGeometry84, redPlasmaMaterial84)
redPlasmaMesh84.position.set( (Math.cos((588 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((588 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup84.add(redPlasmaMesh84)

// greenPlasmaMesh84
const greenPlasmaGeometry84 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial84 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh84 = new THREE.Mesh(greenPlasmaGeometry84, greenPlasmaMaterial84)
greenPlasmaMesh84.position.set( (Math.cos((1428 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1428 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup84.add(greenPlasmaMesh84)

// bluePlasmaMesh84
const bluePlasmaGeometry84 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial84 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh84 = new THREE.Mesh(bluePlasmaGeometry84, bluePlasmaMaterial84)
bluePlasmaMesh84.position.set( (Math.cos((2268 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2268 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup84.add(bluePlasmaMesh84)

plasmaGroup84.rotation.z = Math.PI / 180 * 90
plasmaGroupB84.add(plasmaGroup84)

plasmaGroupB84.rotation.y = (84 * ((Math.PI / 2) / 90))
plasmaGroupC84.add(plasmaGroupB84)

plasmaGroupC84.position.x = (Math.sin((84 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC84.position.z = (Math.cos((84 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC84)

// plasmaGroup85		###############################################################################
const plasmaGroup85 = new THREE.Group()

const plasmaGroupB85 = new THREE.Group()

const plasmaGroupC85 = new THREE.Group()

// redPlasmaMesh85
const redPlasmaGeometry85 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial85 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh85 = new THREE.Mesh(redPlasmaGeometry85, redPlasmaMaterial85)
redPlasmaMesh85.position.set( (Math.cos((595 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((595 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup85.add(redPlasmaMesh85)

// greenPlasmaMesh85
const greenPlasmaGeometry85 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial85 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh85 = new THREE.Mesh(greenPlasmaGeometry85, greenPlasmaMaterial85)
greenPlasmaMesh85.position.set( (Math.cos((1435 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1435 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup85.add(greenPlasmaMesh85)

// bluePlasmaMesh85
const bluePlasmaGeometry85 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial85 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh85 = new THREE.Mesh(bluePlasmaGeometry85, bluePlasmaMaterial85)
bluePlasmaMesh85.position.set( (Math.cos((2275 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2275 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup85.add(bluePlasmaMesh85)

plasmaGroup85.rotation.z = Math.PI / 180 * 90
plasmaGroupB85.add(plasmaGroup85)

plasmaGroupB85.rotation.y = (85 * ((Math.PI / 2) / 90))
plasmaGroupC85.add(plasmaGroupB85)

plasmaGroupC85.position.x = (Math.sin((85 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC85.position.z = (Math.cos((85 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC85)

// plasmaGroup86		###############################################################################
const plasmaGroup86 = new THREE.Group()

const plasmaGroupB86 = new THREE.Group()

const plasmaGroupC86 = new THREE.Group()

// redPlasmaMesh86
const redPlasmaGeometry86 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial86 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh86 = new THREE.Mesh(redPlasmaGeometry86, redPlasmaMaterial86)
redPlasmaMesh86.position.set( (Math.cos((602 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((602 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup86.add(redPlasmaMesh86)

// greenPlasmaMesh86
const greenPlasmaGeometry86 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial86 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh86 = new THREE.Mesh(greenPlasmaGeometry86, greenPlasmaMaterial86)
greenPlasmaMesh86.position.set( (Math.cos((1442 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1442 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup86.add(greenPlasmaMesh86)

// bluePlasmaMesh86
const bluePlasmaGeometry86 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial86 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh86 = new THREE.Mesh(bluePlasmaGeometry86, bluePlasmaMaterial86)
bluePlasmaMesh86.position.set( (Math.cos((2282 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2282 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup86.add(bluePlasmaMesh86)

plasmaGroup86.rotation.z = Math.PI / 180 * 90
plasmaGroupB86.add(plasmaGroup86)

plasmaGroupB86.rotation.y = (86 * ((Math.PI / 2) / 90))
plasmaGroupC86.add(plasmaGroupB86)

plasmaGroupC86.position.x = (Math.sin((86 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC86.position.z = (Math.cos((86 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC86)

// plasmaGroup87		###############################################################################
const plasmaGroup87 = new THREE.Group()

const plasmaGroupB87 = new THREE.Group()

const plasmaGroupC87 = new THREE.Group()

// redPlasmaMesh87
const redPlasmaGeometry87 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial87 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh87 = new THREE.Mesh(redPlasmaGeometry87, redPlasmaMaterial87)
redPlasmaMesh87.position.set( (Math.cos((609 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((609 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup87.add(redPlasmaMesh87)

// greenPlasmaMesh87
const greenPlasmaGeometry87 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial87 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh87 = new THREE.Mesh(greenPlasmaGeometry87, greenPlasmaMaterial87)
greenPlasmaMesh87.position.set( (Math.cos((1449 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1449 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup87.add(greenPlasmaMesh87)

// bluePlasmaMesh87
const bluePlasmaGeometry87 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial87 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh87 = new THREE.Mesh(bluePlasmaGeometry87, bluePlasmaMaterial87)
bluePlasmaMesh87.position.set( (Math.cos((2289 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2289 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup87.add(bluePlasmaMesh87)

plasmaGroup87.rotation.z = Math.PI / 180 * 90
plasmaGroupB87.add(plasmaGroup87)

plasmaGroupB87.rotation.y = (87 * ((Math.PI / 2) / 90))
plasmaGroupC87.add(plasmaGroupB87)

plasmaGroupC87.position.x = (Math.sin((87 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC87.position.z = (Math.cos((87 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC87)

// plasmaGroup88		###############################################################################
const plasmaGroup88 = new THREE.Group()

const plasmaGroupB88 = new THREE.Group()

const plasmaGroupC88 = new THREE.Group()

// redPlasmaMesh88
const redPlasmaGeometry88 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial88 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh88 = new THREE.Mesh(redPlasmaGeometry88, redPlasmaMaterial88)
redPlasmaMesh88.position.set( (Math.cos((616 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((616 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup88.add(redPlasmaMesh88)

// greenPlasmaMesh88
const greenPlasmaGeometry88 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial88 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh88 = new THREE.Mesh(greenPlasmaGeometry88, greenPlasmaMaterial88)
greenPlasmaMesh88.position.set( (Math.cos((1456 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1456 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup88.add(greenPlasmaMesh88)

// bluePlasmaMesh88
const bluePlasmaGeometry88 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial88 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh88 = new THREE.Mesh(bluePlasmaGeometry88, bluePlasmaMaterial88)
bluePlasmaMesh88.position.set( (Math.cos((2296 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2296 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup88.add(bluePlasmaMesh88)

plasmaGroup88.rotation.z = Math.PI / 180 * 90
plasmaGroupB88.add(plasmaGroup88)

plasmaGroupB88.rotation.y = (88 * ((Math.PI / 2) / 90))
plasmaGroupC88.add(plasmaGroupB88)

plasmaGroupC88.position.x = (Math.sin((88 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC88.position.z = (Math.cos((88 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC88)

// plasmaGroup89		###############################################################################
const plasmaGroup89 = new THREE.Group()

const plasmaGroupB89 = new THREE.Group()

const plasmaGroupC89 = new THREE.Group()

// redPlasmaMesh89
const redPlasmaGeometry89 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial89 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh89 = new THREE.Mesh(redPlasmaGeometry89, redPlasmaMaterial89)
redPlasmaMesh89.position.set( (Math.cos((623 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((623 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup89.add(redPlasmaMesh89)

// greenPlasmaMesh89
const greenPlasmaGeometry89 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial89 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh89 = new THREE.Mesh(greenPlasmaGeometry89, greenPlasmaMaterial89)
greenPlasmaMesh89.position.set( (Math.cos((1463 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1463 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup89.add(greenPlasmaMesh89)

// bluePlasmaMesh89
const bluePlasmaGeometry89 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial89 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh89 = new THREE.Mesh(bluePlasmaGeometry89, bluePlasmaMaterial89)
bluePlasmaMesh89.position.set( (Math.cos((2303 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2303 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup89.add(bluePlasmaMesh89)

plasmaGroup89.rotation.z = Math.PI / 180 * 90
plasmaGroupB89.add(plasmaGroup89)

plasmaGroupB89.rotation.y = (89 * ((Math.PI / 2) / 90))
plasmaGroupC89.add(plasmaGroupB89)

plasmaGroupC89.position.x = (Math.sin((89 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC89.position.z = (Math.cos((89 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC89)

// plasmaGroup90		###############################################################################
const plasmaGroup90 = new THREE.Group()

const plasmaGroupB90 = new THREE.Group()

const plasmaGroupC90 = new THREE.Group()

// redPlasmaMesh90
const redPlasmaGeometry90 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial90 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh90 = new THREE.Mesh(redPlasmaGeometry90, redPlasmaMaterial90)
redPlasmaMesh90.position.set( (Math.cos((630 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((630 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup90.add(redPlasmaMesh90)

// greenPlasmaMesh90
const greenPlasmaGeometry90 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial90 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh90 = new THREE.Mesh(greenPlasmaGeometry90, greenPlasmaMaterial90)
greenPlasmaMesh90.position.set( (Math.cos((1470 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1470 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup90.add(greenPlasmaMesh90)

// bluePlasmaMesh90
const bluePlasmaGeometry90 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial90 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh90 = new THREE.Mesh(bluePlasmaGeometry90, bluePlasmaMaterial90)
bluePlasmaMesh90.position.set( (Math.cos((2310 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2310 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup90.add(bluePlasmaMesh90)

plasmaGroup90.rotation.z = Math.PI / 180 * 90
plasmaGroupB90.add(plasmaGroup90)

plasmaGroupB90.rotation.y = (90 * ((Math.PI / 2) / 90))
plasmaGroupC90.add(plasmaGroupB90)

plasmaGroupC90.position.x = (Math.sin((90 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC90.position.z = (Math.cos((90 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC90)

// plasmaGroup91		###############################################################################
const plasmaGroup91 = new THREE.Group()

const plasmaGroupB91 = new THREE.Group()

const plasmaGroupC91 = new THREE.Group()

// redPlasmaMesh91
const redPlasmaGeometry91 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial91 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh91 = new THREE.Mesh(redPlasmaGeometry91, redPlasmaMaterial91)
redPlasmaMesh91.position.set( (Math.cos((637 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((637 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup91.add(redPlasmaMesh91)

// greenPlasmaMesh91
const greenPlasmaGeometry91 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial91 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh91 = new THREE.Mesh(greenPlasmaGeometry91, greenPlasmaMaterial91)
greenPlasmaMesh91.position.set( (Math.cos((1477 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1477 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup91.add(greenPlasmaMesh91)

// bluePlasmaMesh91
const bluePlasmaGeometry91 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial91 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh91 = new THREE.Mesh(bluePlasmaGeometry91, bluePlasmaMaterial91)
bluePlasmaMesh91.position.set( (Math.cos((2317 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2317 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup91.add(bluePlasmaMesh91)

plasmaGroup91.rotation.z = Math.PI / 180 * 90
plasmaGroupB91.add(plasmaGroup91)

plasmaGroupB91.rotation.y = (91 * ((Math.PI / 2) / 90))
plasmaGroupC91.add(plasmaGroupB91)

plasmaGroupC91.position.x = (Math.sin((91 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC91.position.z = (Math.cos((91 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC91)

// plasmaGroup92		###############################################################################
const plasmaGroup92 = new THREE.Group()

const plasmaGroupB92 = new THREE.Group()

const plasmaGroupC92 = new THREE.Group()

// redPlasmaMesh92
const redPlasmaGeometry92 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial92 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh92 = new THREE.Mesh(redPlasmaGeometry92, redPlasmaMaterial92)
redPlasmaMesh92.position.set( (Math.cos((644 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((644 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup92.add(redPlasmaMesh92)

// greenPlasmaMesh92
const greenPlasmaGeometry92 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial92 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh92 = new THREE.Mesh(greenPlasmaGeometry92, greenPlasmaMaterial92)
greenPlasmaMesh92.position.set( (Math.cos((1484 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1484 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup92.add(greenPlasmaMesh92)

// bluePlasmaMesh92
const bluePlasmaGeometry92 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial92 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh92 = new THREE.Mesh(bluePlasmaGeometry92, bluePlasmaMaterial92)
bluePlasmaMesh92.position.set( (Math.cos((2324 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2324 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup92.add(bluePlasmaMesh92)

plasmaGroup92.rotation.z = Math.PI / 180 * 90
plasmaGroupB92.add(plasmaGroup92)

plasmaGroupB92.rotation.y = (92 * ((Math.PI / 2) / 90))
plasmaGroupC92.add(plasmaGroupB92)

plasmaGroupC92.position.x = (Math.sin((92 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC92.position.z = (Math.cos((92 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC92)

// plasmaGroup93		###############################################################################
const plasmaGroup93 = new THREE.Group()

const plasmaGroupB93 = new THREE.Group()

const plasmaGroupC93 = new THREE.Group()

// redPlasmaMesh93
const redPlasmaGeometry93 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial93 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh93 = new THREE.Mesh(redPlasmaGeometry93, redPlasmaMaterial93)
redPlasmaMesh93.position.set( (Math.cos((651 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((651 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup93.add(redPlasmaMesh93)

// greenPlasmaMesh93
const greenPlasmaGeometry93 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial93 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh93 = new THREE.Mesh(greenPlasmaGeometry93, greenPlasmaMaterial93)
greenPlasmaMesh93.position.set( (Math.cos((1491 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1491 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup93.add(greenPlasmaMesh93)

// bluePlasmaMesh93
const bluePlasmaGeometry93 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial93 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh93 = new THREE.Mesh(bluePlasmaGeometry93, bluePlasmaMaterial93)
bluePlasmaMesh93.position.set( (Math.cos((2331 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2331 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup93.add(bluePlasmaMesh93)

plasmaGroup93.rotation.z = Math.PI / 180 * 90
plasmaGroupB93.add(plasmaGroup93)

plasmaGroupB93.rotation.y = (93 * ((Math.PI / 2) / 90))
plasmaGroupC93.add(plasmaGroupB93)

plasmaGroupC93.position.x = (Math.sin((93 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC93.position.z = (Math.cos((93 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC93)

// plasmaGroup94		###############################################################################
const plasmaGroup94 = new THREE.Group()

const plasmaGroupB94 = new THREE.Group()

const plasmaGroupC94 = new THREE.Group()

// redPlasmaMesh94
const redPlasmaGeometry94 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial94 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh94 = new THREE.Mesh(redPlasmaGeometry94, redPlasmaMaterial94)
redPlasmaMesh94.position.set( (Math.cos((658 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((658 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup94.add(redPlasmaMesh94)

// greenPlasmaMesh94
const greenPlasmaGeometry94 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial94 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh94 = new THREE.Mesh(greenPlasmaGeometry94, greenPlasmaMaterial94)
greenPlasmaMesh94.position.set( (Math.cos((1498 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1498 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup94.add(greenPlasmaMesh94)

// bluePlasmaMesh94
const bluePlasmaGeometry94 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial94 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh94 = new THREE.Mesh(bluePlasmaGeometry94, bluePlasmaMaterial94)
bluePlasmaMesh94.position.set( (Math.cos((2338 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2338 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup94.add(bluePlasmaMesh94)

plasmaGroup94.rotation.z = Math.PI / 180 * 90
plasmaGroupB94.add(plasmaGroup94)

plasmaGroupB94.rotation.y = (94 * ((Math.PI / 2) / 90))
plasmaGroupC94.add(plasmaGroupB94)

plasmaGroupC94.position.x = (Math.sin((94 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC94.position.z = (Math.cos((94 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC94)

// plasmaGroup95		###############################################################################
const plasmaGroup95 = new THREE.Group()

const plasmaGroupB95 = new THREE.Group()

const plasmaGroupC95 = new THREE.Group()

// redPlasmaMesh95
const redPlasmaGeometry95 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial95 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh95 = new THREE.Mesh(redPlasmaGeometry95, redPlasmaMaterial95)
redPlasmaMesh95.position.set( (Math.cos((665 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((665 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup95.add(redPlasmaMesh95)

// greenPlasmaMesh95
const greenPlasmaGeometry95 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial95 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh95 = new THREE.Mesh(greenPlasmaGeometry95, greenPlasmaMaterial95)
greenPlasmaMesh95.position.set( (Math.cos((1505 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1505 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup95.add(greenPlasmaMesh95)

// bluePlasmaMesh95
const bluePlasmaGeometry95 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial95 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh95 = new THREE.Mesh(bluePlasmaGeometry95, bluePlasmaMaterial95)
bluePlasmaMesh95.position.set( (Math.cos((2345 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2345 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup95.add(bluePlasmaMesh95)

plasmaGroup95.rotation.z = Math.PI / 180 * 90
plasmaGroupB95.add(plasmaGroup95)

plasmaGroupB95.rotation.y = (95 * ((Math.PI / 2) / 90))
plasmaGroupC95.add(plasmaGroupB95)

plasmaGroupC95.position.x = (Math.sin((95 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC95.position.z = (Math.cos((95 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC95)

// plasmaGroup96		###############################################################################
const plasmaGroup96 = new THREE.Group()

const plasmaGroupB96 = new THREE.Group()

const plasmaGroupC96 = new THREE.Group()

// redPlasmaMesh96
const redPlasmaGeometry96 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial96 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh96 = new THREE.Mesh(redPlasmaGeometry96, redPlasmaMaterial96)
redPlasmaMesh96.position.set( (Math.cos((672 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((672 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup96.add(redPlasmaMesh96)

// greenPlasmaMesh96
const greenPlasmaGeometry96 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial96 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh96 = new THREE.Mesh(greenPlasmaGeometry96, greenPlasmaMaterial96)
greenPlasmaMesh96.position.set( (Math.cos((1512 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1512 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup96.add(greenPlasmaMesh96)

// bluePlasmaMesh96
const bluePlasmaGeometry96 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial96 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh96 = new THREE.Mesh(bluePlasmaGeometry96, bluePlasmaMaterial96)
bluePlasmaMesh96.position.set( (Math.cos((2352 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2352 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup96.add(bluePlasmaMesh96)

plasmaGroup96.rotation.z = Math.PI / 180 * 90
plasmaGroupB96.add(plasmaGroup96)

plasmaGroupB96.rotation.y = (96 * ((Math.PI / 2) / 90))
plasmaGroupC96.add(plasmaGroupB96)

plasmaGroupC96.position.x = (Math.sin((96 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC96.position.z = (Math.cos((96 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC96)

// plasmaGroup97		###############################################################################
const plasmaGroup97 = new THREE.Group()

const plasmaGroupB97 = new THREE.Group()

const plasmaGroupC97 = new THREE.Group()

// redPlasmaMesh97
const redPlasmaGeometry97 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial97 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh97 = new THREE.Mesh(redPlasmaGeometry97, redPlasmaMaterial97)
redPlasmaMesh97.position.set( (Math.cos((679 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((679 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup97.add(redPlasmaMesh97)

// greenPlasmaMesh97
const greenPlasmaGeometry97 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial97 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh97 = new THREE.Mesh(greenPlasmaGeometry97, greenPlasmaMaterial97)
greenPlasmaMesh97.position.set( (Math.cos((1519 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1519 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup97.add(greenPlasmaMesh97)

// bluePlasmaMesh97
const bluePlasmaGeometry97 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial97 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh97 = new THREE.Mesh(bluePlasmaGeometry97, bluePlasmaMaterial97)
bluePlasmaMesh97.position.set( (Math.cos((2359 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2359 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup97.add(bluePlasmaMesh97)

plasmaGroup97.rotation.z = Math.PI / 180 * 90
plasmaGroupB97.add(plasmaGroup97)

plasmaGroupB97.rotation.y = (97 * ((Math.PI / 2) / 90))
plasmaGroupC97.add(plasmaGroupB97)

plasmaGroupC97.position.x = (Math.sin((97 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC97.position.z = (Math.cos((97 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC97)

// plasmaGroup98		###############################################################################
const plasmaGroup98 = new THREE.Group()

const plasmaGroupB98 = new THREE.Group()

const plasmaGroupC98 = new THREE.Group()

// redPlasmaMesh98
const redPlasmaGeometry98 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial98 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh98 = new THREE.Mesh(redPlasmaGeometry98, redPlasmaMaterial98)
redPlasmaMesh98.position.set( (Math.cos((686 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((686 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup98.add(redPlasmaMesh98)

// greenPlasmaMesh98
const greenPlasmaGeometry98 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial98 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh98 = new THREE.Mesh(greenPlasmaGeometry98, greenPlasmaMaterial98)
greenPlasmaMesh98.position.set( (Math.cos((1526 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1526 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup98.add(greenPlasmaMesh98)

// bluePlasmaMesh98
const bluePlasmaGeometry98 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial98 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh98 = new THREE.Mesh(bluePlasmaGeometry98, bluePlasmaMaterial98)
bluePlasmaMesh98.position.set( (Math.cos((2366 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2366 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup98.add(bluePlasmaMesh98)

plasmaGroup98.rotation.z = Math.PI / 180 * 90
plasmaGroupB98.add(plasmaGroup98)

plasmaGroupB98.rotation.y = (98 * ((Math.PI / 2) / 90))
plasmaGroupC98.add(plasmaGroupB98)

plasmaGroupC98.position.x = (Math.sin((98 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC98.position.z = (Math.cos((98 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC98)

// plasmaGroup99		###############################################################################
const plasmaGroup99 = new THREE.Group()

const plasmaGroupB99 = new THREE.Group()

const plasmaGroupC99 = new THREE.Group()

// redPlasmaMesh99
const redPlasmaGeometry99 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial99 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh99 = new THREE.Mesh(redPlasmaGeometry99, redPlasmaMaterial99)
redPlasmaMesh99.position.set( (Math.cos((693 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((693 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup99.add(redPlasmaMesh99)

// greenPlasmaMesh99
const greenPlasmaGeometry99 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial99 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh99 = new THREE.Mesh(greenPlasmaGeometry99, greenPlasmaMaterial99)
greenPlasmaMesh99.position.set( (Math.cos((1533 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1533 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup99.add(greenPlasmaMesh99)

// bluePlasmaMesh99
const bluePlasmaGeometry99 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial99 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh99 = new THREE.Mesh(bluePlasmaGeometry99, bluePlasmaMaterial99)
bluePlasmaMesh99.position.set( (Math.cos((2373 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2373 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup99.add(bluePlasmaMesh99)

plasmaGroup99.rotation.z = Math.PI / 180 * 90
plasmaGroupB99.add(plasmaGroup99)

plasmaGroupB99.rotation.y = (99 * ((Math.PI / 2) / 90))
plasmaGroupC99.add(plasmaGroupB99)

plasmaGroupC99.position.x = (Math.sin((99 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC99.position.z = (Math.cos((99 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC99)

// plasmaGroup100		###############################################################################
const plasmaGroup100 = new THREE.Group()

const plasmaGroupB100 = new THREE.Group()

const plasmaGroupC100 = new THREE.Group()

// redPlasmaMesh100
const redPlasmaGeometry100 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial100 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh100 = new THREE.Mesh(redPlasmaGeometry100, redPlasmaMaterial100)
redPlasmaMesh100.position.set( (Math.cos((700 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((700 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup100.add(redPlasmaMesh100)

// greenPlasmaMesh100
const greenPlasmaGeometry100 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial100 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh100 = new THREE.Mesh(greenPlasmaGeometry100, greenPlasmaMaterial100)
greenPlasmaMesh100.position.set( (Math.cos((1540 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1540 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup100.add(greenPlasmaMesh100)

// bluePlasmaMesh100
const bluePlasmaGeometry100 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial100 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh100 = new THREE.Mesh(bluePlasmaGeometry100, bluePlasmaMaterial100)
bluePlasmaMesh100.position.set( (Math.cos((2380 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2380 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup100.add(bluePlasmaMesh100)

plasmaGroup100.rotation.z = Math.PI / 180 * 90
plasmaGroupB100.add(plasmaGroup100)

plasmaGroupB100.rotation.y = (100 * ((Math.PI / 2) / 90))
plasmaGroupC100.add(plasmaGroupB100)

plasmaGroupC100.position.x = (Math.sin((100 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC100.position.z = (Math.cos((100 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC100)

// plasmaGroup101		###############################################################################
const plasmaGroup101 = new THREE.Group()

const plasmaGroupB101 = new THREE.Group()

const plasmaGroupC101 = new THREE.Group()

// redPlasmaMesh101
const redPlasmaGeometry101 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial101 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh101 = new THREE.Mesh(redPlasmaGeometry101, redPlasmaMaterial101)
redPlasmaMesh101.position.set( (Math.cos((707 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((707 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup101.add(redPlasmaMesh101)

// greenPlasmaMesh101
const greenPlasmaGeometry101 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial101 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh101 = new THREE.Mesh(greenPlasmaGeometry101, greenPlasmaMaterial101)
greenPlasmaMesh101.position.set( (Math.cos((1547 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1547 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup101.add(greenPlasmaMesh101)

// bluePlasmaMesh101
const bluePlasmaGeometry101 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial101 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh101 = new THREE.Mesh(bluePlasmaGeometry101, bluePlasmaMaterial101)
bluePlasmaMesh101.position.set( (Math.cos((2387 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2387 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup101.add(bluePlasmaMesh101)

plasmaGroup101.rotation.z = Math.PI / 180 * 90
plasmaGroupB101.add(plasmaGroup101)

plasmaGroupB101.rotation.y = (101 * ((Math.PI / 2) / 90))
plasmaGroupC101.add(plasmaGroupB101)

plasmaGroupC101.position.x = (Math.sin((101 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC101.position.z = (Math.cos((101 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC101)

// plasmaGroup102		###############################################################################
const plasmaGroup102 = new THREE.Group()

const plasmaGroupB102 = new THREE.Group()

const plasmaGroupC102 = new THREE.Group()

// redPlasmaMesh102
const redPlasmaGeometry102 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial102 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh102 = new THREE.Mesh(redPlasmaGeometry102, redPlasmaMaterial102)
redPlasmaMesh102.position.set( (Math.cos((714 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((714 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup102.add(redPlasmaMesh102)

// greenPlasmaMesh102
const greenPlasmaGeometry102 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial102 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh102 = new THREE.Mesh(greenPlasmaGeometry102, greenPlasmaMaterial102)
greenPlasmaMesh102.position.set( (Math.cos((1554 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1554 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup102.add(greenPlasmaMesh102)

// bluePlasmaMesh102
const bluePlasmaGeometry102 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial102 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh102 = new THREE.Mesh(bluePlasmaGeometry102, bluePlasmaMaterial102)
bluePlasmaMesh102.position.set( (Math.cos((2394 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2394 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup102.add(bluePlasmaMesh102)

plasmaGroup102.rotation.z = Math.PI / 180 * 90
plasmaGroupB102.add(plasmaGroup102)

plasmaGroupB102.rotation.y = (102 * ((Math.PI / 2) / 90))
plasmaGroupC102.add(plasmaGroupB102)

plasmaGroupC102.position.x = (Math.sin((102 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC102.position.z = (Math.cos((102 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC102)

// plasmaGroup103		###############################################################################
const plasmaGroup103 = new THREE.Group()

const plasmaGroupB103 = new THREE.Group()

const plasmaGroupC103 = new THREE.Group()

// redPlasmaMesh103
const redPlasmaGeometry103 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial103 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh103 = new THREE.Mesh(redPlasmaGeometry103, redPlasmaMaterial103)
redPlasmaMesh103.position.set( (Math.cos((721 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((721 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup103.add(redPlasmaMesh103)

// greenPlasmaMesh103
const greenPlasmaGeometry103 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial103 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh103 = new THREE.Mesh(greenPlasmaGeometry103, greenPlasmaMaterial103)
greenPlasmaMesh103.position.set( (Math.cos((1561 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1561 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup103.add(greenPlasmaMesh103)

// bluePlasmaMesh103
const bluePlasmaGeometry103 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial103 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh103 = new THREE.Mesh(bluePlasmaGeometry103, bluePlasmaMaterial103)
bluePlasmaMesh103.position.set( (Math.cos((2401 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2401 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup103.add(bluePlasmaMesh103)

plasmaGroup103.rotation.z = Math.PI / 180 * 90
plasmaGroupB103.add(plasmaGroup103)

plasmaGroupB103.rotation.y = (103 * ((Math.PI / 2) / 90))
plasmaGroupC103.add(plasmaGroupB103)

plasmaGroupC103.position.x = (Math.sin((103 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC103.position.z = (Math.cos((103 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC103)

// plasmaGroup104		###############################################################################
const plasmaGroup104 = new THREE.Group()

const plasmaGroupB104 = new THREE.Group()

const plasmaGroupC104 = new THREE.Group()

// redPlasmaMesh104
const redPlasmaGeometry104 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial104 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh104 = new THREE.Mesh(redPlasmaGeometry104, redPlasmaMaterial104)
redPlasmaMesh104.position.set( (Math.cos((728 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((728 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup104.add(redPlasmaMesh104)

// greenPlasmaMesh104
const greenPlasmaGeometry104 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial104 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh104 = new THREE.Mesh(greenPlasmaGeometry104, greenPlasmaMaterial104)
greenPlasmaMesh104.position.set( (Math.cos((1568 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1568 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup104.add(greenPlasmaMesh104)

// bluePlasmaMesh104
const bluePlasmaGeometry104 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial104 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh104 = new THREE.Mesh(bluePlasmaGeometry104, bluePlasmaMaterial104)
bluePlasmaMesh104.position.set( (Math.cos((2408 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2408 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup104.add(bluePlasmaMesh104)

plasmaGroup104.rotation.z = Math.PI / 180 * 90
plasmaGroupB104.add(plasmaGroup104)

plasmaGroupB104.rotation.y = (104 * ((Math.PI / 2) / 90))
plasmaGroupC104.add(plasmaGroupB104)

plasmaGroupC104.position.x = (Math.sin((104 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC104.position.z = (Math.cos((104 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC104)

// plasmaGroup105		###############################################################################
const plasmaGroup105 = new THREE.Group()

const plasmaGroupB105 = new THREE.Group()

const plasmaGroupC105 = new THREE.Group()

// redPlasmaMesh105
const redPlasmaGeometry105 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial105 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh105 = new THREE.Mesh(redPlasmaGeometry105, redPlasmaMaterial105)
redPlasmaMesh105.position.set( (Math.cos((735 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((735 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup105.add(redPlasmaMesh105)

// greenPlasmaMesh105
const greenPlasmaGeometry105 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial105 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh105 = new THREE.Mesh(greenPlasmaGeometry105, greenPlasmaMaterial105)
greenPlasmaMesh105.position.set( (Math.cos((1575 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1575 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup105.add(greenPlasmaMesh105)

// bluePlasmaMesh105
const bluePlasmaGeometry105 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial105 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh105 = new THREE.Mesh(bluePlasmaGeometry105, bluePlasmaMaterial105)
bluePlasmaMesh105.position.set( (Math.cos((2415 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2415 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup105.add(bluePlasmaMesh105)

plasmaGroup105.rotation.z = Math.PI / 180 * 90
plasmaGroupB105.add(plasmaGroup105)

plasmaGroupB105.rotation.y = (105 * ((Math.PI / 2) / 90))
plasmaGroupC105.add(plasmaGroupB105)

plasmaGroupC105.position.x = (Math.sin((105 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC105.position.z = (Math.cos((105 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC105)

// plasmaGroup106		###############################################################################
const plasmaGroup106 = new THREE.Group()

const plasmaGroupB106 = new THREE.Group()

const plasmaGroupC106 = new THREE.Group()

// redPlasmaMesh106
const redPlasmaGeometry106 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial106 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh106 = new THREE.Mesh(redPlasmaGeometry106, redPlasmaMaterial106)
redPlasmaMesh106.position.set( (Math.cos((742 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((742 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup106.add(redPlasmaMesh106)

// greenPlasmaMesh106
const greenPlasmaGeometry106 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial106 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh106 = new THREE.Mesh(greenPlasmaGeometry106, greenPlasmaMaterial106)
greenPlasmaMesh106.position.set( (Math.cos((1582 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1582 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup106.add(greenPlasmaMesh106)

// bluePlasmaMesh106
const bluePlasmaGeometry106 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial106 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh106 = new THREE.Mesh(bluePlasmaGeometry106, bluePlasmaMaterial106)
bluePlasmaMesh106.position.set( (Math.cos((2422 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2422 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup106.add(bluePlasmaMesh106)

plasmaGroup106.rotation.z = Math.PI / 180 * 90
plasmaGroupB106.add(plasmaGroup106)

plasmaGroupB106.rotation.y = (106 * ((Math.PI / 2) / 90))
plasmaGroupC106.add(plasmaGroupB106)

plasmaGroupC106.position.x = (Math.sin((106 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC106.position.z = (Math.cos((106 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC106)

// plasmaGroup107		###############################################################################
const plasmaGroup107 = new THREE.Group()

const plasmaGroupB107 = new THREE.Group()

const plasmaGroupC107 = new THREE.Group()

// redPlasmaMesh107
const redPlasmaGeometry107 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial107 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh107 = new THREE.Mesh(redPlasmaGeometry107, redPlasmaMaterial107)
redPlasmaMesh107.position.set( (Math.cos((749 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((749 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup107.add(redPlasmaMesh107)

// greenPlasmaMesh107
const greenPlasmaGeometry107 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial107 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh107 = new THREE.Mesh(greenPlasmaGeometry107, greenPlasmaMaterial107)
greenPlasmaMesh107.position.set( (Math.cos((1589 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1589 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup107.add(greenPlasmaMesh107)

// bluePlasmaMesh107
const bluePlasmaGeometry107 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial107 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh107 = new THREE.Mesh(bluePlasmaGeometry107, bluePlasmaMaterial107)
bluePlasmaMesh107.position.set( (Math.cos((2429 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2429 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup107.add(bluePlasmaMesh107)

plasmaGroup107.rotation.z = Math.PI / 180 * 90
plasmaGroupB107.add(plasmaGroup107)

plasmaGroupB107.rotation.y = (107 * ((Math.PI / 2) / 90))
plasmaGroupC107.add(plasmaGroupB107)

plasmaGroupC107.position.x = (Math.sin((107 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC107.position.z = (Math.cos((107 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC107)

// plasmaGroup108		###############################################################################
const plasmaGroup108 = new THREE.Group()

const plasmaGroupB108 = new THREE.Group()

const plasmaGroupC108 = new THREE.Group()

// redPlasmaMesh108
const redPlasmaGeometry108 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial108 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh108 = new THREE.Mesh(redPlasmaGeometry108, redPlasmaMaterial108)
redPlasmaMesh108.position.set( (Math.cos((756 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((756 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup108.add(redPlasmaMesh108)

// greenPlasmaMesh108
const greenPlasmaGeometry108 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial108 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh108 = new THREE.Mesh(greenPlasmaGeometry108, greenPlasmaMaterial108)
greenPlasmaMesh108.position.set( (Math.cos((1596 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1596 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup108.add(greenPlasmaMesh108)

// bluePlasmaMesh108
const bluePlasmaGeometry108 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial108 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh108 = new THREE.Mesh(bluePlasmaGeometry108, bluePlasmaMaterial108)
bluePlasmaMesh108.position.set( (Math.cos((2436 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2436 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup108.add(bluePlasmaMesh108)

plasmaGroup108.rotation.z = Math.PI / 180 * 90
plasmaGroupB108.add(plasmaGroup108)

plasmaGroupB108.rotation.y = (108 * ((Math.PI / 2) / 90))
plasmaGroupC108.add(plasmaGroupB108)

plasmaGroupC108.position.x = (Math.sin((108 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC108.position.z = (Math.cos((108 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC108)

// plasmaGroup109		###############################################################################
const plasmaGroup109 = new THREE.Group()

const plasmaGroupB109 = new THREE.Group()

const plasmaGroupC109 = new THREE.Group()

// redPlasmaMesh109
const redPlasmaGeometry109 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial109 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh109 = new THREE.Mesh(redPlasmaGeometry109, redPlasmaMaterial109)
redPlasmaMesh109.position.set( (Math.cos((763 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((763 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup109.add(redPlasmaMesh109)

// greenPlasmaMesh109
const greenPlasmaGeometry109 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial109 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh109 = new THREE.Mesh(greenPlasmaGeometry109, greenPlasmaMaterial109)
greenPlasmaMesh109.position.set( (Math.cos((1603 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1603 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup109.add(greenPlasmaMesh109)

// bluePlasmaMesh109
const bluePlasmaGeometry109 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial109 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh109 = new THREE.Mesh(bluePlasmaGeometry109, bluePlasmaMaterial109)
bluePlasmaMesh109.position.set( (Math.cos((2443 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2443 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup109.add(bluePlasmaMesh109)

plasmaGroup109.rotation.z = Math.PI / 180 * 90
plasmaGroupB109.add(plasmaGroup109)

plasmaGroupB109.rotation.y = (109 * ((Math.PI / 2) / 90))
plasmaGroupC109.add(plasmaGroupB109)

plasmaGroupC109.position.x = (Math.sin((109 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC109.position.z = (Math.cos((109 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC109)

// plasmaGroup110		###############################################################################
const plasmaGroup110 = new THREE.Group()

const plasmaGroupB110 = new THREE.Group()

const plasmaGroupC110 = new THREE.Group()

// redPlasmaMesh110
const redPlasmaGeometry110 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial110 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh110 = new THREE.Mesh(redPlasmaGeometry110, redPlasmaMaterial110)
redPlasmaMesh110.position.set( (Math.cos((770 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((770 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup110.add(redPlasmaMesh110)

// greenPlasmaMesh110
const greenPlasmaGeometry110 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial110 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh110 = new THREE.Mesh(greenPlasmaGeometry110, greenPlasmaMaterial110)
greenPlasmaMesh110.position.set( (Math.cos((1610 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1610 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup110.add(greenPlasmaMesh110)

// bluePlasmaMesh110
const bluePlasmaGeometry110 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial110 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh110 = new THREE.Mesh(bluePlasmaGeometry110, bluePlasmaMaterial110)
bluePlasmaMesh110.position.set( (Math.cos((2450 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2450 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup110.add(bluePlasmaMesh110)

plasmaGroup110.rotation.z = Math.PI / 180 * 90
plasmaGroupB110.add(plasmaGroup110)

plasmaGroupB110.rotation.y = (110 * ((Math.PI / 2) / 90))
plasmaGroupC110.add(plasmaGroupB110)

plasmaGroupC110.position.x = (Math.sin((110 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC110.position.z = (Math.cos((110 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC110)

// plasmaGroup111		###############################################################################
const plasmaGroup111 = new THREE.Group()

const plasmaGroupB111 = new THREE.Group()

const plasmaGroupC111 = new THREE.Group()

// redPlasmaMesh111
const redPlasmaGeometry111 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial111 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh111 = new THREE.Mesh(redPlasmaGeometry111, redPlasmaMaterial111)
redPlasmaMesh111.position.set( (Math.cos((777 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((777 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup111.add(redPlasmaMesh111)

// greenPlasmaMesh111
const greenPlasmaGeometry111 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial111 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh111 = new THREE.Mesh(greenPlasmaGeometry111, greenPlasmaMaterial111)
greenPlasmaMesh111.position.set( (Math.cos((1617 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1617 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup111.add(greenPlasmaMesh111)

// bluePlasmaMesh111
const bluePlasmaGeometry111 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial111 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh111 = new THREE.Mesh(bluePlasmaGeometry111, bluePlasmaMaterial111)
bluePlasmaMesh111.position.set( (Math.cos((2457 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2457 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup111.add(bluePlasmaMesh111)

plasmaGroup111.rotation.z = Math.PI / 180 * 90
plasmaGroupB111.add(plasmaGroup111)

plasmaGroupB111.rotation.y = (111 * ((Math.PI / 2) / 90))
plasmaGroupC111.add(plasmaGroupB111)

plasmaGroupC111.position.x = (Math.sin((111 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC111.position.z = (Math.cos((111 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC111)

// plasmaGroup112		###############################################################################
const plasmaGroup112 = new THREE.Group()

const plasmaGroupB112 = new THREE.Group()

const plasmaGroupC112 = new THREE.Group()

// redPlasmaMesh112
const redPlasmaGeometry112 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial112 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh112 = new THREE.Mesh(redPlasmaGeometry112, redPlasmaMaterial112)
redPlasmaMesh112.position.set( (Math.cos((784 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((784 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup112.add(redPlasmaMesh112)

// greenPlasmaMesh112
const greenPlasmaGeometry112 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial112 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh112 = new THREE.Mesh(greenPlasmaGeometry112, greenPlasmaMaterial112)
greenPlasmaMesh112.position.set( (Math.cos((1624 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1624 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup112.add(greenPlasmaMesh112)

// bluePlasmaMesh112
const bluePlasmaGeometry112 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial112 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh112 = new THREE.Mesh(bluePlasmaGeometry112, bluePlasmaMaterial112)
bluePlasmaMesh112.position.set( (Math.cos((2464 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2464 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup112.add(bluePlasmaMesh112)

plasmaGroup112.rotation.z = Math.PI / 180 * 90
plasmaGroupB112.add(plasmaGroup112)

plasmaGroupB112.rotation.y = (112 * ((Math.PI / 2) / 90))
plasmaGroupC112.add(plasmaGroupB112)

plasmaGroupC112.position.x = (Math.sin((112 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC112.position.z = (Math.cos((112 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC112)

// plasmaGroup113		###############################################################################
const plasmaGroup113 = new THREE.Group()

const plasmaGroupB113 = new THREE.Group()

const plasmaGroupC113 = new THREE.Group()

// redPlasmaMesh113
const redPlasmaGeometry113 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial113 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh113 = new THREE.Mesh(redPlasmaGeometry113, redPlasmaMaterial113)
redPlasmaMesh113.position.set( (Math.cos((791 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((791 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup113.add(redPlasmaMesh113)

// greenPlasmaMesh113
const greenPlasmaGeometry113 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial113 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh113 = new THREE.Mesh(greenPlasmaGeometry113, greenPlasmaMaterial113)
greenPlasmaMesh113.position.set( (Math.cos((1631 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1631 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup113.add(greenPlasmaMesh113)

// bluePlasmaMesh113
const bluePlasmaGeometry113 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial113 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh113 = new THREE.Mesh(bluePlasmaGeometry113, bluePlasmaMaterial113)
bluePlasmaMesh113.position.set( (Math.cos((2471 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2471 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup113.add(bluePlasmaMesh113)

plasmaGroup113.rotation.z = Math.PI / 180 * 90
plasmaGroupB113.add(plasmaGroup113)

plasmaGroupB113.rotation.y = (113 * ((Math.PI / 2) / 90))
plasmaGroupC113.add(plasmaGroupB113)

plasmaGroupC113.position.x = (Math.sin((113 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC113.position.z = (Math.cos((113 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC113)

// plasmaGroup114		###############################################################################
const plasmaGroup114 = new THREE.Group()

const plasmaGroupB114 = new THREE.Group()

const plasmaGroupC114 = new THREE.Group()

// redPlasmaMesh114
const redPlasmaGeometry114 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial114 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh114 = new THREE.Mesh(redPlasmaGeometry114, redPlasmaMaterial114)
redPlasmaMesh114.position.set( (Math.cos((798 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((798 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup114.add(redPlasmaMesh114)

// greenPlasmaMesh114
const greenPlasmaGeometry114 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial114 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh114 = new THREE.Mesh(greenPlasmaGeometry114, greenPlasmaMaterial114)
greenPlasmaMesh114.position.set( (Math.cos((1638 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1638 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup114.add(greenPlasmaMesh114)

// bluePlasmaMesh114
const bluePlasmaGeometry114 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial114 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh114 = new THREE.Mesh(bluePlasmaGeometry114, bluePlasmaMaterial114)
bluePlasmaMesh114.position.set( (Math.cos((2478 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2478 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup114.add(bluePlasmaMesh114)

plasmaGroup114.rotation.z = Math.PI / 180 * 90
plasmaGroupB114.add(plasmaGroup114)

plasmaGroupB114.rotation.y = (114 * ((Math.PI / 2) / 90))
plasmaGroupC114.add(plasmaGroupB114)

plasmaGroupC114.position.x = (Math.sin((114 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC114.position.z = (Math.cos((114 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC114)

// plasmaGroup115		###############################################################################
const plasmaGroup115 = new THREE.Group()

const plasmaGroupB115 = new THREE.Group()

const plasmaGroupC115 = new THREE.Group()

// redPlasmaMesh115
const redPlasmaGeometry115 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial115 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh115 = new THREE.Mesh(redPlasmaGeometry115, redPlasmaMaterial115)
redPlasmaMesh115.position.set( (Math.cos((805 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((805 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup115.add(redPlasmaMesh115)

// greenPlasmaMesh115
const greenPlasmaGeometry115 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial115 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh115 = new THREE.Mesh(greenPlasmaGeometry115, greenPlasmaMaterial115)
greenPlasmaMesh115.position.set( (Math.cos((1645 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1645 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup115.add(greenPlasmaMesh115)

// bluePlasmaMesh115
const bluePlasmaGeometry115 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial115 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh115 = new THREE.Mesh(bluePlasmaGeometry115, bluePlasmaMaterial115)
bluePlasmaMesh115.position.set( (Math.cos((2485 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2485 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup115.add(bluePlasmaMesh115)

plasmaGroup115.rotation.z = Math.PI / 180 * 90
plasmaGroupB115.add(plasmaGroup115)

plasmaGroupB115.rotation.y = (115 * ((Math.PI / 2) / 90))
plasmaGroupC115.add(plasmaGroupB115)

plasmaGroupC115.position.x = (Math.sin((115 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC115.position.z = (Math.cos((115 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC115)

// plasmaGroup116		###############################################################################
const plasmaGroup116 = new THREE.Group()

const plasmaGroupB116 = new THREE.Group()

const plasmaGroupC116 = new THREE.Group()

// redPlasmaMesh116
const redPlasmaGeometry116 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial116 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh116 = new THREE.Mesh(redPlasmaGeometry116, redPlasmaMaterial116)
redPlasmaMesh116.position.set( (Math.cos((812 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((812 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup116.add(redPlasmaMesh116)

// greenPlasmaMesh116
const greenPlasmaGeometry116 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial116 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh116 = new THREE.Mesh(greenPlasmaGeometry116, greenPlasmaMaterial116)
greenPlasmaMesh116.position.set( (Math.cos((1652 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1652 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup116.add(greenPlasmaMesh116)

// bluePlasmaMesh116
const bluePlasmaGeometry116 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial116 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh116 = new THREE.Mesh(bluePlasmaGeometry116, bluePlasmaMaterial116)
bluePlasmaMesh116.position.set( (Math.cos((2492 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2492 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup116.add(bluePlasmaMesh116)

plasmaGroup116.rotation.z = Math.PI / 180 * 90
plasmaGroupB116.add(plasmaGroup116)

plasmaGroupB116.rotation.y = (116 * ((Math.PI / 2) / 90))
plasmaGroupC116.add(plasmaGroupB116)

plasmaGroupC116.position.x = (Math.sin((116 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC116.position.z = (Math.cos((116 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC116)

// plasmaGroup117		###############################################################################
const plasmaGroup117 = new THREE.Group()

const plasmaGroupB117 = new THREE.Group()

const plasmaGroupC117 = new THREE.Group()

// redPlasmaMesh117
const redPlasmaGeometry117 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial117 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh117 = new THREE.Mesh(redPlasmaGeometry117, redPlasmaMaterial117)
redPlasmaMesh117.position.set( (Math.cos((819 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((819 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup117.add(redPlasmaMesh117)

// greenPlasmaMesh117
const greenPlasmaGeometry117 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial117 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh117 = new THREE.Mesh(greenPlasmaGeometry117, greenPlasmaMaterial117)
greenPlasmaMesh117.position.set( (Math.cos((1659 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1659 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup117.add(greenPlasmaMesh117)

// bluePlasmaMesh117
const bluePlasmaGeometry117 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial117 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh117 = new THREE.Mesh(bluePlasmaGeometry117, bluePlasmaMaterial117)
bluePlasmaMesh117.position.set( (Math.cos((2499 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2499 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup117.add(bluePlasmaMesh117)

plasmaGroup117.rotation.z = Math.PI / 180 * 90
plasmaGroupB117.add(plasmaGroup117)

plasmaGroupB117.rotation.y = (117 * ((Math.PI / 2) / 90))
plasmaGroupC117.add(plasmaGroupB117)

plasmaGroupC117.position.x = (Math.sin((117 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC117.position.z = (Math.cos((117 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC117)

// plasmaGroup118		###############################################################################
const plasmaGroup118 = new THREE.Group()

const plasmaGroupB118 = new THREE.Group()

const plasmaGroupC118 = new THREE.Group()

// redPlasmaMesh118
const redPlasmaGeometry118 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial118 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh118 = new THREE.Mesh(redPlasmaGeometry118, redPlasmaMaterial118)
redPlasmaMesh118.position.set( (Math.cos((826 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((826 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup118.add(redPlasmaMesh118)

// greenPlasmaMesh118
const greenPlasmaGeometry118 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial118 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh118 = new THREE.Mesh(greenPlasmaGeometry118, greenPlasmaMaterial118)
greenPlasmaMesh118.position.set( (Math.cos((1666 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1666 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup118.add(greenPlasmaMesh118)

// bluePlasmaMesh118
const bluePlasmaGeometry118 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial118 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh118 = new THREE.Mesh(bluePlasmaGeometry118, bluePlasmaMaterial118)
bluePlasmaMesh118.position.set( (Math.cos((2506 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2506 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup118.add(bluePlasmaMesh118)

plasmaGroup118.rotation.z = Math.PI / 180 * 90
plasmaGroupB118.add(plasmaGroup118)

plasmaGroupB118.rotation.y = (118 * ((Math.PI / 2) / 90))
plasmaGroupC118.add(plasmaGroupB118)

plasmaGroupC118.position.x = (Math.sin((118 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC118.position.z = (Math.cos((118 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC118)

// plasmaGroup119		###############################################################################
const plasmaGroup119 = new THREE.Group()

const plasmaGroupB119 = new THREE.Group()

const plasmaGroupC119 = new THREE.Group()

// redPlasmaMesh119
const redPlasmaGeometry119 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial119 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh119 = new THREE.Mesh(redPlasmaGeometry119, redPlasmaMaterial119)
redPlasmaMesh119.position.set( (Math.cos((833 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((833 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup119.add(redPlasmaMesh119)

// greenPlasmaMesh119
const greenPlasmaGeometry119 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial119 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh119 = new THREE.Mesh(greenPlasmaGeometry119, greenPlasmaMaterial119)
greenPlasmaMesh119.position.set( (Math.cos((1673 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1673 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup119.add(greenPlasmaMesh119)

// bluePlasmaMesh119
const bluePlasmaGeometry119 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial119 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh119 = new THREE.Mesh(bluePlasmaGeometry119, bluePlasmaMaterial119)
bluePlasmaMesh119.position.set( (Math.cos((2513 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2513 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup119.add(bluePlasmaMesh119)

plasmaGroup119.rotation.z = Math.PI / 180 * 90
plasmaGroupB119.add(plasmaGroup119)

plasmaGroupB119.rotation.y = (119 * ((Math.PI / 2) / 90))
plasmaGroupC119.add(plasmaGroupB119)

plasmaGroupC119.position.x = (Math.sin((119 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC119.position.z = (Math.cos((119 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC119)

// plasmaGroup120		###############################################################################
const plasmaGroup120 = new THREE.Group()

const plasmaGroupB120 = new THREE.Group()

const plasmaGroupC120 = new THREE.Group()

// redPlasmaMesh120
const redPlasmaGeometry120 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial120 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh120 = new THREE.Mesh(redPlasmaGeometry120, redPlasmaMaterial120)
redPlasmaMesh120.position.set( (Math.cos((840 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((840 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup120.add(redPlasmaMesh120)

// greenPlasmaMesh120
const greenPlasmaGeometry120 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial120 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh120 = new THREE.Mesh(greenPlasmaGeometry120, greenPlasmaMaterial120)
greenPlasmaMesh120.position.set( (Math.cos((1680 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1680 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup120.add(greenPlasmaMesh120)

// bluePlasmaMesh120
const bluePlasmaGeometry120 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial120 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh120 = new THREE.Mesh(bluePlasmaGeometry120, bluePlasmaMaterial120)
bluePlasmaMesh120.position.set( (Math.cos((2520 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2520 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup120.add(bluePlasmaMesh120)

plasmaGroup120.rotation.z = Math.PI / 180 * 90
plasmaGroupB120.add(plasmaGroup120)

plasmaGroupB120.rotation.y = (120 * ((Math.PI / 2) / 90))
plasmaGroupC120.add(plasmaGroupB120)

plasmaGroupC120.position.x = (Math.sin((120 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC120.position.z = (Math.cos((120 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC120)

// plasmaGroup121		###############################################################################
const plasmaGroup121 = new THREE.Group()

const plasmaGroupB121 = new THREE.Group()

const plasmaGroupC121 = new THREE.Group()

// redPlasmaMesh121
const redPlasmaGeometry121 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial121 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh121 = new THREE.Mesh(redPlasmaGeometry121, redPlasmaMaterial121)
redPlasmaMesh121.position.set( (Math.cos((847 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((847 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup121.add(redPlasmaMesh121)

// greenPlasmaMesh121
const greenPlasmaGeometry121 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial121 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh121 = new THREE.Mesh(greenPlasmaGeometry121, greenPlasmaMaterial121)
greenPlasmaMesh121.position.set( (Math.cos((1687 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1687 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup121.add(greenPlasmaMesh121)

// bluePlasmaMesh121
const bluePlasmaGeometry121 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial121 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh121 = new THREE.Mesh(bluePlasmaGeometry121, bluePlasmaMaterial121)
bluePlasmaMesh121.position.set( (Math.cos((2527 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2527 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup121.add(bluePlasmaMesh121)

plasmaGroup121.rotation.z = Math.PI / 180 * 90
plasmaGroupB121.add(plasmaGroup121)

plasmaGroupB121.rotation.y = (121 * ((Math.PI / 2) / 90))
plasmaGroupC121.add(plasmaGroupB121)

plasmaGroupC121.position.x = (Math.sin((121 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC121.position.z = (Math.cos((121 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC121)

// plasmaGroup122		###############################################################################
const plasmaGroup122 = new THREE.Group()

const plasmaGroupB122 = new THREE.Group()

const plasmaGroupC122 = new THREE.Group()

// redPlasmaMesh122
const redPlasmaGeometry122 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial122 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh122 = new THREE.Mesh(redPlasmaGeometry122, redPlasmaMaterial122)
redPlasmaMesh122.position.set( (Math.cos((854 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((854 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup122.add(redPlasmaMesh122)

// greenPlasmaMesh122
const greenPlasmaGeometry122 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial122 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh122 = new THREE.Mesh(greenPlasmaGeometry122, greenPlasmaMaterial122)
greenPlasmaMesh122.position.set( (Math.cos((1694 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1694 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup122.add(greenPlasmaMesh122)

// bluePlasmaMesh122
const bluePlasmaGeometry122 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial122 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh122 = new THREE.Mesh(bluePlasmaGeometry122, bluePlasmaMaterial122)
bluePlasmaMesh122.position.set( (Math.cos((2534 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2534 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup122.add(bluePlasmaMesh122)

plasmaGroup122.rotation.z = Math.PI / 180 * 90
plasmaGroupB122.add(plasmaGroup122)

plasmaGroupB122.rotation.y = (122 * ((Math.PI / 2) / 90))
plasmaGroupC122.add(plasmaGroupB122)

plasmaGroupC122.position.x = (Math.sin((122 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC122.position.z = (Math.cos((122 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC122)

// plasmaGroup123		###############################################################################
const plasmaGroup123 = new THREE.Group()

const plasmaGroupB123 = new THREE.Group()

const plasmaGroupC123 = new THREE.Group()

// redPlasmaMesh123
const redPlasmaGeometry123 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial123 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh123 = new THREE.Mesh(redPlasmaGeometry123, redPlasmaMaterial123)
redPlasmaMesh123.position.set( (Math.cos((861 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((861 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup123.add(redPlasmaMesh123)

// greenPlasmaMesh123
const greenPlasmaGeometry123 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial123 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh123 = new THREE.Mesh(greenPlasmaGeometry123, greenPlasmaMaterial123)
greenPlasmaMesh123.position.set( (Math.cos((1701 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1701 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup123.add(greenPlasmaMesh123)

// bluePlasmaMesh123
const bluePlasmaGeometry123 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial123 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh123 = new THREE.Mesh(bluePlasmaGeometry123, bluePlasmaMaterial123)
bluePlasmaMesh123.position.set( (Math.cos((2541 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2541 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup123.add(bluePlasmaMesh123)

plasmaGroup123.rotation.z = Math.PI / 180 * 90
plasmaGroupB123.add(plasmaGroup123)

plasmaGroupB123.rotation.y = (123 * ((Math.PI / 2) / 90))
plasmaGroupC123.add(plasmaGroupB123)

plasmaGroupC123.position.x = (Math.sin((123 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC123.position.z = (Math.cos((123 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC123)

// plasmaGroup124		###############################################################################
const plasmaGroup124 = new THREE.Group()

const plasmaGroupB124 = new THREE.Group()

const plasmaGroupC124 = new THREE.Group()

// redPlasmaMesh124
const redPlasmaGeometry124 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial124 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh124 = new THREE.Mesh(redPlasmaGeometry124, redPlasmaMaterial124)
redPlasmaMesh124.position.set( (Math.cos((868 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((868 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup124.add(redPlasmaMesh124)

// greenPlasmaMesh124
const greenPlasmaGeometry124 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial124 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh124 = new THREE.Mesh(greenPlasmaGeometry124, greenPlasmaMaterial124)
greenPlasmaMesh124.position.set( (Math.cos((1708 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1708 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup124.add(greenPlasmaMesh124)

// bluePlasmaMesh124
const bluePlasmaGeometry124 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial124 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh124 = new THREE.Mesh(bluePlasmaGeometry124, bluePlasmaMaterial124)
bluePlasmaMesh124.position.set( (Math.cos((2548 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2548 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup124.add(bluePlasmaMesh124)

plasmaGroup124.rotation.z = Math.PI / 180 * 90
plasmaGroupB124.add(plasmaGroup124)

plasmaGroupB124.rotation.y = (124 * ((Math.PI / 2) / 90))
plasmaGroupC124.add(plasmaGroupB124)

plasmaGroupC124.position.x = (Math.sin((124 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC124.position.z = (Math.cos((124 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC124)

// plasmaGroup125		###############################################################################
const plasmaGroup125 = new THREE.Group()

const plasmaGroupB125 = new THREE.Group()

const plasmaGroupC125 = new THREE.Group()

// redPlasmaMesh125
const redPlasmaGeometry125 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial125 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh125 = new THREE.Mesh(redPlasmaGeometry125, redPlasmaMaterial125)
redPlasmaMesh125.position.set( (Math.cos((875 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((875 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup125.add(redPlasmaMesh125)

// greenPlasmaMesh125
const greenPlasmaGeometry125 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial125 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh125 = new THREE.Mesh(greenPlasmaGeometry125, greenPlasmaMaterial125)
greenPlasmaMesh125.position.set( (Math.cos((1715 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1715 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup125.add(greenPlasmaMesh125)

// bluePlasmaMesh125
const bluePlasmaGeometry125 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial125 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh125 = new THREE.Mesh(bluePlasmaGeometry125, bluePlasmaMaterial125)
bluePlasmaMesh125.position.set( (Math.cos((2555 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2555 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup125.add(bluePlasmaMesh125)

plasmaGroup125.rotation.z = Math.PI / 180 * 90
plasmaGroupB125.add(plasmaGroup125)

plasmaGroupB125.rotation.y = (125 * ((Math.PI / 2) / 90))
plasmaGroupC125.add(plasmaGroupB125)

plasmaGroupC125.position.x = (Math.sin((125 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC125.position.z = (Math.cos((125 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC125)

// plasmaGroup126		###############################################################################
const plasmaGroup126 = new THREE.Group()

const plasmaGroupB126 = new THREE.Group()

const plasmaGroupC126 = new THREE.Group()

// redPlasmaMesh126
const redPlasmaGeometry126 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial126 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh126 = new THREE.Mesh(redPlasmaGeometry126, redPlasmaMaterial126)
redPlasmaMesh126.position.set( (Math.cos((882 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((882 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup126.add(redPlasmaMesh126)

// greenPlasmaMesh126
const greenPlasmaGeometry126 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial126 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh126 = new THREE.Mesh(greenPlasmaGeometry126, greenPlasmaMaterial126)
greenPlasmaMesh126.position.set( (Math.cos((1722 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1722 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup126.add(greenPlasmaMesh126)

// bluePlasmaMesh126
const bluePlasmaGeometry126 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial126 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh126 = new THREE.Mesh(bluePlasmaGeometry126, bluePlasmaMaterial126)
bluePlasmaMesh126.position.set( (Math.cos((2562 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2562 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup126.add(bluePlasmaMesh126)

plasmaGroup126.rotation.z = Math.PI / 180 * 90
plasmaGroupB126.add(plasmaGroup126)

plasmaGroupB126.rotation.y = (126 * ((Math.PI / 2) / 90))
plasmaGroupC126.add(plasmaGroupB126)

plasmaGroupC126.position.x = (Math.sin((126 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC126.position.z = (Math.cos((126 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC126)

// plasmaGroup127		###############################################################################
const plasmaGroup127 = new THREE.Group()

const plasmaGroupB127 = new THREE.Group()

const plasmaGroupC127 = new THREE.Group()

// redPlasmaMesh127
const redPlasmaGeometry127 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial127 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh127 = new THREE.Mesh(redPlasmaGeometry127, redPlasmaMaterial127)
redPlasmaMesh127.position.set( (Math.cos((889 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((889 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup127.add(redPlasmaMesh127)

// greenPlasmaMesh127
const greenPlasmaGeometry127 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial127 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh127 = new THREE.Mesh(greenPlasmaGeometry127, greenPlasmaMaterial127)
greenPlasmaMesh127.position.set( (Math.cos((1729 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1729 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup127.add(greenPlasmaMesh127)

// bluePlasmaMesh127
const bluePlasmaGeometry127 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial127 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh127 = new THREE.Mesh(bluePlasmaGeometry127, bluePlasmaMaterial127)
bluePlasmaMesh127.position.set( (Math.cos((2569 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2569 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup127.add(bluePlasmaMesh127)

plasmaGroup127.rotation.z = Math.PI / 180 * 90
plasmaGroupB127.add(plasmaGroup127)

plasmaGroupB127.rotation.y = (127 * ((Math.PI / 2) / 90))
plasmaGroupC127.add(plasmaGroupB127)

plasmaGroupC127.position.x = (Math.sin((127 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC127.position.z = (Math.cos((127 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC127)

// plasmaGroup128		###############################################################################
const plasmaGroup128 = new THREE.Group()

const plasmaGroupB128 = new THREE.Group()

const plasmaGroupC128 = new THREE.Group()

// redPlasmaMesh128
const redPlasmaGeometry128 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial128 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh128 = new THREE.Mesh(redPlasmaGeometry128, redPlasmaMaterial128)
redPlasmaMesh128.position.set( (Math.cos((896 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((896 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup128.add(redPlasmaMesh128)

// greenPlasmaMesh128
const greenPlasmaGeometry128 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial128 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh128 = new THREE.Mesh(greenPlasmaGeometry128, greenPlasmaMaterial128)
greenPlasmaMesh128.position.set( (Math.cos((1736 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1736 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup128.add(greenPlasmaMesh128)

// bluePlasmaMesh128
const bluePlasmaGeometry128 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial128 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh128 = new THREE.Mesh(bluePlasmaGeometry128, bluePlasmaMaterial128)
bluePlasmaMesh128.position.set( (Math.cos((2576 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2576 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup128.add(bluePlasmaMesh128)

plasmaGroup128.rotation.z = Math.PI / 180 * 90
plasmaGroupB128.add(plasmaGroup128)

plasmaGroupB128.rotation.y = (128 * ((Math.PI / 2) / 90))
plasmaGroupC128.add(plasmaGroupB128)

plasmaGroupC128.position.x = (Math.sin((128 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC128.position.z = (Math.cos((128 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC128)

// plasmaGroup129		###############################################################################
const plasmaGroup129 = new THREE.Group()

const plasmaGroupB129 = new THREE.Group()

const plasmaGroupC129 = new THREE.Group()

// redPlasmaMesh129
const redPlasmaGeometry129 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial129 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh129 = new THREE.Mesh(redPlasmaGeometry129, redPlasmaMaterial129)
redPlasmaMesh129.position.set( (Math.cos((903 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((903 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup129.add(redPlasmaMesh129)

// greenPlasmaMesh129
const greenPlasmaGeometry129 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial129 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh129 = new THREE.Mesh(greenPlasmaGeometry129, greenPlasmaMaterial129)
greenPlasmaMesh129.position.set( (Math.cos((1743 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1743 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup129.add(greenPlasmaMesh129)

// bluePlasmaMesh129
const bluePlasmaGeometry129 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial129 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh129 = new THREE.Mesh(bluePlasmaGeometry129, bluePlasmaMaterial129)
bluePlasmaMesh129.position.set( (Math.cos((2583 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2583 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup129.add(bluePlasmaMesh129)

plasmaGroup129.rotation.z = Math.PI / 180 * 90
plasmaGroupB129.add(plasmaGroup129)

plasmaGroupB129.rotation.y = (129 * ((Math.PI / 2) / 90))
plasmaGroupC129.add(plasmaGroupB129)

plasmaGroupC129.position.x = (Math.sin((129 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC129.position.z = (Math.cos((129 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC129)

// plasmaGroup130		###############################################################################
const plasmaGroup130 = new THREE.Group()

const plasmaGroupB130 = new THREE.Group()

const plasmaGroupC130 = new THREE.Group()

// redPlasmaMesh130
const redPlasmaGeometry130 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial130 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh130 = new THREE.Mesh(redPlasmaGeometry130, redPlasmaMaterial130)
redPlasmaMesh130.position.set( (Math.cos((910 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((910 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup130.add(redPlasmaMesh130)

// greenPlasmaMesh130
const greenPlasmaGeometry130 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial130 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh130 = new THREE.Mesh(greenPlasmaGeometry130, greenPlasmaMaterial130)
greenPlasmaMesh130.position.set( (Math.cos((1750 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1750 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup130.add(greenPlasmaMesh130)

// bluePlasmaMesh130
const bluePlasmaGeometry130 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial130 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh130 = new THREE.Mesh(bluePlasmaGeometry130, bluePlasmaMaterial130)
bluePlasmaMesh130.position.set( (Math.cos((2590 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2590 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup130.add(bluePlasmaMesh130)

plasmaGroup130.rotation.z = Math.PI / 180 * 90
plasmaGroupB130.add(plasmaGroup130)

plasmaGroupB130.rotation.y = (130 * ((Math.PI / 2) / 90))
plasmaGroupC130.add(plasmaGroupB130)

plasmaGroupC130.position.x = (Math.sin((130 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC130.position.z = (Math.cos((130 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC130)

// plasmaGroup131		###############################################################################
const plasmaGroup131 = new THREE.Group()

const plasmaGroupB131 = new THREE.Group()

const plasmaGroupC131 = new THREE.Group()

// redPlasmaMesh131
const redPlasmaGeometry131 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial131 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh131 = new THREE.Mesh(redPlasmaGeometry131, redPlasmaMaterial131)
redPlasmaMesh131.position.set( (Math.cos((917 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((917 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup131.add(redPlasmaMesh131)

// greenPlasmaMesh131
const greenPlasmaGeometry131 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial131 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh131 = new THREE.Mesh(greenPlasmaGeometry131, greenPlasmaMaterial131)
greenPlasmaMesh131.position.set( (Math.cos((1757 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1757 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup131.add(greenPlasmaMesh131)

// bluePlasmaMesh131
const bluePlasmaGeometry131 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial131 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh131 = new THREE.Mesh(bluePlasmaGeometry131, bluePlasmaMaterial131)
bluePlasmaMesh131.position.set( (Math.cos((2597 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2597 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup131.add(bluePlasmaMesh131)

plasmaGroup131.rotation.z = Math.PI / 180 * 90
plasmaGroupB131.add(plasmaGroup131)

plasmaGroupB131.rotation.y = (131 * ((Math.PI / 2) / 90))
plasmaGroupC131.add(plasmaGroupB131)

plasmaGroupC131.position.x = (Math.sin((131 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC131.position.z = (Math.cos((131 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC131)

// plasmaGroup132		###############################################################################
const plasmaGroup132 = new THREE.Group()

const plasmaGroupB132 = new THREE.Group()

const plasmaGroupC132 = new THREE.Group()

// redPlasmaMesh132
const redPlasmaGeometry132 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial132 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh132 = new THREE.Mesh(redPlasmaGeometry132, redPlasmaMaterial132)
redPlasmaMesh132.position.set( (Math.cos((924 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((924 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup132.add(redPlasmaMesh132)

// greenPlasmaMesh132
const greenPlasmaGeometry132 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial132 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh132 = new THREE.Mesh(greenPlasmaGeometry132, greenPlasmaMaterial132)
greenPlasmaMesh132.position.set( (Math.cos((1764 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1764 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup132.add(greenPlasmaMesh132)

// bluePlasmaMesh132
const bluePlasmaGeometry132 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial132 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh132 = new THREE.Mesh(bluePlasmaGeometry132, bluePlasmaMaterial132)
bluePlasmaMesh132.position.set( (Math.cos((2604 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2604 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup132.add(bluePlasmaMesh132)

plasmaGroup132.rotation.z = Math.PI / 180 * 90
plasmaGroupB132.add(plasmaGroup132)

plasmaGroupB132.rotation.y = (132 * ((Math.PI / 2) / 90))
plasmaGroupC132.add(plasmaGroupB132)

plasmaGroupC132.position.x = (Math.sin((132 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC132.position.z = (Math.cos((132 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC132)

// plasmaGroup133		###############################################################################
const plasmaGroup133 = new THREE.Group()

const plasmaGroupB133 = new THREE.Group()

const plasmaGroupC133 = new THREE.Group()

// redPlasmaMesh133
const redPlasmaGeometry133 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial133 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh133 = new THREE.Mesh(redPlasmaGeometry133, redPlasmaMaterial133)
redPlasmaMesh133.position.set( (Math.cos((931 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((931 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup133.add(redPlasmaMesh133)

// greenPlasmaMesh133
const greenPlasmaGeometry133 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial133 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh133 = new THREE.Mesh(greenPlasmaGeometry133, greenPlasmaMaterial133)
greenPlasmaMesh133.position.set( (Math.cos((1771 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1771 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup133.add(greenPlasmaMesh133)

// bluePlasmaMesh133
const bluePlasmaGeometry133 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial133 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh133 = new THREE.Mesh(bluePlasmaGeometry133, bluePlasmaMaterial133)
bluePlasmaMesh133.position.set( (Math.cos((2611 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2611 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup133.add(bluePlasmaMesh133)

plasmaGroup133.rotation.z = Math.PI / 180 * 90
plasmaGroupB133.add(plasmaGroup133)

plasmaGroupB133.rotation.y = (133 * ((Math.PI / 2) / 90))
plasmaGroupC133.add(plasmaGroupB133)

plasmaGroupC133.position.x = (Math.sin((133 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC133.position.z = (Math.cos((133 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC133)

// plasmaGroup134		###############################################################################
const plasmaGroup134 = new THREE.Group()

const plasmaGroupB134 = new THREE.Group()

const plasmaGroupC134 = new THREE.Group()

// redPlasmaMesh134
const redPlasmaGeometry134 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial134 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh134 = new THREE.Mesh(redPlasmaGeometry134, redPlasmaMaterial134)
redPlasmaMesh134.position.set( (Math.cos((938 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((938 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup134.add(redPlasmaMesh134)

// greenPlasmaMesh134
const greenPlasmaGeometry134 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial134 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh134 = new THREE.Mesh(greenPlasmaGeometry134, greenPlasmaMaterial134)
greenPlasmaMesh134.position.set( (Math.cos((1778 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1778 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup134.add(greenPlasmaMesh134)

// bluePlasmaMesh134
const bluePlasmaGeometry134 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial134 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh134 = new THREE.Mesh(bluePlasmaGeometry134, bluePlasmaMaterial134)
bluePlasmaMesh134.position.set( (Math.cos((2618 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2618 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup134.add(bluePlasmaMesh134)

plasmaGroup134.rotation.z = Math.PI / 180 * 90
plasmaGroupB134.add(plasmaGroup134)

plasmaGroupB134.rotation.y = (134 * ((Math.PI / 2) / 90))
plasmaGroupC134.add(plasmaGroupB134)

plasmaGroupC134.position.x = (Math.sin((134 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC134.position.z = (Math.cos((134 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC134)

// plasmaGroup135		###############################################################################
const plasmaGroup135 = new THREE.Group()

const plasmaGroupB135 = new THREE.Group()

const plasmaGroupC135 = new THREE.Group()

// redPlasmaMesh135
const redPlasmaGeometry135 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial135 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh135 = new THREE.Mesh(redPlasmaGeometry135, redPlasmaMaterial135)
redPlasmaMesh135.position.set( (Math.cos((945 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((945 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup135.add(redPlasmaMesh135)

// greenPlasmaMesh135
const greenPlasmaGeometry135 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial135 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh135 = new THREE.Mesh(greenPlasmaGeometry135, greenPlasmaMaterial135)
greenPlasmaMesh135.position.set( (Math.cos((1785 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1785 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup135.add(greenPlasmaMesh135)

// bluePlasmaMesh135
const bluePlasmaGeometry135 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial135 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh135 = new THREE.Mesh(bluePlasmaGeometry135, bluePlasmaMaterial135)
bluePlasmaMesh135.position.set( (Math.cos((2625 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2625 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup135.add(bluePlasmaMesh135)

plasmaGroup135.rotation.z = Math.PI / 180 * 90
plasmaGroupB135.add(plasmaGroup135)

plasmaGroupB135.rotation.y = (135 * ((Math.PI / 2) / 90))
plasmaGroupC135.add(plasmaGroupB135)

plasmaGroupC135.position.x = (Math.sin((135 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC135.position.z = (Math.cos((135 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC135)

// plasmaGroup136		###############################################################################
const plasmaGroup136 = new THREE.Group()

const plasmaGroupB136 = new THREE.Group()

const plasmaGroupC136 = new THREE.Group()

// redPlasmaMesh136
const redPlasmaGeometry136 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial136 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh136 = new THREE.Mesh(redPlasmaGeometry136, redPlasmaMaterial136)
redPlasmaMesh136.position.set( (Math.cos((952 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((952 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup136.add(redPlasmaMesh136)

// greenPlasmaMesh136
const greenPlasmaGeometry136 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial136 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh136 = new THREE.Mesh(greenPlasmaGeometry136, greenPlasmaMaterial136)
greenPlasmaMesh136.position.set( (Math.cos((1792 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1792 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup136.add(greenPlasmaMesh136)

// bluePlasmaMesh136
const bluePlasmaGeometry136 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial136 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh136 = new THREE.Mesh(bluePlasmaGeometry136, bluePlasmaMaterial136)
bluePlasmaMesh136.position.set( (Math.cos((2632 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2632 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup136.add(bluePlasmaMesh136)

plasmaGroup136.rotation.z = Math.PI / 180 * 90
plasmaGroupB136.add(plasmaGroup136)

plasmaGroupB136.rotation.y = (136 * ((Math.PI / 2) / 90))
plasmaGroupC136.add(plasmaGroupB136)

plasmaGroupC136.position.x = (Math.sin((136 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC136.position.z = (Math.cos((136 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC136)

// plasmaGroup137		###############################################################################
const plasmaGroup137 = new THREE.Group()

const plasmaGroupB137 = new THREE.Group()

const plasmaGroupC137 = new THREE.Group()

// redPlasmaMesh137
const redPlasmaGeometry137 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial137 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh137 = new THREE.Mesh(redPlasmaGeometry137, redPlasmaMaterial137)
redPlasmaMesh137.position.set( (Math.cos((959 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((959 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup137.add(redPlasmaMesh137)

// greenPlasmaMesh137
const greenPlasmaGeometry137 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial137 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh137 = new THREE.Mesh(greenPlasmaGeometry137, greenPlasmaMaterial137)
greenPlasmaMesh137.position.set( (Math.cos((1799 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1799 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup137.add(greenPlasmaMesh137)

// bluePlasmaMesh137
const bluePlasmaGeometry137 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial137 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh137 = new THREE.Mesh(bluePlasmaGeometry137, bluePlasmaMaterial137)
bluePlasmaMesh137.position.set( (Math.cos((2639 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2639 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup137.add(bluePlasmaMesh137)

plasmaGroup137.rotation.z = Math.PI / 180 * 90
plasmaGroupB137.add(plasmaGroup137)

plasmaGroupB137.rotation.y = (137 * ((Math.PI / 2) / 90))
plasmaGroupC137.add(plasmaGroupB137)

plasmaGroupC137.position.x = (Math.sin((137 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC137.position.z = (Math.cos((137 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC137)

// plasmaGroup138		###############################################################################
const plasmaGroup138 = new THREE.Group()

const plasmaGroupB138 = new THREE.Group()

const plasmaGroupC138 = new THREE.Group()

// redPlasmaMesh138
const redPlasmaGeometry138 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial138 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh138 = new THREE.Mesh(redPlasmaGeometry138, redPlasmaMaterial138)
redPlasmaMesh138.position.set( (Math.cos((966 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((966 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup138.add(redPlasmaMesh138)

// greenPlasmaMesh138
const greenPlasmaGeometry138 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial138 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh138 = new THREE.Mesh(greenPlasmaGeometry138, greenPlasmaMaterial138)
greenPlasmaMesh138.position.set( (Math.cos((1806 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1806 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup138.add(greenPlasmaMesh138)

// bluePlasmaMesh138
const bluePlasmaGeometry138 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial138 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh138 = new THREE.Mesh(bluePlasmaGeometry138, bluePlasmaMaterial138)
bluePlasmaMesh138.position.set( (Math.cos((2646 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2646 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup138.add(bluePlasmaMesh138)

plasmaGroup138.rotation.z = Math.PI / 180 * 90
plasmaGroupB138.add(plasmaGroup138)

plasmaGroupB138.rotation.y = (138 * ((Math.PI / 2) / 90))
plasmaGroupC138.add(plasmaGroupB138)

plasmaGroupC138.position.x = (Math.sin((138 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC138.position.z = (Math.cos((138 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC138)

// plasmaGroup139		###############################################################################
const plasmaGroup139 = new THREE.Group()

const plasmaGroupB139 = new THREE.Group()

const plasmaGroupC139 = new THREE.Group()

// redPlasmaMesh139
const redPlasmaGeometry139 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial139 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh139 = new THREE.Mesh(redPlasmaGeometry139, redPlasmaMaterial139)
redPlasmaMesh139.position.set( (Math.cos((973 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((973 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup139.add(redPlasmaMesh139)

// greenPlasmaMesh139
const greenPlasmaGeometry139 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial139 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh139 = new THREE.Mesh(greenPlasmaGeometry139, greenPlasmaMaterial139)
greenPlasmaMesh139.position.set( (Math.cos((1813 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1813 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup139.add(greenPlasmaMesh139)

// bluePlasmaMesh139
const bluePlasmaGeometry139 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial139 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh139 = new THREE.Mesh(bluePlasmaGeometry139, bluePlasmaMaterial139)
bluePlasmaMesh139.position.set( (Math.cos((2653 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2653 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup139.add(bluePlasmaMesh139)

plasmaGroup139.rotation.z = Math.PI / 180 * 90
plasmaGroupB139.add(plasmaGroup139)

plasmaGroupB139.rotation.y = (139 * ((Math.PI / 2) / 90))
plasmaGroupC139.add(plasmaGroupB139)

plasmaGroupC139.position.x = (Math.sin((139 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC139.position.z = (Math.cos((139 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC139)

// plasmaGroup140		###############################################################################
const plasmaGroup140 = new THREE.Group()

const plasmaGroupB140 = new THREE.Group()

const plasmaGroupC140 = new THREE.Group()

// redPlasmaMesh140
const redPlasmaGeometry140 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial140 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh140 = new THREE.Mesh(redPlasmaGeometry140, redPlasmaMaterial140)
redPlasmaMesh140.position.set( (Math.cos((980 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((980 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup140.add(redPlasmaMesh140)

// greenPlasmaMesh140
const greenPlasmaGeometry140 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial140 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh140 = new THREE.Mesh(greenPlasmaGeometry140, greenPlasmaMaterial140)
greenPlasmaMesh140.position.set( (Math.cos((1820 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1820 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup140.add(greenPlasmaMesh140)

// bluePlasmaMesh140
const bluePlasmaGeometry140 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial140 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh140 = new THREE.Mesh(bluePlasmaGeometry140, bluePlasmaMaterial140)
bluePlasmaMesh140.position.set( (Math.cos((2660 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2660 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup140.add(bluePlasmaMesh140)

plasmaGroup140.rotation.z = Math.PI / 180 * 90
plasmaGroupB140.add(plasmaGroup140)

plasmaGroupB140.rotation.y = (140 * ((Math.PI / 2) / 90))
plasmaGroupC140.add(plasmaGroupB140)

plasmaGroupC140.position.x = (Math.sin((140 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC140.position.z = (Math.cos((140 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC140)

// plasmaGroup141		###############################################################################
const plasmaGroup141 = new THREE.Group()

const plasmaGroupB141 = new THREE.Group()

const plasmaGroupC141 = new THREE.Group()

// redPlasmaMesh141
const redPlasmaGeometry141 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial141 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh141 = new THREE.Mesh(redPlasmaGeometry141, redPlasmaMaterial141)
redPlasmaMesh141.position.set( (Math.cos((987 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((987 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup141.add(redPlasmaMesh141)

// greenPlasmaMesh141
const greenPlasmaGeometry141 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial141 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh141 = new THREE.Mesh(greenPlasmaGeometry141, greenPlasmaMaterial141)
greenPlasmaMesh141.position.set( (Math.cos((1827 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1827 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup141.add(greenPlasmaMesh141)

// bluePlasmaMesh141
const bluePlasmaGeometry141 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial141 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh141 = new THREE.Mesh(bluePlasmaGeometry141, bluePlasmaMaterial141)
bluePlasmaMesh141.position.set( (Math.cos((2667 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2667 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup141.add(bluePlasmaMesh141)

plasmaGroup141.rotation.z = Math.PI / 180 * 90
plasmaGroupB141.add(plasmaGroup141)

plasmaGroupB141.rotation.y = (141 * ((Math.PI / 2) / 90))
plasmaGroupC141.add(plasmaGroupB141)

plasmaGroupC141.position.x = (Math.sin((141 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC141.position.z = (Math.cos((141 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC141)

// plasmaGroup142		###############################################################################
const plasmaGroup142 = new THREE.Group()

const plasmaGroupB142 = new THREE.Group()

const plasmaGroupC142 = new THREE.Group()

// redPlasmaMesh142
const redPlasmaGeometry142 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial142 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh142 = new THREE.Mesh(redPlasmaGeometry142, redPlasmaMaterial142)
redPlasmaMesh142.position.set( (Math.cos((994 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((994 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup142.add(redPlasmaMesh142)

// greenPlasmaMesh142
const greenPlasmaGeometry142 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial142 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh142 = new THREE.Mesh(greenPlasmaGeometry142, greenPlasmaMaterial142)
greenPlasmaMesh142.position.set( (Math.cos((1834 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1834 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup142.add(greenPlasmaMesh142)

// bluePlasmaMesh142
const bluePlasmaGeometry142 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial142 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh142 = new THREE.Mesh(bluePlasmaGeometry142, bluePlasmaMaterial142)
bluePlasmaMesh142.position.set( (Math.cos((2674 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2674 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup142.add(bluePlasmaMesh142)

plasmaGroup142.rotation.z = Math.PI / 180 * 90
plasmaGroupB142.add(plasmaGroup142)

plasmaGroupB142.rotation.y = (142 * ((Math.PI / 2) / 90))
plasmaGroupC142.add(plasmaGroupB142)

plasmaGroupC142.position.x = (Math.sin((142 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC142.position.z = (Math.cos((142 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC142)

// plasmaGroup143		###############################################################################
const plasmaGroup143 = new THREE.Group()

const plasmaGroupB143 = new THREE.Group()

const plasmaGroupC143 = new THREE.Group()

// redPlasmaMesh143
const redPlasmaGeometry143 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial143 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh143 = new THREE.Mesh(redPlasmaGeometry143, redPlasmaMaterial143)
redPlasmaMesh143.position.set( (Math.cos((1001 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1001 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup143.add(redPlasmaMesh143)

// greenPlasmaMesh143
const greenPlasmaGeometry143 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial143 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh143 = new THREE.Mesh(greenPlasmaGeometry143, greenPlasmaMaterial143)
greenPlasmaMesh143.position.set( (Math.cos((1841 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1841 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup143.add(greenPlasmaMesh143)

// bluePlasmaMesh143
const bluePlasmaGeometry143 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial143 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh143 = new THREE.Mesh(bluePlasmaGeometry143, bluePlasmaMaterial143)
bluePlasmaMesh143.position.set( (Math.cos((2681 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2681 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup143.add(bluePlasmaMesh143)

plasmaGroup143.rotation.z = Math.PI / 180 * 90
plasmaGroupB143.add(plasmaGroup143)

plasmaGroupB143.rotation.y = (143 * ((Math.PI / 2) / 90))
plasmaGroupC143.add(plasmaGroupB143)

plasmaGroupC143.position.x = (Math.sin((143 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC143.position.z = (Math.cos((143 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC143)

// plasmaGroup144		###############################################################################
const plasmaGroup144 = new THREE.Group()

const plasmaGroupB144 = new THREE.Group()

const plasmaGroupC144 = new THREE.Group()

// redPlasmaMesh144
const redPlasmaGeometry144 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial144 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh144 = new THREE.Mesh(redPlasmaGeometry144, redPlasmaMaterial144)
redPlasmaMesh144.position.set( (Math.cos((1008 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1008 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup144.add(redPlasmaMesh144)

// greenPlasmaMesh144
const greenPlasmaGeometry144 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial144 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh144 = new THREE.Mesh(greenPlasmaGeometry144, greenPlasmaMaterial144)
greenPlasmaMesh144.position.set( (Math.cos((1848 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1848 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup144.add(greenPlasmaMesh144)

// bluePlasmaMesh144
const bluePlasmaGeometry144 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial144 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh144 = new THREE.Mesh(bluePlasmaGeometry144, bluePlasmaMaterial144)
bluePlasmaMesh144.position.set( (Math.cos((2688 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2688 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup144.add(bluePlasmaMesh144)

plasmaGroup144.rotation.z = Math.PI / 180 * 90
plasmaGroupB144.add(plasmaGroup144)

plasmaGroupB144.rotation.y = (144 * ((Math.PI / 2) / 90))
plasmaGroupC144.add(plasmaGroupB144)

plasmaGroupC144.position.x = (Math.sin((144 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC144.position.z = (Math.cos((144 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC144)

// plasmaGroup145		###############################################################################
const plasmaGroup145 = new THREE.Group()

const plasmaGroupB145 = new THREE.Group()

const plasmaGroupC145 = new THREE.Group()

// redPlasmaMesh145
const redPlasmaGeometry145 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial145 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh145 = new THREE.Mesh(redPlasmaGeometry145, redPlasmaMaterial145)
redPlasmaMesh145.position.set( (Math.cos((1015 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1015 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup145.add(redPlasmaMesh145)

// greenPlasmaMesh145
const greenPlasmaGeometry145 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial145 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh145 = new THREE.Mesh(greenPlasmaGeometry145, greenPlasmaMaterial145)
greenPlasmaMesh145.position.set( (Math.cos((1855 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1855 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup145.add(greenPlasmaMesh145)

// bluePlasmaMesh145
const bluePlasmaGeometry145 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial145 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh145 = new THREE.Mesh(bluePlasmaGeometry145, bluePlasmaMaterial145)
bluePlasmaMesh145.position.set( (Math.cos((2695 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2695 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup145.add(bluePlasmaMesh145)

plasmaGroup145.rotation.z = Math.PI / 180 * 90
plasmaGroupB145.add(plasmaGroup145)

plasmaGroupB145.rotation.y = (145 * ((Math.PI / 2) / 90))
plasmaGroupC145.add(plasmaGroupB145)

plasmaGroupC145.position.x = (Math.sin((145 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC145.position.z = (Math.cos((145 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC145)

// plasmaGroup146		###############################################################################
const plasmaGroup146 = new THREE.Group()

const plasmaGroupB146 = new THREE.Group()

const plasmaGroupC146 = new THREE.Group()

// redPlasmaMesh146
const redPlasmaGeometry146 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial146 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh146 = new THREE.Mesh(redPlasmaGeometry146, redPlasmaMaterial146)
redPlasmaMesh146.position.set( (Math.cos((1022 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1022 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup146.add(redPlasmaMesh146)

// greenPlasmaMesh146
const greenPlasmaGeometry146 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial146 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh146 = new THREE.Mesh(greenPlasmaGeometry146, greenPlasmaMaterial146)
greenPlasmaMesh146.position.set( (Math.cos((1862 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1862 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup146.add(greenPlasmaMesh146)

// bluePlasmaMesh146
const bluePlasmaGeometry146 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial146 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh146 = new THREE.Mesh(bluePlasmaGeometry146, bluePlasmaMaterial146)
bluePlasmaMesh146.position.set( (Math.cos((2702 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2702 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup146.add(bluePlasmaMesh146)

plasmaGroup146.rotation.z = Math.PI / 180 * 90
plasmaGroupB146.add(plasmaGroup146)

plasmaGroupB146.rotation.y = (146 * ((Math.PI / 2) / 90))
plasmaGroupC146.add(plasmaGroupB146)

plasmaGroupC146.position.x = (Math.sin((146 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC146.position.z = (Math.cos((146 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC146)

// plasmaGroup147		###############################################################################
const plasmaGroup147 = new THREE.Group()

const plasmaGroupB147 = new THREE.Group()

const plasmaGroupC147 = new THREE.Group()

// redPlasmaMesh147
const redPlasmaGeometry147 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial147 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh147 = new THREE.Mesh(redPlasmaGeometry147, redPlasmaMaterial147)
redPlasmaMesh147.position.set( (Math.cos((1029 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1029 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup147.add(redPlasmaMesh147)

// greenPlasmaMesh147
const greenPlasmaGeometry147 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial147 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh147 = new THREE.Mesh(greenPlasmaGeometry147, greenPlasmaMaterial147)
greenPlasmaMesh147.position.set( (Math.cos((1869 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1869 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup147.add(greenPlasmaMesh147)

// bluePlasmaMesh147
const bluePlasmaGeometry147 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial147 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh147 = new THREE.Mesh(bluePlasmaGeometry147, bluePlasmaMaterial147)
bluePlasmaMesh147.position.set( (Math.cos((2709 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2709 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup147.add(bluePlasmaMesh147)

plasmaGroup147.rotation.z = Math.PI / 180 * 90
plasmaGroupB147.add(plasmaGroup147)

plasmaGroupB147.rotation.y = (147 * ((Math.PI / 2) / 90))
plasmaGroupC147.add(plasmaGroupB147)

plasmaGroupC147.position.x = (Math.sin((147 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC147.position.z = (Math.cos((147 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC147)

// plasmaGroup148		###############################################################################
const plasmaGroup148 = new THREE.Group()

const plasmaGroupB148 = new THREE.Group()

const plasmaGroupC148 = new THREE.Group()

// redPlasmaMesh148
const redPlasmaGeometry148 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial148 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh148 = new THREE.Mesh(redPlasmaGeometry148, redPlasmaMaterial148)
redPlasmaMesh148.position.set( (Math.cos((1036 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1036 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup148.add(redPlasmaMesh148)

// greenPlasmaMesh148
const greenPlasmaGeometry148 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial148 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh148 = new THREE.Mesh(greenPlasmaGeometry148, greenPlasmaMaterial148)
greenPlasmaMesh148.position.set( (Math.cos((1876 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1876 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup148.add(greenPlasmaMesh148)

// bluePlasmaMesh148
const bluePlasmaGeometry148 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial148 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh148 = new THREE.Mesh(bluePlasmaGeometry148, bluePlasmaMaterial148)
bluePlasmaMesh148.position.set( (Math.cos((2716 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2716 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup148.add(bluePlasmaMesh148)

plasmaGroup148.rotation.z = Math.PI / 180 * 90
plasmaGroupB148.add(plasmaGroup148)

plasmaGroupB148.rotation.y = (148 * ((Math.PI / 2) / 90))
plasmaGroupC148.add(plasmaGroupB148)

plasmaGroupC148.position.x = (Math.sin((148 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC148.position.z = (Math.cos((148 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC148)

// plasmaGroup149		###############################################################################
const plasmaGroup149 = new THREE.Group()

const plasmaGroupB149 = new THREE.Group()

const plasmaGroupC149 = new THREE.Group()

// redPlasmaMesh149
const redPlasmaGeometry149 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial149 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh149 = new THREE.Mesh(redPlasmaGeometry149, redPlasmaMaterial149)
redPlasmaMesh149.position.set( (Math.cos((1043 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1043 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup149.add(redPlasmaMesh149)

// greenPlasmaMesh149
const greenPlasmaGeometry149 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial149 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh149 = new THREE.Mesh(greenPlasmaGeometry149, greenPlasmaMaterial149)
greenPlasmaMesh149.position.set( (Math.cos((1883 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1883 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup149.add(greenPlasmaMesh149)

// bluePlasmaMesh149
const bluePlasmaGeometry149 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial149 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh149 = new THREE.Mesh(bluePlasmaGeometry149, bluePlasmaMaterial149)
bluePlasmaMesh149.position.set( (Math.cos((2723 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2723 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup149.add(bluePlasmaMesh149)

plasmaGroup149.rotation.z = Math.PI / 180 * 90
plasmaGroupB149.add(plasmaGroup149)

plasmaGroupB149.rotation.y = (149 * ((Math.PI / 2) / 90))
plasmaGroupC149.add(plasmaGroupB149)

plasmaGroupC149.position.x = (Math.sin((149 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC149.position.z = (Math.cos((149 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC149)

// plasmaGroup150		###############################################################################
const plasmaGroup150 = new THREE.Group()

const plasmaGroupB150 = new THREE.Group()

const plasmaGroupC150 = new THREE.Group()

// redPlasmaMesh150
const redPlasmaGeometry150 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial150 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh150 = new THREE.Mesh(redPlasmaGeometry150, redPlasmaMaterial150)
redPlasmaMesh150.position.set( (Math.cos((1050 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1050 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup150.add(redPlasmaMesh150)

// greenPlasmaMesh150
const greenPlasmaGeometry150 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial150 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh150 = new THREE.Mesh(greenPlasmaGeometry150, greenPlasmaMaterial150)
greenPlasmaMesh150.position.set( (Math.cos((1890 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1890 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup150.add(greenPlasmaMesh150)

// bluePlasmaMesh150
const bluePlasmaGeometry150 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial150 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh150 = new THREE.Mesh(bluePlasmaGeometry150, bluePlasmaMaterial150)
bluePlasmaMesh150.position.set( (Math.cos((2730 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2730 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup150.add(bluePlasmaMesh150)

plasmaGroup150.rotation.z = Math.PI / 180 * 90
plasmaGroupB150.add(plasmaGroup150)

plasmaGroupB150.rotation.y = (150 * ((Math.PI / 2) / 90))
plasmaGroupC150.add(plasmaGroupB150)

plasmaGroupC150.position.x = (Math.sin((150 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC150.position.z = (Math.cos((150 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC150)

// plasmaGroup151		###############################################################################
const plasmaGroup151 = new THREE.Group()

const plasmaGroupB151 = new THREE.Group()

const plasmaGroupC151 = new THREE.Group()

// redPlasmaMesh151
const redPlasmaGeometry151 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial151 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh151 = new THREE.Mesh(redPlasmaGeometry151, redPlasmaMaterial151)
redPlasmaMesh151.position.set( (Math.cos((1057 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1057 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup151.add(redPlasmaMesh151)

// greenPlasmaMesh151
const greenPlasmaGeometry151 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial151 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh151 = new THREE.Mesh(greenPlasmaGeometry151, greenPlasmaMaterial151)
greenPlasmaMesh151.position.set( (Math.cos((1897 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1897 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup151.add(greenPlasmaMesh151)

// bluePlasmaMesh151
const bluePlasmaGeometry151 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial151 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh151 = new THREE.Mesh(bluePlasmaGeometry151, bluePlasmaMaterial151)
bluePlasmaMesh151.position.set( (Math.cos((2737 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2737 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup151.add(bluePlasmaMesh151)

plasmaGroup151.rotation.z = Math.PI / 180 * 90
plasmaGroupB151.add(plasmaGroup151)

plasmaGroupB151.rotation.y = (151 * ((Math.PI / 2) / 90))
plasmaGroupC151.add(plasmaGroupB151)

plasmaGroupC151.position.x = (Math.sin((151 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC151.position.z = (Math.cos((151 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC151)

// plasmaGroup152		###############################################################################
const plasmaGroup152 = new THREE.Group()

const plasmaGroupB152 = new THREE.Group()

const plasmaGroupC152 = new THREE.Group()

// redPlasmaMesh152
const redPlasmaGeometry152 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial152 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh152 = new THREE.Mesh(redPlasmaGeometry152, redPlasmaMaterial152)
redPlasmaMesh152.position.set( (Math.cos((1064 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1064 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup152.add(redPlasmaMesh152)

// greenPlasmaMesh152
const greenPlasmaGeometry152 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial152 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh152 = new THREE.Mesh(greenPlasmaGeometry152, greenPlasmaMaterial152)
greenPlasmaMesh152.position.set( (Math.cos((1904 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1904 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup152.add(greenPlasmaMesh152)

// bluePlasmaMesh152
const bluePlasmaGeometry152 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial152 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh152 = new THREE.Mesh(bluePlasmaGeometry152, bluePlasmaMaterial152)
bluePlasmaMesh152.position.set( (Math.cos((2744 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2744 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup152.add(bluePlasmaMesh152)

plasmaGroup152.rotation.z = Math.PI / 180 * 90
plasmaGroupB152.add(plasmaGroup152)

plasmaGroupB152.rotation.y = (152 * ((Math.PI / 2) / 90))
plasmaGroupC152.add(plasmaGroupB152)

plasmaGroupC152.position.x = (Math.sin((152 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC152.position.z = (Math.cos((152 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC152)

// plasmaGroup153		###############################################################################
const plasmaGroup153 = new THREE.Group()

const plasmaGroupB153 = new THREE.Group()

const plasmaGroupC153 = new THREE.Group()

// redPlasmaMesh153
const redPlasmaGeometry153 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial153 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh153 = new THREE.Mesh(redPlasmaGeometry153, redPlasmaMaterial153)
redPlasmaMesh153.position.set( (Math.cos((1071 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1071 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup153.add(redPlasmaMesh153)

// greenPlasmaMesh153
const greenPlasmaGeometry153 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial153 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh153 = new THREE.Mesh(greenPlasmaGeometry153, greenPlasmaMaterial153)
greenPlasmaMesh153.position.set( (Math.cos((1911 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1911 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup153.add(greenPlasmaMesh153)

// bluePlasmaMesh153
const bluePlasmaGeometry153 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial153 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh153 = new THREE.Mesh(bluePlasmaGeometry153, bluePlasmaMaterial153)
bluePlasmaMesh153.position.set( (Math.cos((2751 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2751 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup153.add(bluePlasmaMesh153)

plasmaGroup153.rotation.z = Math.PI / 180 * 90
plasmaGroupB153.add(plasmaGroup153)

plasmaGroupB153.rotation.y = (153 * ((Math.PI / 2) / 90))
plasmaGroupC153.add(plasmaGroupB153)

plasmaGroupC153.position.x = (Math.sin((153 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC153.position.z = (Math.cos((153 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC153)

// plasmaGroup154		###############################################################################
const plasmaGroup154 = new THREE.Group()

const plasmaGroupB154 = new THREE.Group()

const plasmaGroupC154 = new THREE.Group()

// redPlasmaMesh154
const redPlasmaGeometry154 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial154 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh154 = new THREE.Mesh(redPlasmaGeometry154, redPlasmaMaterial154)
redPlasmaMesh154.position.set( (Math.cos((1078 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1078 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup154.add(redPlasmaMesh154)

// greenPlasmaMesh154
const greenPlasmaGeometry154 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial154 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh154 = new THREE.Mesh(greenPlasmaGeometry154, greenPlasmaMaterial154)
greenPlasmaMesh154.position.set( (Math.cos((1918 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1918 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup154.add(greenPlasmaMesh154)

// bluePlasmaMesh154
const bluePlasmaGeometry154 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial154 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh154 = new THREE.Mesh(bluePlasmaGeometry154, bluePlasmaMaterial154)
bluePlasmaMesh154.position.set( (Math.cos((2758 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2758 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup154.add(bluePlasmaMesh154)

plasmaGroup154.rotation.z = Math.PI / 180 * 90
plasmaGroupB154.add(plasmaGroup154)

plasmaGroupB154.rotation.y = (154 * ((Math.PI / 2) / 90))
plasmaGroupC154.add(plasmaGroupB154)

plasmaGroupC154.position.x = (Math.sin((154 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC154.position.z = (Math.cos((154 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC154)

// plasmaGroup155		###############################################################################
const plasmaGroup155 = new THREE.Group()

const plasmaGroupB155 = new THREE.Group()

const plasmaGroupC155 = new THREE.Group()

// redPlasmaMesh155
const redPlasmaGeometry155 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial155 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh155 = new THREE.Mesh(redPlasmaGeometry155, redPlasmaMaterial155)
redPlasmaMesh155.position.set( (Math.cos((1085 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1085 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup155.add(redPlasmaMesh155)

// greenPlasmaMesh155
const greenPlasmaGeometry155 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial155 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh155 = new THREE.Mesh(greenPlasmaGeometry155, greenPlasmaMaterial155)
greenPlasmaMesh155.position.set( (Math.cos((1925 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1925 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup155.add(greenPlasmaMesh155)

// bluePlasmaMesh155
const bluePlasmaGeometry155 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial155 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh155 = new THREE.Mesh(bluePlasmaGeometry155, bluePlasmaMaterial155)
bluePlasmaMesh155.position.set( (Math.cos((2765 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2765 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup155.add(bluePlasmaMesh155)

plasmaGroup155.rotation.z = Math.PI / 180 * 90
plasmaGroupB155.add(plasmaGroup155)

plasmaGroupB155.rotation.y = (155 * ((Math.PI / 2) / 90))
plasmaGroupC155.add(plasmaGroupB155)

plasmaGroupC155.position.x = (Math.sin((155 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC155.position.z = (Math.cos((155 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC155)

// plasmaGroup156		###############################################################################
const plasmaGroup156 = new THREE.Group()

const plasmaGroupB156 = new THREE.Group()

const plasmaGroupC156 = new THREE.Group()

// redPlasmaMesh156
const redPlasmaGeometry156 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial156 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh156 = new THREE.Mesh(redPlasmaGeometry156, redPlasmaMaterial156)
redPlasmaMesh156.position.set( (Math.cos((1092 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1092 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup156.add(redPlasmaMesh156)

// greenPlasmaMesh156
const greenPlasmaGeometry156 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial156 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh156 = new THREE.Mesh(greenPlasmaGeometry156, greenPlasmaMaterial156)
greenPlasmaMesh156.position.set( (Math.cos((1932 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1932 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup156.add(greenPlasmaMesh156)

// bluePlasmaMesh156
const bluePlasmaGeometry156 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial156 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh156 = new THREE.Mesh(bluePlasmaGeometry156, bluePlasmaMaterial156)
bluePlasmaMesh156.position.set( (Math.cos((2772 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2772 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup156.add(bluePlasmaMesh156)

plasmaGroup156.rotation.z = Math.PI / 180 * 90
plasmaGroupB156.add(plasmaGroup156)

plasmaGroupB156.rotation.y = (156 * ((Math.PI / 2) / 90))
plasmaGroupC156.add(plasmaGroupB156)

plasmaGroupC156.position.x = (Math.sin((156 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC156.position.z = (Math.cos((156 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC156)

// plasmaGroup157		###############################################################################
const plasmaGroup157 = new THREE.Group()

const plasmaGroupB157 = new THREE.Group()

const plasmaGroupC157 = new THREE.Group()

// redPlasmaMesh157
const redPlasmaGeometry157 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial157 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh157 = new THREE.Mesh(redPlasmaGeometry157, redPlasmaMaterial157)
redPlasmaMesh157.position.set( (Math.cos((1099 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1099 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup157.add(redPlasmaMesh157)

// greenPlasmaMesh157
const greenPlasmaGeometry157 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial157 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh157 = new THREE.Mesh(greenPlasmaGeometry157, greenPlasmaMaterial157)
greenPlasmaMesh157.position.set( (Math.cos((1939 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1939 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup157.add(greenPlasmaMesh157)

// bluePlasmaMesh157
const bluePlasmaGeometry157 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial157 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh157 = new THREE.Mesh(bluePlasmaGeometry157, bluePlasmaMaterial157)
bluePlasmaMesh157.position.set( (Math.cos((2779 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2779 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup157.add(bluePlasmaMesh157)

plasmaGroup157.rotation.z = Math.PI / 180 * 90
plasmaGroupB157.add(plasmaGroup157)

plasmaGroupB157.rotation.y = (157 * ((Math.PI / 2) / 90))
plasmaGroupC157.add(plasmaGroupB157)

plasmaGroupC157.position.x = (Math.sin((157 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC157.position.z = (Math.cos((157 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC157)

// plasmaGroup158		###############################################################################
const plasmaGroup158 = new THREE.Group()

const plasmaGroupB158 = new THREE.Group()

const plasmaGroupC158 = new THREE.Group()

// redPlasmaMesh158
const redPlasmaGeometry158 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial158 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh158 = new THREE.Mesh(redPlasmaGeometry158, redPlasmaMaterial158)
redPlasmaMesh158.position.set( (Math.cos((1106 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1106 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup158.add(redPlasmaMesh158)

// greenPlasmaMesh158
const greenPlasmaGeometry158 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial158 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh158 = new THREE.Mesh(greenPlasmaGeometry158, greenPlasmaMaterial158)
greenPlasmaMesh158.position.set( (Math.cos((1946 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1946 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup158.add(greenPlasmaMesh158)

// bluePlasmaMesh158
const bluePlasmaGeometry158 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial158 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh158 = new THREE.Mesh(bluePlasmaGeometry158, bluePlasmaMaterial158)
bluePlasmaMesh158.position.set( (Math.cos((2786 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2786 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup158.add(bluePlasmaMesh158)

plasmaGroup158.rotation.z = Math.PI / 180 * 90
plasmaGroupB158.add(plasmaGroup158)

plasmaGroupB158.rotation.y = (158 * ((Math.PI / 2) / 90))
plasmaGroupC158.add(plasmaGroupB158)

plasmaGroupC158.position.x = (Math.sin((158 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC158.position.z = (Math.cos((158 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC158)

// plasmaGroup159		###############################################################################
const plasmaGroup159 = new THREE.Group()

const plasmaGroupB159 = new THREE.Group()

const plasmaGroupC159 = new THREE.Group()

// redPlasmaMesh159
const redPlasmaGeometry159 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial159 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh159 = new THREE.Mesh(redPlasmaGeometry159, redPlasmaMaterial159)
redPlasmaMesh159.position.set( (Math.cos((1113 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1113 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup159.add(redPlasmaMesh159)

// greenPlasmaMesh159
const greenPlasmaGeometry159 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial159 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh159 = new THREE.Mesh(greenPlasmaGeometry159, greenPlasmaMaterial159)
greenPlasmaMesh159.position.set( (Math.cos((1953 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1953 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup159.add(greenPlasmaMesh159)

// bluePlasmaMesh159
const bluePlasmaGeometry159 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial159 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh159 = new THREE.Mesh(bluePlasmaGeometry159, bluePlasmaMaterial159)
bluePlasmaMesh159.position.set( (Math.cos((2793 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2793 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup159.add(bluePlasmaMesh159)

plasmaGroup159.rotation.z = Math.PI / 180 * 90
plasmaGroupB159.add(plasmaGroup159)

plasmaGroupB159.rotation.y = (159 * ((Math.PI / 2) / 90))
plasmaGroupC159.add(plasmaGroupB159)

plasmaGroupC159.position.x = (Math.sin((159 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC159.position.z = (Math.cos((159 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC159)

// plasmaGroup160		###############################################################################
const plasmaGroup160 = new THREE.Group()

const plasmaGroupB160 = new THREE.Group()

const plasmaGroupC160 = new THREE.Group()

// redPlasmaMesh160
const redPlasmaGeometry160 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial160 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh160 = new THREE.Mesh(redPlasmaGeometry160, redPlasmaMaterial160)
redPlasmaMesh160.position.set( (Math.cos((1120 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1120 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup160.add(redPlasmaMesh160)

// greenPlasmaMesh160
const greenPlasmaGeometry160 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial160 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh160 = new THREE.Mesh(greenPlasmaGeometry160, greenPlasmaMaterial160)
greenPlasmaMesh160.position.set( (Math.cos((1960 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1960 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup160.add(greenPlasmaMesh160)

// bluePlasmaMesh160
const bluePlasmaGeometry160 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial160 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh160 = new THREE.Mesh(bluePlasmaGeometry160, bluePlasmaMaterial160)
bluePlasmaMesh160.position.set( (Math.cos((2800 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2800 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup160.add(bluePlasmaMesh160)

plasmaGroup160.rotation.z = Math.PI / 180 * 90
plasmaGroupB160.add(plasmaGroup160)

plasmaGroupB160.rotation.y = (160 * ((Math.PI / 2) / 90))
plasmaGroupC160.add(plasmaGroupB160)

plasmaGroupC160.position.x = (Math.sin((160 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC160.position.z = (Math.cos((160 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC160)

// plasmaGroup161		###############################################################################
const plasmaGroup161 = new THREE.Group()

const plasmaGroupB161 = new THREE.Group()

const plasmaGroupC161 = new THREE.Group()

// redPlasmaMesh161
const redPlasmaGeometry161 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial161 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh161 = new THREE.Mesh(redPlasmaGeometry161, redPlasmaMaterial161)
redPlasmaMesh161.position.set( (Math.cos((1127 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1127 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup161.add(redPlasmaMesh161)

// greenPlasmaMesh161
const greenPlasmaGeometry161 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial161 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh161 = new THREE.Mesh(greenPlasmaGeometry161, greenPlasmaMaterial161)
greenPlasmaMesh161.position.set( (Math.cos((1967 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1967 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup161.add(greenPlasmaMesh161)

// bluePlasmaMesh161
const bluePlasmaGeometry161 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial161 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh161 = new THREE.Mesh(bluePlasmaGeometry161, bluePlasmaMaterial161)
bluePlasmaMesh161.position.set( (Math.cos((2807 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2807 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup161.add(bluePlasmaMesh161)

plasmaGroup161.rotation.z = Math.PI / 180 * 90
plasmaGroupB161.add(plasmaGroup161)

plasmaGroupB161.rotation.y = (161 * ((Math.PI / 2) / 90))
plasmaGroupC161.add(plasmaGroupB161)

plasmaGroupC161.position.x = (Math.sin((161 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC161.position.z = (Math.cos((161 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC161)

// plasmaGroup162		###############################################################################
const plasmaGroup162 = new THREE.Group()

const plasmaGroupB162 = new THREE.Group()

const plasmaGroupC162 = new THREE.Group()

// redPlasmaMesh162
const redPlasmaGeometry162 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial162 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh162 = new THREE.Mesh(redPlasmaGeometry162, redPlasmaMaterial162)
redPlasmaMesh162.position.set( (Math.cos((1134 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1134 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup162.add(redPlasmaMesh162)

// greenPlasmaMesh162
const greenPlasmaGeometry162 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial162 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh162 = new THREE.Mesh(greenPlasmaGeometry162, greenPlasmaMaterial162)
greenPlasmaMesh162.position.set( (Math.cos((1974 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1974 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup162.add(greenPlasmaMesh162)

// bluePlasmaMesh162
const bluePlasmaGeometry162 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial162 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh162 = new THREE.Mesh(bluePlasmaGeometry162, bluePlasmaMaterial162)
bluePlasmaMesh162.position.set( (Math.cos((2814 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2814 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup162.add(bluePlasmaMesh162)

plasmaGroup162.rotation.z = Math.PI / 180 * 90
plasmaGroupB162.add(plasmaGroup162)

plasmaGroupB162.rotation.y = (162 * ((Math.PI / 2) / 90))
plasmaGroupC162.add(plasmaGroupB162)

plasmaGroupC162.position.x = (Math.sin((162 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC162.position.z = (Math.cos((162 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC162)

// plasmaGroup163		###############################################################################
const plasmaGroup163 = new THREE.Group()

const plasmaGroupB163 = new THREE.Group()

const plasmaGroupC163 = new THREE.Group()

// redPlasmaMesh163
const redPlasmaGeometry163 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial163 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh163 = new THREE.Mesh(redPlasmaGeometry163, redPlasmaMaterial163)
redPlasmaMesh163.position.set( (Math.cos((1141 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1141 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup163.add(redPlasmaMesh163)

// greenPlasmaMesh163
const greenPlasmaGeometry163 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial163 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh163 = new THREE.Mesh(greenPlasmaGeometry163, greenPlasmaMaterial163)
greenPlasmaMesh163.position.set( (Math.cos((1981 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1981 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup163.add(greenPlasmaMesh163)

// bluePlasmaMesh163
const bluePlasmaGeometry163 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial163 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh163 = new THREE.Mesh(bluePlasmaGeometry163, bluePlasmaMaterial163)
bluePlasmaMesh163.position.set( (Math.cos((2821 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2821 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup163.add(bluePlasmaMesh163)

plasmaGroup163.rotation.z = Math.PI / 180 * 90
plasmaGroupB163.add(plasmaGroup163)

plasmaGroupB163.rotation.y = (163 * ((Math.PI / 2) / 90))
plasmaGroupC163.add(plasmaGroupB163)

plasmaGroupC163.position.x = (Math.sin((163 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC163.position.z = (Math.cos((163 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC163)

// plasmaGroup164		###############################################################################
const plasmaGroup164 = new THREE.Group()

const plasmaGroupB164 = new THREE.Group()

const plasmaGroupC164 = new THREE.Group()

// redPlasmaMesh164
const redPlasmaGeometry164 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial164 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh164 = new THREE.Mesh(redPlasmaGeometry164, redPlasmaMaterial164)
redPlasmaMesh164.position.set( (Math.cos((1148 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1148 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup164.add(redPlasmaMesh164)

// greenPlasmaMesh164
const greenPlasmaGeometry164 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial164 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh164 = new THREE.Mesh(greenPlasmaGeometry164, greenPlasmaMaterial164)
greenPlasmaMesh164.position.set( (Math.cos((1988 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1988 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup164.add(greenPlasmaMesh164)

// bluePlasmaMesh164
const bluePlasmaGeometry164 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial164 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh164 = new THREE.Mesh(bluePlasmaGeometry164, bluePlasmaMaterial164)
bluePlasmaMesh164.position.set( (Math.cos((2828 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2828 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup164.add(bluePlasmaMesh164)

plasmaGroup164.rotation.z = Math.PI / 180 * 90
plasmaGroupB164.add(plasmaGroup164)

plasmaGroupB164.rotation.y = (164 * ((Math.PI / 2) / 90))
plasmaGroupC164.add(plasmaGroupB164)

plasmaGroupC164.position.x = (Math.sin((164 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC164.position.z = (Math.cos((164 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC164)

// plasmaGroup165		###############################################################################
const plasmaGroup165 = new THREE.Group()

const plasmaGroupB165 = new THREE.Group()

const plasmaGroupC165 = new THREE.Group()

// redPlasmaMesh165
const redPlasmaGeometry165 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial165 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh165 = new THREE.Mesh(redPlasmaGeometry165, redPlasmaMaterial165)
redPlasmaMesh165.position.set( (Math.cos((1155 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1155 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup165.add(redPlasmaMesh165)

// greenPlasmaMesh165
const greenPlasmaGeometry165 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial165 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh165 = new THREE.Mesh(greenPlasmaGeometry165, greenPlasmaMaterial165)
greenPlasmaMesh165.position.set( (Math.cos((1995 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1995 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup165.add(greenPlasmaMesh165)

// bluePlasmaMesh165
const bluePlasmaGeometry165 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial165 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh165 = new THREE.Mesh(bluePlasmaGeometry165, bluePlasmaMaterial165)
bluePlasmaMesh165.position.set( (Math.cos((2835 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2835 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup165.add(bluePlasmaMesh165)

plasmaGroup165.rotation.z = Math.PI / 180 * 90
plasmaGroupB165.add(plasmaGroup165)

plasmaGroupB165.rotation.y = (165 * ((Math.PI / 2) / 90))
plasmaGroupC165.add(plasmaGroupB165)

plasmaGroupC165.position.x = (Math.sin((165 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC165.position.z = (Math.cos((165 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC165)

// plasmaGroup166		###############################################################################
const plasmaGroup166 = new THREE.Group()

const plasmaGroupB166 = new THREE.Group()

const plasmaGroupC166 = new THREE.Group()

// redPlasmaMesh166
const redPlasmaGeometry166 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial166 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh166 = new THREE.Mesh(redPlasmaGeometry166, redPlasmaMaterial166)
redPlasmaMesh166.position.set( (Math.cos((1162 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1162 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup166.add(redPlasmaMesh166)

// greenPlasmaMesh166
const greenPlasmaGeometry166 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial166 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh166 = new THREE.Mesh(greenPlasmaGeometry166, greenPlasmaMaterial166)
greenPlasmaMesh166.position.set( (Math.cos((2002 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2002 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup166.add(greenPlasmaMesh166)

// bluePlasmaMesh166
const bluePlasmaGeometry166 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial166 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh166 = new THREE.Mesh(bluePlasmaGeometry166, bluePlasmaMaterial166)
bluePlasmaMesh166.position.set( (Math.cos((2842 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2842 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup166.add(bluePlasmaMesh166)

plasmaGroup166.rotation.z = Math.PI / 180 * 90
plasmaGroupB166.add(plasmaGroup166)

plasmaGroupB166.rotation.y = (166 * ((Math.PI / 2) / 90))
plasmaGroupC166.add(plasmaGroupB166)

plasmaGroupC166.position.x = (Math.sin((166 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC166.position.z = (Math.cos((166 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC166)

// plasmaGroup167		###############################################################################
const plasmaGroup167 = new THREE.Group()

const plasmaGroupB167 = new THREE.Group()

const plasmaGroupC167 = new THREE.Group()

// redPlasmaMesh167
const redPlasmaGeometry167 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial167 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh167 = new THREE.Mesh(redPlasmaGeometry167, redPlasmaMaterial167)
redPlasmaMesh167.position.set( (Math.cos((1169 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1169 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup167.add(redPlasmaMesh167)

// greenPlasmaMesh167
const greenPlasmaGeometry167 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial167 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh167 = new THREE.Mesh(greenPlasmaGeometry167, greenPlasmaMaterial167)
greenPlasmaMesh167.position.set( (Math.cos((2009 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2009 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup167.add(greenPlasmaMesh167)

// bluePlasmaMesh167
const bluePlasmaGeometry167 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial167 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh167 = new THREE.Mesh(bluePlasmaGeometry167, bluePlasmaMaterial167)
bluePlasmaMesh167.position.set( (Math.cos((2849 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2849 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup167.add(bluePlasmaMesh167)

plasmaGroup167.rotation.z = Math.PI / 180 * 90
plasmaGroupB167.add(plasmaGroup167)

plasmaGroupB167.rotation.y = (167 * ((Math.PI / 2) / 90))
plasmaGroupC167.add(plasmaGroupB167)

plasmaGroupC167.position.x = (Math.sin((167 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC167.position.z = (Math.cos((167 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC167)

// plasmaGroup168		###############################################################################
const plasmaGroup168 = new THREE.Group()

const plasmaGroupB168 = new THREE.Group()

const plasmaGroupC168 = new THREE.Group()

// redPlasmaMesh168
const redPlasmaGeometry168 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial168 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh168 = new THREE.Mesh(redPlasmaGeometry168, redPlasmaMaterial168)
redPlasmaMesh168.position.set( (Math.cos((1176 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1176 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup168.add(redPlasmaMesh168)

// greenPlasmaMesh168
const greenPlasmaGeometry168 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial168 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh168 = new THREE.Mesh(greenPlasmaGeometry168, greenPlasmaMaterial168)
greenPlasmaMesh168.position.set( (Math.cos((2016 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2016 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup168.add(greenPlasmaMesh168)

// bluePlasmaMesh168
const bluePlasmaGeometry168 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial168 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh168 = new THREE.Mesh(bluePlasmaGeometry168, bluePlasmaMaterial168)
bluePlasmaMesh168.position.set( (Math.cos((2856 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2856 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup168.add(bluePlasmaMesh168)

plasmaGroup168.rotation.z = Math.PI / 180 * 90
plasmaGroupB168.add(plasmaGroup168)

plasmaGroupB168.rotation.y = (168 * ((Math.PI / 2) / 90))
plasmaGroupC168.add(plasmaGroupB168)

plasmaGroupC168.position.x = (Math.sin((168 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC168.position.z = (Math.cos((168 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC168)

// plasmaGroup169		###############################################################################
const plasmaGroup169 = new THREE.Group()

const plasmaGroupB169 = new THREE.Group()

const plasmaGroupC169 = new THREE.Group()

// redPlasmaMesh169
const redPlasmaGeometry169 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial169 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh169 = new THREE.Mesh(redPlasmaGeometry169, redPlasmaMaterial169)
redPlasmaMesh169.position.set( (Math.cos((1183 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1183 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup169.add(redPlasmaMesh169)

// greenPlasmaMesh169
const greenPlasmaGeometry169 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial169 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh169 = new THREE.Mesh(greenPlasmaGeometry169, greenPlasmaMaterial169)
greenPlasmaMesh169.position.set( (Math.cos((2023 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2023 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup169.add(greenPlasmaMesh169)

// bluePlasmaMesh169
const bluePlasmaGeometry169 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial169 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh169 = new THREE.Mesh(bluePlasmaGeometry169, bluePlasmaMaterial169)
bluePlasmaMesh169.position.set( (Math.cos((2863 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2863 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup169.add(bluePlasmaMesh169)

plasmaGroup169.rotation.z = Math.PI / 180 * 90
plasmaGroupB169.add(plasmaGroup169)

plasmaGroupB169.rotation.y = (169 * ((Math.PI / 2) / 90))
plasmaGroupC169.add(plasmaGroupB169)

plasmaGroupC169.position.x = (Math.sin((169 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC169.position.z = (Math.cos((169 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC169)

// plasmaGroup170		###############################################################################
const plasmaGroup170 = new THREE.Group()

const plasmaGroupB170 = new THREE.Group()

const plasmaGroupC170 = new THREE.Group()

// redPlasmaMesh170
const redPlasmaGeometry170 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial170 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh170 = new THREE.Mesh(redPlasmaGeometry170, redPlasmaMaterial170)
redPlasmaMesh170.position.set( (Math.cos((1190 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1190 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup170.add(redPlasmaMesh170)

// greenPlasmaMesh170
const greenPlasmaGeometry170 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial170 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh170 = new THREE.Mesh(greenPlasmaGeometry170, greenPlasmaMaterial170)
greenPlasmaMesh170.position.set( (Math.cos((2030 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2030 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup170.add(greenPlasmaMesh170)

// bluePlasmaMesh170
const bluePlasmaGeometry170 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial170 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh170 = new THREE.Mesh(bluePlasmaGeometry170, bluePlasmaMaterial170)
bluePlasmaMesh170.position.set( (Math.cos((2870 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2870 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup170.add(bluePlasmaMesh170)

plasmaGroup170.rotation.z = Math.PI / 180 * 90
plasmaGroupB170.add(plasmaGroup170)

plasmaGroupB170.rotation.y = (170 * ((Math.PI / 2) / 90))
plasmaGroupC170.add(plasmaGroupB170)

plasmaGroupC170.position.x = (Math.sin((170 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC170.position.z = (Math.cos((170 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC170)

// plasmaGroup171		###############################################################################
const plasmaGroup171 = new THREE.Group()

const plasmaGroupB171 = new THREE.Group()

const plasmaGroupC171 = new THREE.Group()

// redPlasmaMesh171
const redPlasmaGeometry171 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial171 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh171 = new THREE.Mesh(redPlasmaGeometry171, redPlasmaMaterial171)
redPlasmaMesh171.position.set( (Math.cos((1197 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1197 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup171.add(redPlasmaMesh171)

// greenPlasmaMesh171
const greenPlasmaGeometry171 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial171 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh171 = new THREE.Mesh(greenPlasmaGeometry171, greenPlasmaMaterial171)
greenPlasmaMesh171.position.set( (Math.cos((2037 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2037 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup171.add(greenPlasmaMesh171)

// bluePlasmaMesh171
const bluePlasmaGeometry171 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial171 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh171 = new THREE.Mesh(bluePlasmaGeometry171, bluePlasmaMaterial171)
bluePlasmaMesh171.position.set( (Math.cos((2877 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2877 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup171.add(bluePlasmaMesh171)

plasmaGroup171.rotation.z = Math.PI / 180 * 90
plasmaGroupB171.add(plasmaGroup171)

plasmaGroupB171.rotation.y = (171 * ((Math.PI / 2) / 90))
plasmaGroupC171.add(plasmaGroupB171)

plasmaGroupC171.position.x = (Math.sin((171 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC171.position.z = (Math.cos((171 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC171)

// plasmaGroup172		###############################################################################
const plasmaGroup172 = new THREE.Group()

const plasmaGroupB172 = new THREE.Group()

const plasmaGroupC172 = new THREE.Group()

// redPlasmaMesh172
const redPlasmaGeometry172 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial172 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh172 = new THREE.Mesh(redPlasmaGeometry172, redPlasmaMaterial172)
redPlasmaMesh172.position.set( (Math.cos((1204 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1204 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup172.add(redPlasmaMesh172)

// greenPlasmaMesh172
const greenPlasmaGeometry172 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial172 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh172 = new THREE.Mesh(greenPlasmaGeometry172, greenPlasmaMaterial172)
greenPlasmaMesh172.position.set( (Math.cos((2044 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2044 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup172.add(greenPlasmaMesh172)

// bluePlasmaMesh172
const bluePlasmaGeometry172 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial172 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh172 = new THREE.Mesh(bluePlasmaGeometry172, bluePlasmaMaterial172)
bluePlasmaMesh172.position.set( (Math.cos((2884 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2884 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup172.add(bluePlasmaMesh172)

plasmaGroup172.rotation.z = Math.PI / 180 * 90
plasmaGroupB172.add(plasmaGroup172)

plasmaGroupB172.rotation.y = (172 * ((Math.PI / 2) / 90))
plasmaGroupC172.add(plasmaGroupB172)

plasmaGroupC172.position.x = (Math.sin((172 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC172.position.z = (Math.cos((172 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC172)

// plasmaGroup173		###############################################################################
const plasmaGroup173 = new THREE.Group()

const plasmaGroupB173 = new THREE.Group()

const plasmaGroupC173 = new THREE.Group()

// redPlasmaMesh173
const redPlasmaGeometry173 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial173 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh173 = new THREE.Mesh(redPlasmaGeometry173, redPlasmaMaterial173)
redPlasmaMesh173.position.set( (Math.cos((1211 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1211 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup173.add(redPlasmaMesh173)

// greenPlasmaMesh173
const greenPlasmaGeometry173 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial173 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh173 = new THREE.Mesh(greenPlasmaGeometry173, greenPlasmaMaterial173)
greenPlasmaMesh173.position.set( (Math.cos((2051 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2051 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup173.add(greenPlasmaMesh173)

// bluePlasmaMesh173
const bluePlasmaGeometry173 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial173 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh173 = new THREE.Mesh(bluePlasmaGeometry173, bluePlasmaMaterial173)
bluePlasmaMesh173.position.set( (Math.cos((2891 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2891 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup173.add(bluePlasmaMesh173)

plasmaGroup173.rotation.z = Math.PI / 180 * 90
plasmaGroupB173.add(plasmaGroup173)

plasmaGroupB173.rotation.y = (173 * ((Math.PI / 2) / 90))
plasmaGroupC173.add(plasmaGroupB173)

plasmaGroupC173.position.x = (Math.sin((173 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC173.position.z = (Math.cos((173 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC173)

// plasmaGroup174		###############################################################################
const plasmaGroup174 = new THREE.Group()

const plasmaGroupB174 = new THREE.Group()

const plasmaGroupC174 = new THREE.Group()

// redPlasmaMesh174
const redPlasmaGeometry174 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial174 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh174 = new THREE.Mesh(redPlasmaGeometry174, redPlasmaMaterial174)
redPlasmaMesh174.position.set( (Math.cos((1218 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1218 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup174.add(redPlasmaMesh174)

// greenPlasmaMesh174
const greenPlasmaGeometry174 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial174 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh174 = new THREE.Mesh(greenPlasmaGeometry174, greenPlasmaMaterial174)
greenPlasmaMesh174.position.set( (Math.cos((2058 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2058 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup174.add(greenPlasmaMesh174)

// bluePlasmaMesh174
const bluePlasmaGeometry174 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial174 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh174 = new THREE.Mesh(bluePlasmaGeometry174, bluePlasmaMaterial174)
bluePlasmaMesh174.position.set( (Math.cos((2898 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2898 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup174.add(bluePlasmaMesh174)

plasmaGroup174.rotation.z = Math.PI / 180 * 90
plasmaGroupB174.add(plasmaGroup174)

plasmaGroupB174.rotation.y = (174 * ((Math.PI / 2) / 90))
plasmaGroupC174.add(plasmaGroupB174)

plasmaGroupC174.position.x = (Math.sin((174 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC174.position.z = (Math.cos((174 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC174)

// plasmaGroup175		###############################################################################
const plasmaGroup175 = new THREE.Group()

const plasmaGroupB175 = new THREE.Group()

const plasmaGroupC175 = new THREE.Group()

// redPlasmaMesh175
const redPlasmaGeometry175 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial175 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh175 = new THREE.Mesh(redPlasmaGeometry175, redPlasmaMaterial175)
redPlasmaMesh175.position.set( (Math.cos((1225 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1225 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup175.add(redPlasmaMesh175)

// greenPlasmaMesh175
const greenPlasmaGeometry175 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial175 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh175 = new THREE.Mesh(greenPlasmaGeometry175, greenPlasmaMaterial175)
greenPlasmaMesh175.position.set( (Math.cos((2065 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2065 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup175.add(greenPlasmaMesh175)

// bluePlasmaMesh175
const bluePlasmaGeometry175 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial175 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh175 = new THREE.Mesh(bluePlasmaGeometry175, bluePlasmaMaterial175)
bluePlasmaMesh175.position.set( (Math.cos((2905 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2905 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup175.add(bluePlasmaMesh175)

plasmaGroup175.rotation.z = Math.PI / 180 * 90
plasmaGroupB175.add(plasmaGroup175)

plasmaGroupB175.rotation.y = (175 * ((Math.PI / 2) / 90))
plasmaGroupC175.add(plasmaGroupB175)

plasmaGroupC175.position.x = (Math.sin((175 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC175.position.z = (Math.cos((175 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC175)

// plasmaGroup176		###############################################################################
const plasmaGroup176 = new THREE.Group()

const plasmaGroupB176 = new THREE.Group()

const plasmaGroupC176 = new THREE.Group()

// redPlasmaMesh176
const redPlasmaGeometry176 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial176 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh176 = new THREE.Mesh(redPlasmaGeometry176, redPlasmaMaterial176)
redPlasmaMesh176.position.set( (Math.cos((1232 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1232 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup176.add(redPlasmaMesh176)

// greenPlasmaMesh176
const greenPlasmaGeometry176 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial176 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh176 = new THREE.Mesh(greenPlasmaGeometry176, greenPlasmaMaterial176)
greenPlasmaMesh176.position.set( (Math.cos((2072 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2072 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup176.add(greenPlasmaMesh176)

// bluePlasmaMesh176
const bluePlasmaGeometry176 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial176 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh176 = new THREE.Mesh(bluePlasmaGeometry176, bluePlasmaMaterial176)
bluePlasmaMesh176.position.set( (Math.cos((2912 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2912 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup176.add(bluePlasmaMesh176)

plasmaGroup176.rotation.z = Math.PI / 180 * 90
plasmaGroupB176.add(plasmaGroup176)

plasmaGroupB176.rotation.y = (176 * ((Math.PI / 2) / 90))
plasmaGroupC176.add(plasmaGroupB176)

plasmaGroupC176.position.x = (Math.sin((176 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC176.position.z = (Math.cos((176 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC176)

// plasmaGroup177		###############################################################################
const plasmaGroup177 = new THREE.Group()

const plasmaGroupB177 = new THREE.Group()

const plasmaGroupC177 = new THREE.Group()

// redPlasmaMesh177
const redPlasmaGeometry177 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial177 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh177 = new THREE.Mesh(redPlasmaGeometry177, redPlasmaMaterial177)
redPlasmaMesh177.position.set( (Math.cos((1239 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1239 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup177.add(redPlasmaMesh177)

// greenPlasmaMesh177
const greenPlasmaGeometry177 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial177 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh177 = new THREE.Mesh(greenPlasmaGeometry177, greenPlasmaMaterial177)
greenPlasmaMesh177.position.set( (Math.cos((2079 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2079 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup177.add(greenPlasmaMesh177)

// bluePlasmaMesh177
const bluePlasmaGeometry177 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial177 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh177 = new THREE.Mesh(bluePlasmaGeometry177, bluePlasmaMaterial177)
bluePlasmaMesh177.position.set( (Math.cos((2919 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2919 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup177.add(bluePlasmaMesh177)

plasmaGroup177.rotation.z = Math.PI / 180 * 90
plasmaGroupB177.add(plasmaGroup177)

plasmaGroupB177.rotation.y = (177 * ((Math.PI / 2) / 90))
plasmaGroupC177.add(plasmaGroupB177)

plasmaGroupC177.position.x = (Math.sin((177 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC177.position.z = (Math.cos((177 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC177)

// plasmaGroup178		###############################################################################
const plasmaGroup178 = new THREE.Group()

const plasmaGroupB178 = new THREE.Group()

const plasmaGroupC178 = new THREE.Group()

// redPlasmaMesh178
const redPlasmaGeometry178 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial178 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh178 = new THREE.Mesh(redPlasmaGeometry178, redPlasmaMaterial178)
redPlasmaMesh178.position.set( (Math.cos((1246 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1246 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup178.add(redPlasmaMesh178)

// greenPlasmaMesh178
const greenPlasmaGeometry178 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial178 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh178 = new THREE.Mesh(greenPlasmaGeometry178, greenPlasmaMaterial178)
greenPlasmaMesh178.position.set( (Math.cos((2086 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2086 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup178.add(greenPlasmaMesh178)

// bluePlasmaMesh178
const bluePlasmaGeometry178 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial178 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh178 = new THREE.Mesh(bluePlasmaGeometry178, bluePlasmaMaterial178)
bluePlasmaMesh178.position.set( (Math.cos((2926 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2926 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup178.add(bluePlasmaMesh178)

plasmaGroup178.rotation.z = Math.PI / 180 * 90
plasmaGroupB178.add(plasmaGroup178)

plasmaGroupB178.rotation.y = (178 * ((Math.PI / 2) / 90))
plasmaGroupC178.add(plasmaGroupB178)

plasmaGroupC178.position.x = (Math.sin((178 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC178.position.z = (Math.cos((178 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC178)

// plasmaGroup179		###############################################################################
const plasmaGroup179 = new THREE.Group()

const plasmaGroupB179 = new THREE.Group()

const plasmaGroupC179 = new THREE.Group()

// redPlasmaMesh179
const redPlasmaGeometry179 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial179 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh179 = new THREE.Mesh(redPlasmaGeometry179, redPlasmaMaterial179)
redPlasmaMesh179.position.set( (Math.cos((1253 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1253 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup179.add(redPlasmaMesh179)

// greenPlasmaMesh179
const greenPlasmaGeometry179 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial179 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh179 = new THREE.Mesh(greenPlasmaGeometry179, greenPlasmaMaterial179)
greenPlasmaMesh179.position.set( (Math.cos((2093 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2093 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup179.add(greenPlasmaMesh179)

// bluePlasmaMesh179
const bluePlasmaGeometry179 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial179 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh179 = new THREE.Mesh(bluePlasmaGeometry179, bluePlasmaMaterial179)
bluePlasmaMesh179.position.set( (Math.cos((2933 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2933 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup179.add(bluePlasmaMesh179)

plasmaGroup179.rotation.z = Math.PI / 180 * 90
plasmaGroupB179.add(plasmaGroup179)

plasmaGroupB179.rotation.y = (179 * ((Math.PI / 2) / 90))
plasmaGroupC179.add(plasmaGroupB179)

plasmaGroupC179.position.x = (Math.sin((179 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC179.position.z = (Math.cos((179 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC179)

// plasmaGroup180		###############################################################################
const plasmaGroup180 = new THREE.Group()

const plasmaGroupB180 = new THREE.Group()

const plasmaGroupC180 = new THREE.Group()

// redPlasmaMesh180
const redPlasmaGeometry180 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial180 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh180 = new THREE.Mesh(redPlasmaGeometry180, redPlasmaMaterial180)
redPlasmaMesh180.position.set( (Math.cos((1260 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1260 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup180.add(redPlasmaMesh180)

// greenPlasmaMesh180
const greenPlasmaGeometry180 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial180 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh180 = new THREE.Mesh(greenPlasmaGeometry180, greenPlasmaMaterial180)
greenPlasmaMesh180.position.set( (Math.cos((2100 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2100 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup180.add(greenPlasmaMesh180)

// bluePlasmaMesh180
const bluePlasmaGeometry180 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial180 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh180 = new THREE.Mesh(bluePlasmaGeometry180, bluePlasmaMaterial180)
bluePlasmaMesh180.position.set( (Math.cos((2940 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2940 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup180.add(bluePlasmaMesh180)

plasmaGroup180.rotation.z = Math.PI / 180 * 90
plasmaGroupB180.add(plasmaGroup180)

plasmaGroupB180.rotation.y = (180 * ((Math.PI / 2) / 90))
plasmaGroupC180.add(plasmaGroupB180)

plasmaGroupC180.position.x = (Math.sin((180 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC180.position.z = (Math.cos((180 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC180)

// plasmaGroup181		###############################################################################
const plasmaGroup181 = new THREE.Group()

const plasmaGroupB181 = new THREE.Group()

const plasmaGroupC181 = new THREE.Group()

// redPlasmaMesh181
const redPlasmaGeometry181 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial181 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh181 = new THREE.Mesh(redPlasmaGeometry181, redPlasmaMaterial181)
redPlasmaMesh181.position.set( (Math.cos((1267 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1267 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup181.add(redPlasmaMesh181)

// greenPlasmaMesh181
const greenPlasmaGeometry181 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial181 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh181 = new THREE.Mesh(greenPlasmaGeometry181, greenPlasmaMaterial181)
greenPlasmaMesh181.position.set( (Math.cos((2107 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2107 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup181.add(greenPlasmaMesh181)

// bluePlasmaMesh181
const bluePlasmaGeometry181 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial181 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh181 = new THREE.Mesh(bluePlasmaGeometry181, bluePlasmaMaterial181)
bluePlasmaMesh181.position.set( (Math.cos((2947 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2947 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup181.add(bluePlasmaMesh181)

plasmaGroup181.rotation.z = Math.PI / 180 * 90
plasmaGroupB181.add(plasmaGroup181)

plasmaGroupB181.rotation.y = (181 * ((Math.PI / 2) / 90))
plasmaGroupC181.add(plasmaGroupB181)

plasmaGroupC181.position.x = (Math.sin((181 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC181.position.z = (Math.cos((181 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC181)

// plasmaGroup182		###############################################################################
const plasmaGroup182 = new THREE.Group()

const plasmaGroupB182 = new THREE.Group()

const plasmaGroupC182 = new THREE.Group()

// redPlasmaMesh182
const redPlasmaGeometry182 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial182 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh182 = new THREE.Mesh(redPlasmaGeometry182, redPlasmaMaterial182)
redPlasmaMesh182.position.set( (Math.cos((1274 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1274 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup182.add(redPlasmaMesh182)

// greenPlasmaMesh182
const greenPlasmaGeometry182 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial182 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh182 = new THREE.Mesh(greenPlasmaGeometry182, greenPlasmaMaterial182)
greenPlasmaMesh182.position.set( (Math.cos((2114 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2114 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup182.add(greenPlasmaMesh182)

// bluePlasmaMesh182
const bluePlasmaGeometry182 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial182 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh182 = new THREE.Mesh(bluePlasmaGeometry182, bluePlasmaMaterial182)
bluePlasmaMesh182.position.set( (Math.cos((2954 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2954 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup182.add(bluePlasmaMesh182)

plasmaGroup182.rotation.z = Math.PI / 180 * 90
plasmaGroupB182.add(plasmaGroup182)

plasmaGroupB182.rotation.y = (182 * ((Math.PI / 2) / 90))
plasmaGroupC182.add(plasmaGroupB182)

plasmaGroupC182.position.x = (Math.sin((182 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC182.position.z = (Math.cos((182 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC182)

// plasmaGroup183		###############################################################################
const plasmaGroup183 = new THREE.Group()

const plasmaGroupB183 = new THREE.Group()

const plasmaGroupC183 = new THREE.Group()

// redPlasmaMesh183
const redPlasmaGeometry183 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial183 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh183 = new THREE.Mesh(redPlasmaGeometry183, redPlasmaMaterial183)
redPlasmaMesh183.position.set( (Math.cos((1281 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1281 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup183.add(redPlasmaMesh183)

// greenPlasmaMesh183
const greenPlasmaGeometry183 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial183 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh183 = new THREE.Mesh(greenPlasmaGeometry183, greenPlasmaMaterial183)
greenPlasmaMesh183.position.set( (Math.cos((2121 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2121 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup183.add(greenPlasmaMesh183)

// bluePlasmaMesh183
const bluePlasmaGeometry183 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial183 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh183 = new THREE.Mesh(bluePlasmaGeometry183, bluePlasmaMaterial183)
bluePlasmaMesh183.position.set( (Math.cos((2961 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2961 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup183.add(bluePlasmaMesh183)

plasmaGroup183.rotation.z = Math.PI / 180 * 90
plasmaGroupB183.add(plasmaGroup183)

plasmaGroupB183.rotation.y = (183 * ((Math.PI / 2) / 90))
plasmaGroupC183.add(plasmaGroupB183)

plasmaGroupC183.position.x = (Math.sin((183 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC183.position.z = (Math.cos((183 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC183)

// plasmaGroup184		###############################################################################
const plasmaGroup184 = new THREE.Group()

const plasmaGroupB184 = new THREE.Group()

const plasmaGroupC184 = new THREE.Group()

// redPlasmaMesh184
const redPlasmaGeometry184 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial184 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh184 = new THREE.Mesh(redPlasmaGeometry184, redPlasmaMaterial184)
redPlasmaMesh184.position.set( (Math.cos((1288 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1288 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup184.add(redPlasmaMesh184)

// greenPlasmaMesh184
const greenPlasmaGeometry184 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial184 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh184 = new THREE.Mesh(greenPlasmaGeometry184, greenPlasmaMaterial184)
greenPlasmaMesh184.position.set( (Math.cos((2128 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2128 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup184.add(greenPlasmaMesh184)

// bluePlasmaMesh184
const bluePlasmaGeometry184 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial184 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh184 = new THREE.Mesh(bluePlasmaGeometry184, bluePlasmaMaterial184)
bluePlasmaMesh184.position.set( (Math.cos((2968 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2968 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup184.add(bluePlasmaMesh184)

plasmaGroup184.rotation.z = Math.PI / 180 * 90
plasmaGroupB184.add(plasmaGroup184)

plasmaGroupB184.rotation.y = (184 * ((Math.PI / 2) / 90))
plasmaGroupC184.add(plasmaGroupB184)

plasmaGroupC184.position.x = (Math.sin((184 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC184.position.z = (Math.cos((184 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC184)

// plasmaGroup185		###############################################################################
const plasmaGroup185 = new THREE.Group()

const plasmaGroupB185 = new THREE.Group()

const plasmaGroupC185 = new THREE.Group()

// redPlasmaMesh185
const redPlasmaGeometry185 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial185 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh185 = new THREE.Mesh(redPlasmaGeometry185, redPlasmaMaterial185)
redPlasmaMesh185.position.set( (Math.cos((1295 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1295 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup185.add(redPlasmaMesh185)

// greenPlasmaMesh185
const greenPlasmaGeometry185 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial185 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh185 = new THREE.Mesh(greenPlasmaGeometry185, greenPlasmaMaterial185)
greenPlasmaMesh185.position.set( (Math.cos((2135 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2135 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup185.add(greenPlasmaMesh185)

// bluePlasmaMesh185
const bluePlasmaGeometry185 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial185 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh185 = new THREE.Mesh(bluePlasmaGeometry185, bluePlasmaMaterial185)
bluePlasmaMesh185.position.set( (Math.cos((2975 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2975 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup185.add(bluePlasmaMesh185)

plasmaGroup185.rotation.z = Math.PI / 180 * 90
plasmaGroupB185.add(plasmaGroup185)

plasmaGroupB185.rotation.y = (185 * ((Math.PI / 2) / 90))
plasmaGroupC185.add(plasmaGroupB185)

plasmaGroupC185.position.x = (Math.sin((185 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC185.position.z = (Math.cos((185 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC185)

// plasmaGroup186		###############################################################################
const plasmaGroup186 = new THREE.Group()

const plasmaGroupB186 = new THREE.Group()

const plasmaGroupC186 = new THREE.Group()

// redPlasmaMesh186
const redPlasmaGeometry186 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial186 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh186 = new THREE.Mesh(redPlasmaGeometry186, redPlasmaMaterial186)
redPlasmaMesh186.position.set( (Math.cos((1302 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1302 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup186.add(redPlasmaMesh186)

// greenPlasmaMesh186
const greenPlasmaGeometry186 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial186 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh186 = new THREE.Mesh(greenPlasmaGeometry186, greenPlasmaMaterial186)
greenPlasmaMesh186.position.set( (Math.cos((2142 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2142 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup186.add(greenPlasmaMesh186)

// bluePlasmaMesh186
const bluePlasmaGeometry186 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial186 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh186 = new THREE.Mesh(bluePlasmaGeometry186, bluePlasmaMaterial186)
bluePlasmaMesh186.position.set( (Math.cos((2982 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2982 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup186.add(bluePlasmaMesh186)

plasmaGroup186.rotation.z = Math.PI / 180 * 90
plasmaGroupB186.add(plasmaGroup186)

plasmaGroupB186.rotation.y = (186 * ((Math.PI / 2) / 90))
plasmaGroupC186.add(plasmaGroupB186)

plasmaGroupC186.position.x = (Math.sin((186 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC186.position.z = (Math.cos((186 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC186)

// plasmaGroup187		###############################################################################
const plasmaGroup187 = new THREE.Group()

const plasmaGroupB187 = new THREE.Group()

const plasmaGroupC187 = new THREE.Group()

// redPlasmaMesh187
const redPlasmaGeometry187 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial187 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh187 = new THREE.Mesh(redPlasmaGeometry187, redPlasmaMaterial187)
redPlasmaMesh187.position.set( (Math.cos((1309 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1309 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup187.add(redPlasmaMesh187)

// greenPlasmaMesh187
const greenPlasmaGeometry187 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial187 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh187 = new THREE.Mesh(greenPlasmaGeometry187, greenPlasmaMaterial187)
greenPlasmaMesh187.position.set( (Math.cos((2149 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2149 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup187.add(greenPlasmaMesh187)

// bluePlasmaMesh187
const bluePlasmaGeometry187 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial187 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh187 = new THREE.Mesh(bluePlasmaGeometry187, bluePlasmaMaterial187)
bluePlasmaMesh187.position.set( (Math.cos((2989 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2989 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup187.add(bluePlasmaMesh187)

plasmaGroup187.rotation.z = Math.PI / 180 * 90
plasmaGroupB187.add(plasmaGroup187)

plasmaGroupB187.rotation.y = (187 * ((Math.PI / 2) / 90))
plasmaGroupC187.add(plasmaGroupB187)

plasmaGroupC187.position.x = (Math.sin((187 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC187.position.z = (Math.cos((187 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC187)

// plasmaGroup188		###############################################################################
const plasmaGroup188 = new THREE.Group()

const plasmaGroupB188 = new THREE.Group()

const plasmaGroupC188 = new THREE.Group()

// redPlasmaMesh188
const redPlasmaGeometry188 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial188 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh188 = new THREE.Mesh(redPlasmaGeometry188, redPlasmaMaterial188)
redPlasmaMesh188.position.set( (Math.cos((1316 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1316 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup188.add(redPlasmaMesh188)

// greenPlasmaMesh188
const greenPlasmaGeometry188 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial188 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh188 = new THREE.Mesh(greenPlasmaGeometry188, greenPlasmaMaterial188)
greenPlasmaMesh188.position.set( (Math.cos((2156 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2156 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup188.add(greenPlasmaMesh188)

// bluePlasmaMesh188
const bluePlasmaGeometry188 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial188 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh188 = new THREE.Mesh(bluePlasmaGeometry188, bluePlasmaMaterial188)
bluePlasmaMesh188.position.set( (Math.cos((2996 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2996 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup188.add(bluePlasmaMesh188)

plasmaGroup188.rotation.z = Math.PI / 180 * 90
plasmaGroupB188.add(plasmaGroup188)

plasmaGroupB188.rotation.y = (188 * ((Math.PI / 2) / 90))
plasmaGroupC188.add(plasmaGroupB188)

plasmaGroupC188.position.x = (Math.sin((188 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC188.position.z = (Math.cos((188 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC188)

// plasmaGroup189		###############################################################################
const plasmaGroup189 = new THREE.Group()

const plasmaGroupB189 = new THREE.Group()

const plasmaGroupC189 = new THREE.Group()

// redPlasmaMesh189
const redPlasmaGeometry189 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial189 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh189 = new THREE.Mesh(redPlasmaGeometry189, redPlasmaMaterial189)
redPlasmaMesh189.position.set( (Math.cos((1323 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1323 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup189.add(redPlasmaMesh189)

// greenPlasmaMesh189
const greenPlasmaGeometry189 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial189 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh189 = new THREE.Mesh(greenPlasmaGeometry189, greenPlasmaMaterial189)
greenPlasmaMesh189.position.set( (Math.cos((2163 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2163 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup189.add(greenPlasmaMesh189)

// bluePlasmaMesh189
const bluePlasmaGeometry189 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial189 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh189 = new THREE.Mesh(bluePlasmaGeometry189, bluePlasmaMaterial189)
bluePlasmaMesh189.position.set( (Math.cos((3003 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3003 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup189.add(bluePlasmaMesh189)

plasmaGroup189.rotation.z = Math.PI / 180 * 90
plasmaGroupB189.add(plasmaGroup189)

plasmaGroupB189.rotation.y = (189 * ((Math.PI / 2) / 90))
plasmaGroupC189.add(plasmaGroupB189)

plasmaGroupC189.position.x = (Math.sin((189 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC189.position.z = (Math.cos((189 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC189)

// plasmaGroup190		###############################################################################
const plasmaGroup190 = new THREE.Group()

const plasmaGroupB190 = new THREE.Group()

const plasmaGroupC190 = new THREE.Group()

// redPlasmaMesh190
const redPlasmaGeometry190 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial190 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh190 = new THREE.Mesh(redPlasmaGeometry190, redPlasmaMaterial190)
redPlasmaMesh190.position.set( (Math.cos((1330 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1330 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup190.add(redPlasmaMesh190)

// greenPlasmaMesh190
const greenPlasmaGeometry190 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial190 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh190 = new THREE.Mesh(greenPlasmaGeometry190, greenPlasmaMaterial190)
greenPlasmaMesh190.position.set( (Math.cos((2170 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2170 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup190.add(greenPlasmaMesh190)

// bluePlasmaMesh190
const bluePlasmaGeometry190 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial190 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh190 = new THREE.Mesh(bluePlasmaGeometry190, bluePlasmaMaterial190)
bluePlasmaMesh190.position.set( (Math.cos((3010 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3010 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup190.add(bluePlasmaMesh190)

plasmaGroup190.rotation.z = Math.PI / 180 * 90
plasmaGroupB190.add(plasmaGroup190)

plasmaGroupB190.rotation.y = (190 * ((Math.PI / 2) / 90))
plasmaGroupC190.add(plasmaGroupB190)

plasmaGroupC190.position.x = (Math.sin((190 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC190.position.z = (Math.cos((190 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC190)

// plasmaGroup191		###############################################################################
const plasmaGroup191 = new THREE.Group()

const plasmaGroupB191 = new THREE.Group()

const plasmaGroupC191 = new THREE.Group()

// redPlasmaMesh191
const redPlasmaGeometry191 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial191 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh191 = new THREE.Mesh(redPlasmaGeometry191, redPlasmaMaterial191)
redPlasmaMesh191.position.set( (Math.cos((1337 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1337 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup191.add(redPlasmaMesh191)

// greenPlasmaMesh191
const greenPlasmaGeometry191 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial191 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh191 = new THREE.Mesh(greenPlasmaGeometry191, greenPlasmaMaterial191)
greenPlasmaMesh191.position.set( (Math.cos((2177 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2177 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup191.add(greenPlasmaMesh191)

// bluePlasmaMesh191
const bluePlasmaGeometry191 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial191 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh191 = new THREE.Mesh(bluePlasmaGeometry191, bluePlasmaMaterial191)
bluePlasmaMesh191.position.set( (Math.cos((3017 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3017 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup191.add(bluePlasmaMesh191)

plasmaGroup191.rotation.z = Math.PI / 180 * 90
plasmaGroupB191.add(plasmaGroup191)

plasmaGroupB191.rotation.y = (191 * ((Math.PI / 2) / 90))
plasmaGroupC191.add(plasmaGroupB191)

plasmaGroupC191.position.x = (Math.sin((191 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC191.position.z = (Math.cos((191 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC191)

// plasmaGroup192		###############################################################################
const plasmaGroup192 = new THREE.Group()

const plasmaGroupB192 = new THREE.Group()

const plasmaGroupC192 = new THREE.Group()

// redPlasmaMesh192
const redPlasmaGeometry192 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial192 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh192 = new THREE.Mesh(redPlasmaGeometry192, redPlasmaMaterial192)
redPlasmaMesh192.position.set( (Math.cos((1344 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1344 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup192.add(redPlasmaMesh192)

// greenPlasmaMesh192
const greenPlasmaGeometry192 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial192 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh192 = new THREE.Mesh(greenPlasmaGeometry192, greenPlasmaMaterial192)
greenPlasmaMesh192.position.set( (Math.cos((2184 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2184 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup192.add(greenPlasmaMesh192)

// bluePlasmaMesh192
const bluePlasmaGeometry192 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial192 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh192 = new THREE.Mesh(bluePlasmaGeometry192, bluePlasmaMaterial192)
bluePlasmaMesh192.position.set( (Math.cos((3024 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3024 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup192.add(bluePlasmaMesh192)

plasmaGroup192.rotation.z = Math.PI / 180 * 90
plasmaGroupB192.add(plasmaGroup192)

plasmaGroupB192.rotation.y = (192 * ((Math.PI / 2) / 90))
plasmaGroupC192.add(plasmaGroupB192)

plasmaGroupC192.position.x = (Math.sin((192 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC192.position.z = (Math.cos((192 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC192)

// plasmaGroup193		###############################################################################
const plasmaGroup193 = new THREE.Group()

const plasmaGroupB193 = new THREE.Group()

const plasmaGroupC193 = new THREE.Group()

// redPlasmaMesh193
const redPlasmaGeometry193 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial193 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh193 = new THREE.Mesh(redPlasmaGeometry193, redPlasmaMaterial193)
redPlasmaMesh193.position.set( (Math.cos((1351 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1351 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup193.add(redPlasmaMesh193)

// greenPlasmaMesh193
const greenPlasmaGeometry193 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial193 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh193 = new THREE.Mesh(greenPlasmaGeometry193, greenPlasmaMaterial193)
greenPlasmaMesh193.position.set( (Math.cos((2191 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2191 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup193.add(greenPlasmaMesh193)

// bluePlasmaMesh193
const bluePlasmaGeometry193 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial193 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh193 = new THREE.Mesh(bluePlasmaGeometry193, bluePlasmaMaterial193)
bluePlasmaMesh193.position.set( (Math.cos((3031 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3031 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup193.add(bluePlasmaMesh193)

plasmaGroup193.rotation.z = Math.PI / 180 * 90
plasmaGroupB193.add(plasmaGroup193)

plasmaGroupB193.rotation.y = (193 * ((Math.PI / 2) / 90))
plasmaGroupC193.add(plasmaGroupB193)

plasmaGroupC193.position.x = (Math.sin((193 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC193.position.z = (Math.cos((193 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC193)

// plasmaGroup194		###############################################################################
const plasmaGroup194 = new THREE.Group()

const plasmaGroupB194 = new THREE.Group()

const plasmaGroupC194 = new THREE.Group()

// redPlasmaMesh194
const redPlasmaGeometry194 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial194 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh194 = new THREE.Mesh(redPlasmaGeometry194, redPlasmaMaterial194)
redPlasmaMesh194.position.set( (Math.cos((1358 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1358 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup194.add(redPlasmaMesh194)

// greenPlasmaMesh194
const greenPlasmaGeometry194 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial194 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh194 = new THREE.Mesh(greenPlasmaGeometry194, greenPlasmaMaterial194)
greenPlasmaMesh194.position.set( (Math.cos((2198 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2198 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup194.add(greenPlasmaMesh194)

// bluePlasmaMesh194
const bluePlasmaGeometry194 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial194 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh194 = new THREE.Mesh(bluePlasmaGeometry194, bluePlasmaMaterial194)
bluePlasmaMesh194.position.set( (Math.cos((3038 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3038 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup194.add(bluePlasmaMesh194)

plasmaGroup194.rotation.z = Math.PI / 180 * 90
plasmaGroupB194.add(plasmaGroup194)

plasmaGroupB194.rotation.y = (194 * ((Math.PI / 2) / 90))
plasmaGroupC194.add(plasmaGroupB194)

plasmaGroupC194.position.x = (Math.sin((194 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC194.position.z = (Math.cos((194 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC194)

// plasmaGroup195		###############################################################################
const plasmaGroup195 = new THREE.Group()

const plasmaGroupB195 = new THREE.Group()

const plasmaGroupC195 = new THREE.Group()

// redPlasmaMesh195
const redPlasmaGeometry195 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial195 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh195 = new THREE.Mesh(redPlasmaGeometry195, redPlasmaMaterial195)
redPlasmaMesh195.position.set( (Math.cos((1365 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1365 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup195.add(redPlasmaMesh195)

// greenPlasmaMesh195
const greenPlasmaGeometry195 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial195 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh195 = new THREE.Mesh(greenPlasmaGeometry195, greenPlasmaMaterial195)
greenPlasmaMesh195.position.set( (Math.cos((2205 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2205 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup195.add(greenPlasmaMesh195)

// bluePlasmaMesh195
const bluePlasmaGeometry195 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial195 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh195 = new THREE.Mesh(bluePlasmaGeometry195, bluePlasmaMaterial195)
bluePlasmaMesh195.position.set( (Math.cos((3045 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3045 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup195.add(bluePlasmaMesh195)

plasmaGroup195.rotation.z = Math.PI / 180 * 90
plasmaGroupB195.add(plasmaGroup195)

plasmaGroupB195.rotation.y = (195 * ((Math.PI / 2) / 90))
plasmaGroupC195.add(plasmaGroupB195)

plasmaGroupC195.position.x = (Math.sin((195 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC195.position.z = (Math.cos((195 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC195)

// plasmaGroup196		###############################################################################
const plasmaGroup196 = new THREE.Group()

const plasmaGroupB196 = new THREE.Group()

const plasmaGroupC196 = new THREE.Group()

// redPlasmaMesh196
const redPlasmaGeometry196 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial196 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh196 = new THREE.Mesh(redPlasmaGeometry196, redPlasmaMaterial196)
redPlasmaMesh196.position.set( (Math.cos((1372 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1372 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup196.add(redPlasmaMesh196)

// greenPlasmaMesh196
const greenPlasmaGeometry196 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial196 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh196 = new THREE.Mesh(greenPlasmaGeometry196, greenPlasmaMaterial196)
greenPlasmaMesh196.position.set( (Math.cos((2212 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2212 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup196.add(greenPlasmaMesh196)

// bluePlasmaMesh196
const bluePlasmaGeometry196 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial196 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh196 = new THREE.Mesh(bluePlasmaGeometry196, bluePlasmaMaterial196)
bluePlasmaMesh196.position.set( (Math.cos((3052 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3052 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup196.add(bluePlasmaMesh196)

plasmaGroup196.rotation.z = Math.PI / 180 * 90
plasmaGroupB196.add(plasmaGroup196)

plasmaGroupB196.rotation.y = (196 * ((Math.PI / 2) / 90))
plasmaGroupC196.add(plasmaGroupB196)

plasmaGroupC196.position.x = (Math.sin((196 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC196.position.z = (Math.cos((196 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC196)

// plasmaGroup197		###############################################################################
const plasmaGroup197 = new THREE.Group()

const plasmaGroupB197 = new THREE.Group()

const plasmaGroupC197 = new THREE.Group()

// redPlasmaMesh197
const redPlasmaGeometry197 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial197 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh197 = new THREE.Mesh(redPlasmaGeometry197, redPlasmaMaterial197)
redPlasmaMesh197.position.set( (Math.cos((1379 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1379 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup197.add(redPlasmaMesh197)

// greenPlasmaMesh197
const greenPlasmaGeometry197 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial197 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh197 = new THREE.Mesh(greenPlasmaGeometry197, greenPlasmaMaterial197)
greenPlasmaMesh197.position.set( (Math.cos((2219 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2219 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup197.add(greenPlasmaMesh197)

// bluePlasmaMesh197
const bluePlasmaGeometry197 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial197 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh197 = new THREE.Mesh(bluePlasmaGeometry197, bluePlasmaMaterial197)
bluePlasmaMesh197.position.set( (Math.cos((3059 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3059 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup197.add(bluePlasmaMesh197)

plasmaGroup197.rotation.z = Math.PI / 180 * 90
plasmaGroupB197.add(plasmaGroup197)

plasmaGroupB197.rotation.y = (197 * ((Math.PI / 2) / 90))
plasmaGroupC197.add(plasmaGroupB197)

plasmaGroupC197.position.x = (Math.sin((197 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC197.position.z = (Math.cos((197 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC197)

// plasmaGroup198		###############################################################################
const plasmaGroup198 = new THREE.Group()

const plasmaGroupB198 = new THREE.Group()

const plasmaGroupC198 = new THREE.Group()

// redPlasmaMesh198
const redPlasmaGeometry198 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial198 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh198 = new THREE.Mesh(redPlasmaGeometry198, redPlasmaMaterial198)
redPlasmaMesh198.position.set( (Math.cos((1386 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1386 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup198.add(redPlasmaMesh198)

// greenPlasmaMesh198
const greenPlasmaGeometry198 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial198 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh198 = new THREE.Mesh(greenPlasmaGeometry198, greenPlasmaMaterial198)
greenPlasmaMesh198.position.set( (Math.cos((2226 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2226 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup198.add(greenPlasmaMesh198)

// bluePlasmaMesh198
const bluePlasmaGeometry198 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial198 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh198 = new THREE.Mesh(bluePlasmaGeometry198, bluePlasmaMaterial198)
bluePlasmaMesh198.position.set( (Math.cos((3066 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3066 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup198.add(bluePlasmaMesh198)

plasmaGroup198.rotation.z = Math.PI / 180 * 90
plasmaGroupB198.add(plasmaGroup198)

plasmaGroupB198.rotation.y = (198 * ((Math.PI / 2) / 90))
plasmaGroupC198.add(plasmaGroupB198)

plasmaGroupC198.position.x = (Math.sin((198 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC198.position.z = (Math.cos((198 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC198)

// plasmaGroup199		###############################################################################
const plasmaGroup199 = new THREE.Group()

const plasmaGroupB199 = new THREE.Group()

const plasmaGroupC199 = new THREE.Group()

// redPlasmaMesh199
const redPlasmaGeometry199 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial199 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh199 = new THREE.Mesh(redPlasmaGeometry199, redPlasmaMaterial199)
redPlasmaMesh199.position.set( (Math.cos((1393 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1393 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup199.add(redPlasmaMesh199)

// greenPlasmaMesh199
const greenPlasmaGeometry199 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial199 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh199 = new THREE.Mesh(greenPlasmaGeometry199, greenPlasmaMaterial199)
greenPlasmaMesh199.position.set( (Math.cos((2233 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2233 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup199.add(greenPlasmaMesh199)

// bluePlasmaMesh199
const bluePlasmaGeometry199 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial199 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh199 = new THREE.Mesh(bluePlasmaGeometry199, bluePlasmaMaterial199)
bluePlasmaMesh199.position.set( (Math.cos((3073 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3073 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup199.add(bluePlasmaMesh199)

plasmaGroup199.rotation.z = Math.PI / 180 * 90
plasmaGroupB199.add(plasmaGroup199)

plasmaGroupB199.rotation.y = (199 * ((Math.PI / 2) / 90))
plasmaGroupC199.add(plasmaGroupB199)

plasmaGroupC199.position.x = (Math.sin((199 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC199.position.z = (Math.cos((199 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC199)

// plasmaGroup200		###############################################################################
const plasmaGroup200 = new THREE.Group()

const plasmaGroupB200 = new THREE.Group()

const plasmaGroupC200 = new THREE.Group()

// redPlasmaMesh200
const redPlasmaGeometry200 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial200 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh200 = new THREE.Mesh(redPlasmaGeometry200, redPlasmaMaterial200)
redPlasmaMesh200.position.set( (Math.cos((1400 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1400 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup200.add(redPlasmaMesh200)

// greenPlasmaMesh200
const greenPlasmaGeometry200 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial200 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh200 = new THREE.Mesh(greenPlasmaGeometry200, greenPlasmaMaterial200)
greenPlasmaMesh200.position.set( (Math.cos((2240 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2240 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup200.add(greenPlasmaMesh200)

// bluePlasmaMesh200
const bluePlasmaGeometry200 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial200 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh200 = new THREE.Mesh(bluePlasmaGeometry200, bluePlasmaMaterial200)
bluePlasmaMesh200.position.set( (Math.cos((3080 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3080 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup200.add(bluePlasmaMesh200)

plasmaGroup200.rotation.z = Math.PI / 180 * 90
plasmaGroupB200.add(plasmaGroup200)

plasmaGroupB200.rotation.y = (200 * ((Math.PI / 2) / 90))
plasmaGroupC200.add(plasmaGroupB200)

plasmaGroupC200.position.x = (Math.sin((200 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC200.position.z = (Math.cos((200 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC200)

// plasmaGroup201		###############################################################################
const plasmaGroup201 = new THREE.Group()

const plasmaGroupB201 = new THREE.Group()

const plasmaGroupC201 = new THREE.Group()

// redPlasmaMesh201
const redPlasmaGeometry201 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial201 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh201 = new THREE.Mesh(redPlasmaGeometry201, redPlasmaMaterial201)
redPlasmaMesh201.position.set( (Math.cos((1407 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1407 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup201.add(redPlasmaMesh201)

// greenPlasmaMesh201
const greenPlasmaGeometry201 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial201 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh201 = new THREE.Mesh(greenPlasmaGeometry201, greenPlasmaMaterial201)
greenPlasmaMesh201.position.set( (Math.cos((2247 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2247 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup201.add(greenPlasmaMesh201)

// bluePlasmaMesh201
const bluePlasmaGeometry201 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial201 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh201 = new THREE.Mesh(bluePlasmaGeometry201, bluePlasmaMaterial201)
bluePlasmaMesh201.position.set( (Math.cos((3087 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3087 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup201.add(bluePlasmaMesh201)

plasmaGroup201.rotation.z = Math.PI / 180 * 90
plasmaGroupB201.add(plasmaGroup201)

plasmaGroupB201.rotation.y = (201 * ((Math.PI / 2) / 90))
plasmaGroupC201.add(plasmaGroupB201)

plasmaGroupC201.position.x = (Math.sin((201 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC201.position.z = (Math.cos((201 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC201)

// plasmaGroup202		###############################################################################
const plasmaGroup202 = new THREE.Group()

const plasmaGroupB202 = new THREE.Group()

const plasmaGroupC202 = new THREE.Group()

// redPlasmaMesh202
const redPlasmaGeometry202 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial202 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh202 = new THREE.Mesh(redPlasmaGeometry202, redPlasmaMaterial202)
redPlasmaMesh202.position.set( (Math.cos((1414 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1414 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup202.add(redPlasmaMesh202)

// greenPlasmaMesh202
const greenPlasmaGeometry202 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial202 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh202 = new THREE.Mesh(greenPlasmaGeometry202, greenPlasmaMaterial202)
greenPlasmaMesh202.position.set( (Math.cos((2254 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2254 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup202.add(greenPlasmaMesh202)

// bluePlasmaMesh202
const bluePlasmaGeometry202 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial202 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh202 = new THREE.Mesh(bluePlasmaGeometry202, bluePlasmaMaterial202)
bluePlasmaMesh202.position.set( (Math.cos((3094 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3094 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup202.add(bluePlasmaMesh202)

plasmaGroup202.rotation.z = Math.PI / 180 * 90
plasmaGroupB202.add(plasmaGroup202)

plasmaGroupB202.rotation.y = (202 * ((Math.PI / 2) / 90))
plasmaGroupC202.add(plasmaGroupB202)

plasmaGroupC202.position.x = (Math.sin((202 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC202.position.z = (Math.cos((202 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC202)

// plasmaGroup203		###############################################################################
const plasmaGroup203 = new THREE.Group()

const plasmaGroupB203 = new THREE.Group()

const plasmaGroupC203 = new THREE.Group()

// redPlasmaMesh203
const redPlasmaGeometry203 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial203 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh203 = new THREE.Mesh(redPlasmaGeometry203, redPlasmaMaterial203)
redPlasmaMesh203.position.set( (Math.cos((1421 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1421 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup203.add(redPlasmaMesh203)

// greenPlasmaMesh203
const greenPlasmaGeometry203 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial203 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh203 = new THREE.Mesh(greenPlasmaGeometry203, greenPlasmaMaterial203)
greenPlasmaMesh203.position.set( (Math.cos((2261 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2261 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup203.add(greenPlasmaMesh203)

// bluePlasmaMesh203
const bluePlasmaGeometry203 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial203 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh203 = new THREE.Mesh(bluePlasmaGeometry203, bluePlasmaMaterial203)
bluePlasmaMesh203.position.set( (Math.cos((3101 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3101 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup203.add(bluePlasmaMesh203)

plasmaGroup203.rotation.z = Math.PI / 180 * 90
plasmaGroupB203.add(plasmaGroup203)

plasmaGroupB203.rotation.y = (203 * ((Math.PI / 2) / 90))
plasmaGroupC203.add(plasmaGroupB203)

plasmaGroupC203.position.x = (Math.sin((203 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC203.position.z = (Math.cos((203 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC203)

// plasmaGroup204		###############################################################################
const plasmaGroup204 = new THREE.Group()

const plasmaGroupB204 = new THREE.Group()

const plasmaGroupC204 = new THREE.Group()

// redPlasmaMesh204
const redPlasmaGeometry204 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial204 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh204 = new THREE.Mesh(redPlasmaGeometry204, redPlasmaMaterial204)
redPlasmaMesh204.position.set( (Math.cos((1428 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1428 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup204.add(redPlasmaMesh204)

// greenPlasmaMesh204
const greenPlasmaGeometry204 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial204 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh204 = new THREE.Mesh(greenPlasmaGeometry204, greenPlasmaMaterial204)
greenPlasmaMesh204.position.set( (Math.cos((2268 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2268 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup204.add(greenPlasmaMesh204)

// bluePlasmaMesh204
const bluePlasmaGeometry204 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial204 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh204 = new THREE.Mesh(bluePlasmaGeometry204, bluePlasmaMaterial204)
bluePlasmaMesh204.position.set( (Math.cos((3108 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3108 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup204.add(bluePlasmaMesh204)

plasmaGroup204.rotation.z = Math.PI / 180 * 90
plasmaGroupB204.add(plasmaGroup204)

plasmaGroupB204.rotation.y = (204 * ((Math.PI / 2) / 90))
plasmaGroupC204.add(plasmaGroupB204)

plasmaGroupC204.position.x = (Math.sin((204 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC204.position.z = (Math.cos((204 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC204)

// plasmaGroup205		###############################################################################
const plasmaGroup205 = new THREE.Group()

const plasmaGroupB205 = new THREE.Group()

const plasmaGroupC205 = new THREE.Group()

// redPlasmaMesh205
const redPlasmaGeometry205 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial205 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh205 = new THREE.Mesh(redPlasmaGeometry205, redPlasmaMaterial205)
redPlasmaMesh205.position.set( (Math.cos((1435 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1435 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup205.add(redPlasmaMesh205)

// greenPlasmaMesh205
const greenPlasmaGeometry205 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial205 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh205 = new THREE.Mesh(greenPlasmaGeometry205, greenPlasmaMaterial205)
greenPlasmaMesh205.position.set( (Math.cos((2275 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2275 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup205.add(greenPlasmaMesh205)

// bluePlasmaMesh205
const bluePlasmaGeometry205 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial205 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh205 = new THREE.Mesh(bluePlasmaGeometry205, bluePlasmaMaterial205)
bluePlasmaMesh205.position.set( (Math.cos((3115 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3115 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup205.add(bluePlasmaMesh205)

plasmaGroup205.rotation.z = Math.PI / 180 * 90
plasmaGroupB205.add(plasmaGroup205)

plasmaGroupB205.rotation.y = (205 * ((Math.PI / 2) / 90))
plasmaGroupC205.add(plasmaGroupB205)

plasmaGroupC205.position.x = (Math.sin((205 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC205.position.z = (Math.cos((205 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC205)

// plasmaGroup206		###############################################################################
const plasmaGroup206 = new THREE.Group()

const plasmaGroupB206 = new THREE.Group()

const plasmaGroupC206 = new THREE.Group()

// redPlasmaMesh206
const redPlasmaGeometry206 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial206 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh206 = new THREE.Mesh(redPlasmaGeometry206, redPlasmaMaterial206)
redPlasmaMesh206.position.set( (Math.cos((1442 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1442 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup206.add(redPlasmaMesh206)

// greenPlasmaMesh206
const greenPlasmaGeometry206 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial206 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh206 = new THREE.Mesh(greenPlasmaGeometry206, greenPlasmaMaterial206)
greenPlasmaMesh206.position.set( (Math.cos((2282 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2282 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup206.add(greenPlasmaMesh206)

// bluePlasmaMesh206
const bluePlasmaGeometry206 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial206 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh206 = new THREE.Mesh(bluePlasmaGeometry206, bluePlasmaMaterial206)
bluePlasmaMesh206.position.set( (Math.cos((3122 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3122 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup206.add(bluePlasmaMesh206)

plasmaGroup206.rotation.z = Math.PI / 180 * 90
plasmaGroupB206.add(plasmaGroup206)

plasmaGroupB206.rotation.y = (206 * ((Math.PI / 2) / 90))
plasmaGroupC206.add(plasmaGroupB206)

plasmaGroupC206.position.x = (Math.sin((206 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC206.position.z = (Math.cos((206 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC206)

// plasmaGroup207		###############################################################################
const plasmaGroup207 = new THREE.Group()

const plasmaGroupB207 = new THREE.Group()

const plasmaGroupC207 = new THREE.Group()

// redPlasmaMesh207
const redPlasmaGeometry207 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial207 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh207 = new THREE.Mesh(redPlasmaGeometry207, redPlasmaMaterial207)
redPlasmaMesh207.position.set( (Math.cos((1449 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1449 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup207.add(redPlasmaMesh207)

// greenPlasmaMesh207
const greenPlasmaGeometry207 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial207 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh207 = new THREE.Mesh(greenPlasmaGeometry207, greenPlasmaMaterial207)
greenPlasmaMesh207.position.set( (Math.cos((2289 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2289 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup207.add(greenPlasmaMesh207)

// bluePlasmaMesh207
const bluePlasmaGeometry207 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial207 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh207 = new THREE.Mesh(bluePlasmaGeometry207, bluePlasmaMaterial207)
bluePlasmaMesh207.position.set( (Math.cos((3129 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3129 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup207.add(bluePlasmaMesh207)

plasmaGroup207.rotation.z = Math.PI / 180 * 90
plasmaGroupB207.add(plasmaGroup207)

plasmaGroupB207.rotation.y = (207 * ((Math.PI / 2) / 90))
plasmaGroupC207.add(plasmaGroupB207)

plasmaGroupC207.position.x = (Math.sin((207 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC207.position.z = (Math.cos((207 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC207)

// plasmaGroup208		###############################################################################
const plasmaGroup208 = new THREE.Group()

const plasmaGroupB208 = new THREE.Group()

const plasmaGroupC208 = new THREE.Group()

// redPlasmaMesh208
const redPlasmaGeometry208 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial208 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh208 = new THREE.Mesh(redPlasmaGeometry208, redPlasmaMaterial208)
redPlasmaMesh208.position.set( (Math.cos((1456 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1456 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup208.add(redPlasmaMesh208)

// greenPlasmaMesh208
const greenPlasmaGeometry208 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial208 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh208 = new THREE.Mesh(greenPlasmaGeometry208, greenPlasmaMaterial208)
greenPlasmaMesh208.position.set( (Math.cos((2296 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2296 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup208.add(greenPlasmaMesh208)

// bluePlasmaMesh208
const bluePlasmaGeometry208 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial208 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh208 = new THREE.Mesh(bluePlasmaGeometry208, bluePlasmaMaterial208)
bluePlasmaMesh208.position.set( (Math.cos((3136 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3136 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup208.add(bluePlasmaMesh208)

plasmaGroup208.rotation.z = Math.PI / 180 * 90
plasmaGroupB208.add(plasmaGroup208)

plasmaGroupB208.rotation.y = (208 * ((Math.PI / 2) / 90))
plasmaGroupC208.add(plasmaGroupB208)

plasmaGroupC208.position.x = (Math.sin((208 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC208.position.z = (Math.cos((208 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC208)

// plasmaGroup209		###############################################################################
const plasmaGroup209 = new THREE.Group()

const plasmaGroupB209 = new THREE.Group()

const plasmaGroupC209 = new THREE.Group()

// redPlasmaMesh209
const redPlasmaGeometry209 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial209 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh209 = new THREE.Mesh(redPlasmaGeometry209, redPlasmaMaterial209)
redPlasmaMesh209.position.set( (Math.cos((1463 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1463 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup209.add(redPlasmaMesh209)

// greenPlasmaMesh209
const greenPlasmaGeometry209 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial209 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh209 = new THREE.Mesh(greenPlasmaGeometry209, greenPlasmaMaterial209)
greenPlasmaMesh209.position.set( (Math.cos((2303 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2303 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup209.add(greenPlasmaMesh209)

// bluePlasmaMesh209
const bluePlasmaGeometry209 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial209 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh209 = new THREE.Mesh(bluePlasmaGeometry209, bluePlasmaMaterial209)
bluePlasmaMesh209.position.set( (Math.cos((3143 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3143 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup209.add(bluePlasmaMesh209)

plasmaGroup209.rotation.z = Math.PI / 180 * 90
plasmaGroupB209.add(plasmaGroup209)

plasmaGroupB209.rotation.y = (209 * ((Math.PI / 2) / 90))
plasmaGroupC209.add(plasmaGroupB209)

plasmaGroupC209.position.x = (Math.sin((209 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC209.position.z = (Math.cos((209 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC209)

// plasmaGroup210		###############################################################################
const plasmaGroup210 = new THREE.Group()

const plasmaGroupB210 = new THREE.Group()

const plasmaGroupC210 = new THREE.Group()

// redPlasmaMesh210
const redPlasmaGeometry210 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial210 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh210 = new THREE.Mesh(redPlasmaGeometry210, redPlasmaMaterial210)
redPlasmaMesh210.position.set( (Math.cos((1470 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1470 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup210.add(redPlasmaMesh210)

// greenPlasmaMesh210
const greenPlasmaGeometry210 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial210 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh210 = new THREE.Mesh(greenPlasmaGeometry210, greenPlasmaMaterial210)
greenPlasmaMesh210.position.set( (Math.cos((2310 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2310 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup210.add(greenPlasmaMesh210)

// bluePlasmaMesh210
const bluePlasmaGeometry210 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial210 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh210 = new THREE.Mesh(bluePlasmaGeometry210, bluePlasmaMaterial210)
bluePlasmaMesh210.position.set( (Math.cos((3150 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3150 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup210.add(bluePlasmaMesh210)

plasmaGroup210.rotation.z = Math.PI / 180 * 90
plasmaGroupB210.add(plasmaGroup210)

plasmaGroupB210.rotation.y = (210 * ((Math.PI / 2) / 90))
plasmaGroupC210.add(plasmaGroupB210)

plasmaGroupC210.position.x = (Math.sin((210 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC210.position.z = (Math.cos((210 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC210)

// plasmaGroup211		###############################################################################
const plasmaGroup211 = new THREE.Group()

const plasmaGroupB211 = new THREE.Group()

const plasmaGroupC211 = new THREE.Group()

// redPlasmaMesh211
const redPlasmaGeometry211 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial211 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh211 = new THREE.Mesh(redPlasmaGeometry211, redPlasmaMaterial211)
redPlasmaMesh211.position.set( (Math.cos((1477 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1477 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup211.add(redPlasmaMesh211)

// greenPlasmaMesh211
const greenPlasmaGeometry211 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial211 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh211 = new THREE.Mesh(greenPlasmaGeometry211, greenPlasmaMaterial211)
greenPlasmaMesh211.position.set( (Math.cos((2317 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2317 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup211.add(greenPlasmaMesh211)

// bluePlasmaMesh211
const bluePlasmaGeometry211 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial211 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh211 = new THREE.Mesh(bluePlasmaGeometry211, bluePlasmaMaterial211)
bluePlasmaMesh211.position.set( (Math.cos((3157 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3157 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup211.add(bluePlasmaMesh211)

plasmaGroup211.rotation.z = Math.PI / 180 * 90
plasmaGroupB211.add(plasmaGroup211)

plasmaGroupB211.rotation.y = (211 * ((Math.PI / 2) / 90))
plasmaGroupC211.add(plasmaGroupB211)

plasmaGroupC211.position.x = (Math.sin((211 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC211.position.z = (Math.cos((211 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC211)

// plasmaGroup212		###############################################################################
const plasmaGroup212 = new THREE.Group()

const plasmaGroupB212 = new THREE.Group()

const plasmaGroupC212 = new THREE.Group()

// redPlasmaMesh212
const redPlasmaGeometry212 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial212 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh212 = new THREE.Mesh(redPlasmaGeometry212, redPlasmaMaterial212)
redPlasmaMesh212.position.set( (Math.cos((1484 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1484 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup212.add(redPlasmaMesh212)

// greenPlasmaMesh212
const greenPlasmaGeometry212 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial212 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh212 = new THREE.Mesh(greenPlasmaGeometry212, greenPlasmaMaterial212)
greenPlasmaMesh212.position.set( (Math.cos((2324 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2324 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup212.add(greenPlasmaMesh212)

// bluePlasmaMesh212
const bluePlasmaGeometry212 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial212 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh212 = new THREE.Mesh(bluePlasmaGeometry212, bluePlasmaMaterial212)
bluePlasmaMesh212.position.set( (Math.cos((3164 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3164 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup212.add(bluePlasmaMesh212)

plasmaGroup212.rotation.z = Math.PI / 180 * 90
plasmaGroupB212.add(plasmaGroup212)

plasmaGroupB212.rotation.y = (212 * ((Math.PI / 2) / 90))
plasmaGroupC212.add(plasmaGroupB212)

plasmaGroupC212.position.x = (Math.sin((212 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC212.position.z = (Math.cos((212 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC212)

// plasmaGroup213		###############################################################################
const plasmaGroup213 = new THREE.Group()

const plasmaGroupB213 = new THREE.Group()

const plasmaGroupC213 = new THREE.Group()

// redPlasmaMesh213
const redPlasmaGeometry213 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial213 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh213 = new THREE.Mesh(redPlasmaGeometry213, redPlasmaMaterial213)
redPlasmaMesh213.position.set( (Math.cos((1491 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1491 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup213.add(redPlasmaMesh213)

// greenPlasmaMesh213
const greenPlasmaGeometry213 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial213 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh213 = new THREE.Mesh(greenPlasmaGeometry213, greenPlasmaMaterial213)
greenPlasmaMesh213.position.set( (Math.cos((2331 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2331 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup213.add(greenPlasmaMesh213)

// bluePlasmaMesh213
const bluePlasmaGeometry213 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial213 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh213 = new THREE.Mesh(bluePlasmaGeometry213, bluePlasmaMaterial213)
bluePlasmaMesh213.position.set( (Math.cos((3171 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3171 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup213.add(bluePlasmaMesh213)

plasmaGroup213.rotation.z = Math.PI / 180 * 90
plasmaGroupB213.add(plasmaGroup213)

plasmaGroupB213.rotation.y = (213 * ((Math.PI / 2) / 90))
plasmaGroupC213.add(plasmaGroupB213)

plasmaGroupC213.position.x = (Math.sin((213 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC213.position.z = (Math.cos((213 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC213)

// plasmaGroup214		###############################################################################
const plasmaGroup214 = new THREE.Group()

const plasmaGroupB214 = new THREE.Group()

const plasmaGroupC214 = new THREE.Group()

// redPlasmaMesh214
const redPlasmaGeometry214 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial214 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh214 = new THREE.Mesh(redPlasmaGeometry214, redPlasmaMaterial214)
redPlasmaMesh214.position.set( (Math.cos((1498 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1498 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup214.add(redPlasmaMesh214)

// greenPlasmaMesh214
const greenPlasmaGeometry214 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial214 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh214 = new THREE.Mesh(greenPlasmaGeometry214, greenPlasmaMaterial214)
greenPlasmaMesh214.position.set( (Math.cos((2338 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2338 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup214.add(greenPlasmaMesh214)

// bluePlasmaMesh214
const bluePlasmaGeometry214 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial214 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh214 = new THREE.Mesh(bluePlasmaGeometry214, bluePlasmaMaterial214)
bluePlasmaMesh214.position.set( (Math.cos((3178 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3178 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup214.add(bluePlasmaMesh214)

plasmaGroup214.rotation.z = Math.PI / 180 * 90
plasmaGroupB214.add(plasmaGroup214)

plasmaGroupB214.rotation.y = (214 * ((Math.PI / 2) / 90))
plasmaGroupC214.add(plasmaGroupB214)

plasmaGroupC214.position.x = (Math.sin((214 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC214.position.z = (Math.cos((214 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC214)

// plasmaGroup215		###############################################################################
const plasmaGroup215 = new THREE.Group()

const plasmaGroupB215 = new THREE.Group()

const plasmaGroupC215 = new THREE.Group()

// redPlasmaMesh215
const redPlasmaGeometry215 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial215 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh215 = new THREE.Mesh(redPlasmaGeometry215, redPlasmaMaterial215)
redPlasmaMesh215.position.set( (Math.cos((1505 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1505 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup215.add(redPlasmaMesh215)

// greenPlasmaMesh215
const greenPlasmaGeometry215 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial215 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh215 = new THREE.Mesh(greenPlasmaGeometry215, greenPlasmaMaterial215)
greenPlasmaMesh215.position.set( (Math.cos((2345 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2345 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup215.add(greenPlasmaMesh215)

// bluePlasmaMesh215
const bluePlasmaGeometry215 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial215 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh215 = new THREE.Mesh(bluePlasmaGeometry215, bluePlasmaMaterial215)
bluePlasmaMesh215.position.set( (Math.cos((3185 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3185 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup215.add(bluePlasmaMesh215)

plasmaGroup215.rotation.z = Math.PI / 180 * 90
plasmaGroupB215.add(plasmaGroup215)

plasmaGroupB215.rotation.y = (215 * ((Math.PI / 2) / 90))
plasmaGroupC215.add(plasmaGroupB215)

plasmaGroupC215.position.x = (Math.sin((215 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC215.position.z = (Math.cos((215 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC215)

// plasmaGroup216		###############################################################################
const plasmaGroup216 = new THREE.Group()

const plasmaGroupB216 = new THREE.Group()

const plasmaGroupC216 = new THREE.Group()

// redPlasmaMesh216
const redPlasmaGeometry216 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial216 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh216 = new THREE.Mesh(redPlasmaGeometry216, redPlasmaMaterial216)
redPlasmaMesh216.position.set( (Math.cos((1512 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1512 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup216.add(redPlasmaMesh216)

// greenPlasmaMesh216
const greenPlasmaGeometry216 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial216 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh216 = new THREE.Mesh(greenPlasmaGeometry216, greenPlasmaMaterial216)
greenPlasmaMesh216.position.set( (Math.cos((2352 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2352 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup216.add(greenPlasmaMesh216)

// bluePlasmaMesh216
const bluePlasmaGeometry216 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial216 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh216 = new THREE.Mesh(bluePlasmaGeometry216, bluePlasmaMaterial216)
bluePlasmaMesh216.position.set( (Math.cos((3192 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3192 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup216.add(bluePlasmaMesh216)

plasmaGroup216.rotation.z = Math.PI / 180 * 90
plasmaGroupB216.add(plasmaGroup216)

plasmaGroupB216.rotation.y = (216 * ((Math.PI / 2) / 90))
plasmaGroupC216.add(plasmaGroupB216)

plasmaGroupC216.position.x = (Math.sin((216 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC216.position.z = (Math.cos((216 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC216)

// plasmaGroup217		###############################################################################
const plasmaGroup217 = new THREE.Group()

const plasmaGroupB217 = new THREE.Group()

const plasmaGroupC217 = new THREE.Group()

// redPlasmaMesh217
const redPlasmaGeometry217 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial217 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh217 = new THREE.Mesh(redPlasmaGeometry217, redPlasmaMaterial217)
redPlasmaMesh217.position.set( (Math.cos((1519 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1519 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup217.add(redPlasmaMesh217)

// greenPlasmaMesh217
const greenPlasmaGeometry217 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial217 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh217 = new THREE.Mesh(greenPlasmaGeometry217, greenPlasmaMaterial217)
greenPlasmaMesh217.position.set( (Math.cos((2359 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2359 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup217.add(greenPlasmaMesh217)

// bluePlasmaMesh217
const bluePlasmaGeometry217 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial217 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh217 = new THREE.Mesh(bluePlasmaGeometry217, bluePlasmaMaterial217)
bluePlasmaMesh217.position.set( (Math.cos((3199 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3199 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup217.add(bluePlasmaMesh217)

plasmaGroup217.rotation.z = Math.PI / 180 * 90
plasmaGroupB217.add(plasmaGroup217)

plasmaGroupB217.rotation.y = (217 * ((Math.PI / 2) / 90))
plasmaGroupC217.add(plasmaGroupB217)

plasmaGroupC217.position.x = (Math.sin((217 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC217.position.z = (Math.cos((217 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC217)

// plasmaGroup218		###############################################################################
const plasmaGroup218 = new THREE.Group()

const plasmaGroupB218 = new THREE.Group()

const plasmaGroupC218 = new THREE.Group()

// redPlasmaMesh218
const redPlasmaGeometry218 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial218 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh218 = new THREE.Mesh(redPlasmaGeometry218, redPlasmaMaterial218)
redPlasmaMesh218.position.set( (Math.cos((1526 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1526 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup218.add(redPlasmaMesh218)

// greenPlasmaMesh218
const greenPlasmaGeometry218 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial218 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh218 = new THREE.Mesh(greenPlasmaGeometry218, greenPlasmaMaterial218)
greenPlasmaMesh218.position.set( (Math.cos((2366 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2366 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup218.add(greenPlasmaMesh218)

// bluePlasmaMesh218
const bluePlasmaGeometry218 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial218 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh218 = new THREE.Mesh(bluePlasmaGeometry218, bluePlasmaMaterial218)
bluePlasmaMesh218.position.set( (Math.cos((3206 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3206 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup218.add(bluePlasmaMesh218)

plasmaGroup218.rotation.z = Math.PI / 180 * 90
plasmaGroupB218.add(plasmaGroup218)

plasmaGroupB218.rotation.y = (218 * ((Math.PI / 2) / 90))
plasmaGroupC218.add(plasmaGroupB218)

plasmaGroupC218.position.x = (Math.sin((218 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC218.position.z = (Math.cos((218 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC218)

// plasmaGroup219		###############################################################################
const plasmaGroup219 = new THREE.Group()

const plasmaGroupB219 = new THREE.Group()

const plasmaGroupC219 = new THREE.Group()

// redPlasmaMesh219
const redPlasmaGeometry219 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial219 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh219 = new THREE.Mesh(redPlasmaGeometry219, redPlasmaMaterial219)
redPlasmaMesh219.position.set( (Math.cos((1533 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1533 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup219.add(redPlasmaMesh219)

// greenPlasmaMesh219
const greenPlasmaGeometry219 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial219 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh219 = new THREE.Mesh(greenPlasmaGeometry219, greenPlasmaMaterial219)
greenPlasmaMesh219.position.set( (Math.cos((2373 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2373 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup219.add(greenPlasmaMesh219)

// bluePlasmaMesh219
const bluePlasmaGeometry219 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial219 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh219 = new THREE.Mesh(bluePlasmaGeometry219, bluePlasmaMaterial219)
bluePlasmaMesh219.position.set( (Math.cos((3213 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3213 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup219.add(bluePlasmaMesh219)

plasmaGroup219.rotation.z = Math.PI / 180 * 90
plasmaGroupB219.add(plasmaGroup219)

plasmaGroupB219.rotation.y = (219 * ((Math.PI / 2) / 90))
plasmaGroupC219.add(plasmaGroupB219)

plasmaGroupC219.position.x = (Math.sin((219 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC219.position.z = (Math.cos((219 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC219)

// plasmaGroup220		###############################################################################
const plasmaGroup220 = new THREE.Group()

const plasmaGroupB220 = new THREE.Group()

const plasmaGroupC220 = new THREE.Group()

// redPlasmaMesh220
const redPlasmaGeometry220 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial220 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh220 = new THREE.Mesh(redPlasmaGeometry220, redPlasmaMaterial220)
redPlasmaMesh220.position.set( (Math.cos((1540 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1540 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup220.add(redPlasmaMesh220)

// greenPlasmaMesh220
const greenPlasmaGeometry220 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial220 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh220 = new THREE.Mesh(greenPlasmaGeometry220, greenPlasmaMaterial220)
greenPlasmaMesh220.position.set( (Math.cos((2380 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2380 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup220.add(greenPlasmaMesh220)

// bluePlasmaMesh220
const bluePlasmaGeometry220 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial220 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh220 = new THREE.Mesh(bluePlasmaGeometry220, bluePlasmaMaterial220)
bluePlasmaMesh220.position.set( (Math.cos((3220 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3220 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup220.add(bluePlasmaMesh220)

plasmaGroup220.rotation.z = Math.PI / 180 * 90
plasmaGroupB220.add(plasmaGroup220)

plasmaGroupB220.rotation.y = (220 * ((Math.PI / 2) / 90))
plasmaGroupC220.add(plasmaGroupB220)

plasmaGroupC220.position.x = (Math.sin((220 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC220.position.z = (Math.cos((220 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC220)

// plasmaGroup221		###############################################################################
const plasmaGroup221 = new THREE.Group()

const plasmaGroupB221 = new THREE.Group()

const plasmaGroupC221 = new THREE.Group()

// redPlasmaMesh221
const redPlasmaGeometry221 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial221 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh221 = new THREE.Mesh(redPlasmaGeometry221, redPlasmaMaterial221)
redPlasmaMesh221.position.set( (Math.cos((1547 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1547 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup221.add(redPlasmaMesh221)

// greenPlasmaMesh221
const greenPlasmaGeometry221 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial221 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh221 = new THREE.Mesh(greenPlasmaGeometry221, greenPlasmaMaterial221)
greenPlasmaMesh221.position.set( (Math.cos((2387 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2387 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup221.add(greenPlasmaMesh221)

// bluePlasmaMesh221
const bluePlasmaGeometry221 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial221 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh221 = new THREE.Mesh(bluePlasmaGeometry221, bluePlasmaMaterial221)
bluePlasmaMesh221.position.set( (Math.cos((3227 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3227 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup221.add(bluePlasmaMesh221)

plasmaGroup221.rotation.z = Math.PI / 180 * 90
plasmaGroupB221.add(plasmaGroup221)

plasmaGroupB221.rotation.y = (221 * ((Math.PI / 2) / 90))
plasmaGroupC221.add(plasmaGroupB221)

plasmaGroupC221.position.x = (Math.sin((221 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC221.position.z = (Math.cos((221 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC221)

// plasmaGroup222		###############################################################################
const plasmaGroup222 = new THREE.Group()

const plasmaGroupB222 = new THREE.Group()

const plasmaGroupC222 = new THREE.Group()

// redPlasmaMesh222
const redPlasmaGeometry222 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial222 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh222 = new THREE.Mesh(redPlasmaGeometry222, redPlasmaMaterial222)
redPlasmaMesh222.position.set( (Math.cos((1554 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1554 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup222.add(redPlasmaMesh222)

// greenPlasmaMesh222
const greenPlasmaGeometry222 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial222 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh222 = new THREE.Mesh(greenPlasmaGeometry222, greenPlasmaMaterial222)
greenPlasmaMesh222.position.set( (Math.cos((2394 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2394 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup222.add(greenPlasmaMesh222)

// bluePlasmaMesh222
const bluePlasmaGeometry222 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial222 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh222 = new THREE.Mesh(bluePlasmaGeometry222, bluePlasmaMaterial222)
bluePlasmaMesh222.position.set( (Math.cos((3234 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3234 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup222.add(bluePlasmaMesh222)

plasmaGroup222.rotation.z = Math.PI / 180 * 90
plasmaGroupB222.add(plasmaGroup222)

plasmaGroupB222.rotation.y = (222 * ((Math.PI / 2) / 90))
plasmaGroupC222.add(plasmaGroupB222)

plasmaGroupC222.position.x = (Math.sin((222 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC222.position.z = (Math.cos((222 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC222)

// plasmaGroup223		###############################################################################
const plasmaGroup223 = new THREE.Group()

const plasmaGroupB223 = new THREE.Group()

const plasmaGroupC223 = new THREE.Group()

// redPlasmaMesh223
const redPlasmaGeometry223 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial223 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh223 = new THREE.Mesh(redPlasmaGeometry223, redPlasmaMaterial223)
redPlasmaMesh223.position.set( (Math.cos((1561 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1561 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup223.add(redPlasmaMesh223)

// greenPlasmaMesh223
const greenPlasmaGeometry223 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial223 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh223 = new THREE.Mesh(greenPlasmaGeometry223, greenPlasmaMaterial223)
greenPlasmaMesh223.position.set( (Math.cos((2401 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2401 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup223.add(greenPlasmaMesh223)

// bluePlasmaMesh223
const bluePlasmaGeometry223 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial223 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh223 = new THREE.Mesh(bluePlasmaGeometry223, bluePlasmaMaterial223)
bluePlasmaMesh223.position.set( (Math.cos((3241 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3241 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup223.add(bluePlasmaMesh223)

plasmaGroup223.rotation.z = Math.PI / 180 * 90
plasmaGroupB223.add(plasmaGroup223)

plasmaGroupB223.rotation.y = (223 * ((Math.PI / 2) / 90))
plasmaGroupC223.add(plasmaGroupB223)

plasmaGroupC223.position.x = (Math.sin((223 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC223.position.z = (Math.cos((223 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC223)

// plasmaGroup224		###############################################################################
const plasmaGroup224 = new THREE.Group()

const plasmaGroupB224 = new THREE.Group()

const plasmaGroupC224 = new THREE.Group()

// redPlasmaMesh224
const redPlasmaGeometry224 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial224 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh224 = new THREE.Mesh(redPlasmaGeometry224, redPlasmaMaterial224)
redPlasmaMesh224.position.set( (Math.cos((1568 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1568 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup224.add(redPlasmaMesh224)

// greenPlasmaMesh224
const greenPlasmaGeometry224 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial224 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh224 = new THREE.Mesh(greenPlasmaGeometry224, greenPlasmaMaterial224)
greenPlasmaMesh224.position.set( (Math.cos((2408 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2408 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup224.add(greenPlasmaMesh224)

// bluePlasmaMesh224
const bluePlasmaGeometry224 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial224 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh224 = new THREE.Mesh(bluePlasmaGeometry224, bluePlasmaMaterial224)
bluePlasmaMesh224.position.set( (Math.cos((3248 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3248 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup224.add(bluePlasmaMesh224)

plasmaGroup224.rotation.z = Math.PI / 180 * 90
plasmaGroupB224.add(plasmaGroup224)

plasmaGroupB224.rotation.y = (224 * ((Math.PI / 2) / 90))
plasmaGroupC224.add(plasmaGroupB224)

plasmaGroupC224.position.x = (Math.sin((224 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC224.position.z = (Math.cos((224 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC224)

// plasmaGroup225		###############################################################################
const plasmaGroup225 = new THREE.Group()

const plasmaGroupB225 = new THREE.Group()

const plasmaGroupC225 = new THREE.Group()

// redPlasmaMesh225
const redPlasmaGeometry225 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial225 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh225 = new THREE.Mesh(redPlasmaGeometry225, redPlasmaMaterial225)
redPlasmaMesh225.position.set( (Math.cos((1575 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1575 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup225.add(redPlasmaMesh225)

// greenPlasmaMesh225
const greenPlasmaGeometry225 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial225 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh225 = new THREE.Mesh(greenPlasmaGeometry225, greenPlasmaMaterial225)
greenPlasmaMesh225.position.set( (Math.cos((2415 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2415 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup225.add(greenPlasmaMesh225)

// bluePlasmaMesh225
const bluePlasmaGeometry225 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial225 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh225 = new THREE.Mesh(bluePlasmaGeometry225, bluePlasmaMaterial225)
bluePlasmaMesh225.position.set( (Math.cos((3255 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3255 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup225.add(bluePlasmaMesh225)

plasmaGroup225.rotation.z = Math.PI / 180 * 90
plasmaGroupB225.add(plasmaGroup225)

plasmaGroupB225.rotation.y = (225 * ((Math.PI / 2) / 90))
plasmaGroupC225.add(plasmaGroupB225)

plasmaGroupC225.position.x = (Math.sin((225 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC225.position.z = (Math.cos((225 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC225)

// plasmaGroup226		###############################################################################
const plasmaGroup226 = new THREE.Group()

const plasmaGroupB226 = new THREE.Group()

const plasmaGroupC226 = new THREE.Group()

// redPlasmaMesh226
const redPlasmaGeometry226 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial226 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh226 = new THREE.Mesh(redPlasmaGeometry226, redPlasmaMaterial226)
redPlasmaMesh226.position.set( (Math.cos((1582 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1582 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup226.add(redPlasmaMesh226)

// greenPlasmaMesh226
const greenPlasmaGeometry226 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial226 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh226 = new THREE.Mesh(greenPlasmaGeometry226, greenPlasmaMaterial226)
greenPlasmaMesh226.position.set( (Math.cos((2422 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2422 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup226.add(greenPlasmaMesh226)

// bluePlasmaMesh226
const bluePlasmaGeometry226 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial226 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh226 = new THREE.Mesh(bluePlasmaGeometry226, bluePlasmaMaterial226)
bluePlasmaMesh226.position.set( (Math.cos((3262 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3262 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup226.add(bluePlasmaMesh226)

plasmaGroup226.rotation.z = Math.PI / 180 * 90
plasmaGroupB226.add(plasmaGroup226)

plasmaGroupB226.rotation.y = (226 * ((Math.PI / 2) / 90))
plasmaGroupC226.add(plasmaGroupB226)

plasmaGroupC226.position.x = (Math.sin((226 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC226.position.z = (Math.cos((226 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC226)

// plasmaGroup227		###############################################################################
const plasmaGroup227 = new THREE.Group()

const plasmaGroupB227 = new THREE.Group()

const plasmaGroupC227 = new THREE.Group()

// redPlasmaMesh227
const redPlasmaGeometry227 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial227 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh227 = new THREE.Mesh(redPlasmaGeometry227, redPlasmaMaterial227)
redPlasmaMesh227.position.set( (Math.cos((1589 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1589 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup227.add(redPlasmaMesh227)

// greenPlasmaMesh227
const greenPlasmaGeometry227 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial227 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh227 = new THREE.Mesh(greenPlasmaGeometry227, greenPlasmaMaterial227)
greenPlasmaMesh227.position.set( (Math.cos((2429 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2429 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup227.add(greenPlasmaMesh227)

// bluePlasmaMesh227
const bluePlasmaGeometry227 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial227 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh227 = new THREE.Mesh(bluePlasmaGeometry227, bluePlasmaMaterial227)
bluePlasmaMesh227.position.set( (Math.cos((3269 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3269 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup227.add(bluePlasmaMesh227)

plasmaGroup227.rotation.z = Math.PI / 180 * 90
plasmaGroupB227.add(plasmaGroup227)

plasmaGroupB227.rotation.y = (227 * ((Math.PI / 2) / 90))
plasmaGroupC227.add(plasmaGroupB227)

plasmaGroupC227.position.x = (Math.sin((227 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC227.position.z = (Math.cos((227 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC227)

// plasmaGroup228		###############################################################################
const plasmaGroup228 = new THREE.Group()

const plasmaGroupB228 = new THREE.Group()

const plasmaGroupC228 = new THREE.Group()

// redPlasmaMesh228
const redPlasmaGeometry228 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial228 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh228 = new THREE.Mesh(redPlasmaGeometry228, redPlasmaMaterial228)
redPlasmaMesh228.position.set( (Math.cos((1596 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1596 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup228.add(redPlasmaMesh228)

// greenPlasmaMesh228
const greenPlasmaGeometry228 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial228 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh228 = new THREE.Mesh(greenPlasmaGeometry228, greenPlasmaMaterial228)
greenPlasmaMesh228.position.set( (Math.cos((2436 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2436 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup228.add(greenPlasmaMesh228)

// bluePlasmaMesh228
const bluePlasmaGeometry228 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial228 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh228 = new THREE.Mesh(bluePlasmaGeometry228, bluePlasmaMaterial228)
bluePlasmaMesh228.position.set( (Math.cos((3276 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3276 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup228.add(bluePlasmaMesh228)

plasmaGroup228.rotation.z = Math.PI / 180 * 90
plasmaGroupB228.add(plasmaGroup228)

plasmaGroupB228.rotation.y = (228 * ((Math.PI / 2) / 90))
plasmaGroupC228.add(plasmaGroupB228)

plasmaGroupC228.position.x = (Math.sin((228 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC228.position.z = (Math.cos((228 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC228)

// plasmaGroup229		###############################################################################
const plasmaGroup229 = new THREE.Group()

const plasmaGroupB229 = new THREE.Group()

const plasmaGroupC229 = new THREE.Group()

// redPlasmaMesh229
const redPlasmaGeometry229 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial229 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh229 = new THREE.Mesh(redPlasmaGeometry229, redPlasmaMaterial229)
redPlasmaMesh229.position.set( (Math.cos((1603 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1603 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup229.add(redPlasmaMesh229)

// greenPlasmaMesh229
const greenPlasmaGeometry229 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial229 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh229 = new THREE.Mesh(greenPlasmaGeometry229, greenPlasmaMaterial229)
greenPlasmaMesh229.position.set( (Math.cos((2443 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2443 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup229.add(greenPlasmaMesh229)

// bluePlasmaMesh229
const bluePlasmaGeometry229 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial229 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh229 = new THREE.Mesh(bluePlasmaGeometry229, bluePlasmaMaterial229)
bluePlasmaMesh229.position.set( (Math.cos((3283 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3283 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup229.add(bluePlasmaMesh229)

plasmaGroup229.rotation.z = Math.PI / 180 * 90
plasmaGroupB229.add(plasmaGroup229)

plasmaGroupB229.rotation.y = (229 * ((Math.PI / 2) / 90))
plasmaGroupC229.add(plasmaGroupB229)

plasmaGroupC229.position.x = (Math.sin((229 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC229.position.z = (Math.cos((229 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC229)

// plasmaGroup230		###############################################################################
const plasmaGroup230 = new THREE.Group()

const plasmaGroupB230 = new THREE.Group()

const plasmaGroupC230 = new THREE.Group()

// redPlasmaMesh230
const redPlasmaGeometry230 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial230 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh230 = new THREE.Mesh(redPlasmaGeometry230, redPlasmaMaterial230)
redPlasmaMesh230.position.set( (Math.cos((1610 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1610 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup230.add(redPlasmaMesh230)

// greenPlasmaMesh230
const greenPlasmaGeometry230 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial230 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh230 = new THREE.Mesh(greenPlasmaGeometry230, greenPlasmaMaterial230)
greenPlasmaMesh230.position.set( (Math.cos((2450 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2450 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup230.add(greenPlasmaMesh230)

// bluePlasmaMesh230
const bluePlasmaGeometry230 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial230 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh230 = new THREE.Mesh(bluePlasmaGeometry230, bluePlasmaMaterial230)
bluePlasmaMesh230.position.set( (Math.cos((3290 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3290 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup230.add(bluePlasmaMesh230)

plasmaGroup230.rotation.z = Math.PI / 180 * 90
plasmaGroupB230.add(plasmaGroup230)

plasmaGroupB230.rotation.y = (230 * ((Math.PI / 2) / 90))
plasmaGroupC230.add(plasmaGroupB230)

plasmaGroupC230.position.x = (Math.sin((230 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC230.position.z = (Math.cos((230 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC230)

// plasmaGroup231		###############################################################################
const plasmaGroup231 = new THREE.Group()

const plasmaGroupB231 = new THREE.Group()

const plasmaGroupC231 = new THREE.Group()

// redPlasmaMesh231
const redPlasmaGeometry231 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial231 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh231 = new THREE.Mesh(redPlasmaGeometry231, redPlasmaMaterial231)
redPlasmaMesh231.position.set( (Math.cos((1617 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1617 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup231.add(redPlasmaMesh231)

// greenPlasmaMesh231
const greenPlasmaGeometry231 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial231 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh231 = new THREE.Mesh(greenPlasmaGeometry231, greenPlasmaMaterial231)
greenPlasmaMesh231.position.set( (Math.cos((2457 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2457 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup231.add(greenPlasmaMesh231)

// bluePlasmaMesh231
const bluePlasmaGeometry231 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial231 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh231 = new THREE.Mesh(bluePlasmaGeometry231, bluePlasmaMaterial231)
bluePlasmaMesh231.position.set( (Math.cos((3297 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3297 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup231.add(bluePlasmaMesh231)

plasmaGroup231.rotation.z = Math.PI / 180 * 90
plasmaGroupB231.add(plasmaGroup231)

plasmaGroupB231.rotation.y = (231 * ((Math.PI / 2) / 90))
plasmaGroupC231.add(plasmaGroupB231)

plasmaGroupC231.position.x = (Math.sin((231 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC231.position.z = (Math.cos((231 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC231)

// plasmaGroup232		###############################################################################
const plasmaGroup232 = new THREE.Group()

const plasmaGroupB232 = new THREE.Group()

const plasmaGroupC232 = new THREE.Group()

// redPlasmaMesh232
const redPlasmaGeometry232 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial232 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh232 = new THREE.Mesh(redPlasmaGeometry232, redPlasmaMaterial232)
redPlasmaMesh232.position.set( (Math.cos((1624 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1624 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup232.add(redPlasmaMesh232)

// greenPlasmaMesh232
const greenPlasmaGeometry232 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial232 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh232 = new THREE.Mesh(greenPlasmaGeometry232, greenPlasmaMaterial232)
greenPlasmaMesh232.position.set( (Math.cos((2464 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2464 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup232.add(greenPlasmaMesh232)

// bluePlasmaMesh232
const bluePlasmaGeometry232 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial232 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh232 = new THREE.Mesh(bluePlasmaGeometry232, bluePlasmaMaterial232)
bluePlasmaMesh232.position.set( (Math.cos((3304 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3304 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup232.add(bluePlasmaMesh232)

plasmaGroup232.rotation.z = Math.PI / 180 * 90
plasmaGroupB232.add(plasmaGroup232)

plasmaGroupB232.rotation.y = (232 * ((Math.PI / 2) / 90))
plasmaGroupC232.add(plasmaGroupB232)

plasmaGroupC232.position.x = (Math.sin((232 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC232.position.z = (Math.cos((232 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC232)

// plasmaGroup233		###############################################################################
const plasmaGroup233 = new THREE.Group()

const plasmaGroupB233 = new THREE.Group()

const plasmaGroupC233 = new THREE.Group()

// redPlasmaMesh233
const redPlasmaGeometry233 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial233 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh233 = new THREE.Mesh(redPlasmaGeometry233, redPlasmaMaterial233)
redPlasmaMesh233.position.set( (Math.cos((1631 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1631 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup233.add(redPlasmaMesh233)

// greenPlasmaMesh233
const greenPlasmaGeometry233 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial233 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh233 = new THREE.Mesh(greenPlasmaGeometry233, greenPlasmaMaterial233)
greenPlasmaMesh233.position.set( (Math.cos((2471 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2471 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup233.add(greenPlasmaMesh233)

// bluePlasmaMesh233
const bluePlasmaGeometry233 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial233 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh233 = new THREE.Mesh(bluePlasmaGeometry233, bluePlasmaMaterial233)
bluePlasmaMesh233.position.set( (Math.cos((3311 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3311 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup233.add(bluePlasmaMesh233)

plasmaGroup233.rotation.z = Math.PI / 180 * 90
plasmaGroupB233.add(plasmaGroup233)

plasmaGroupB233.rotation.y = (233 * ((Math.PI / 2) / 90))
plasmaGroupC233.add(plasmaGroupB233)

plasmaGroupC233.position.x = (Math.sin((233 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC233.position.z = (Math.cos((233 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC233)

// plasmaGroup234		###############################################################################
const plasmaGroup234 = new THREE.Group()

const plasmaGroupB234 = new THREE.Group()

const plasmaGroupC234 = new THREE.Group()

// redPlasmaMesh234
const redPlasmaGeometry234 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial234 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh234 = new THREE.Mesh(redPlasmaGeometry234, redPlasmaMaterial234)
redPlasmaMesh234.position.set( (Math.cos((1638 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1638 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup234.add(redPlasmaMesh234)

// greenPlasmaMesh234
const greenPlasmaGeometry234 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial234 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh234 = new THREE.Mesh(greenPlasmaGeometry234, greenPlasmaMaterial234)
greenPlasmaMesh234.position.set( (Math.cos((2478 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2478 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup234.add(greenPlasmaMesh234)

// bluePlasmaMesh234
const bluePlasmaGeometry234 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial234 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh234 = new THREE.Mesh(bluePlasmaGeometry234, bluePlasmaMaterial234)
bluePlasmaMesh234.position.set( (Math.cos((3318 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3318 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup234.add(bluePlasmaMesh234)

plasmaGroup234.rotation.z = Math.PI / 180 * 90
plasmaGroupB234.add(plasmaGroup234)

plasmaGroupB234.rotation.y = (234 * ((Math.PI / 2) / 90))
plasmaGroupC234.add(plasmaGroupB234)

plasmaGroupC234.position.x = (Math.sin((234 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC234.position.z = (Math.cos((234 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC234)

// plasmaGroup235		###############################################################################
const plasmaGroup235 = new THREE.Group()

const plasmaGroupB235 = new THREE.Group()

const plasmaGroupC235 = new THREE.Group()

// redPlasmaMesh235
const redPlasmaGeometry235 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial235 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh235 = new THREE.Mesh(redPlasmaGeometry235, redPlasmaMaterial235)
redPlasmaMesh235.position.set( (Math.cos((1645 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1645 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup235.add(redPlasmaMesh235)

// greenPlasmaMesh235
const greenPlasmaGeometry235 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial235 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh235 = new THREE.Mesh(greenPlasmaGeometry235, greenPlasmaMaterial235)
greenPlasmaMesh235.position.set( (Math.cos((2485 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2485 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup235.add(greenPlasmaMesh235)

// bluePlasmaMesh235
const bluePlasmaGeometry235 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial235 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh235 = new THREE.Mesh(bluePlasmaGeometry235, bluePlasmaMaterial235)
bluePlasmaMesh235.position.set( (Math.cos((3325 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3325 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup235.add(bluePlasmaMesh235)

plasmaGroup235.rotation.z = Math.PI / 180 * 90
plasmaGroupB235.add(plasmaGroup235)

plasmaGroupB235.rotation.y = (235 * ((Math.PI / 2) / 90))
plasmaGroupC235.add(plasmaGroupB235)

plasmaGroupC235.position.x = (Math.sin((235 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC235.position.z = (Math.cos((235 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC235)

// plasmaGroup236		###############################################################################
const plasmaGroup236 = new THREE.Group()

const plasmaGroupB236 = new THREE.Group()

const plasmaGroupC236 = new THREE.Group()

// redPlasmaMesh236
const redPlasmaGeometry236 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial236 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh236 = new THREE.Mesh(redPlasmaGeometry236, redPlasmaMaterial236)
redPlasmaMesh236.position.set( (Math.cos((1652 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1652 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup236.add(redPlasmaMesh236)

// greenPlasmaMesh236
const greenPlasmaGeometry236 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial236 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh236 = new THREE.Mesh(greenPlasmaGeometry236, greenPlasmaMaterial236)
greenPlasmaMesh236.position.set( (Math.cos((2492 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2492 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup236.add(greenPlasmaMesh236)

// bluePlasmaMesh236
const bluePlasmaGeometry236 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial236 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh236 = new THREE.Mesh(bluePlasmaGeometry236, bluePlasmaMaterial236)
bluePlasmaMesh236.position.set( (Math.cos((3332 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3332 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup236.add(bluePlasmaMesh236)

plasmaGroup236.rotation.z = Math.PI / 180 * 90
plasmaGroupB236.add(plasmaGroup236)

plasmaGroupB236.rotation.y = (236 * ((Math.PI / 2) / 90))
plasmaGroupC236.add(plasmaGroupB236)

plasmaGroupC236.position.x = (Math.sin((236 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC236.position.z = (Math.cos((236 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC236)

// plasmaGroup237		###############################################################################
const plasmaGroup237 = new THREE.Group()

const plasmaGroupB237 = new THREE.Group()

const plasmaGroupC237 = new THREE.Group()

// redPlasmaMesh237
const redPlasmaGeometry237 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial237 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh237 = new THREE.Mesh(redPlasmaGeometry237, redPlasmaMaterial237)
redPlasmaMesh237.position.set( (Math.cos((1659 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1659 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup237.add(redPlasmaMesh237)

// greenPlasmaMesh237
const greenPlasmaGeometry237 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial237 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh237 = new THREE.Mesh(greenPlasmaGeometry237, greenPlasmaMaterial237)
greenPlasmaMesh237.position.set( (Math.cos((2499 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2499 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup237.add(greenPlasmaMesh237)

// bluePlasmaMesh237
const bluePlasmaGeometry237 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial237 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh237 = new THREE.Mesh(bluePlasmaGeometry237, bluePlasmaMaterial237)
bluePlasmaMesh237.position.set( (Math.cos((3339 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3339 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup237.add(bluePlasmaMesh237)

plasmaGroup237.rotation.z = Math.PI / 180 * 90
plasmaGroupB237.add(plasmaGroup237)

plasmaGroupB237.rotation.y = (237 * ((Math.PI / 2) / 90))
plasmaGroupC237.add(plasmaGroupB237)

plasmaGroupC237.position.x = (Math.sin((237 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC237.position.z = (Math.cos((237 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC237)

// plasmaGroup238		###############################################################################
const plasmaGroup238 = new THREE.Group()

const plasmaGroupB238 = new THREE.Group()

const plasmaGroupC238 = new THREE.Group()

// redPlasmaMesh238
const redPlasmaGeometry238 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial238 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh238 = new THREE.Mesh(redPlasmaGeometry238, redPlasmaMaterial238)
redPlasmaMesh238.position.set( (Math.cos((1666 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1666 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup238.add(redPlasmaMesh238)

// greenPlasmaMesh238
const greenPlasmaGeometry238 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial238 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh238 = new THREE.Mesh(greenPlasmaGeometry238, greenPlasmaMaterial238)
greenPlasmaMesh238.position.set( (Math.cos((2506 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2506 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup238.add(greenPlasmaMesh238)

// bluePlasmaMesh238
const bluePlasmaGeometry238 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial238 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh238 = new THREE.Mesh(bluePlasmaGeometry238, bluePlasmaMaterial238)
bluePlasmaMesh238.position.set( (Math.cos((3346 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3346 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup238.add(bluePlasmaMesh238)

plasmaGroup238.rotation.z = Math.PI / 180 * 90
plasmaGroupB238.add(plasmaGroup238)

plasmaGroupB238.rotation.y = (238 * ((Math.PI / 2) / 90))
plasmaGroupC238.add(plasmaGroupB238)

plasmaGroupC238.position.x = (Math.sin((238 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC238.position.z = (Math.cos((238 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC238)

// plasmaGroup239		###############################################################################
const plasmaGroup239 = new THREE.Group()

const plasmaGroupB239 = new THREE.Group()

const plasmaGroupC239 = new THREE.Group()

// redPlasmaMesh239
const redPlasmaGeometry239 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial239 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh239 = new THREE.Mesh(redPlasmaGeometry239, redPlasmaMaterial239)
redPlasmaMesh239.position.set( (Math.cos((1673 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1673 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup239.add(redPlasmaMesh239)

// greenPlasmaMesh239
const greenPlasmaGeometry239 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial239 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh239 = new THREE.Mesh(greenPlasmaGeometry239, greenPlasmaMaterial239)
greenPlasmaMesh239.position.set( (Math.cos((2513 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2513 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup239.add(greenPlasmaMesh239)

// bluePlasmaMesh239
const bluePlasmaGeometry239 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial239 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh239 = new THREE.Mesh(bluePlasmaGeometry239, bluePlasmaMaterial239)
bluePlasmaMesh239.position.set( (Math.cos((3353 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3353 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup239.add(bluePlasmaMesh239)

plasmaGroup239.rotation.z = Math.PI / 180 * 90
plasmaGroupB239.add(plasmaGroup239)

plasmaGroupB239.rotation.y = (239 * ((Math.PI / 2) / 90))
plasmaGroupC239.add(plasmaGroupB239)

plasmaGroupC239.position.x = (Math.sin((239 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC239.position.z = (Math.cos((239 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC239)

// plasmaGroup240		###############################################################################
const plasmaGroup240 = new THREE.Group()

const plasmaGroupB240 = new THREE.Group()

const plasmaGroupC240 = new THREE.Group()

// redPlasmaMesh240
const redPlasmaGeometry240 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial240 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh240 = new THREE.Mesh(redPlasmaGeometry240, redPlasmaMaterial240)
redPlasmaMesh240.position.set( (Math.cos((1680 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1680 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup240.add(redPlasmaMesh240)

// greenPlasmaMesh240
const greenPlasmaGeometry240 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial240 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh240 = new THREE.Mesh(greenPlasmaGeometry240, greenPlasmaMaterial240)
greenPlasmaMesh240.position.set( (Math.cos((2520 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2520 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup240.add(greenPlasmaMesh240)

// bluePlasmaMesh240
const bluePlasmaGeometry240 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial240 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh240 = new THREE.Mesh(bluePlasmaGeometry240, bluePlasmaMaterial240)
bluePlasmaMesh240.position.set( (Math.cos((3360 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3360 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup240.add(bluePlasmaMesh240)

plasmaGroup240.rotation.z = Math.PI / 180 * 90
plasmaGroupB240.add(plasmaGroup240)

plasmaGroupB240.rotation.y = (240 * ((Math.PI / 2) / 90))
plasmaGroupC240.add(plasmaGroupB240)

plasmaGroupC240.position.x = (Math.sin((240 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC240.position.z = (Math.cos((240 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC240)

// plasmaGroup241		###############################################################################
const plasmaGroup241 = new THREE.Group()

const plasmaGroupB241 = new THREE.Group()

const plasmaGroupC241 = new THREE.Group()

// redPlasmaMesh241
const redPlasmaGeometry241 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial241 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh241 = new THREE.Mesh(redPlasmaGeometry241, redPlasmaMaterial241)
redPlasmaMesh241.position.set( (Math.cos((1687 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1687 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup241.add(redPlasmaMesh241)

// greenPlasmaMesh241
const greenPlasmaGeometry241 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial241 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh241 = new THREE.Mesh(greenPlasmaGeometry241, greenPlasmaMaterial241)
greenPlasmaMesh241.position.set( (Math.cos((2527 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2527 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup241.add(greenPlasmaMesh241)

// bluePlasmaMesh241
const bluePlasmaGeometry241 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial241 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh241 = new THREE.Mesh(bluePlasmaGeometry241, bluePlasmaMaterial241)
bluePlasmaMesh241.position.set( (Math.cos((3367 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3367 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup241.add(bluePlasmaMesh241)

plasmaGroup241.rotation.z = Math.PI / 180 * 90
plasmaGroupB241.add(plasmaGroup241)

plasmaGroupB241.rotation.y = (241 * ((Math.PI / 2) / 90))
plasmaGroupC241.add(plasmaGroupB241)

plasmaGroupC241.position.x = (Math.sin((241 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC241.position.z = (Math.cos((241 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC241)

// plasmaGroup242		###############################################################################
const plasmaGroup242 = new THREE.Group()

const plasmaGroupB242 = new THREE.Group()

const plasmaGroupC242 = new THREE.Group()

// redPlasmaMesh242
const redPlasmaGeometry242 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial242 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh242 = new THREE.Mesh(redPlasmaGeometry242, redPlasmaMaterial242)
redPlasmaMesh242.position.set( (Math.cos((1694 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1694 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup242.add(redPlasmaMesh242)

// greenPlasmaMesh242
const greenPlasmaGeometry242 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial242 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh242 = new THREE.Mesh(greenPlasmaGeometry242, greenPlasmaMaterial242)
greenPlasmaMesh242.position.set( (Math.cos((2534 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2534 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup242.add(greenPlasmaMesh242)

// bluePlasmaMesh242
const bluePlasmaGeometry242 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial242 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh242 = new THREE.Mesh(bluePlasmaGeometry242, bluePlasmaMaterial242)
bluePlasmaMesh242.position.set( (Math.cos((3374 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3374 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup242.add(bluePlasmaMesh242)

plasmaGroup242.rotation.z = Math.PI / 180 * 90
plasmaGroupB242.add(plasmaGroup242)

plasmaGroupB242.rotation.y = (242 * ((Math.PI / 2) / 90))
plasmaGroupC242.add(plasmaGroupB242)

plasmaGroupC242.position.x = (Math.sin((242 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC242.position.z = (Math.cos((242 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC242)

// plasmaGroup243		###############################################################################
const plasmaGroup243 = new THREE.Group()

const plasmaGroupB243 = new THREE.Group()

const plasmaGroupC243 = new THREE.Group()

// redPlasmaMesh243
const redPlasmaGeometry243 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial243 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh243 = new THREE.Mesh(redPlasmaGeometry243, redPlasmaMaterial243)
redPlasmaMesh243.position.set( (Math.cos((1701 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1701 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup243.add(redPlasmaMesh243)

// greenPlasmaMesh243
const greenPlasmaGeometry243 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial243 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh243 = new THREE.Mesh(greenPlasmaGeometry243, greenPlasmaMaterial243)
greenPlasmaMesh243.position.set( (Math.cos((2541 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2541 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup243.add(greenPlasmaMesh243)

// bluePlasmaMesh243
const bluePlasmaGeometry243 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial243 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh243 = new THREE.Mesh(bluePlasmaGeometry243, bluePlasmaMaterial243)
bluePlasmaMesh243.position.set( (Math.cos((3381 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3381 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup243.add(bluePlasmaMesh243)

plasmaGroup243.rotation.z = Math.PI / 180 * 90
plasmaGroupB243.add(plasmaGroup243)

plasmaGroupB243.rotation.y = (243 * ((Math.PI / 2) / 90))
plasmaGroupC243.add(plasmaGroupB243)

plasmaGroupC243.position.x = (Math.sin((243 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC243.position.z = (Math.cos((243 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC243)

// plasmaGroup244		###############################################################################
const plasmaGroup244 = new THREE.Group()

const plasmaGroupB244 = new THREE.Group()

const plasmaGroupC244 = new THREE.Group()

// redPlasmaMesh244
const redPlasmaGeometry244 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial244 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh244 = new THREE.Mesh(redPlasmaGeometry244, redPlasmaMaterial244)
redPlasmaMesh244.position.set( (Math.cos((1708 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1708 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup244.add(redPlasmaMesh244)

// greenPlasmaMesh244
const greenPlasmaGeometry244 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial244 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh244 = new THREE.Mesh(greenPlasmaGeometry244, greenPlasmaMaterial244)
greenPlasmaMesh244.position.set( (Math.cos((2548 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2548 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup244.add(greenPlasmaMesh244)

// bluePlasmaMesh244
const bluePlasmaGeometry244 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial244 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh244 = new THREE.Mesh(bluePlasmaGeometry244, bluePlasmaMaterial244)
bluePlasmaMesh244.position.set( (Math.cos((3388 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3388 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup244.add(bluePlasmaMesh244)

plasmaGroup244.rotation.z = Math.PI / 180 * 90
plasmaGroupB244.add(plasmaGroup244)

plasmaGroupB244.rotation.y = (244 * ((Math.PI / 2) / 90))
plasmaGroupC244.add(plasmaGroupB244)

plasmaGroupC244.position.x = (Math.sin((244 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC244.position.z = (Math.cos((244 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC244)

// plasmaGroup245		###############################################################################
const plasmaGroup245 = new THREE.Group()

const plasmaGroupB245 = new THREE.Group()

const plasmaGroupC245 = new THREE.Group()

// redPlasmaMesh245
const redPlasmaGeometry245 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial245 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh245 = new THREE.Mesh(redPlasmaGeometry245, redPlasmaMaterial245)
redPlasmaMesh245.position.set( (Math.cos((1715 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1715 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup245.add(redPlasmaMesh245)

// greenPlasmaMesh245
const greenPlasmaGeometry245 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial245 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh245 = new THREE.Mesh(greenPlasmaGeometry245, greenPlasmaMaterial245)
greenPlasmaMesh245.position.set( (Math.cos((2555 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2555 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup245.add(greenPlasmaMesh245)

// bluePlasmaMesh245
const bluePlasmaGeometry245 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial245 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh245 = new THREE.Mesh(bluePlasmaGeometry245, bluePlasmaMaterial245)
bluePlasmaMesh245.position.set( (Math.cos((3395 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3395 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup245.add(bluePlasmaMesh245)

plasmaGroup245.rotation.z = Math.PI / 180 * 90
plasmaGroupB245.add(plasmaGroup245)

plasmaGroupB245.rotation.y = (245 * ((Math.PI / 2) / 90))
plasmaGroupC245.add(plasmaGroupB245)

plasmaGroupC245.position.x = (Math.sin((245 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC245.position.z = (Math.cos((245 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC245)

// plasmaGroup246		###############################################################################
const plasmaGroup246 = new THREE.Group()

const plasmaGroupB246 = new THREE.Group()

const plasmaGroupC246 = new THREE.Group()

// redPlasmaMesh246
const redPlasmaGeometry246 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial246 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh246 = new THREE.Mesh(redPlasmaGeometry246, redPlasmaMaterial246)
redPlasmaMesh246.position.set( (Math.cos((1722 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1722 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup246.add(redPlasmaMesh246)

// greenPlasmaMesh246
const greenPlasmaGeometry246 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial246 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh246 = new THREE.Mesh(greenPlasmaGeometry246, greenPlasmaMaterial246)
greenPlasmaMesh246.position.set( (Math.cos((2562 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2562 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup246.add(greenPlasmaMesh246)

// bluePlasmaMesh246
const bluePlasmaGeometry246 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial246 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh246 = new THREE.Mesh(bluePlasmaGeometry246, bluePlasmaMaterial246)
bluePlasmaMesh246.position.set( (Math.cos((3402 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3402 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup246.add(bluePlasmaMesh246)

plasmaGroup246.rotation.z = Math.PI / 180 * 90
plasmaGroupB246.add(plasmaGroup246)

plasmaGroupB246.rotation.y = (246 * ((Math.PI / 2) / 90))
plasmaGroupC246.add(plasmaGroupB246)

plasmaGroupC246.position.x = (Math.sin((246 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC246.position.z = (Math.cos((246 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC246)

// plasmaGroup247		###############################################################################
const plasmaGroup247 = new THREE.Group()

const plasmaGroupB247 = new THREE.Group()

const plasmaGroupC247 = new THREE.Group()

// redPlasmaMesh247
const redPlasmaGeometry247 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial247 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh247 = new THREE.Mesh(redPlasmaGeometry247, redPlasmaMaterial247)
redPlasmaMesh247.position.set( (Math.cos((1729 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1729 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup247.add(redPlasmaMesh247)

// greenPlasmaMesh247
const greenPlasmaGeometry247 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial247 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh247 = new THREE.Mesh(greenPlasmaGeometry247, greenPlasmaMaterial247)
greenPlasmaMesh247.position.set( (Math.cos((2569 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2569 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup247.add(greenPlasmaMesh247)

// bluePlasmaMesh247
const bluePlasmaGeometry247 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial247 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh247 = new THREE.Mesh(bluePlasmaGeometry247, bluePlasmaMaterial247)
bluePlasmaMesh247.position.set( (Math.cos((3409 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3409 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup247.add(bluePlasmaMesh247)

plasmaGroup247.rotation.z = Math.PI / 180 * 90
plasmaGroupB247.add(plasmaGroup247)

plasmaGroupB247.rotation.y = (247 * ((Math.PI / 2) / 90))
plasmaGroupC247.add(plasmaGroupB247)

plasmaGroupC247.position.x = (Math.sin((247 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC247.position.z = (Math.cos((247 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC247)

// plasmaGroup248		###############################################################################
const plasmaGroup248 = new THREE.Group()

const plasmaGroupB248 = new THREE.Group()

const plasmaGroupC248 = new THREE.Group()

// redPlasmaMesh248
const redPlasmaGeometry248 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial248 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh248 = new THREE.Mesh(redPlasmaGeometry248, redPlasmaMaterial248)
redPlasmaMesh248.position.set( (Math.cos((1736 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1736 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup248.add(redPlasmaMesh248)

// greenPlasmaMesh248
const greenPlasmaGeometry248 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial248 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh248 = new THREE.Mesh(greenPlasmaGeometry248, greenPlasmaMaterial248)
greenPlasmaMesh248.position.set( (Math.cos((2576 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2576 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup248.add(greenPlasmaMesh248)

// bluePlasmaMesh248
const bluePlasmaGeometry248 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial248 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh248 = new THREE.Mesh(bluePlasmaGeometry248, bluePlasmaMaterial248)
bluePlasmaMesh248.position.set( (Math.cos((3416 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3416 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup248.add(bluePlasmaMesh248)

plasmaGroup248.rotation.z = Math.PI / 180 * 90
plasmaGroupB248.add(plasmaGroup248)

plasmaGroupB248.rotation.y = (248 * ((Math.PI / 2) / 90))
plasmaGroupC248.add(plasmaGroupB248)

plasmaGroupC248.position.x = (Math.sin((248 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC248.position.z = (Math.cos((248 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC248)

// plasmaGroup249		###############################################################################
const plasmaGroup249 = new THREE.Group()

const plasmaGroupB249 = new THREE.Group()

const plasmaGroupC249 = new THREE.Group()

// redPlasmaMesh249
const redPlasmaGeometry249 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial249 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh249 = new THREE.Mesh(redPlasmaGeometry249, redPlasmaMaterial249)
redPlasmaMesh249.position.set( (Math.cos((1743 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1743 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup249.add(redPlasmaMesh249)

// greenPlasmaMesh249
const greenPlasmaGeometry249 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial249 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh249 = new THREE.Mesh(greenPlasmaGeometry249, greenPlasmaMaterial249)
greenPlasmaMesh249.position.set( (Math.cos((2583 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2583 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup249.add(greenPlasmaMesh249)

// bluePlasmaMesh249
const bluePlasmaGeometry249 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial249 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh249 = new THREE.Mesh(bluePlasmaGeometry249, bluePlasmaMaterial249)
bluePlasmaMesh249.position.set( (Math.cos((3423 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3423 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup249.add(bluePlasmaMesh249)

plasmaGroup249.rotation.z = Math.PI / 180 * 90
plasmaGroupB249.add(plasmaGroup249)

plasmaGroupB249.rotation.y = (249 * ((Math.PI / 2) / 90))
plasmaGroupC249.add(plasmaGroupB249)

plasmaGroupC249.position.x = (Math.sin((249 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC249.position.z = (Math.cos((249 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC249)

// plasmaGroup250		###############################################################################
const plasmaGroup250 = new THREE.Group()

const plasmaGroupB250 = new THREE.Group()

const plasmaGroupC250 = new THREE.Group()

// redPlasmaMesh250
const redPlasmaGeometry250 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial250 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh250 = new THREE.Mesh(redPlasmaGeometry250, redPlasmaMaterial250)
redPlasmaMesh250.position.set( (Math.cos((1750 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1750 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup250.add(redPlasmaMesh250)

// greenPlasmaMesh250
const greenPlasmaGeometry250 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial250 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh250 = new THREE.Mesh(greenPlasmaGeometry250, greenPlasmaMaterial250)
greenPlasmaMesh250.position.set( (Math.cos((2590 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2590 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup250.add(greenPlasmaMesh250)

// bluePlasmaMesh250
const bluePlasmaGeometry250 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial250 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh250 = new THREE.Mesh(bluePlasmaGeometry250, bluePlasmaMaterial250)
bluePlasmaMesh250.position.set( (Math.cos((3430 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3430 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup250.add(bluePlasmaMesh250)

plasmaGroup250.rotation.z = Math.PI / 180 * 90
plasmaGroupB250.add(plasmaGroup250)

plasmaGroupB250.rotation.y = (250 * ((Math.PI / 2) / 90))
plasmaGroupC250.add(plasmaGroupB250)

plasmaGroupC250.position.x = (Math.sin((250 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC250.position.z = (Math.cos((250 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC250)

// plasmaGroup251		###############################################################################
const plasmaGroup251 = new THREE.Group()

const plasmaGroupB251 = new THREE.Group()

const plasmaGroupC251 = new THREE.Group()

// redPlasmaMesh251
const redPlasmaGeometry251 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial251 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh251 = new THREE.Mesh(redPlasmaGeometry251, redPlasmaMaterial251)
redPlasmaMesh251.position.set( (Math.cos((1757 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1757 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup251.add(redPlasmaMesh251)

// greenPlasmaMesh251
const greenPlasmaGeometry251 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial251 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh251 = new THREE.Mesh(greenPlasmaGeometry251, greenPlasmaMaterial251)
greenPlasmaMesh251.position.set( (Math.cos((2597 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2597 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup251.add(greenPlasmaMesh251)

// bluePlasmaMesh251
const bluePlasmaGeometry251 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial251 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh251 = new THREE.Mesh(bluePlasmaGeometry251, bluePlasmaMaterial251)
bluePlasmaMesh251.position.set( (Math.cos((3437 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3437 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup251.add(bluePlasmaMesh251)

plasmaGroup251.rotation.z = Math.PI / 180 * 90
plasmaGroupB251.add(plasmaGroup251)

plasmaGroupB251.rotation.y = (251 * ((Math.PI / 2) / 90))
plasmaGroupC251.add(plasmaGroupB251)

plasmaGroupC251.position.x = (Math.sin((251 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC251.position.z = (Math.cos((251 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC251)

// plasmaGroup252		###############################################################################
const plasmaGroup252 = new THREE.Group()

const plasmaGroupB252 = new THREE.Group()

const plasmaGroupC252 = new THREE.Group()

// redPlasmaMesh252
const redPlasmaGeometry252 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial252 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh252 = new THREE.Mesh(redPlasmaGeometry252, redPlasmaMaterial252)
redPlasmaMesh252.position.set( (Math.cos((1764 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1764 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup252.add(redPlasmaMesh252)

// greenPlasmaMesh252
const greenPlasmaGeometry252 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial252 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh252 = new THREE.Mesh(greenPlasmaGeometry252, greenPlasmaMaterial252)
greenPlasmaMesh252.position.set( (Math.cos((2604 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2604 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup252.add(greenPlasmaMesh252)

// bluePlasmaMesh252
const bluePlasmaGeometry252 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial252 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh252 = new THREE.Mesh(bluePlasmaGeometry252, bluePlasmaMaterial252)
bluePlasmaMesh252.position.set( (Math.cos((3444 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3444 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup252.add(bluePlasmaMesh252)

plasmaGroup252.rotation.z = Math.PI / 180 * 90
plasmaGroupB252.add(plasmaGroup252)

plasmaGroupB252.rotation.y = (252 * ((Math.PI / 2) / 90))
plasmaGroupC252.add(plasmaGroupB252)

plasmaGroupC252.position.x = (Math.sin((252 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC252.position.z = (Math.cos((252 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC252)

// plasmaGroup253		###############################################################################
const plasmaGroup253 = new THREE.Group()

const plasmaGroupB253 = new THREE.Group()

const plasmaGroupC253 = new THREE.Group()

// redPlasmaMesh253
const redPlasmaGeometry253 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial253 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh253 = new THREE.Mesh(redPlasmaGeometry253, redPlasmaMaterial253)
redPlasmaMesh253.position.set( (Math.cos((1771 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1771 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup253.add(redPlasmaMesh253)

// greenPlasmaMesh253
const greenPlasmaGeometry253 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial253 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh253 = new THREE.Mesh(greenPlasmaGeometry253, greenPlasmaMaterial253)
greenPlasmaMesh253.position.set( (Math.cos((2611 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2611 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup253.add(greenPlasmaMesh253)

// bluePlasmaMesh253
const bluePlasmaGeometry253 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial253 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh253 = new THREE.Mesh(bluePlasmaGeometry253, bluePlasmaMaterial253)
bluePlasmaMesh253.position.set( (Math.cos((3451 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3451 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup253.add(bluePlasmaMesh253)

plasmaGroup253.rotation.z = Math.PI / 180 * 90
plasmaGroupB253.add(plasmaGroup253)

plasmaGroupB253.rotation.y = (253 * ((Math.PI / 2) / 90))
plasmaGroupC253.add(plasmaGroupB253)

plasmaGroupC253.position.x = (Math.sin((253 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC253.position.z = (Math.cos((253 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC253)

// plasmaGroup254		###############################################################################
const plasmaGroup254 = new THREE.Group()

const plasmaGroupB254 = new THREE.Group()

const plasmaGroupC254 = new THREE.Group()

// redPlasmaMesh254
const redPlasmaGeometry254 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial254 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh254 = new THREE.Mesh(redPlasmaGeometry254, redPlasmaMaterial254)
redPlasmaMesh254.position.set( (Math.cos((1778 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1778 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup254.add(redPlasmaMesh254)

// greenPlasmaMesh254
const greenPlasmaGeometry254 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial254 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh254 = new THREE.Mesh(greenPlasmaGeometry254, greenPlasmaMaterial254)
greenPlasmaMesh254.position.set( (Math.cos((2618 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2618 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup254.add(greenPlasmaMesh254)

// bluePlasmaMesh254
const bluePlasmaGeometry254 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial254 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh254 = new THREE.Mesh(bluePlasmaGeometry254, bluePlasmaMaterial254)
bluePlasmaMesh254.position.set( (Math.cos((3458 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3458 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup254.add(bluePlasmaMesh254)

plasmaGroup254.rotation.z = Math.PI / 180 * 90
plasmaGroupB254.add(plasmaGroup254)

plasmaGroupB254.rotation.y = (254 * ((Math.PI / 2) / 90))
plasmaGroupC254.add(plasmaGroupB254)

plasmaGroupC254.position.x = (Math.sin((254 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC254.position.z = (Math.cos((254 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC254)

// plasmaGroup255		###############################################################################
const plasmaGroup255 = new THREE.Group()

const plasmaGroupB255 = new THREE.Group()

const plasmaGroupC255 = new THREE.Group()

// redPlasmaMesh255
const redPlasmaGeometry255 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial255 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh255 = new THREE.Mesh(redPlasmaGeometry255, redPlasmaMaterial255)
redPlasmaMesh255.position.set( (Math.cos((1785 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1785 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup255.add(redPlasmaMesh255)

// greenPlasmaMesh255
const greenPlasmaGeometry255 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial255 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh255 = new THREE.Mesh(greenPlasmaGeometry255, greenPlasmaMaterial255)
greenPlasmaMesh255.position.set( (Math.cos((2625 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2625 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup255.add(greenPlasmaMesh255)

// bluePlasmaMesh255
const bluePlasmaGeometry255 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial255 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh255 = new THREE.Mesh(bluePlasmaGeometry255, bluePlasmaMaterial255)
bluePlasmaMesh255.position.set( (Math.cos((3465 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3465 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup255.add(bluePlasmaMesh255)

plasmaGroup255.rotation.z = Math.PI / 180 * 90
plasmaGroupB255.add(plasmaGroup255)

plasmaGroupB255.rotation.y = (255 * ((Math.PI / 2) / 90))
plasmaGroupC255.add(plasmaGroupB255)

plasmaGroupC255.position.x = (Math.sin((255 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC255.position.z = (Math.cos((255 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC255)

// plasmaGroup256		###############################################################################
const plasmaGroup256 = new THREE.Group()

const plasmaGroupB256 = new THREE.Group()

const plasmaGroupC256 = new THREE.Group()

// redPlasmaMesh256
const redPlasmaGeometry256 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial256 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh256 = new THREE.Mesh(redPlasmaGeometry256, redPlasmaMaterial256)
redPlasmaMesh256.position.set( (Math.cos((1792 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1792 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup256.add(redPlasmaMesh256)

// greenPlasmaMesh256
const greenPlasmaGeometry256 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial256 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh256 = new THREE.Mesh(greenPlasmaGeometry256, greenPlasmaMaterial256)
greenPlasmaMesh256.position.set( (Math.cos((2632 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2632 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup256.add(greenPlasmaMesh256)

// bluePlasmaMesh256
const bluePlasmaGeometry256 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial256 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh256 = new THREE.Mesh(bluePlasmaGeometry256, bluePlasmaMaterial256)
bluePlasmaMesh256.position.set( (Math.cos((3472 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3472 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup256.add(bluePlasmaMesh256)

plasmaGroup256.rotation.z = Math.PI / 180 * 90
plasmaGroupB256.add(plasmaGroup256)

plasmaGroupB256.rotation.y = (256 * ((Math.PI / 2) / 90))
plasmaGroupC256.add(plasmaGroupB256)

plasmaGroupC256.position.x = (Math.sin((256 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC256.position.z = (Math.cos((256 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC256)

// plasmaGroup257		###############################################################################
const plasmaGroup257 = new THREE.Group()

const plasmaGroupB257 = new THREE.Group()

const plasmaGroupC257 = new THREE.Group()

// redPlasmaMesh257
const redPlasmaGeometry257 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial257 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh257 = new THREE.Mesh(redPlasmaGeometry257, redPlasmaMaterial257)
redPlasmaMesh257.position.set( (Math.cos((1799 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1799 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup257.add(redPlasmaMesh257)

// greenPlasmaMesh257
const greenPlasmaGeometry257 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial257 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh257 = new THREE.Mesh(greenPlasmaGeometry257, greenPlasmaMaterial257)
greenPlasmaMesh257.position.set( (Math.cos((2639 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2639 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup257.add(greenPlasmaMesh257)

// bluePlasmaMesh257
const bluePlasmaGeometry257 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial257 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh257 = new THREE.Mesh(bluePlasmaGeometry257, bluePlasmaMaterial257)
bluePlasmaMesh257.position.set( (Math.cos((3479 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3479 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup257.add(bluePlasmaMesh257)

plasmaGroup257.rotation.z = Math.PI / 180 * 90
plasmaGroupB257.add(plasmaGroup257)

plasmaGroupB257.rotation.y = (257 * ((Math.PI / 2) / 90))
plasmaGroupC257.add(plasmaGroupB257)

plasmaGroupC257.position.x = (Math.sin((257 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC257.position.z = (Math.cos((257 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC257)

// plasmaGroup258		###############################################################################
const plasmaGroup258 = new THREE.Group()

const plasmaGroupB258 = new THREE.Group()

const plasmaGroupC258 = new THREE.Group()

// redPlasmaMesh258
const redPlasmaGeometry258 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial258 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh258 = new THREE.Mesh(redPlasmaGeometry258, redPlasmaMaterial258)
redPlasmaMesh258.position.set( (Math.cos((1806 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1806 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup258.add(redPlasmaMesh258)

// greenPlasmaMesh258
const greenPlasmaGeometry258 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial258 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh258 = new THREE.Mesh(greenPlasmaGeometry258, greenPlasmaMaterial258)
greenPlasmaMesh258.position.set( (Math.cos((2646 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2646 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup258.add(greenPlasmaMesh258)

// bluePlasmaMesh258
const bluePlasmaGeometry258 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial258 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh258 = new THREE.Mesh(bluePlasmaGeometry258, bluePlasmaMaterial258)
bluePlasmaMesh258.position.set( (Math.cos((3486 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3486 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup258.add(bluePlasmaMesh258)

plasmaGroup258.rotation.z = Math.PI / 180 * 90
plasmaGroupB258.add(plasmaGroup258)

plasmaGroupB258.rotation.y = (258 * ((Math.PI / 2) / 90))
plasmaGroupC258.add(plasmaGroupB258)

plasmaGroupC258.position.x = (Math.sin((258 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC258.position.z = (Math.cos((258 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC258)

// plasmaGroup259		###############################################################################
const plasmaGroup259 = new THREE.Group()

const plasmaGroupB259 = new THREE.Group()

const plasmaGroupC259 = new THREE.Group()

// redPlasmaMesh259
const redPlasmaGeometry259 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial259 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh259 = new THREE.Mesh(redPlasmaGeometry259, redPlasmaMaterial259)
redPlasmaMesh259.position.set( (Math.cos((1813 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1813 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup259.add(redPlasmaMesh259)

// greenPlasmaMesh259
const greenPlasmaGeometry259 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial259 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh259 = new THREE.Mesh(greenPlasmaGeometry259, greenPlasmaMaterial259)
greenPlasmaMesh259.position.set( (Math.cos((2653 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2653 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup259.add(greenPlasmaMesh259)

// bluePlasmaMesh259
const bluePlasmaGeometry259 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial259 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh259 = new THREE.Mesh(bluePlasmaGeometry259, bluePlasmaMaterial259)
bluePlasmaMesh259.position.set( (Math.cos((3493 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3493 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup259.add(bluePlasmaMesh259)

plasmaGroup259.rotation.z = Math.PI / 180 * 90
plasmaGroupB259.add(plasmaGroup259)

plasmaGroupB259.rotation.y = (259 * ((Math.PI / 2) / 90))
plasmaGroupC259.add(plasmaGroupB259)

plasmaGroupC259.position.x = (Math.sin((259 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC259.position.z = (Math.cos((259 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC259)

// plasmaGroup260		###############################################################################
const plasmaGroup260 = new THREE.Group()

const plasmaGroupB260 = new THREE.Group()

const plasmaGroupC260 = new THREE.Group()

// redPlasmaMesh260
const redPlasmaGeometry260 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial260 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh260 = new THREE.Mesh(redPlasmaGeometry260, redPlasmaMaterial260)
redPlasmaMesh260.position.set( (Math.cos((1820 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1820 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup260.add(redPlasmaMesh260)

// greenPlasmaMesh260
const greenPlasmaGeometry260 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial260 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh260 = new THREE.Mesh(greenPlasmaGeometry260, greenPlasmaMaterial260)
greenPlasmaMesh260.position.set( (Math.cos((2660 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2660 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup260.add(greenPlasmaMesh260)

// bluePlasmaMesh260
const bluePlasmaGeometry260 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial260 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh260 = new THREE.Mesh(bluePlasmaGeometry260, bluePlasmaMaterial260)
bluePlasmaMesh260.position.set( (Math.cos((3500 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3500 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup260.add(bluePlasmaMesh260)

plasmaGroup260.rotation.z = Math.PI / 180 * 90
plasmaGroupB260.add(plasmaGroup260)

plasmaGroupB260.rotation.y = (260 * ((Math.PI / 2) / 90))
plasmaGroupC260.add(plasmaGroupB260)

plasmaGroupC260.position.x = (Math.sin((260 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC260.position.z = (Math.cos((260 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC260)

// plasmaGroup261		###############################################################################
const plasmaGroup261 = new THREE.Group()

const plasmaGroupB261 = new THREE.Group()

const plasmaGroupC261 = new THREE.Group()

// redPlasmaMesh261
const redPlasmaGeometry261 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial261 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh261 = new THREE.Mesh(redPlasmaGeometry261, redPlasmaMaterial261)
redPlasmaMesh261.position.set( (Math.cos((1827 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1827 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup261.add(redPlasmaMesh261)

// greenPlasmaMesh261
const greenPlasmaGeometry261 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial261 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh261 = new THREE.Mesh(greenPlasmaGeometry261, greenPlasmaMaterial261)
greenPlasmaMesh261.position.set( (Math.cos((2667 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2667 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup261.add(greenPlasmaMesh261)

// bluePlasmaMesh261
const bluePlasmaGeometry261 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial261 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh261 = new THREE.Mesh(bluePlasmaGeometry261, bluePlasmaMaterial261)
bluePlasmaMesh261.position.set( (Math.cos((3507 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3507 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup261.add(bluePlasmaMesh261)

plasmaGroup261.rotation.z = Math.PI / 180 * 90
plasmaGroupB261.add(plasmaGroup261)

plasmaGroupB261.rotation.y = (261 * ((Math.PI / 2) / 90))
plasmaGroupC261.add(plasmaGroupB261)

plasmaGroupC261.position.x = (Math.sin((261 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC261.position.z = (Math.cos((261 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC261)

// plasmaGroup262		###############################################################################
const plasmaGroup262 = new THREE.Group()

const plasmaGroupB262 = new THREE.Group()

const plasmaGroupC262 = new THREE.Group()

// redPlasmaMesh262
const redPlasmaGeometry262 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial262 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh262 = new THREE.Mesh(redPlasmaGeometry262, redPlasmaMaterial262)
redPlasmaMesh262.position.set( (Math.cos((1834 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1834 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup262.add(redPlasmaMesh262)

// greenPlasmaMesh262
const greenPlasmaGeometry262 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial262 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh262 = new THREE.Mesh(greenPlasmaGeometry262, greenPlasmaMaterial262)
greenPlasmaMesh262.position.set( (Math.cos((2674 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2674 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup262.add(greenPlasmaMesh262)

// bluePlasmaMesh262
const bluePlasmaGeometry262 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial262 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh262 = new THREE.Mesh(bluePlasmaGeometry262, bluePlasmaMaterial262)
bluePlasmaMesh262.position.set( (Math.cos((3514 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3514 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup262.add(bluePlasmaMesh262)

plasmaGroup262.rotation.z = Math.PI / 180 * 90
plasmaGroupB262.add(plasmaGroup262)

plasmaGroupB262.rotation.y = (262 * ((Math.PI / 2) / 90))
plasmaGroupC262.add(plasmaGroupB262)

plasmaGroupC262.position.x = (Math.sin((262 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC262.position.z = (Math.cos((262 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC262)

// plasmaGroup263		###############################################################################
const plasmaGroup263 = new THREE.Group()

const plasmaGroupB263 = new THREE.Group()

const plasmaGroupC263 = new THREE.Group()

// redPlasmaMesh263
const redPlasmaGeometry263 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial263 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh263 = new THREE.Mesh(redPlasmaGeometry263, redPlasmaMaterial263)
redPlasmaMesh263.position.set( (Math.cos((1841 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1841 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup263.add(redPlasmaMesh263)

// greenPlasmaMesh263
const greenPlasmaGeometry263 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial263 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh263 = new THREE.Mesh(greenPlasmaGeometry263, greenPlasmaMaterial263)
greenPlasmaMesh263.position.set( (Math.cos((2681 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2681 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup263.add(greenPlasmaMesh263)

// bluePlasmaMesh263
const bluePlasmaGeometry263 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial263 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh263 = new THREE.Mesh(bluePlasmaGeometry263, bluePlasmaMaterial263)
bluePlasmaMesh263.position.set( (Math.cos((3521 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3521 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup263.add(bluePlasmaMesh263)

plasmaGroup263.rotation.z = Math.PI / 180 * 90
plasmaGroupB263.add(plasmaGroup263)

plasmaGroupB263.rotation.y = (263 * ((Math.PI / 2) / 90))
plasmaGroupC263.add(plasmaGroupB263)

plasmaGroupC263.position.x = (Math.sin((263 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC263.position.z = (Math.cos((263 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC263)

// plasmaGroup264		###############################################################################
const plasmaGroup264 = new THREE.Group()

const plasmaGroupB264 = new THREE.Group()

const plasmaGroupC264 = new THREE.Group()

// redPlasmaMesh264
const redPlasmaGeometry264 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial264 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh264 = new THREE.Mesh(redPlasmaGeometry264, redPlasmaMaterial264)
redPlasmaMesh264.position.set( (Math.cos((1848 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1848 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup264.add(redPlasmaMesh264)

// greenPlasmaMesh264
const greenPlasmaGeometry264 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial264 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh264 = new THREE.Mesh(greenPlasmaGeometry264, greenPlasmaMaterial264)
greenPlasmaMesh264.position.set( (Math.cos((2688 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2688 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup264.add(greenPlasmaMesh264)

// bluePlasmaMesh264
const bluePlasmaGeometry264 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial264 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh264 = new THREE.Mesh(bluePlasmaGeometry264, bluePlasmaMaterial264)
bluePlasmaMesh264.position.set( (Math.cos((3528 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3528 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup264.add(bluePlasmaMesh264)

plasmaGroup264.rotation.z = Math.PI / 180 * 90
plasmaGroupB264.add(plasmaGroup264)

plasmaGroupB264.rotation.y = (264 * ((Math.PI / 2) / 90))
plasmaGroupC264.add(plasmaGroupB264)

plasmaGroupC264.position.x = (Math.sin((264 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC264.position.z = (Math.cos((264 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC264)

// plasmaGroup265		###############################################################################
const plasmaGroup265 = new THREE.Group()

const plasmaGroupB265 = new THREE.Group()

const plasmaGroupC265 = new THREE.Group()

// redPlasmaMesh265
const redPlasmaGeometry265 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial265 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh265 = new THREE.Mesh(redPlasmaGeometry265, redPlasmaMaterial265)
redPlasmaMesh265.position.set( (Math.cos((1855 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1855 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup265.add(redPlasmaMesh265)

// greenPlasmaMesh265
const greenPlasmaGeometry265 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial265 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh265 = new THREE.Mesh(greenPlasmaGeometry265, greenPlasmaMaterial265)
greenPlasmaMesh265.position.set( (Math.cos((2695 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2695 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup265.add(greenPlasmaMesh265)

// bluePlasmaMesh265
const bluePlasmaGeometry265 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial265 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh265 = new THREE.Mesh(bluePlasmaGeometry265, bluePlasmaMaterial265)
bluePlasmaMesh265.position.set( (Math.cos((3535 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3535 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup265.add(bluePlasmaMesh265)

plasmaGroup265.rotation.z = Math.PI / 180 * 90
plasmaGroupB265.add(plasmaGroup265)

plasmaGroupB265.rotation.y = (265 * ((Math.PI / 2) / 90))
plasmaGroupC265.add(plasmaGroupB265)

plasmaGroupC265.position.x = (Math.sin((265 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC265.position.z = (Math.cos((265 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC265)

// plasmaGroup266		###############################################################################
const plasmaGroup266 = new THREE.Group()

const plasmaGroupB266 = new THREE.Group()

const plasmaGroupC266 = new THREE.Group()

// redPlasmaMesh266
const redPlasmaGeometry266 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial266 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh266 = new THREE.Mesh(redPlasmaGeometry266, redPlasmaMaterial266)
redPlasmaMesh266.position.set( (Math.cos((1862 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1862 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup266.add(redPlasmaMesh266)

// greenPlasmaMesh266
const greenPlasmaGeometry266 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial266 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh266 = new THREE.Mesh(greenPlasmaGeometry266, greenPlasmaMaterial266)
greenPlasmaMesh266.position.set( (Math.cos((2702 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2702 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup266.add(greenPlasmaMesh266)

// bluePlasmaMesh266
const bluePlasmaGeometry266 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial266 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh266 = new THREE.Mesh(bluePlasmaGeometry266, bluePlasmaMaterial266)
bluePlasmaMesh266.position.set( (Math.cos((3542 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3542 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup266.add(bluePlasmaMesh266)

plasmaGroup266.rotation.z = Math.PI / 180 * 90
plasmaGroupB266.add(plasmaGroup266)

plasmaGroupB266.rotation.y = (266 * ((Math.PI / 2) / 90))
plasmaGroupC266.add(plasmaGroupB266)

plasmaGroupC266.position.x = (Math.sin((266 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC266.position.z = (Math.cos((266 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC266)

// plasmaGroup267		###############################################################################
const plasmaGroup267 = new THREE.Group()

const plasmaGroupB267 = new THREE.Group()

const plasmaGroupC267 = new THREE.Group()

// redPlasmaMesh267
const redPlasmaGeometry267 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial267 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh267 = new THREE.Mesh(redPlasmaGeometry267, redPlasmaMaterial267)
redPlasmaMesh267.position.set( (Math.cos((1869 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1869 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup267.add(redPlasmaMesh267)

// greenPlasmaMesh267
const greenPlasmaGeometry267 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial267 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh267 = new THREE.Mesh(greenPlasmaGeometry267, greenPlasmaMaterial267)
greenPlasmaMesh267.position.set( (Math.cos((2709 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2709 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup267.add(greenPlasmaMesh267)

// bluePlasmaMesh267
const bluePlasmaGeometry267 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial267 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh267 = new THREE.Mesh(bluePlasmaGeometry267, bluePlasmaMaterial267)
bluePlasmaMesh267.position.set( (Math.cos((3549 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3549 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup267.add(bluePlasmaMesh267)

plasmaGroup267.rotation.z = Math.PI / 180 * 90
plasmaGroupB267.add(plasmaGroup267)

plasmaGroupB267.rotation.y = (267 * ((Math.PI / 2) / 90))
plasmaGroupC267.add(plasmaGroupB267)

plasmaGroupC267.position.x = (Math.sin((267 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC267.position.z = (Math.cos((267 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC267)

// plasmaGroup268		###############################################################################
const plasmaGroup268 = new THREE.Group()

const plasmaGroupB268 = new THREE.Group()

const plasmaGroupC268 = new THREE.Group()

// redPlasmaMesh268
const redPlasmaGeometry268 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial268 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh268 = new THREE.Mesh(redPlasmaGeometry268, redPlasmaMaterial268)
redPlasmaMesh268.position.set( (Math.cos((1876 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1876 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup268.add(redPlasmaMesh268)

// greenPlasmaMesh268
const greenPlasmaGeometry268 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial268 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh268 = new THREE.Mesh(greenPlasmaGeometry268, greenPlasmaMaterial268)
greenPlasmaMesh268.position.set( (Math.cos((2716 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2716 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup268.add(greenPlasmaMesh268)

// bluePlasmaMesh268
const bluePlasmaGeometry268 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial268 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh268 = new THREE.Mesh(bluePlasmaGeometry268, bluePlasmaMaterial268)
bluePlasmaMesh268.position.set( (Math.cos((3556 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3556 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup268.add(bluePlasmaMesh268)

plasmaGroup268.rotation.z = Math.PI / 180 * 90
plasmaGroupB268.add(plasmaGroup268)

plasmaGroupB268.rotation.y = (268 * ((Math.PI / 2) / 90))
plasmaGroupC268.add(plasmaGroupB268)

plasmaGroupC268.position.x = (Math.sin((268 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC268.position.z = (Math.cos((268 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC268)

// plasmaGroup269		###############################################################################
const plasmaGroup269 = new THREE.Group()

const plasmaGroupB269 = new THREE.Group()

const plasmaGroupC269 = new THREE.Group()

// redPlasmaMesh269
const redPlasmaGeometry269 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial269 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh269 = new THREE.Mesh(redPlasmaGeometry269, redPlasmaMaterial269)
redPlasmaMesh269.position.set( (Math.cos((1883 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1883 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup269.add(redPlasmaMesh269)

// greenPlasmaMesh269
const greenPlasmaGeometry269 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial269 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh269 = new THREE.Mesh(greenPlasmaGeometry269, greenPlasmaMaterial269)
greenPlasmaMesh269.position.set( (Math.cos((2723 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2723 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup269.add(greenPlasmaMesh269)

// bluePlasmaMesh269
const bluePlasmaGeometry269 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial269 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh269 = new THREE.Mesh(bluePlasmaGeometry269, bluePlasmaMaterial269)
bluePlasmaMesh269.position.set( (Math.cos((3563 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3563 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup269.add(bluePlasmaMesh269)

plasmaGroup269.rotation.z = Math.PI / 180 * 90
plasmaGroupB269.add(plasmaGroup269)

plasmaGroupB269.rotation.y = (269 * ((Math.PI / 2) / 90))
plasmaGroupC269.add(plasmaGroupB269)

plasmaGroupC269.position.x = (Math.sin((269 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC269.position.z = (Math.cos((269 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC269)

// plasmaGroup270		###############################################################################
const plasmaGroup270 = new THREE.Group()

const plasmaGroupB270 = new THREE.Group()

const plasmaGroupC270 = new THREE.Group()

// redPlasmaMesh270
const redPlasmaGeometry270 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial270 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh270 = new THREE.Mesh(redPlasmaGeometry270, redPlasmaMaterial270)
redPlasmaMesh270.position.set( (Math.cos((1890 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1890 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup270.add(redPlasmaMesh270)

// greenPlasmaMesh270
const greenPlasmaGeometry270 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial270 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh270 = new THREE.Mesh(greenPlasmaGeometry270, greenPlasmaMaterial270)
greenPlasmaMesh270.position.set( (Math.cos((2730 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2730 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup270.add(greenPlasmaMesh270)

// bluePlasmaMesh270
const bluePlasmaGeometry270 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial270 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh270 = new THREE.Mesh(bluePlasmaGeometry270, bluePlasmaMaterial270)
bluePlasmaMesh270.position.set( (Math.cos((3570 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3570 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup270.add(bluePlasmaMesh270)

plasmaGroup270.rotation.z = Math.PI / 180 * 90
plasmaGroupB270.add(plasmaGroup270)

plasmaGroupB270.rotation.y = (270 * ((Math.PI / 2) / 90))
plasmaGroupC270.add(plasmaGroupB270)

plasmaGroupC270.position.x = (Math.sin((270 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC270.position.z = (Math.cos((270 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC270)

// plasmaGroup271		###############################################################################
const plasmaGroup271 = new THREE.Group()

const plasmaGroupB271 = new THREE.Group()

const plasmaGroupC271 = new THREE.Group()

// redPlasmaMesh271
const redPlasmaGeometry271 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial271 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh271 = new THREE.Mesh(redPlasmaGeometry271, redPlasmaMaterial271)
redPlasmaMesh271.position.set( (Math.cos((1897 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1897 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup271.add(redPlasmaMesh271)

// greenPlasmaMesh271
const greenPlasmaGeometry271 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial271 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh271 = new THREE.Mesh(greenPlasmaGeometry271, greenPlasmaMaterial271)
greenPlasmaMesh271.position.set( (Math.cos((2737 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2737 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup271.add(greenPlasmaMesh271)

// bluePlasmaMesh271
const bluePlasmaGeometry271 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial271 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh271 = new THREE.Mesh(bluePlasmaGeometry271, bluePlasmaMaterial271)
bluePlasmaMesh271.position.set( (Math.cos((3577 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3577 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup271.add(bluePlasmaMesh271)

plasmaGroup271.rotation.z = Math.PI / 180 * 90
plasmaGroupB271.add(plasmaGroup271)

plasmaGroupB271.rotation.y = (271 * ((Math.PI / 2) / 90))
plasmaGroupC271.add(plasmaGroupB271)

plasmaGroupC271.position.x = (Math.sin((271 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC271.position.z = (Math.cos((271 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC271)

// plasmaGroup272		###############################################################################
const plasmaGroup272 = new THREE.Group()

const plasmaGroupB272 = new THREE.Group()

const plasmaGroupC272 = new THREE.Group()

// redPlasmaMesh272
const redPlasmaGeometry272 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial272 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh272 = new THREE.Mesh(redPlasmaGeometry272, redPlasmaMaterial272)
redPlasmaMesh272.position.set( (Math.cos((1904 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1904 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup272.add(redPlasmaMesh272)

// greenPlasmaMesh272
const greenPlasmaGeometry272 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial272 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh272 = new THREE.Mesh(greenPlasmaGeometry272, greenPlasmaMaterial272)
greenPlasmaMesh272.position.set( (Math.cos((2744 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2744 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup272.add(greenPlasmaMesh272)

// bluePlasmaMesh272
const bluePlasmaGeometry272 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial272 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh272 = new THREE.Mesh(bluePlasmaGeometry272, bluePlasmaMaterial272)
bluePlasmaMesh272.position.set( (Math.cos((3584 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3584 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup272.add(bluePlasmaMesh272)

plasmaGroup272.rotation.z = Math.PI / 180 * 90
plasmaGroupB272.add(plasmaGroup272)

plasmaGroupB272.rotation.y = (272 * ((Math.PI / 2) / 90))
plasmaGroupC272.add(plasmaGroupB272)

plasmaGroupC272.position.x = (Math.sin((272 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC272.position.z = (Math.cos((272 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC272)

// plasmaGroup273		###############################################################################
const plasmaGroup273 = new THREE.Group()

const plasmaGroupB273 = new THREE.Group()

const plasmaGroupC273 = new THREE.Group()

// redPlasmaMesh273
const redPlasmaGeometry273 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial273 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh273 = new THREE.Mesh(redPlasmaGeometry273, redPlasmaMaterial273)
redPlasmaMesh273.position.set( (Math.cos((1911 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1911 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup273.add(redPlasmaMesh273)

// greenPlasmaMesh273
const greenPlasmaGeometry273 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial273 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh273 = new THREE.Mesh(greenPlasmaGeometry273, greenPlasmaMaterial273)
greenPlasmaMesh273.position.set( (Math.cos((2751 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2751 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup273.add(greenPlasmaMesh273)

// bluePlasmaMesh273
const bluePlasmaGeometry273 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial273 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh273 = new THREE.Mesh(bluePlasmaGeometry273, bluePlasmaMaterial273)
bluePlasmaMesh273.position.set( (Math.cos((3591 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3591 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup273.add(bluePlasmaMesh273)

plasmaGroup273.rotation.z = Math.PI / 180 * 90
plasmaGroupB273.add(plasmaGroup273)

plasmaGroupB273.rotation.y = (273 * ((Math.PI / 2) / 90))
plasmaGroupC273.add(plasmaGroupB273)

plasmaGroupC273.position.x = (Math.sin((273 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC273.position.z = (Math.cos((273 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC273)

// plasmaGroup274		###############################################################################
const plasmaGroup274 = new THREE.Group()

const plasmaGroupB274 = new THREE.Group()

const plasmaGroupC274 = new THREE.Group()

// redPlasmaMesh274
const redPlasmaGeometry274 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial274 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh274 = new THREE.Mesh(redPlasmaGeometry274, redPlasmaMaterial274)
redPlasmaMesh274.position.set( (Math.cos((1918 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1918 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup274.add(redPlasmaMesh274)

// greenPlasmaMesh274
const greenPlasmaGeometry274 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial274 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh274 = new THREE.Mesh(greenPlasmaGeometry274, greenPlasmaMaterial274)
greenPlasmaMesh274.position.set( (Math.cos((2758 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2758 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup274.add(greenPlasmaMesh274)

// bluePlasmaMesh274
const bluePlasmaGeometry274 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial274 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh274 = new THREE.Mesh(bluePlasmaGeometry274, bluePlasmaMaterial274)
bluePlasmaMesh274.position.set( (Math.cos((3598 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3598 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup274.add(bluePlasmaMesh274)

plasmaGroup274.rotation.z = Math.PI / 180 * 90
plasmaGroupB274.add(plasmaGroup274)

plasmaGroupB274.rotation.y = (274 * ((Math.PI / 2) / 90))
plasmaGroupC274.add(plasmaGroupB274)

plasmaGroupC274.position.x = (Math.sin((274 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC274.position.z = (Math.cos((274 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC274)

// plasmaGroup275		###############################################################################
const plasmaGroup275 = new THREE.Group()

const plasmaGroupB275 = new THREE.Group()

const plasmaGroupC275 = new THREE.Group()

// redPlasmaMesh275
const redPlasmaGeometry275 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial275 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh275 = new THREE.Mesh(redPlasmaGeometry275, redPlasmaMaterial275)
redPlasmaMesh275.position.set( (Math.cos((1925 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1925 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup275.add(redPlasmaMesh275)

// greenPlasmaMesh275
const greenPlasmaGeometry275 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial275 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh275 = new THREE.Mesh(greenPlasmaGeometry275, greenPlasmaMaterial275)
greenPlasmaMesh275.position.set( (Math.cos((2765 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2765 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup275.add(greenPlasmaMesh275)

// bluePlasmaMesh275
const bluePlasmaGeometry275 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial275 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh275 = new THREE.Mesh(bluePlasmaGeometry275, bluePlasmaMaterial275)
bluePlasmaMesh275.position.set( (Math.cos((3605 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3605 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup275.add(bluePlasmaMesh275)

plasmaGroup275.rotation.z = Math.PI / 180 * 90
plasmaGroupB275.add(plasmaGroup275)

plasmaGroupB275.rotation.y = (275 * ((Math.PI / 2) / 90))
plasmaGroupC275.add(plasmaGroupB275)

plasmaGroupC275.position.x = (Math.sin((275 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC275.position.z = (Math.cos((275 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC275)

// plasmaGroup276		###############################################################################
const plasmaGroup276 = new THREE.Group()

const plasmaGroupB276 = new THREE.Group()

const plasmaGroupC276 = new THREE.Group()

// redPlasmaMesh276
const redPlasmaGeometry276 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial276 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh276 = new THREE.Mesh(redPlasmaGeometry276, redPlasmaMaterial276)
redPlasmaMesh276.position.set( (Math.cos((1932 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1932 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup276.add(redPlasmaMesh276)

// greenPlasmaMesh276
const greenPlasmaGeometry276 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial276 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh276 = new THREE.Mesh(greenPlasmaGeometry276, greenPlasmaMaterial276)
greenPlasmaMesh276.position.set( (Math.cos((2772 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2772 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup276.add(greenPlasmaMesh276)

// bluePlasmaMesh276
const bluePlasmaGeometry276 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial276 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh276 = new THREE.Mesh(bluePlasmaGeometry276, bluePlasmaMaterial276)
bluePlasmaMesh276.position.set( (Math.cos((3612 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3612 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup276.add(bluePlasmaMesh276)

plasmaGroup276.rotation.z = Math.PI / 180 * 90
plasmaGroupB276.add(plasmaGroup276)

plasmaGroupB276.rotation.y = (276 * ((Math.PI / 2) / 90))
plasmaGroupC276.add(plasmaGroupB276)

plasmaGroupC276.position.x = (Math.sin((276 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC276.position.z = (Math.cos((276 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC276)

// plasmaGroup277		###############################################################################
const plasmaGroup277 = new THREE.Group()

const plasmaGroupB277 = new THREE.Group()

const plasmaGroupC277 = new THREE.Group()

// redPlasmaMesh277
const redPlasmaGeometry277 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial277 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh277 = new THREE.Mesh(redPlasmaGeometry277, redPlasmaMaterial277)
redPlasmaMesh277.position.set( (Math.cos((1939 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1939 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup277.add(redPlasmaMesh277)

// greenPlasmaMesh277
const greenPlasmaGeometry277 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial277 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh277 = new THREE.Mesh(greenPlasmaGeometry277, greenPlasmaMaterial277)
greenPlasmaMesh277.position.set( (Math.cos((2779 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2779 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup277.add(greenPlasmaMesh277)

// bluePlasmaMesh277
const bluePlasmaGeometry277 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial277 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh277 = new THREE.Mesh(bluePlasmaGeometry277, bluePlasmaMaterial277)
bluePlasmaMesh277.position.set( (Math.cos((3619 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3619 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup277.add(bluePlasmaMesh277)

plasmaGroup277.rotation.z = Math.PI / 180 * 90
plasmaGroupB277.add(plasmaGroup277)

plasmaGroupB277.rotation.y = (277 * ((Math.PI / 2) / 90))
plasmaGroupC277.add(plasmaGroupB277)

plasmaGroupC277.position.x = (Math.sin((277 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC277.position.z = (Math.cos((277 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC277)

// plasmaGroup278		###############################################################################
const plasmaGroup278 = new THREE.Group()

const plasmaGroupB278 = new THREE.Group()

const plasmaGroupC278 = new THREE.Group()

// redPlasmaMesh278
const redPlasmaGeometry278 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial278 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh278 = new THREE.Mesh(redPlasmaGeometry278, redPlasmaMaterial278)
redPlasmaMesh278.position.set( (Math.cos((1946 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1946 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup278.add(redPlasmaMesh278)

// greenPlasmaMesh278
const greenPlasmaGeometry278 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial278 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh278 = new THREE.Mesh(greenPlasmaGeometry278, greenPlasmaMaterial278)
greenPlasmaMesh278.position.set( (Math.cos((2786 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2786 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup278.add(greenPlasmaMesh278)

// bluePlasmaMesh278
const bluePlasmaGeometry278 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial278 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh278 = new THREE.Mesh(bluePlasmaGeometry278, bluePlasmaMaterial278)
bluePlasmaMesh278.position.set( (Math.cos((3626 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3626 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup278.add(bluePlasmaMesh278)

plasmaGroup278.rotation.z = Math.PI / 180 * 90
plasmaGroupB278.add(plasmaGroup278)

plasmaGroupB278.rotation.y = (278 * ((Math.PI / 2) / 90))
plasmaGroupC278.add(plasmaGroupB278)

plasmaGroupC278.position.x = (Math.sin((278 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC278.position.z = (Math.cos((278 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC278)

// plasmaGroup279		###############################################################################
const plasmaGroup279 = new THREE.Group()

const plasmaGroupB279 = new THREE.Group()

const plasmaGroupC279 = new THREE.Group()

// redPlasmaMesh279
const redPlasmaGeometry279 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial279 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh279 = new THREE.Mesh(redPlasmaGeometry279, redPlasmaMaterial279)
redPlasmaMesh279.position.set( (Math.cos((1953 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1953 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup279.add(redPlasmaMesh279)

// greenPlasmaMesh279
const greenPlasmaGeometry279 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial279 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh279 = new THREE.Mesh(greenPlasmaGeometry279, greenPlasmaMaterial279)
greenPlasmaMesh279.position.set( (Math.cos((2793 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2793 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup279.add(greenPlasmaMesh279)

// bluePlasmaMesh279
const bluePlasmaGeometry279 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial279 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh279 = new THREE.Mesh(bluePlasmaGeometry279, bluePlasmaMaterial279)
bluePlasmaMesh279.position.set( (Math.cos((3633 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3633 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup279.add(bluePlasmaMesh279)

plasmaGroup279.rotation.z = Math.PI / 180 * 90
plasmaGroupB279.add(plasmaGroup279)

plasmaGroupB279.rotation.y = (279 * ((Math.PI / 2) / 90))
plasmaGroupC279.add(plasmaGroupB279)

plasmaGroupC279.position.x = (Math.sin((279 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC279.position.z = (Math.cos((279 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC279)

// plasmaGroup280		###############################################################################
const plasmaGroup280 = new THREE.Group()

const plasmaGroupB280 = new THREE.Group()

const plasmaGroupC280 = new THREE.Group()

// redPlasmaMesh280
const redPlasmaGeometry280 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial280 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh280 = new THREE.Mesh(redPlasmaGeometry280, redPlasmaMaterial280)
redPlasmaMesh280.position.set( (Math.cos((1960 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1960 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup280.add(redPlasmaMesh280)

// greenPlasmaMesh280
const greenPlasmaGeometry280 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial280 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh280 = new THREE.Mesh(greenPlasmaGeometry280, greenPlasmaMaterial280)
greenPlasmaMesh280.position.set( (Math.cos((2800 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2800 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup280.add(greenPlasmaMesh280)

// bluePlasmaMesh280
const bluePlasmaGeometry280 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial280 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh280 = new THREE.Mesh(bluePlasmaGeometry280, bluePlasmaMaterial280)
bluePlasmaMesh280.position.set( (Math.cos((3640 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3640 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup280.add(bluePlasmaMesh280)

plasmaGroup280.rotation.z = Math.PI / 180 * 90
plasmaGroupB280.add(plasmaGroup280)

plasmaGroupB280.rotation.y = (280 * ((Math.PI / 2) / 90))
plasmaGroupC280.add(plasmaGroupB280)

plasmaGroupC280.position.x = (Math.sin((280 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC280.position.z = (Math.cos((280 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC280)

// plasmaGroup281		###############################################################################
const plasmaGroup281 = new THREE.Group()

const plasmaGroupB281 = new THREE.Group()

const plasmaGroupC281 = new THREE.Group()

// redPlasmaMesh281
const redPlasmaGeometry281 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial281 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh281 = new THREE.Mesh(redPlasmaGeometry281, redPlasmaMaterial281)
redPlasmaMesh281.position.set( (Math.cos((1967 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1967 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup281.add(redPlasmaMesh281)

// greenPlasmaMesh281
const greenPlasmaGeometry281 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial281 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh281 = new THREE.Mesh(greenPlasmaGeometry281, greenPlasmaMaterial281)
greenPlasmaMesh281.position.set( (Math.cos((2807 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2807 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup281.add(greenPlasmaMesh281)

// bluePlasmaMesh281
const bluePlasmaGeometry281 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial281 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh281 = new THREE.Mesh(bluePlasmaGeometry281, bluePlasmaMaterial281)
bluePlasmaMesh281.position.set( (Math.cos((3647 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3647 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup281.add(bluePlasmaMesh281)

plasmaGroup281.rotation.z = Math.PI / 180 * 90
plasmaGroupB281.add(plasmaGroup281)

plasmaGroupB281.rotation.y = (281 * ((Math.PI / 2) / 90))
plasmaGroupC281.add(plasmaGroupB281)

plasmaGroupC281.position.x = (Math.sin((281 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC281.position.z = (Math.cos((281 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC281)

// plasmaGroup282		###############################################################################
const plasmaGroup282 = new THREE.Group()

const plasmaGroupB282 = new THREE.Group()

const plasmaGroupC282 = new THREE.Group()

// redPlasmaMesh282
const redPlasmaGeometry282 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial282 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh282 = new THREE.Mesh(redPlasmaGeometry282, redPlasmaMaterial282)
redPlasmaMesh282.position.set( (Math.cos((1974 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1974 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup282.add(redPlasmaMesh282)

// greenPlasmaMesh282
const greenPlasmaGeometry282 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial282 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh282 = new THREE.Mesh(greenPlasmaGeometry282, greenPlasmaMaterial282)
greenPlasmaMesh282.position.set( (Math.cos((2814 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2814 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup282.add(greenPlasmaMesh282)

// bluePlasmaMesh282
const bluePlasmaGeometry282 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial282 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh282 = new THREE.Mesh(bluePlasmaGeometry282, bluePlasmaMaterial282)
bluePlasmaMesh282.position.set( (Math.cos((3654 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3654 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup282.add(bluePlasmaMesh282)

plasmaGroup282.rotation.z = Math.PI / 180 * 90
plasmaGroupB282.add(plasmaGroup282)

plasmaGroupB282.rotation.y = (282 * ((Math.PI / 2) / 90))
plasmaGroupC282.add(plasmaGroupB282)

plasmaGroupC282.position.x = (Math.sin((282 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC282.position.z = (Math.cos((282 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC282)

// plasmaGroup283		###############################################################################
const plasmaGroup283 = new THREE.Group()

const plasmaGroupB283 = new THREE.Group()

const plasmaGroupC283 = new THREE.Group()

// redPlasmaMesh283
const redPlasmaGeometry283 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial283 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh283 = new THREE.Mesh(redPlasmaGeometry283, redPlasmaMaterial283)
redPlasmaMesh283.position.set( (Math.cos((1981 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1981 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup283.add(redPlasmaMesh283)

// greenPlasmaMesh283
const greenPlasmaGeometry283 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial283 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh283 = new THREE.Mesh(greenPlasmaGeometry283, greenPlasmaMaterial283)
greenPlasmaMesh283.position.set( (Math.cos((2821 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2821 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup283.add(greenPlasmaMesh283)

// bluePlasmaMesh283
const bluePlasmaGeometry283 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial283 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh283 = new THREE.Mesh(bluePlasmaGeometry283, bluePlasmaMaterial283)
bluePlasmaMesh283.position.set( (Math.cos((3661 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3661 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup283.add(bluePlasmaMesh283)

plasmaGroup283.rotation.z = Math.PI / 180 * 90
plasmaGroupB283.add(plasmaGroup283)

plasmaGroupB283.rotation.y = (283 * ((Math.PI / 2) / 90))
plasmaGroupC283.add(plasmaGroupB283)

plasmaGroupC283.position.x = (Math.sin((283 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC283.position.z = (Math.cos((283 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC283)

// plasmaGroup284		###############################################################################
const plasmaGroup284 = new THREE.Group()

const plasmaGroupB284 = new THREE.Group()

const plasmaGroupC284 = new THREE.Group()

// redPlasmaMesh284
const redPlasmaGeometry284 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial284 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh284 = new THREE.Mesh(redPlasmaGeometry284, redPlasmaMaterial284)
redPlasmaMesh284.position.set( (Math.cos((1988 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1988 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup284.add(redPlasmaMesh284)

// greenPlasmaMesh284
const greenPlasmaGeometry284 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial284 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh284 = new THREE.Mesh(greenPlasmaGeometry284, greenPlasmaMaterial284)
greenPlasmaMesh284.position.set( (Math.cos((2828 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2828 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup284.add(greenPlasmaMesh284)

// bluePlasmaMesh284
const bluePlasmaGeometry284 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial284 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh284 = new THREE.Mesh(bluePlasmaGeometry284, bluePlasmaMaterial284)
bluePlasmaMesh284.position.set( (Math.cos((3668 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3668 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup284.add(bluePlasmaMesh284)

plasmaGroup284.rotation.z = Math.PI / 180 * 90
plasmaGroupB284.add(plasmaGroup284)

plasmaGroupB284.rotation.y = (284 * ((Math.PI / 2) / 90))
plasmaGroupC284.add(plasmaGroupB284)

plasmaGroupC284.position.x = (Math.sin((284 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC284.position.z = (Math.cos((284 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC284)

// plasmaGroup285		###############################################################################
const plasmaGroup285 = new THREE.Group()

const plasmaGroupB285 = new THREE.Group()

const plasmaGroupC285 = new THREE.Group()

// redPlasmaMesh285
const redPlasmaGeometry285 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial285 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh285 = new THREE.Mesh(redPlasmaGeometry285, redPlasmaMaterial285)
redPlasmaMesh285.position.set( (Math.cos((1995 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((1995 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup285.add(redPlasmaMesh285)

// greenPlasmaMesh285
const greenPlasmaGeometry285 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial285 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh285 = new THREE.Mesh(greenPlasmaGeometry285, greenPlasmaMaterial285)
greenPlasmaMesh285.position.set( (Math.cos((2835 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2835 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup285.add(greenPlasmaMesh285)

// bluePlasmaMesh285
const bluePlasmaGeometry285 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial285 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh285 = new THREE.Mesh(bluePlasmaGeometry285, bluePlasmaMaterial285)
bluePlasmaMesh285.position.set( (Math.cos((3675 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3675 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup285.add(bluePlasmaMesh285)

plasmaGroup285.rotation.z = Math.PI / 180 * 90
plasmaGroupB285.add(plasmaGroup285)

plasmaGroupB285.rotation.y = (285 * ((Math.PI / 2) / 90))
plasmaGroupC285.add(plasmaGroupB285)

plasmaGroupC285.position.x = (Math.sin((285 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC285.position.z = (Math.cos((285 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC285)

// plasmaGroup286		###############################################################################
const plasmaGroup286 = new THREE.Group()

const plasmaGroupB286 = new THREE.Group()

const plasmaGroupC286 = new THREE.Group()

// redPlasmaMesh286
const redPlasmaGeometry286 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial286 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh286 = new THREE.Mesh(redPlasmaGeometry286, redPlasmaMaterial286)
redPlasmaMesh286.position.set( (Math.cos((2002 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2002 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup286.add(redPlasmaMesh286)

// greenPlasmaMesh286
const greenPlasmaGeometry286 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial286 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh286 = new THREE.Mesh(greenPlasmaGeometry286, greenPlasmaMaterial286)
greenPlasmaMesh286.position.set( (Math.cos((2842 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2842 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup286.add(greenPlasmaMesh286)

// bluePlasmaMesh286
const bluePlasmaGeometry286 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial286 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh286 = new THREE.Mesh(bluePlasmaGeometry286, bluePlasmaMaterial286)
bluePlasmaMesh286.position.set( (Math.cos((3682 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3682 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup286.add(bluePlasmaMesh286)

plasmaGroup286.rotation.z = Math.PI / 180 * 90
plasmaGroupB286.add(plasmaGroup286)

plasmaGroupB286.rotation.y = (286 * ((Math.PI / 2) / 90))
plasmaGroupC286.add(plasmaGroupB286)

plasmaGroupC286.position.x = (Math.sin((286 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC286.position.z = (Math.cos((286 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC286)

// plasmaGroup287		###############################################################################
const plasmaGroup287 = new THREE.Group()

const plasmaGroupB287 = new THREE.Group()

const plasmaGroupC287 = new THREE.Group()

// redPlasmaMesh287
const redPlasmaGeometry287 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial287 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh287 = new THREE.Mesh(redPlasmaGeometry287, redPlasmaMaterial287)
redPlasmaMesh287.position.set( (Math.cos((2009 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2009 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup287.add(redPlasmaMesh287)

// greenPlasmaMesh287
const greenPlasmaGeometry287 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial287 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh287 = new THREE.Mesh(greenPlasmaGeometry287, greenPlasmaMaterial287)
greenPlasmaMesh287.position.set( (Math.cos((2849 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2849 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup287.add(greenPlasmaMesh287)

// bluePlasmaMesh287
const bluePlasmaGeometry287 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial287 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh287 = new THREE.Mesh(bluePlasmaGeometry287, bluePlasmaMaterial287)
bluePlasmaMesh287.position.set( (Math.cos((3689 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3689 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup287.add(bluePlasmaMesh287)

plasmaGroup287.rotation.z = Math.PI / 180 * 90
plasmaGroupB287.add(plasmaGroup287)

plasmaGroupB287.rotation.y = (287 * ((Math.PI / 2) / 90))
plasmaGroupC287.add(plasmaGroupB287)

plasmaGroupC287.position.x = (Math.sin((287 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC287.position.z = (Math.cos((287 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC287)

// plasmaGroup288		###############################################################################
const plasmaGroup288 = new THREE.Group()

const plasmaGroupB288 = new THREE.Group()

const plasmaGroupC288 = new THREE.Group()

// redPlasmaMesh288
const redPlasmaGeometry288 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial288 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh288 = new THREE.Mesh(redPlasmaGeometry288, redPlasmaMaterial288)
redPlasmaMesh288.position.set( (Math.cos((2016 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2016 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup288.add(redPlasmaMesh288)

// greenPlasmaMesh288
const greenPlasmaGeometry288 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial288 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh288 = new THREE.Mesh(greenPlasmaGeometry288, greenPlasmaMaterial288)
greenPlasmaMesh288.position.set( (Math.cos((2856 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2856 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup288.add(greenPlasmaMesh288)

// bluePlasmaMesh288
const bluePlasmaGeometry288 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial288 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh288 = new THREE.Mesh(bluePlasmaGeometry288, bluePlasmaMaterial288)
bluePlasmaMesh288.position.set( (Math.cos((3696 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3696 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup288.add(bluePlasmaMesh288)

plasmaGroup288.rotation.z = Math.PI / 180 * 90
plasmaGroupB288.add(plasmaGroup288)

plasmaGroupB288.rotation.y = (288 * ((Math.PI / 2) / 90))
plasmaGroupC288.add(plasmaGroupB288)

plasmaGroupC288.position.x = (Math.sin((288 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC288.position.z = (Math.cos((288 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC288)

// plasmaGroup289		###############################################################################
const plasmaGroup289 = new THREE.Group()

const plasmaGroupB289 = new THREE.Group()

const plasmaGroupC289 = new THREE.Group()

// redPlasmaMesh289
const redPlasmaGeometry289 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial289 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh289 = new THREE.Mesh(redPlasmaGeometry289, redPlasmaMaterial289)
redPlasmaMesh289.position.set( (Math.cos((2023 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2023 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup289.add(redPlasmaMesh289)

// greenPlasmaMesh289
const greenPlasmaGeometry289 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial289 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh289 = new THREE.Mesh(greenPlasmaGeometry289, greenPlasmaMaterial289)
greenPlasmaMesh289.position.set( (Math.cos((2863 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2863 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup289.add(greenPlasmaMesh289)

// bluePlasmaMesh289
const bluePlasmaGeometry289 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial289 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh289 = new THREE.Mesh(bluePlasmaGeometry289, bluePlasmaMaterial289)
bluePlasmaMesh289.position.set( (Math.cos((3703 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3703 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup289.add(bluePlasmaMesh289)

plasmaGroup289.rotation.z = Math.PI / 180 * 90
plasmaGroupB289.add(plasmaGroup289)

plasmaGroupB289.rotation.y = (289 * ((Math.PI / 2) / 90))
plasmaGroupC289.add(plasmaGroupB289)

plasmaGroupC289.position.x = (Math.sin((289 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC289.position.z = (Math.cos((289 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC289)

// plasmaGroup290		###############################################################################
const plasmaGroup290 = new THREE.Group()

const plasmaGroupB290 = new THREE.Group()

const plasmaGroupC290 = new THREE.Group()

// redPlasmaMesh290
const redPlasmaGeometry290 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial290 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh290 = new THREE.Mesh(redPlasmaGeometry290, redPlasmaMaterial290)
redPlasmaMesh290.position.set( (Math.cos((2030 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2030 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup290.add(redPlasmaMesh290)

// greenPlasmaMesh290
const greenPlasmaGeometry290 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial290 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh290 = new THREE.Mesh(greenPlasmaGeometry290, greenPlasmaMaterial290)
greenPlasmaMesh290.position.set( (Math.cos((2870 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2870 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup290.add(greenPlasmaMesh290)

// bluePlasmaMesh290
const bluePlasmaGeometry290 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial290 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh290 = new THREE.Mesh(bluePlasmaGeometry290, bluePlasmaMaterial290)
bluePlasmaMesh290.position.set( (Math.cos((3710 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3710 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup290.add(bluePlasmaMesh290)

plasmaGroup290.rotation.z = Math.PI / 180 * 90
plasmaGroupB290.add(plasmaGroup290)

plasmaGroupB290.rotation.y = (290 * ((Math.PI / 2) / 90))
plasmaGroupC290.add(plasmaGroupB290)

plasmaGroupC290.position.x = (Math.sin((290 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC290.position.z = (Math.cos((290 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC290)

// plasmaGroup291		###############################################################################
const plasmaGroup291 = new THREE.Group()

const plasmaGroupB291 = new THREE.Group()

const plasmaGroupC291 = new THREE.Group()

// redPlasmaMesh291
const redPlasmaGeometry291 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial291 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh291 = new THREE.Mesh(redPlasmaGeometry291, redPlasmaMaterial291)
redPlasmaMesh291.position.set( (Math.cos((2037 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2037 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup291.add(redPlasmaMesh291)

// greenPlasmaMesh291
const greenPlasmaGeometry291 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial291 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh291 = new THREE.Mesh(greenPlasmaGeometry291, greenPlasmaMaterial291)
greenPlasmaMesh291.position.set( (Math.cos((2877 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2877 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup291.add(greenPlasmaMesh291)

// bluePlasmaMesh291
const bluePlasmaGeometry291 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial291 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh291 = new THREE.Mesh(bluePlasmaGeometry291, bluePlasmaMaterial291)
bluePlasmaMesh291.position.set( (Math.cos((3717 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3717 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup291.add(bluePlasmaMesh291)

plasmaGroup291.rotation.z = Math.PI / 180 * 90
plasmaGroupB291.add(plasmaGroup291)

plasmaGroupB291.rotation.y = (291 * ((Math.PI / 2) / 90))
plasmaGroupC291.add(plasmaGroupB291)

plasmaGroupC291.position.x = (Math.sin((291 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC291.position.z = (Math.cos((291 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC291)

// plasmaGroup292		###############################################################################
const plasmaGroup292 = new THREE.Group()

const plasmaGroupB292 = new THREE.Group()

const plasmaGroupC292 = new THREE.Group()

// redPlasmaMesh292
const redPlasmaGeometry292 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial292 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh292 = new THREE.Mesh(redPlasmaGeometry292, redPlasmaMaterial292)
redPlasmaMesh292.position.set( (Math.cos((2044 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2044 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup292.add(redPlasmaMesh292)

// greenPlasmaMesh292
const greenPlasmaGeometry292 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial292 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh292 = new THREE.Mesh(greenPlasmaGeometry292, greenPlasmaMaterial292)
greenPlasmaMesh292.position.set( (Math.cos((2884 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2884 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup292.add(greenPlasmaMesh292)

// bluePlasmaMesh292
const bluePlasmaGeometry292 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial292 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh292 = new THREE.Mesh(bluePlasmaGeometry292, bluePlasmaMaterial292)
bluePlasmaMesh292.position.set( (Math.cos((3724 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3724 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup292.add(bluePlasmaMesh292)

plasmaGroup292.rotation.z = Math.PI / 180 * 90
plasmaGroupB292.add(plasmaGroup292)

plasmaGroupB292.rotation.y = (292 * ((Math.PI / 2) / 90))
plasmaGroupC292.add(plasmaGroupB292)

plasmaGroupC292.position.x = (Math.sin((292 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC292.position.z = (Math.cos((292 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC292)

// plasmaGroup293		###############################################################################
const plasmaGroup293 = new THREE.Group()

const plasmaGroupB293 = new THREE.Group()

const plasmaGroupC293 = new THREE.Group()

// redPlasmaMesh293
const redPlasmaGeometry293 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial293 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh293 = new THREE.Mesh(redPlasmaGeometry293, redPlasmaMaterial293)
redPlasmaMesh293.position.set( (Math.cos((2051 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2051 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup293.add(redPlasmaMesh293)

// greenPlasmaMesh293
const greenPlasmaGeometry293 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial293 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh293 = new THREE.Mesh(greenPlasmaGeometry293, greenPlasmaMaterial293)
greenPlasmaMesh293.position.set( (Math.cos((2891 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2891 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup293.add(greenPlasmaMesh293)

// bluePlasmaMesh293
const bluePlasmaGeometry293 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial293 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh293 = new THREE.Mesh(bluePlasmaGeometry293, bluePlasmaMaterial293)
bluePlasmaMesh293.position.set( (Math.cos((3731 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3731 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup293.add(bluePlasmaMesh293)

plasmaGroup293.rotation.z = Math.PI / 180 * 90
plasmaGroupB293.add(plasmaGroup293)

plasmaGroupB293.rotation.y = (293 * ((Math.PI / 2) / 90))
plasmaGroupC293.add(plasmaGroupB293)

plasmaGroupC293.position.x = (Math.sin((293 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC293.position.z = (Math.cos((293 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC293)

// plasmaGroup294		###############################################################################
const plasmaGroup294 = new THREE.Group()

const plasmaGroupB294 = new THREE.Group()

const plasmaGroupC294 = new THREE.Group()

// redPlasmaMesh294
const redPlasmaGeometry294 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial294 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh294 = new THREE.Mesh(redPlasmaGeometry294, redPlasmaMaterial294)
redPlasmaMesh294.position.set( (Math.cos((2058 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2058 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup294.add(redPlasmaMesh294)

// greenPlasmaMesh294
const greenPlasmaGeometry294 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial294 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh294 = new THREE.Mesh(greenPlasmaGeometry294, greenPlasmaMaterial294)
greenPlasmaMesh294.position.set( (Math.cos((2898 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2898 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup294.add(greenPlasmaMesh294)

// bluePlasmaMesh294
const bluePlasmaGeometry294 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial294 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh294 = new THREE.Mesh(bluePlasmaGeometry294, bluePlasmaMaterial294)
bluePlasmaMesh294.position.set( (Math.cos((3738 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3738 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup294.add(bluePlasmaMesh294)

plasmaGroup294.rotation.z = Math.PI / 180 * 90
plasmaGroupB294.add(plasmaGroup294)

plasmaGroupB294.rotation.y = (294 * ((Math.PI / 2) / 90))
plasmaGroupC294.add(plasmaGroupB294)

plasmaGroupC294.position.x = (Math.sin((294 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC294.position.z = (Math.cos((294 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC294)

// plasmaGroup295		###############################################################################
const plasmaGroup295 = new THREE.Group()

const plasmaGroupB295 = new THREE.Group()

const plasmaGroupC295 = new THREE.Group()

// redPlasmaMesh295
const redPlasmaGeometry295 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial295 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh295 = new THREE.Mesh(redPlasmaGeometry295, redPlasmaMaterial295)
redPlasmaMesh295.position.set( (Math.cos((2065 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2065 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup295.add(redPlasmaMesh295)

// greenPlasmaMesh295
const greenPlasmaGeometry295 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial295 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh295 = new THREE.Mesh(greenPlasmaGeometry295, greenPlasmaMaterial295)
greenPlasmaMesh295.position.set( (Math.cos((2905 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2905 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup295.add(greenPlasmaMesh295)

// bluePlasmaMesh295
const bluePlasmaGeometry295 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial295 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh295 = new THREE.Mesh(bluePlasmaGeometry295, bluePlasmaMaterial295)
bluePlasmaMesh295.position.set( (Math.cos((3745 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3745 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup295.add(bluePlasmaMesh295)

plasmaGroup295.rotation.z = Math.PI / 180 * 90
plasmaGroupB295.add(plasmaGroup295)

plasmaGroupB295.rotation.y = (295 * ((Math.PI / 2) / 90))
plasmaGroupC295.add(plasmaGroupB295)

plasmaGroupC295.position.x = (Math.sin((295 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC295.position.z = (Math.cos((295 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC295)

// plasmaGroup296		###############################################################################
const plasmaGroup296 = new THREE.Group()

const plasmaGroupB296 = new THREE.Group()

const plasmaGroupC296 = new THREE.Group()

// redPlasmaMesh296
const redPlasmaGeometry296 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial296 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh296 = new THREE.Mesh(redPlasmaGeometry296, redPlasmaMaterial296)
redPlasmaMesh296.position.set( (Math.cos((2072 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2072 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup296.add(redPlasmaMesh296)

// greenPlasmaMesh296
const greenPlasmaGeometry296 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial296 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh296 = new THREE.Mesh(greenPlasmaGeometry296, greenPlasmaMaterial296)
greenPlasmaMesh296.position.set( (Math.cos((2912 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2912 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup296.add(greenPlasmaMesh296)

// bluePlasmaMesh296
const bluePlasmaGeometry296 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial296 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh296 = new THREE.Mesh(bluePlasmaGeometry296, bluePlasmaMaterial296)
bluePlasmaMesh296.position.set( (Math.cos((3752 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3752 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup296.add(bluePlasmaMesh296)

plasmaGroup296.rotation.z = Math.PI / 180 * 90
plasmaGroupB296.add(plasmaGroup296)

plasmaGroupB296.rotation.y = (296 * ((Math.PI / 2) / 90))
plasmaGroupC296.add(plasmaGroupB296)

plasmaGroupC296.position.x = (Math.sin((296 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC296.position.z = (Math.cos((296 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC296)

// plasmaGroup297		###############################################################################
const plasmaGroup297 = new THREE.Group()

const plasmaGroupB297 = new THREE.Group()

const plasmaGroupC297 = new THREE.Group()

// redPlasmaMesh297
const redPlasmaGeometry297 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial297 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh297 = new THREE.Mesh(redPlasmaGeometry297, redPlasmaMaterial297)
redPlasmaMesh297.position.set( (Math.cos((2079 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2079 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup297.add(redPlasmaMesh297)

// greenPlasmaMesh297
const greenPlasmaGeometry297 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial297 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh297 = new THREE.Mesh(greenPlasmaGeometry297, greenPlasmaMaterial297)
greenPlasmaMesh297.position.set( (Math.cos((2919 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2919 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup297.add(greenPlasmaMesh297)

// bluePlasmaMesh297
const bluePlasmaGeometry297 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial297 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh297 = new THREE.Mesh(bluePlasmaGeometry297, bluePlasmaMaterial297)
bluePlasmaMesh297.position.set( (Math.cos((3759 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3759 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup297.add(bluePlasmaMesh297)

plasmaGroup297.rotation.z = Math.PI / 180 * 90
plasmaGroupB297.add(plasmaGroup297)

plasmaGroupB297.rotation.y = (297 * ((Math.PI / 2) / 90))
plasmaGroupC297.add(plasmaGroupB297)

plasmaGroupC297.position.x = (Math.sin((297 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC297.position.z = (Math.cos((297 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC297)

// plasmaGroup298		###############################################################################
const plasmaGroup298 = new THREE.Group()

const plasmaGroupB298 = new THREE.Group()

const plasmaGroupC298 = new THREE.Group()

// redPlasmaMesh298
const redPlasmaGeometry298 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial298 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh298 = new THREE.Mesh(redPlasmaGeometry298, redPlasmaMaterial298)
redPlasmaMesh298.position.set( (Math.cos((2086 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2086 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup298.add(redPlasmaMesh298)

// greenPlasmaMesh298
const greenPlasmaGeometry298 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial298 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh298 = new THREE.Mesh(greenPlasmaGeometry298, greenPlasmaMaterial298)
greenPlasmaMesh298.position.set( (Math.cos((2926 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2926 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup298.add(greenPlasmaMesh298)

// bluePlasmaMesh298
const bluePlasmaGeometry298 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial298 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh298 = new THREE.Mesh(bluePlasmaGeometry298, bluePlasmaMaterial298)
bluePlasmaMesh298.position.set( (Math.cos((3766 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3766 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup298.add(bluePlasmaMesh298)

plasmaGroup298.rotation.z = Math.PI / 180 * 90
plasmaGroupB298.add(plasmaGroup298)

plasmaGroupB298.rotation.y = (298 * ((Math.PI / 2) / 90))
plasmaGroupC298.add(plasmaGroupB298)

plasmaGroupC298.position.x = (Math.sin((298 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC298.position.z = (Math.cos((298 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC298)

// plasmaGroup299		###############################################################################
const plasmaGroup299 = new THREE.Group()

const plasmaGroupB299 = new THREE.Group()

const plasmaGroupC299 = new THREE.Group()

// redPlasmaMesh299
const redPlasmaGeometry299 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial299 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh299 = new THREE.Mesh(redPlasmaGeometry299, redPlasmaMaterial299)
redPlasmaMesh299.position.set( (Math.cos((2093 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2093 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup299.add(redPlasmaMesh299)

// greenPlasmaMesh299
const greenPlasmaGeometry299 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial299 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh299 = new THREE.Mesh(greenPlasmaGeometry299, greenPlasmaMaterial299)
greenPlasmaMesh299.position.set( (Math.cos((2933 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2933 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup299.add(greenPlasmaMesh299)

// bluePlasmaMesh299
const bluePlasmaGeometry299 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial299 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh299 = new THREE.Mesh(bluePlasmaGeometry299, bluePlasmaMaterial299)
bluePlasmaMesh299.position.set( (Math.cos((3773 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3773 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup299.add(bluePlasmaMesh299)

plasmaGroup299.rotation.z = Math.PI / 180 * 90
plasmaGroupB299.add(plasmaGroup299)

plasmaGroupB299.rotation.y = (299 * ((Math.PI / 2) / 90))
plasmaGroupC299.add(plasmaGroupB299)

plasmaGroupC299.position.x = (Math.sin((299 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC299.position.z = (Math.cos((299 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC299)

// plasmaGroup300		###############################################################################
const plasmaGroup300 = new THREE.Group()

const plasmaGroupB300 = new THREE.Group()

const plasmaGroupC300 = new THREE.Group()

// redPlasmaMesh300
const redPlasmaGeometry300 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial300 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh300 = new THREE.Mesh(redPlasmaGeometry300, redPlasmaMaterial300)
redPlasmaMesh300.position.set( (Math.cos((2100 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2100 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup300.add(redPlasmaMesh300)

// greenPlasmaMesh300
const greenPlasmaGeometry300 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial300 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh300 = new THREE.Mesh(greenPlasmaGeometry300, greenPlasmaMaterial300)
greenPlasmaMesh300.position.set( (Math.cos((2940 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2940 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup300.add(greenPlasmaMesh300)

// bluePlasmaMesh300
const bluePlasmaGeometry300 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial300 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh300 = new THREE.Mesh(bluePlasmaGeometry300, bluePlasmaMaterial300)
bluePlasmaMesh300.position.set( (Math.cos((3780 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3780 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup300.add(bluePlasmaMesh300)

plasmaGroup300.rotation.z = Math.PI / 180 * 90
plasmaGroupB300.add(plasmaGroup300)

plasmaGroupB300.rotation.y = (300 * ((Math.PI / 2) / 90))
plasmaGroupC300.add(plasmaGroupB300)

plasmaGroupC300.position.x = (Math.sin((300 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC300.position.z = (Math.cos((300 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC300)

// plasmaGroup301		###############################################################################
const plasmaGroup301 = new THREE.Group()

const plasmaGroupB301 = new THREE.Group()

const plasmaGroupC301 = new THREE.Group()

// redPlasmaMesh301
const redPlasmaGeometry301 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial301 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh301 = new THREE.Mesh(redPlasmaGeometry301, redPlasmaMaterial301)
redPlasmaMesh301.position.set( (Math.cos((2107 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2107 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup301.add(redPlasmaMesh301)

// greenPlasmaMesh301
const greenPlasmaGeometry301 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial301 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh301 = new THREE.Mesh(greenPlasmaGeometry301, greenPlasmaMaterial301)
greenPlasmaMesh301.position.set( (Math.cos((2947 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2947 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup301.add(greenPlasmaMesh301)

// bluePlasmaMesh301
const bluePlasmaGeometry301 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial301 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh301 = new THREE.Mesh(bluePlasmaGeometry301, bluePlasmaMaterial301)
bluePlasmaMesh301.position.set( (Math.cos((3787 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3787 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup301.add(bluePlasmaMesh301)

plasmaGroup301.rotation.z = Math.PI / 180 * 90
plasmaGroupB301.add(plasmaGroup301)

plasmaGroupB301.rotation.y = (301 * ((Math.PI / 2) / 90))
plasmaGroupC301.add(plasmaGroupB301)

plasmaGroupC301.position.x = (Math.sin((301 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC301.position.z = (Math.cos((301 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC301)

// plasmaGroup302		###############################################################################
const plasmaGroup302 = new THREE.Group()

const plasmaGroupB302 = new THREE.Group()

const plasmaGroupC302 = new THREE.Group()

// redPlasmaMesh302
const redPlasmaGeometry302 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial302 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh302 = new THREE.Mesh(redPlasmaGeometry302, redPlasmaMaterial302)
redPlasmaMesh302.position.set( (Math.cos((2114 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2114 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup302.add(redPlasmaMesh302)

// greenPlasmaMesh302
const greenPlasmaGeometry302 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial302 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh302 = new THREE.Mesh(greenPlasmaGeometry302, greenPlasmaMaterial302)
greenPlasmaMesh302.position.set( (Math.cos((2954 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2954 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup302.add(greenPlasmaMesh302)

// bluePlasmaMesh302
const bluePlasmaGeometry302 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial302 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh302 = new THREE.Mesh(bluePlasmaGeometry302, bluePlasmaMaterial302)
bluePlasmaMesh302.position.set( (Math.cos((3794 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3794 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup302.add(bluePlasmaMesh302)

plasmaGroup302.rotation.z = Math.PI / 180 * 90
plasmaGroupB302.add(plasmaGroup302)

plasmaGroupB302.rotation.y = (302 * ((Math.PI / 2) / 90))
plasmaGroupC302.add(plasmaGroupB302)

plasmaGroupC302.position.x = (Math.sin((302 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC302.position.z = (Math.cos((302 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC302)

// plasmaGroup303		###############################################################################
const plasmaGroup303 = new THREE.Group()

const plasmaGroupB303 = new THREE.Group()

const plasmaGroupC303 = new THREE.Group()

// redPlasmaMesh303
const redPlasmaGeometry303 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial303 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh303 = new THREE.Mesh(redPlasmaGeometry303, redPlasmaMaterial303)
redPlasmaMesh303.position.set( (Math.cos((2121 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2121 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup303.add(redPlasmaMesh303)

// greenPlasmaMesh303
const greenPlasmaGeometry303 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial303 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh303 = new THREE.Mesh(greenPlasmaGeometry303, greenPlasmaMaterial303)
greenPlasmaMesh303.position.set( (Math.cos((2961 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2961 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup303.add(greenPlasmaMesh303)

// bluePlasmaMesh303
const bluePlasmaGeometry303 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial303 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh303 = new THREE.Mesh(bluePlasmaGeometry303, bluePlasmaMaterial303)
bluePlasmaMesh303.position.set( (Math.cos((3801 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3801 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup303.add(bluePlasmaMesh303)

plasmaGroup303.rotation.z = Math.PI / 180 * 90
plasmaGroupB303.add(plasmaGroup303)

plasmaGroupB303.rotation.y = (303 * ((Math.PI / 2) / 90))
plasmaGroupC303.add(plasmaGroupB303)

plasmaGroupC303.position.x = (Math.sin((303 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC303.position.z = (Math.cos((303 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC303)

// plasmaGroup304		###############################################################################
const plasmaGroup304 = new THREE.Group()

const plasmaGroupB304 = new THREE.Group()

const plasmaGroupC304 = new THREE.Group()

// redPlasmaMesh304
const redPlasmaGeometry304 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial304 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh304 = new THREE.Mesh(redPlasmaGeometry304, redPlasmaMaterial304)
redPlasmaMesh304.position.set( (Math.cos((2128 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2128 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup304.add(redPlasmaMesh304)

// greenPlasmaMesh304
const greenPlasmaGeometry304 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial304 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh304 = new THREE.Mesh(greenPlasmaGeometry304, greenPlasmaMaterial304)
greenPlasmaMesh304.position.set( (Math.cos((2968 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2968 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup304.add(greenPlasmaMesh304)

// bluePlasmaMesh304
const bluePlasmaGeometry304 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial304 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh304 = new THREE.Mesh(bluePlasmaGeometry304, bluePlasmaMaterial304)
bluePlasmaMesh304.position.set( (Math.cos((3808 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3808 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup304.add(bluePlasmaMesh304)

plasmaGroup304.rotation.z = Math.PI / 180 * 90
plasmaGroupB304.add(plasmaGroup304)

plasmaGroupB304.rotation.y = (304 * ((Math.PI / 2) / 90))
plasmaGroupC304.add(plasmaGroupB304)

plasmaGroupC304.position.x = (Math.sin((304 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC304.position.z = (Math.cos((304 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC304)

// plasmaGroup305		###############################################################################
const plasmaGroup305 = new THREE.Group()

const plasmaGroupB305 = new THREE.Group()

const plasmaGroupC305 = new THREE.Group()

// redPlasmaMesh305
const redPlasmaGeometry305 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial305 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh305 = new THREE.Mesh(redPlasmaGeometry305, redPlasmaMaterial305)
redPlasmaMesh305.position.set( (Math.cos((2135 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2135 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup305.add(redPlasmaMesh305)

// greenPlasmaMesh305
const greenPlasmaGeometry305 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial305 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh305 = new THREE.Mesh(greenPlasmaGeometry305, greenPlasmaMaterial305)
greenPlasmaMesh305.position.set( (Math.cos((2975 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2975 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup305.add(greenPlasmaMesh305)

// bluePlasmaMesh305
const bluePlasmaGeometry305 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial305 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh305 = new THREE.Mesh(bluePlasmaGeometry305, bluePlasmaMaterial305)
bluePlasmaMesh305.position.set( (Math.cos((3815 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3815 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup305.add(bluePlasmaMesh305)

plasmaGroup305.rotation.z = Math.PI / 180 * 90
plasmaGroupB305.add(plasmaGroup305)

plasmaGroupB305.rotation.y = (305 * ((Math.PI / 2) / 90))
plasmaGroupC305.add(plasmaGroupB305)

plasmaGroupC305.position.x = (Math.sin((305 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC305.position.z = (Math.cos((305 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC305)

// plasmaGroup306		###############################################################################
const plasmaGroup306 = new THREE.Group()

const plasmaGroupB306 = new THREE.Group()

const plasmaGroupC306 = new THREE.Group()

// redPlasmaMesh306
const redPlasmaGeometry306 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial306 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh306 = new THREE.Mesh(redPlasmaGeometry306, redPlasmaMaterial306)
redPlasmaMesh306.position.set( (Math.cos((2142 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2142 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup306.add(redPlasmaMesh306)

// greenPlasmaMesh306
const greenPlasmaGeometry306 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial306 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh306 = new THREE.Mesh(greenPlasmaGeometry306, greenPlasmaMaterial306)
greenPlasmaMesh306.position.set( (Math.cos((2982 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2982 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup306.add(greenPlasmaMesh306)

// bluePlasmaMesh306
const bluePlasmaGeometry306 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial306 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh306 = new THREE.Mesh(bluePlasmaGeometry306, bluePlasmaMaterial306)
bluePlasmaMesh306.position.set( (Math.cos((3822 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3822 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup306.add(bluePlasmaMesh306)

plasmaGroup306.rotation.z = Math.PI / 180 * 90
plasmaGroupB306.add(plasmaGroup306)

plasmaGroupB306.rotation.y = (306 * ((Math.PI / 2) / 90))
plasmaGroupC306.add(plasmaGroupB306)

plasmaGroupC306.position.x = (Math.sin((306 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC306.position.z = (Math.cos((306 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC306)

// plasmaGroup307		###############################################################################
const plasmaGroup307 = new THREE.Group()

const plasmaGroupB307 = new THREE.Group()

const plasmaGroupC307 = new THREE.Group()

// redPlasmaMesh307
const redPlasmaGeometry307 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial307 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh307 = new THREE.Mesh(redPlasmaGeometry307, redPlasmaMaterial307)
redPlasmaMesh307.position.set( (Math.cos((2149 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2149 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup307.add(redPlasmaMesh307)

// greenPlasmaMesh307
const greenPlasmaGeometry307 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial307 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh307 = new THREE.Mesh(greenPlasmaGeometry307, greenPlasmaMaterial307)
greenPlasmaMesh307.position.set( (Math.cos((2989 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2989 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup307.add(greenPlasmaMesh307)

// bluePlasmaMesh307
const bluePlasmaGeometry307 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial307 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh307 = new THREE.Mesh(bluePlasmaGeometry307, bluePlasmaMaterial307)
bluePlasmaMesh307.position.set( (Math.cos((3829 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3829 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup307.add(bluePlasmaMesh307)

plasmaGroup307.rotation.z = Math.PI / 180 * 90
plasmaGroupB307.add(plasmaGroup307)

plasmaGroupB307.rotation.y = (307 * ((Math.PI / 2) / 90))
plasmaGroupC307.add(plasmaGroupB307)

plasmaGroupC307.position.x = (Math.sin((307 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC307.position.z = (Math.cos((307 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC307)

// plasmaGroup308		###############################################################################
const plasmaGroup308 = new THREE.Group()

const plasmaGroupB308 = new THREE.Group()

const plasmaGroupC308 = new THREE.Group()

// redPlasmaMesh308
const redPlasmaGeometry308 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial308 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh308 = new THREE.Mesh(redPlasmaGeometry308, redPlasmaMaterial308)
redPlasmaMesh308.position.set( (Math.cos((2156 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2156 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup308.add(redPlasmaMesh308)

// greenPlasmaMesh308
const greenPlasmaGeometry308 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial308 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh308 = new THREE.Mesh(greenPlasmaGeometry308, greenPlasmaMaterial308)
greenPlasmaMesh308.position.set( (Math.cos((2996 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2996 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup308.add(greenPlasmaMesh308)

// bluePlasmaMesh308
const bluePlasmaGeometry308 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial308 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh308 = new THREE.Mesh(bluePlasmaGeometry308, bluePlasmaMaterial308)
bluePlasmaMesh308.position.set( (Math.cos((3836 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3836 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup308.add(bluePlasmaMesh308)

plasmaGroup308.rotation.z = Math.PI / 180 * 90
plasmaGroupB308.add(plasmaGroup308)

plasmaGroupB308.rotation.y = (308 * ((Math.PI / 2) / 90))
plasmaGroupC308.add(plasmaGroupB308)

plasmaGroupC308.position.x = (Math.sin((308 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC308.position.z = (Math.cos((308 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC308)

// plasmaGroup309		###############################################################################
const plasmaGroup309 = new THREE.Group()

const plasmaGroupB309 = new THREE.Group()

const plasmaGroupC309 = new THREE.Group()

// redPlasmaMesh309
const redPlasmaGeometry309 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial309 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh309 = new THREE.Mesh(redPlasmaGeometry309, redPlasmaMaterial309)
redPlasmaMesh309.position.set( (Math.cos((2163 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2163 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup309.add(redPlasmaMesh309)

// greenPlasmaMesh309
const greenPlasmaGeometry309 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial309 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh309 = new THREE.Mesh(greenPlasmaGeometry309, greenPlasmaMaterial309)
greenPlasmaMesh309.position.set( (Math.cos((3003 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3003 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup309.add(greenPlasmaMesh309)

// bluePlasmaMesh309
const bluePlasmaGeometry309 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial309 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh309 = new THREE.Mesh(bluePlasmaGeometry309, bluePlasmaMaterial309)
bluePlasmaMesh309.position.set( (Math.cos((3843 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3843 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup309.add(bluePlasmaMesh309)

plasmaGroup309.rotation.z = Math.PI / 180 * 90
plasmaGroupB309.add(plasmaGroup309)

plasmaGroupB309.rotation.y = (309 * ((Math.PI / 2) / 90))
plasmaGroupC309.add(plasmaGroupB309)

plasmaGroupC309.position.x = (Math.sin((309 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC309.position.z = (Math.cos((309 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC309)

// plasmaGroup310		###############################################################################
const plasmaGroup310 = new THREE.Group()

const plasmaGroupB310 = new THREE.Group()

const plasmaGroupC310 = new THREE.Group()

// redPlasmaMesh310
const redPlasmaGeometry310 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial310 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh310 = new THREE.Mesh(redPlasmaGeometry310, redPlasmaMaterial310)
redPlasmaMesh310.position.set( (Math.cos((2170 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2170 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup310.add(redPlasmaMesh310)

// greenPlasmaMesh310
const greenPlasmaGeometry310 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial310 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh310 = new THREE.Mesh(greenPlasmaGeometry310, greenPlasmaMaterial310)
greenPlasmaMesh310.position.set( (Math.cos((3010 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3010 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup310.add(greenPlasmaMesh310)

// bluePlasmaMesh310
const bluePlasmaGeometry310 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial310 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh310 = new THREE.Mesh(bluePlasmaGeometry310, bluePlasmaMaterial310)
bluePlasmaMesh310.position.set( (Math.cos((3850 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3850 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup310.add(bluePlasmaMesh310)

plasmaGroup310.rotation.z = Math.PI / 180 * 90
plasmaGroupB310.add(plasmaGroup310)

plasmaGroupB310.rotation.y = (310 * ((Math.PI / 2) / 90))
plasmaGroupC310.add(plasmaGroupB310)

plasmaGroupC310.position.x = (Math.sin((310 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC310.position.z = (Math.cos((310 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC310)

// plasmaGroup311		###############################################################################
const plasmaGroup311 = new THREE.Group()

const plasmaGroupB311 = new THREE.Group()

const plasmaGroupC311 = new THREE.Group()

// redPlasmaMesh311
const redPlasmaGeometry311 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial311 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh311 = new THREE.Mesh(redPlasmaGeometry311, redPlasmaMaterial311)
redPlasmaMesh311.position.set( (Math.cos((2177 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2177 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup311.add(redPlasmaMesh311)

// greenPlasmaMesh311
const greenPlasmaGeometry311 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial311 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh311 = new THREE.Mesh(greenPlasmaGeometry311, greenPlasmaMaterial311)
greenPlasmaMesh311.position.set( (Math.cos((3017 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3017 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup311.add(greenPlasmaMesh311)

// bluePlasmaMesh311
const bluePlasmaGeometry311 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial311 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh311 = new THREE.Mesh(bluePlasmaGeometry311, bluePlasmaMaterial311)
bluePlasmaMesh311.position.set( (Math.cos((3857 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3857 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup311.add(bluePlasmaMesh311)

plasmaGroup311.rotation.z = Math.PI / 180 * 90
plasmaGroupB311.add(plasmaGroup311)

plasmaGroupB311.rotation.y = (311 * ((Math.PI / 2) / 90))
plasmaGroupC311.add(plasmaGroupB311)

plasmaGroupC311.position.x = (Math.sin((311 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC311.position.z = (Math.cos((311 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC311)

// plasmaGroup312		###############################################################################
const plasmaGroup312 = new THREE.Group()

const plasmaGroupB312 = new THREE.Group()

const plasmaGroupC312 = new THREE.Group()

// redPlasmaMesh312
const redPlasmaGeometry312 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial312 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh312 = new THREE.Mesh(redPlasmaGeometry312, redPlasmaMaterial312)
redPlasmaMesh312.position.set( (Math.cos((2184 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2184 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup312.add(redPlasmaMesh312)

// greenPlasmaMesh312
const greenPlasmaGeometry312 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial312 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh312 = new THREE.Mesh(greenPlasmaGeometry312, greenPlasmaMaterial312)
greenPlasmaMesh312.position.set( (Math.cos((3024 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3024 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup312.add(greenPlasmaMesh312)

// bluePlasmaMesh312
const bluePlasmaGeometry312 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial312 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh312 = new THREE.Mesh(bluePlasmaGeometry312, bluePlasmaMaterial312)
bluePlasmaMesh312.position.set( (Math.cos((3864 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3864 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup312.add(bluePlasmaMesh312)

plasmaGroup312.rotation.z = Math.PI / 180 * 90
plasmaGroupB312.add(plasmaGroup312)

plasmaGroupB312.rotation.y = (312 * ((Math.PI / 2) / 90))
plasmaGroupC312.add(plasmaGroupB312)

plasmaGroupC312.position.x = (Math.sin((312 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC312.position.z = (Math.cos((312 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC312)

// plasmaGroup313		###############################################################################
const plasmaGroup313 = new THREE.Group()

const plasmaGroupB313 = new THREE.Group()

const plasmaGroupC313 = new THREE.Group()

// redPlasmaMesh313
const redPlasmaGeometry313 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial313 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh313 = new THREE.Mesh(redPlasmaGeometry313, redPlasmaMaterial313)
redPlasmaMesh313.position.set( (Math.cos((2191 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2191 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup313.add(redPlasmaMesh313)

// greenPlasmaMesh313
const greenPlasmaGeometry313 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial313 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh313 = new THREE.Mesh(greenPlasmaGeometry313, greenPlasmaMaterial313)
greenPlasmaMesh313.position.set( (Math.cos((3031 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3031 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup313.add(greenPlasmaMesh313)

// bluePlasmaMesh313
const bluePlasmaGeometry313 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial313 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh313 = new THREE.Mesh(bluePlasmaGeometry313, bluePlasmaMaterial313)
bluePlasmaMesh313.position.set( (Math.cos((3871 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3871 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup313.add(bluePlasmaMesh313)

plasmaGroup313.rotation.z = Math.PI / 180 * 90
plasmaGroupB313.add(plasmaGroup313)

plasmaGroupB313.rotation.y = (313 * ((Math.PI / 2) / 90))
plasmaGroupC313.add(plasmaGroupB313)

plasmaGroupC313.position.x = (Math.sin((313 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC313.position.z = (Math.cos((313 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC313)

// plasmaGroup314		###############################################################################
const plasmaGroup314 = new THREE.Group()

const plasmaGroupB314 = new THREE.Group()

const plasmaGroupC314 = new THREE.Group()

// redPlasmaMesh314
const redPlasmaGeometry314 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial314 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh314 = new THREE.Mesh(redPlasmaGeometry314, redPlasmaMaterial314)
redPlasmaMesh314.position.set( (Math.cos((2198 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2198 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup314.add(redPlasmaMesh314)

// greenPlasmaMesh314
const greenPlasmaGeometry314 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial314 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh314 = new THREE.Mesh(greenPlasmaGeometry314, greenPlasmaMaterial314)
greenPlasmaMesh314.position.set( (Math.cos((3038 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3038 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup314.add(greenPlasmaMesh314)

// bluePlasmaMesh314
const bluePlasmaGeometry314 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial314 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh314 = new THREE.Mesh(bluePlasmaGeometry314, bluePlasmaMaterial314)
bluePlasmaMesh314.position.set( (Math.cos((3878 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3878 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup314.add(bluePlasmaMesh314)

plasmaGroup314.rotation.z = Math.PI / 180 * 90
plasmaGroupB314.add(plasmaGroup314)

plasmaGroupB314.rotation.y = (314 * ((Math.PI / 2) / 90))
plasmaGroupC314.add(plasmaGroupB314)

plasmaGroupC314.position.x = (Math.sin((314 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC314.position.z = (Math.cos((314 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC314)

// plasmaGroup315		###############################################################################
const plasmaGroup315 = new THREE.Group()

const plasmaGroupB315 = new THREE.Group()

const plasmaGroupC315 = new THREE.Group()

// redPlasmaMesh315
const redPlasmaGeometry315 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial315 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh315 = new THREE.Mesh(redPlasmaGeometry315, redPlasmaMaterial315)
redPlasmaMesh315.position.set( (Math.cos((2205 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2205 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup315.add(redPlasmaMesh315)

// greenPlasmaMesh315
const greenPlasmaGeometry315 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial315 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh315 = new THREE.Mesh(greenPlasmaGeometry315, greenPlasmaMaterial315)
greenPlasmaMesh315.position.set( (Math.cos((3045 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3045 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup315.add(greenPlasmaMesh315)

// bluePlasmaMesh315
const bluePlasmaGeometry315 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial315 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh315 = new THREE.Mesh(bluePlasmaGeometry315, bluePlasmaMaterial315)
bluePlasmaMesh315.position.set( (Math.cos((3885 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3885 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup315.add(bluePlasmaMesh315)

plasmaGroup315.rotation.z = Math.PI / 180 * 90
plasmaGroupB315.add(plasmaGroup315)

plasmaGroupB315.rotation.y = (315 * ((Math.PI / 2) / 90))
plasmaGroupC315.add(plasmaGroupB315)

plasmaGroupC315.position.x = (Math.sin((315 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC315.position.z = (Math.cos((315 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC315)

// plasmaGroup316		###############################################################################
const plasmaGroup316 = new THREE.Group()

const plasmaGroupB316 = new THREE.Group()

const plasmaGroupC316 = new THREE.Group()

// redPlasmaMesh316
const redPlasmaGeometry316 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial316 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh316 = new THREE.Mesh(redPlasmaGeometry316, redPlasmaMaterial316)
redPlasmaMesh316.position.set( (Math.cos((2212 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2212 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup316.add(redPlasmaMesh316)

// greenPlasmaMesh316
const greenPlasmaGeometry316 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial316 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh316 = new THREE.Mesh(greenPlasmaGeometry316, greenPlasmaMaterial316)
greenPlasmaMesh316.position.set( (Math.cos((3052 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3052 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup316.add(greenPlasmaMesh316)

// bluePlasmaMesh316
const bluePlasmaGeometry316 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial316 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh316 = new THREE.Mesh(bluePlasmaGeometry316, bluePlasmaMaterial316)
bluePlasmaMesh316.position.set( (Math.cos((3892 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3892 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup316.add(bluePlasmaMesh316)

plasmaGroup316.rotation.z = Math.PI / 180 * 90
plasmaGroupB316.add(plasmaGroup316)

plasmaGroupB316.rotation.y = (316 * ((Math.PI / 2) / 90))
plasmaGroupC316.add(plasmaGroupB316)

plasmaGroupC316.position.x = (Math.sin((316 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC316.position.z = (Math.cos((316 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC316)

// plasmaGroup317		###############################################################################
const plasmaGroup317 = new THREE.Group()

const plasmaGroupB317 = new THREE.Group()

const plasmaGroupC317 = new THREE.Group()

// redPlasmaMesh317
const redPlasmaGeometry317 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial317 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh317 = new THREE.Mesh(redPlasmaGeometry317, redPlasmaMaterial317)
redPlasmaMesh317.position.set( (Math.cos((2219 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2219 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup317.add(redPlasmaMesh317)

// greenPlasmaMesh317
const greenPlasmaGeometry317 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial317 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh317 = new THREE.Mesh(greenPlasmaGeometry317, greenPlasmaMaterial317)
greenPlasmaMesh317.position.set( (Math.cos((3059 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3059 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup317.add(greenPlasmaMesh317)

// bluePlasmaMesh317
const bluePlasmaGeometry317 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial317 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh317 = new THREE.Mesh(bluePlasmaGeometry317, bluePlasmaMaterial317)
bluePlasmaMesh317.position.set( (Math.cos((3899 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3899 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup317.add(bluePlasmaMesh317)

plasmaGroup317.rotation.z = Math.PI / 180 * 90
plasmaGroupB317.add(plasmaGroup317)

plasmaGroupB317.rotation.y = (317 * ((Math.PI / 2) / 90))
plasmaGroupC317.add(plasmaGroupB317)

plasmaGroupC317.position.x = (Math.sin((317 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC317.position.z = (Math.cos((317 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC317)

// plasmaGroup318		###############################################################################
const plasmaGroup318 = new THREE.Group()

const plasmaGroupB318 = new THREE.Group()

const plasmaGroupC318 = new THREE.Group()

// redPlasmaMesh318
const redPlasmaGeometry318 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial318 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh318 = new THREE.Mesh(redPlasmaGeometry318, redPlasmaMaterial318)
redPlasmaMesh318.position.set( (Math.cos((2226 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2226 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup318.add(redPlasmaMesh318)

// greenPlasmaMesh318
const greenPlasmaGeometry318 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial318 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh318 = new THREE.Mesh(greenPlasmaGeometry318, greenPlasmaMaterial318)
greenPlasmaMesh318.position.set( (Math.cos((3066 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3066 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup318.add(greenPlasmaMesh318)

// bluePlasmaMesh318
const bluePlasmaGeometry318 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial318 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh318 = new THREE.Mesh(bluePlasmaGeometry318, bluePlasmaMaterial318)
bluePlasmaMesh318.position.set( (Math.cos((3906 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3906 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup318.add(bluePlasmaMesh318)

plasmaGroup318.rotation.z = Math.PI / 180 * 90
plasmaGroupB318.add(plasmaGroup318)

plasmaGroupB318.rotation.y = (318 * ((Math.PI / 2) / 90))
plasmaGroupC318.add(plasmaGroupB318)

plasmaGroupC318.position.x = (Math.sin((318 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC318.position.z = (Math.cos((318 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC318)

// plasmaGroup319		###############################################################################
const plasmaGroup319 = new THREE.Group()

const plasmaGroupB319 = new THREE.Group()

const plasmaGroupC319 = new THREE.Group()

// redPlasmaMesh319
const redPlasmaGeometry319 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial319 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh319 = new THREE.Mesh(redPlasmaGeometry319, redPlasmaMaterial319)
redPlasmaMesh319.position.set( (Math.cos((2233 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2233 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup319.add(redPlasmaMesh319)

// greenPlasmaMesh319
const greenPlasmaGeometry319 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial319 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh319 = new THREE.Mesh(greenPlasmaGeometry319, greenPlasmaMaterial319)
greenPlasmaMesh319.position.set( (Math.cos((3073 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3073 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup319.add(greenPlasmaMesh319)

// bluePlasmaMesh319
const bluePlasmaGeometry319 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial319 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh319 = new THREE.Mesh(bluePlasmaGeometry319, bluePlasmaMaterial319)
bluePlasmaMesh319.position.set( (Math.cos((3913 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3913 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup319.add(bluePlasmaMesh319)

plasmaGroup319.rotation.z = Math.PI / 180 * 90
plasmaGroupB319.add(plasmaGroup319)

plasmaGroupB319.rotation.y = (319 * ((Math.PI / 2) / 90))
plasmaGroupC319.add(plasmaGroupB319)

plasmaGroupC319.position.x = (Math.sin((319 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC319.position.z = (Math.cos((319 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC319)

// plasmaGroup320		###############################################################################
const plasmaGroup320 = new THREE.Group()

const plasmaGroupB320 = new THREE.Group()

const plasmaGroupC320 = new THREE.Group()

// redPlasmaMesh320
const redPlasmaGeometry320 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial320 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh320 = new THREE.Mesh(redPlasmaGeometry320, redPlasmaMaterial320)
redPlasmaMesh320.position.set( (Math.cos((2240 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2240 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup320.add(redPlasmaMesh320)

// greenPlasmaMesh320
const greenPlasmaGeometry320 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial320 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh320 = new THREE.Mesh(greenPlasmaGeometry320, greenPlasmaMaterial320)
greenPlasmaMesh320.position.set( (Math.cos((3080 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3080 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup320.add(greenPlasmaMesh320)

// bluePlasmaMesh320
const bluePlasmaGeometry320 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial320 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh320 = new THREE.Mesh(bluePlasmaGeometry320, bluePlasmaMaterial320)
bluePlasmaMesh320.position.set( (Math.cos((3920 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3920 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup320.add(bluePlasmaMesh320)

plasmaGroup320.rotation.z = Math.PI / 180 * 90
plasmaGroupB320.add(plasmaGroup320)

plasmaGroupB320.rotation.y = (320 * ((Math.PI / 2) / 90))
plasmaGroupC320.add(plasmaGroupB320)

plasmaGroupC320.position.x = (Math.sin((320 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC320.position.z = (Math.cos((320 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC320)

// plasmaGroup321		###############################################################################
const plasmaGroup321 = new THREE.Group()

const plasmaGroupB321 = new THREE.Group()

const plasmaGroupC321 = new THREE.Group()

// redPlasmaMesh321
const redPlasmaGeometry321 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial321 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh321 = new THREE.Mesh(redPlasmaGeometry321, redPlasmaMaterial321)
redPlasmaMesh321.position.set( (Math.cos((2247 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2247 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup321.add(redPlasmaMesh321)

// greenPlasmaMesh321
const greenPlasmaGeometry321 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial321 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh321 = new THREE.Mesh(greenPlasmaGeometry321, greenPlasmaMaterial321)
greenPlasmaMesh321.position.set( (Math.cos((3087 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3087 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup321.add(greenPlasmaMesh321)

// bluePlasmaMesh321
const bluePlasmaGeometry321 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial321 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh321 = new THREE.Mesh(bluePlasmaGeometry321, bluePlasmaMaterial321)
bluePlasmaMesh321.position.set( (Math.cos((3927 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3927 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup321.add(bluePlasmaMesh321)

plasmaGroup321.rotation.z = Math.PI / 180 * 90
plasmaGroupB321.add(plasmaGroup321)

plasmaGroupB321.rotation.y = (321 * ((Math.PI / 2) / 90))
plasmaGroupC321.add(plasmaGroupB321)

plasmaGroupC321.position.x = (Math.sin((321 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC321.position.z = (Math.cos((321 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC321)

// plasmaGroup322		###############################################################################
const plasmaGroup322 = new THREE.Group()

const plasmaGroupB322 = new THREE.Group()

const plasmaGroupC322 = new THREE.Group()

// redPlasmaMesh322
const redPlasmaGeometry322 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial322 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh322 = new THREE.Mesh(redPlasmaGeometry322, redPlasmaMaterial322)
redPlasmaMesh322.position.set( (Math.cos((2254 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2254 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup322.add(redPlasmaMesh322)

// greenPlasmaMesh322
const greenPlasmaGeometry322 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial322 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh322 = new THREE.Mesh(greenPlasmaGeometry322, greenPlasmaMaterial322)
greenPlasmaMesh322.position.set( (Math.cos((3094 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3094 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup322.add(greenPlasmaMesh322)

// bluePlasmaMesh322
const bluePlasmaGeometry322 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial322 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh322 = new THREE.Mesh(bluePlasmaGeometry322, bluePlasmaMaterial322)
bluePlasmaMesh322.position.set( (Math.cos((3934 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3934 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup322.add(bluePlasmaMesh322)

plasmaGroup322.rotation.z = Math.PI / 180 * 90
plasmaGroupB322.add(plasmaGroup322)

plasmaGroupB322.rotation.y = (322 * ((Math.PI / 2) / 90))
plasmaGroupC322.add(plasmaGroupB322)

plasmaGroupC322.position.x = (Math.sin((322 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC322.position.z = (Math.cos((322 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC322)

// plasmaGroup323		###############################################################################
const plasmaGroup323 = new THREE.Group()

const plasmaGroupB323 = new THREE.Group()

const plasmaGroupC323 = new THREE.Group()

// redPlasmaMesh323
const redPlasmaGeometry323 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial323 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh323 = new THREE.Mesh(redPlasmaGeometry323, redPlasmaMaterial323)
redPlasmaMesh323.position.set( (Math.cos((2261 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2261 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup323.add(redPlasmaMesh323)

// greenPlasmaMesh323
const greenPlasmaGeometry323 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial323 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh323 = new THREE.Mesh(greenPlasmaGeometry323, greenPlasmaMaterial323)
greenPlasmaMesh323.position.set( (Math.cos((3101 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3101 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup323.add(greenPlasmaMesh323)

// bluePlasmaMesh323
const bluePlasmaGeometry323 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial323 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh323 = new THREE.Mesh(bluePlasmaGeometry323, bluePlasmaMaterial323)
bluePlasmaMesh323.position.set( (Math.cos((3941 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3941 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup323.add(bluePlasmaMesh323)

plasmaGroup323.rotation.z = Math.PI / 180 * 90
plasmaGroupB323.add(plasmaGroup323)

plasmaGroupB323.rotation.y = (323 * ((Math.PI / 2) / 90))
plasmaGroupC323.add(plasmaGroupB323)

plasmaGroupC323.position.x = (Math.sin((323 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC323.position.z = (Math.cos((323 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC323)

// plasmaGroup324		###############################################################################
const plasmaGroup324 = new THREE.Group()

const plasmaGroupB324 = new THREE.Group()

const plasmaGroupC324 = new THREE.Group()

// redPlasmaMesh324
const redPlasmaGeometry324 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial324 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh324 = new THREE.Mesh(redPlasmaGeometry324, redPlasmaMaterial324)
redPlasmaMesh324.position.set( (Math.cos((2268 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2268 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup324.add(redPlasmaMesh324)

// greenPlasmaMesh324
const greenPlasmaGeometry324 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial324 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh324 = new THREE.Mesh(greenPlasmaGeometry324, greenPlasmaMaterial324)
greenPlasmaMesh324.position.set( (Math.cos((3108 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3108 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup324.add(greenPlasmaMesh324)

// bluePlasmaMesh324
const bluePlasmaGeometry324 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial324 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh324 = new THREE.Mesh(bluePlasmaGeometry324, bluePlasmaMaterial324)
bluePlasmaMesh324.position.set( (Math.cos((3948 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3948 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup324.add(bluePlasmaMesh324)

plasmaGroup324.rotation.z = Math.PI / 180 * 90
plasmaGroupB324.add(plasmaGroup324)

plasmaGroupB324.rotation.y = (324 * ((Math.PI / 2) / 90))
plasmaGroupC324.add(plasmaGroupB324)

plasmaGroupC324.position.x = (Math.sin((324 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC324.position.z = (Math.cos((324 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC324)

// plasmaGroup325		###############################################################################
const plasmaGroup325 = new THREE.Group()

const plasmaGroupB325 = new THREE.Group()

const plasmaGroupC325 = new THREE.Group()

// redPlasmaMesh325
const redPlasmaGeometry325 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial325 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh325 = new THREE.Mesh(redPlasmaGeometry325, redPlasmaMaterial325)
redPlasmaMesh325.position.set( (Math.cos((2275 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2275 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup325.add(redPlasmaMesh325)

// greenPlasmaMesh325
const greenPlasmaGeometry325 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial325 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh325 = new THREE.Mesh(greenPlasmaGeometry325, greenPlasmaMaterial325)
greenPlasmaMesh325.position.set( (Math.cos((3115 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3115 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup325.add(greenPlasmaMesh325)

// bluePlasmaMesh325
const bluePlasmaGeometry325 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial325 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh325 = new THREE.Mesh(bluePlasmaGeometry325, bluePlasmaMaterial325)
bluePlasmaMesh325.position.set( (Math.cos((3955 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3955 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup325.add(bluePlasmaMesh325)

plasmaGroup325.rotation.z = Math.PI / 180 * 90
plasmaGroupB325.add(plasmaGroup325)

plasmaGroupB325.rotation.y = (325 * ((Math.PI / 2) / 90))
plasmaGroupC325.add(plasmaGroupB325)

plasmaGroupC325.position.x = (Math.sin((325 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC325.position.z = (Math.cos((325 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC325)

// plasmaGroup326		###############################################################################
const plasmaGroup326 = new THREE.Group()

const plasmaGroupB326 = new THREE.Group()

const plasmaGroupC326 = new THREE.Group()

// redPlasmaMesh326
const redPlasmaGeometry326 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial326 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh326 = new THREE.Mesh(redPlasmaGeometry326, redPlasmaMaterial326)
redPlasmaMesh326.position.set( (Math.cos((2282 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2282 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup326.add(redPlasmaMesh326)

// greenPlasmaMesh326
const greenPlasmaGeometry326 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial326 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh326 = new THREE.Mesh(greenPlasmaGeometry326, greenPlasmaMaterial326)
greenPlasmaMesh326.position.set( (Math.cos((3122 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3122 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup326.add(greenPlasmaMesh326)

// bluePlasmaMesh326
const bluePlasmaGeometry326 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial326 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh326 = new THREE.Mesh(bluePlasmaGeometry326, bluePlasmaMaterial326)
bluePlasmaMesh326.position.set( (Math.cos((3962 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3962 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup326.add(bluePlasmaMesh326)

plasmaGroup326.rotation.z = Math.PI / 180 * 90
plasmaGroupB326.add(plasmaGroup326)

plasmaGroupB326.rotation.y = (326 * ((Math.PI / 2) / 90))
plasmaGroupC326.add(plasmaGroupB326)

plasmaGroupC326.position.x = (Math.sin((326 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC326.position.z = (Math.cos((326 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC326)

// plasmaGroup327		###############################################################################
const plasmaGroup327 = new THREE.Group()

const plasmaGroupB327 = new THREE.Group()

const plasmaGroupC327 = new THREE.Group()

// redPlasmaMesh327
const redPlasmaGeometry327 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial327 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh327 = new THREE.Mesh(redPlasmaGeometry327, redPlasmaMaterial327)
redPlasmaMesh327.position.set( (Math.cos((2289 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2289 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup327.add(redPlasmaMesh327)

// greenPlasmaMesh327
const greenPlasmaGeometry327 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial327 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh327 = new THREE.Mesh(greenPlasmaGeometry327, greenPlasmaMaterial327)
greenPlasmaMesh327.position.set( (Math.cos((3129 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3129 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup327.add(greenPlasmaMesh327)

// bluePlasmaMesh327
const bluePlasmaGeometry327 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial327 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh327 = new THREE.Mesh(bluePlasmaGeometry327, bluePlasmaMaterial327)
bluePlasmaMesh327.position.set( (Math.cos((3969 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3969 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup327.add(bluePlasmaMesh327)

plasmaGroup327.rotation.z = Math.PI / 180 * 90
plasmaGroupB327.add(plasmaGroup327)

plasmaGroupB327.rotation.y = (327 * ((Math.PI / 2) / 90))
plasmaGroupC327.add(plasmaGroupB327)

plasmaGroupC327.position.x = (Math.sin((327 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC327.position.z = (Math.cos((327 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC327)

// plasmaGroup328		###############################################################################
const plasmaGroup328 = new THREE.Group()

const plasmaGroupB328 = new THREE.Group()

const plasmaGroupC328 = new THREE.Group()

// redPlasmaMesh328
const redPlasmaGeometry328 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial328 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh328 = new THREE.Mesh(redPlasmaGeometry328, redPlasmaMaterial328)
redPlasmaMesh328.position.set( (Math.cos((2296 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2296 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup328.add(redPlasmaMesh328)

// greenPlasmaMesh328
const greenPlasmaGeometry328 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial328 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh328 = new THREE.Mesh(greenPlasmaGeometry328, greenPlasmaMaterial328)
greenPlasmaMesh328.position.set( (Math.cos((3136 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3136 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup328.add(greenPlasmaMesh328)

// bluePlasmaMesh328
const bluePlasmaGeometry328 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial328 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh328 = new THREE.Mesh(bluePlasmaGeometry328, bluePlasmaMaterial328)
bluePlasmaMesh328.position.set( (Math.cos((3976 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3976 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup328.add(bluePlasmaMesh328)

plasmaGroup328.rotation.z = Math.PI / 180 * 90
plasmaGroupB328.add(plasmaGroup328)

plasmaGroupB328.rotation.y = (328 * ((Math.PI / 2) / 90))
plasmaGroupC328.add(plasmaGroupB328)

plasmaGroupC328.position.x = (Math.sin((328 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC328.position.z = (Math.cos((328 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC328)

// plasmaGroup329		###############################################################################
const plasmaGroup329 = new THREE.Group()

const plasmaGroupB329 = new THREE.Group()

const plasmaGroupC329 = new THREE.Group()

// redPlasmaMesh329
const redPlasmaGeometry329 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial329 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh329 = new THREE.Mesh(redPlasmaGeometry329, redPlasmaMaterial329)
redPlasmaMesh329.position.set( (Math.cos((2303 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2303 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup329.add(redPlasmaMesh329)

// greenPlasmaMesh329
const greenPlasmaGeometry329 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial329 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh329 = new THREE.Mesh(greenPlasmaGeometry329, greenPlasmaMaterial329)
greenPlasmaMesh329.position.set( (Math.cos((3143 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3143 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup329.add(greenPlasmaMesh329)

// bluePlasmaMesh329
const bluePlasmaGeometry329 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial329 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh329 = new THREE.Mesh(bluePlasmaGeometry329, bluePlasmaMaterial329)
bluePlasmaMesh329.position.set( (Math.cos((3983 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3983 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup329.add(bluePlasmaMesh329)

plasmaGroup329.rotation.z = Math.PI / 180 * 90
plasmaGroupB329.add(plasmaGroup329)

plasmaGroupB329.rotation.y = (329 * ((Math.PI / 2) / 90))
plasmaGroupC329.add(plasmaGroupB329)

plasmaGroupC329.position.x = (Math.sin((329 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC329.position.z = (Math.cos((329 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC329)

// plasmaGroup330		###############################################################################
const plasmaGroup330 = new THREE.Group()

const plasmaGroupB330 = new THREE.Group()

const plasmaGroupC330 = new THREE.Group()

// redPlasmaMesh330
const redPlasmaGeometry330 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial330 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh330 = new THREE.Mesh(redPlasmaGeometry330, redPlasmaMaterial330)
redPlasmaMesh330.position.set( (Math.cos((2310 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2310 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup330.add(redPlasmaMesh330)

// greenPlasmaMesh330
const greenPlasmaGeometry330 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial330 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh330 = new THREE.Mesh(greenPlasmaGeometry330, greenPlasmaMaterial330)
greenPlasmaMesh330.position.set( (Math.cos((3150 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3150 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup330.add(greenPlasmaMesh330)

// bluePlasmaMesh330
const bluePlasmaGeometry330 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial330 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh330 = new THREE.Mesh(bluePlasmaGeometry330, bluePlasmaMaterial330)
bluePlasmaMesh330.position.set( (Math.cos((3990 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3990 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup330.add(bluePlasmaMesh330)

plasmaGroup330.rotation.z = Math.PI / 180 * 90
plasmaGroupB330.add(plasmaGroup330)

plasmaGroupB330.rotation.y = (330 * ((Math.PI / 2) / 90))
plasmaGroupC330.add(plasmaGroupB330)

plasmaGroupC330.position.x = (Math.sin((330 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC330.position.z = (Math.cos((330 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC330)

// plasmaGroup331		###############################################################################
const plasmaGroup331 = new THREE.Group()

const plasmaGroupB331 = new THREE.Group()

const plasmaGroupC331 = new THREE.Group()

// redPlasmaMesh331
const redPlasmaGeometry331 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial331 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh331 = new THREE.Mesh(redPlasmaGeometry331, redPlasmaMaterial331)
redPlasmaMesh331.position.set( (Math.cos((2317 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2317 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup331.add(redPlasmaMesh331)

// greenPlasmaMesh331
const greenPlasmaGeometry331 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial331 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh331 = new THREE.Mesh(greenPlasmaGeometry331, greenPlasmaMaterial331)
greenPlasmaMesh331.position.set( (Math.cos((3157 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3157 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup331.add(greenPlasmaMesh331)

// bluePlasmaMesh331
const bluePlasmaGeometry331 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial331 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh331 = new THREE.Mesh(bluePlasmaGeometry331, bluePlasmaMaterial331)
bluePlasmaMesh331.position.set( (Math.cos((3997 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3997 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup331.add(bluePlasmaMesh331)

plasmaGroup331.rotation.z = Math.PI / 180 * 90
plasmaGroupB331.add(plasmaGroup331)

plasmaGroupB331.rotation.y = (331 * ((Math.PI / 2) / 90))
plasmaGroupC331.add(plasmaGroupB331)

plasmaGroupC331.position.x = (Math.sin((331 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC331.position.z = (Math.cos((331 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC331)

// plasmaGroup332		###############################################################################
const plasmaGroup332 = new THREE.Group()

const plasmaGroupB332 = new THREE.Group()

const plasmaGroupC332 = new THREE.Group()

// redPlasmaMesh332
const redPlasmaGeometry332 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial332 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh332 = new THREE.Mesh(redPlasmaGeometry332, redPlasmaMaterial332)
redPlasmaMesh332.position.set( (Math.cos((2324 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2324 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup332.add(redPlasmaMesh332)

// greenPlasmaMesh332
const greenPlasmaGeometry332 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial332 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh332 = new THREE.Mesh(greenPlasmaGeometry332, greenPlasmaMaterial332)
greenPlasmaMesh332.position.set( (Math.cos((3164 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3164 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup332.add(greenPlasmaMesh332)

// bluePlasmaMesh332
const bluePlasmaGeometry332 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial332 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh332 = new THREE.Mesh(bluePlasmaGeometry332, bluePlasmaMaterial332)
bluePlasmaMesh332.position.set( (Math.cos((4004 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4004 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup332.add(bluePlasmaMesh332)

plasmaGroup332.rotation.z = Math.PI / 180 * 90
plasmaGroupB332.add(plasmaGroup332)

plasmaGroupB332.rotation.y = (332 * ((Math.PI / 2) / 90))
plasmaGroupC332.add(plasmaGroupB332)

plasmaGroupC332.position.x = (Math.sin((332 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC332.position.z = (Math.cos((332 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC332)

// plasmaGroup333		###############################################################################
const plasmaGroup333 = new THREE.Group()

const plasmaGroupB333 = new THREE.Group()

const plasmaGroupC333 = new THREE.Group()

// redPlasmaMesh333
const redPlasmaGeometry333 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial333 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh333 = new THREE.Mesh(redPlasmaGeometry333, redPlasmaMaterial333)
redPlasmaMesh333.position.set( (Math.cos((2331 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2331 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup333.add(redPlasmaMesh333)

// greenPlasmaMesh333
const greenPlasmaGeometry333 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial333 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh333 = new THREE.Mesh(greenPlasmaGeometry333, greenPlasmaMaterial333)
greenPlasmaMesh333.position.set( (Math.cos((3171 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3171 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup333.add(greenPlasmaMesh333)

// bluePlasmaMesh333
const bluePlasmaGeometry333 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial333 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh333 = new THREE.Mesh(bluePlasmaGeometry333, bluePlasmaMaterial333)
bluePlasmaMesh333.position.set( (Math.cos((4011 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4011 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup333.add(bluePlasmaMesh333)

plasmaGroup333.rotation.z = Math.PI / 180 * 90
plasmaGroupB333.add(plasmaGroup333)

plasmaGroupB333.rotation.y = (333 * ((Math.PI / 2) / 90))
plasmaGroupC333.add(plasmaGroupB333)

plasmaGroupC333.position.x = (Math.sin((333 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC333.position.z = (Math.cos((333 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC333)

// plasmaGroup334		###############################################################################
const plasmaGroup334 = new THREE.Group()

const plasmaGroupB334 = new THREE.Group()

const plasmaGroupC334 = new THREE.Group()

// redPlasmaMesh334
const redPlasmaGeometry334 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial334 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh334 = new THREE.Mesh(redPlasmaGeometry334, redPlasmaMaterial334)
redPlasmaMesh334.position.set( (Math.cos((2338 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2338 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup334.add(redPlasmaMesh334)

// greenPlasmaMesh334
const greenPlasmaGeometry334 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial334 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh334 = new THREE.Mesh(greenPlasmaGeometry334, greenPlasmaMaterial334)
greenPlasmaMesh334.position.set( (Math.cos((3178 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3178 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup334.add(greenPlasmaMesh334)

// bluePlasmaMesh334
const bluePlasmaGeometry334 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial334 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh334 = new THREE.Mesh(bluePlasmaGeometry334, bluePlasmaMaterial334)
bluePlasmaMesh334.position.set( (Math.cos((4018 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4018 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup334.add(bluePlasmaMesh334)

plasmaGroup334.rotation.z = Math.PI / 180 * 90
plasmaGroupB334.add(plasmaGroup334)

plasmaGroupB334.rotation.y = (334 * ((Math.PI / 2) / 90))
plasmaGroupC334.add(plasmaGroupB334)

plasmaGroupC334.position.x = (Math.sin((334 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC334.position.z = (Math.cos((334 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC334)

// plasmaGroup335		###############################################################################
const plasmaGroup335 = new THREE.Group()

const plasmaGroupB335 = new THREE.Group()

const plasmaGroupC335 = new THREE.Group()

// redPlasmaMesh335
const redPlasmaGeometry335 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial335 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh335 = new THREE.Mesh(redPlasmaGeometry335, redPlasmaMaterial335)
redPlasmaMesh335.position.set( (Math.cos((2345 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2345 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup335.add(redPlasmaMesh335)

// greenPlasmaMesh335
const greenPlasmaGeometry335 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial335 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh335 = new THREE.Mesh(greenPlasmaGeometry335, greenPlasmaMaterial335)
greenPlasmaMesh335.position.set( (Math.cos((3185 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3185 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup335.add(greenPlasmaMesh335)

// bluePlasmaMesh335
const bluePlasmaGeometry335 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial335 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh335 = new THREE.Mesh(bluePlasmaGeometry335, bluePlasmaMaterial335)
bluePlasmaMesh335.position.set( (Math.cos((4025 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4025 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup335.add(bluePlasmaMesh335)

plasmaGroup335.rotation.z = Math.PI / 180 * 90
plasmaGroupB335.add(plasmaGroup335)

plasmaGroupB335.rotation.y = (335 * ((Math.PI / 2) / 90))
plasmaGroupC335.add(plasmaGroupB335)

plasmaGroupC335.position.x = (Math.sin((335 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC335.position.z = (Math.cos((335 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC335)

// plasmaGroup336		###############################################################################
const plasmaGroup336 = new THREE.Group()

const plasmaGroupB336 = new THREE.Group()

const plasmaGroupC336 = new THREE.Group()

// redPlasmaMesh336
const redPlasmaGeometry336 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial336 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh336 = new THREE.Mesh(redPlasmaGeometry336, redPlasmaMaterial336)
redPlasmaMesh336.position.set( (Math.cos((2352 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2352 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup336.add(redPlasmaMesh336)

// greenPlasmaMesh336
const greenPlasmaGeometry336 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial336 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh336 = new THREE.Mesh(greenPlasmaGeometry336, greenPlasmaMaterial336)
greenPlasmaMesh336.position.set( (Math.cos((3192 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3192 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup336.add(greenPlasmaMesh336)

// bluePlasmaMesh336
const bluePlasmaGeometry336 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial336 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh336 = new THREE.Mesh(bluePlasmaGeometry336, bluePlasmaMaterial336)
bluePlasmaMesh336.position.set( (Math.cos((4032 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4032 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup336.add(bluePlasmaMesh336)

plasmaGroup336.rotation.z = Math.PI / 180 * 90
plasmaGroupB336.add(plasmaGroup336)

plasmaGroupB336.rotation.y = (336 * ((Math.PI / 2) / 90))
plasmaGroupC336.add(plasmaGroupB336)

plasmaGroupC336.position.x = (Math.sin((336 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC336.position.z = (Math.cos((336 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC336)

// plasmaGroup337		###############################################################################
const plasmaGroup337 = new THREE.Group()

const plasmaGroupB337 = new THREE.Group()

const plasmaGroupC337 = new THREE.Group()

// redPlasmaMesh337
const redPlasmaGeometry337 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial337 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh337 = new THREE.Mesh(redPlasmaGeometry337, redPlasmaMaterial337)
redPlasmaMesh337.position.set( (Math.cos((2359 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2359 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup337.add(redPlasmaMesh337)

// greenPlasmaMesh337
const greenPlasmaGeometry337 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial337 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh337 = new THREE.Mesh(greenPlasmaGeometry337, greenPlasmaMaterial337)
greenPlasmaMesh337.position.set( (Math.cos((3199 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3199 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup337.add(greenPlasmaMesh337)

// bluePlasmaMesh337
const bluePlasmaGeometry337 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial337 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh337 = new THREE.Mesh(bluePlasmaGeometry337, bluePlasmaMaterial337)
bluePlasmaMesh337.position.set( (Math.cos((4039 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4039 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup337.add(bluePlasmaMesh337)

plasmaGroup337.rotation.z = Math.PI / 180 * 90
plasmaGroupB337.add(plasmaGroup337)

plasmaGroupB337.rotation.y = (337 * ((Math.PI / 2) / 90))
plasmaGroupC337.add(plasmaGroupB337)

plasmaGroupC337.position.x = (Math.sin((337 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC337.position.z = (Math.cos((337 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC337)

// plasmaGroup338		###############################################################################
const plasmaGroup338 = new THREE.Group()

const plasmaGroupB338 = new THREE.Group()

const plasmaGroupC338 = new THREE.Group()

// redPlasmaMesh338
const redPlasmaGeometry338 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial338 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh338 = new THREE.Mesh(redPlasmaGeometry338, redPlasmaMaterial338)
redPlasmaMesh338.position.set( (Math.cos((2366 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2366 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup338.add(redPlasmaMesh338)

// greenPlasmaMesh338
const greenPlasmaGeometry338 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial338 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh338 = new THREE.Mesh(greenPlasmaGeometry338, greenPlasmaMaterial338)
greenPlasmaMesh338.position.set( (Math.cos((3206 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3206 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup338.add(greenPlasmaMesh338)

// bluePlasmaMesh338
const bluePlasmaGeometry338 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial338 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh338 = new THREE.Mesh(bluePlasmaGeometry338, bluePlasmaMaterial338)
bluePlasmaMesh338.position.set( (Math.cos((4046 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4046 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup338.add(bluePlasmaMesh338)

plasmaGroup338.rotation.z = Math.PI / 180 * 90
plasmaGroupB338.add(plasmaGroup338)

plasmaGroupB338.rotation.y = (338 * ((Math.PI / 2) / 90))
plasmaGroupC338.add(plasmaGroupB338)

plasmaGroupC338.position.x = (Math.sin((338 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC338.position.z = (Math.cos((338 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC338)

// plasmaGroup339		###############################################################################
const plasmaGroup339 = new THREE.Group()

const plasmaGroupB339 = new THREE.Group()

const plasmaGroupC339 = new THREE.Group()

// redPlasmaMesh339
const redPlasmaGeometry339 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial339 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh339 = new THREE.Mesh(redPlasmaGeometry339, redPlasmaMaterial339)
redPlasmaMesh339.position.set( (Math.cos((2373 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2373 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup339.add(redPlasmaMesh339)

// greenPlasmaMesh339
const greenPlasmaGeometry339 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial339 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh339 = new THREE.Mesh(greenPlasmaGeometry339, greenPlasmaMaterial339)
greenPlasmaMesh339.position.set( (Math.cos((3213 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3213 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup339.add(greenPlasmaMesh339)

// bluePlasmaMesh339
const bluePlasmaGeometry339 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial339 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh339 = new THREE.Mesh(bluePlasmaGeometry339, bluePlasmaMaterial339)
bluePlasmaMesh339.position.set( (Math.cos((4053 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4053 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup339.add(bluePlasmaMesh339)

plasmaGroup339.rotation.z = Math.PI / 180 * 90
plasmaGroupB339.add(plasmaGroup339)

plasmaGroupB339.rotation.y = (339 * ((Math.PI / 2) / 90))
plasmaGroupC339.add(plasmaGroupB339)

plasmaGroupC339.position.x = (Math.sin((339 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC339.position.z = (Math.cos((339 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC339)

// plasmaGroup340		###############################################################################
const plasmaGroup340 = new THREE.Group()

const plasmaGroupB340 = new THREE.Group()

const plasmaGroupC340 = new THREE.Group()

// redPlasmaMesh340
const redPlasmaGeometry340 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial340 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh340 = new THREE.Mesh(redPlasmaGeometry340, redPlasmaMaterial340)
redPlasmaMesh340.position.set( (Math.cos((2380 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2380 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup340.add(redPlasmaMesh340)

// greenPlasmaMesh340
const greenPlasmaGeometry340 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial340 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh340 = new THREE.Mesh(greenPlasmaGeometry340, greenPlasmaMaterial340)
greenPlasmaMesh340.position.set( (Math.cos((3220 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3220 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup340.add(greenPlasmaMesh340)

// bluePlasmaMesh340
const bluePlasmaGeometry340 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial340 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh340 = new THREE.Mesh(bluePlasmaGeometry340, bluePlasmaMaterial340)
bluePlasmaMesh340.position.set( (Math.cos((4060 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4060 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup340.add(bluePlasmaMesh340)

plasmaGroup340.rotation.z = Math.PI / 180 * 90
plasmaGroupB340.add(plasmaGroup340)

plasmaGroupB340.rotation.y = (340 * ((Math.PI / 2) / 90))
plasmaGroupC340.add(plasmaGroupB340)

plasmaGroupC340.position.x = (Math.sin((340 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC340.position.z = (Math.cos((340 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC340)

// plasmaGroup341		###############################################################################
const plasmaGroup341 = new THREE.Group()

const plasmaGroupB341 = new THREE.Group()

const plasmaGroupC341 = new THREE.Group()

// redPlasmaMesh341
const redPlasmaGeometry341 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial341 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh341 = new THREE.Mesh(redPlasmaGeometry341, redPlasmaMaterial341)
redPlasmaMesh341.position.set( (Math.cos((2387 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2387 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup341.add(redPlasmaMesh341)

// greenPlasmaMesh341
const greenPlasmaGeometry341 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial341 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh341 = new THREE.Mesh(greenPlasmaGeometry341, greenPlasmaMaterial341)
greenPlasmaMesh341.position.set( (Math.cos((3227 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3227 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup341.add(greenPlasmaMesh341)

// bluePlasmaMesh341
const bluePlasmaGeometry341 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial341 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh341 = new THREE.Mesh(bluePlasmaGeometry341, bluePlasmaMaterial341)
bluePlasmaMesh341.position.set( (Math.cos((4067 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4067 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup341.add(bluePlasmaMesh341)

plasmaGroup341.rotation.z = Math.PI / 180 * 90
plasmaGroupB341.add(plasmaGroup341)

plasmaGroupB341.rotation.y = (341 * ((Math.PI / 2) / 90))
plasmaGroupC341.add(plasmaGroupB341)

plasmaGroupC341.position.x = (Math.sin((341 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC341.position.z = (Math.cos((341 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC341)

// plasmaGroup342		###############################################################################
const plasmaGroup342 = new THREE.Group()

const plasmaGroupB342 = new THREE.Group()

const plasmaGroupC342 = new THREE.Group()

// redPlasmaMesh342
const redPlasmaGeometry342 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial342 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh342 = new THREE.Mesh(redPlasmaGeometry342, redPlasmaMaterial342)
redPlasmaMesh342.position.set( (Math.cos((2394 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2394 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup342.add(redPlasmaMesh342)

// greenPlasmaMesh342
const greenPlasmaGeometry342 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial342 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh342 = new THREE.Mesh(greenPlasmaGeometry342, greenPlasmaMaterial342)
greenPlasmaMesh342.position.set( (Math.cos((3234 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3234 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup342.add(greenPlasmaMesh342)

// bluePlasmaMesh342
const bluePlasmaGeometry342 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial342 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh342 = new THREE.Mesh(bluePlasmaGeometry342, bluePlasmaMaterial342)
bluePlasmaMesh342.position.set( (Math.cos((4074 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4074 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup342.add(bluePlasmaMesh342)

plasmaGroup342.rotation.z = Math.PI / 180 * 90
plasmaGroupB342.add(plasmaGroup342)

plasmaGroupB342.rotation.y = (342 * ((Math.PI / 2) / 90))
plasmaGroupC342.add(plasmaGroupB342)

plasmaGroupC342.position.x = (Math.sin((342 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC342.position.z = (Math.cos((342 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC342)

// plasmaGroup343		###############################################################################
const plasmaGroup343 = new THREE.Group()

const plasmaGroupB343 = new THREE.Group()

const plasmaGroupC343 = new THREE.Group()

// redPlasmaMesh343
const redPlasmaGeometry343 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial343 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh343 = new THREE.Mesh(redPlasmaGeometry343, redPlasmaMaterial343)
redPlasmaMesh343.position.set( (Math.cos((2401 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2401 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup343.add(redPlasmaMesh343)

// greenPlasmaMesh343
const greenPlasmaGeometry343 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial343 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh343 = new THREE.Mesh(greenPlasmaGeometry343, greenPlasmaMaterial343)
greenPlasmaMesh343.position.set( (Math.cos((3241 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3241 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup343.add(greenPlasmaMesh343)

// bluePlasmaMesh343
const bluePlasmaGeometry343 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial343 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh343 = new THREE.Mesh(bluePlasmaGeometry343, bluePlasmaMaterial343)
bluePlasmaMesh343.position.set( (Math.cos((4081 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4081 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup343.add(bluePlasmaMesh343)

plasmaGroup343.rotation.z = Math.PI / 180 * 90
plasmaGroupB343.add(plasmaGroup343)

plasmaGroupB343.rotation.y = (343 * ((Math.PI / 2) / 90))
plasmaGroupC343.add(plasmaGroupB343)

plasmaGroupC343.position.x = (Math.sin((343 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC343.position.z = (Math.cos((343 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC343)

// plasmaGroup344		###############################################################################
const plasmaGroup344 = new THREE.Group()

const plasmaGroupB344 = new THREE.Group()

const plasmaGroupC344 = new THREE.Group()

// redPlasmaMesh344
const redPlasmaGeometry344 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial344 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh344 = new THREE.Mesh(redPlasmaGeometry344, redPlasmaMaterial344)
redPlasmaMesh344.position.set( (Math.cos((2408 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2408 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup344.add(redPlasmaMesh344)

// greenPlasmaMesh344
const greenPlasmaGeometry344 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial344 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh344 = new THREE.Mesh(greenPlasmaGeometry344, greenPlasmaMaterial344)
greenPlasmaMesh344.position.set( (Math.cos((3248 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3248 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup344.add(greenPlasmaMesh344)

// bluePlasmaMesh344
const bluePlasmaGeometry344 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial344 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh344 = new THREE.Mesh(bluePlasmaGeometry344, bluePlasmaMaterial344)
bluePlasmaMesh344.position.set( (Math.cos((4088 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4088 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup344.add(bluePlasmaMesh344)

plasmaGroup344.rotation.z = Math.PI / 180 * 90
plasmaGroupB344.add(plasmaGroup344)

plasmaGroupB344.rotation.y = (344 * ((Math.PI / 2) / 90))
plasmaGroupC344.add(plasmaGroupB344)

plasmaGroupC344.position.x = (Math.sin((344 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC344.position.z = (Math.cos((344 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC344)

// plasmaGroup345		###############################################################################
const plasmaGroup345 = new THREE.Group()

const plasmaGroupB345 = new THREE.Group()

const plasmaGroupC345 = new THREE.Group()

// redPlasmaMesh345
const redPlasmaGeometry345 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial345 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh345 = new THREE.Mesh(redPlasmaGeometry345, redPlasmaMaterial345)
redPlasmaMesh345.position.set( (Math.cos((2415 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2415 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup345.add(redPlasmaMesh345)

// greenPlasmaMesh345
const greenPlasmaGeometry345 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial345 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh345 = new THREE.Mesh(greenPlasmaGeometry345, greenPlasmaMaterial345)
greenPlasmaMesh345.position.set( (Math.cos((3255 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3255 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup345.add(greenPlasmaMesh345)

// bluePlasmaMesh345
const bluePlasmaGeometry345 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial345 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh345 = new THREE.Mesh(bluePlasmaGeometry345, bluePlasmaMaterial345)
bluePlasmaMesh345.position.set( (Math.cos((4095 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4095 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup345.add(bluePlasmaMesh345)

plasmaGroup345.rotation.z = Math.PI / 180 * 90
plasmaGroupB345.add(plasmaGroup345)

plasmaGroupB345.rotation.y = (345 * ((Math.PI / 2) / 90))
plasmaGroupC345.add(plasmaGroupB345)

plasmaGroupC345.position.x = (Math.sin((345 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC345.position.z = (Math.cos((345 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC345)

// plasmaGroup346		###############################################################################
const plasmaGroup346 = new THREE.Group()

const plasmaGroupB346 = new THREE.Group()

const plasmaGroupC346 = new THREE.Group()

// redPlasmaMesh346
const redPlasmaGeometry346 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial346 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh346 = new THREE.Mesh(redPlasmaGeometry346, redPlasmaMaterial346)
redPlasmaMesh346.position.set( (Math.cos((2422 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2422 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup346.add(redPlasmaMesh346)

// greenPlasmaMesh346
const greenPlasmaGeometry346 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial346 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh346 = new THREE.Mesh(greenPlasmaGeometry346, greenPlasmaMaterial346)
greenPlasmaMesh346.position.set( (Math.cos((3262 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3262 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup346.add(greenPlasmaMesh346)

// bluePlasmaMesh346
const bluePlasmaGeometry346 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial346 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh346 = new THREE.Mesh(bluePlasmaGeometry346, bluePlasmaMaterial346)
bluePlasmaMesh346.position.set( (Math.cos((4102 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4102 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup346.add(bluePlasmaMesh346)

plasmaGroup346.rotation.z = Math.PI / 180 * 90
plasmaGroupB346.add(plasmaGroup346)

plasmaGroupB346.rotation.y = (346 * ((Math.PI / 2) / 90))
plasmaGroupC346.add(plasmaGroupB346)

plasmaGroupC346.position.x = (Math.sin((346 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC346.position.z = (Math.cos((346 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC346)

// plasmaGroup347		###############################################################################
const plasmaGroup347 = new THREE.Group()

const plasmaGroupB347 = new THREE.Group()

const plasmaGroupC347 = new THREE.Group()

// redPlasmaMesh347
const redPlasmaGeometry347 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial347 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh347 = new THREE.Mesh(redPlasmaGeometry347, redPlasmaMaterial347)
redPlasmaMesh347.position.set( (Math.cos((2429 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2429 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup347.add(redPlasmaMesh347)

// greenPlasmaMesh347
const greenPlasmaGeometry347 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial347 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh347 = new THREE.Mesh(greenPlasmaGeometry347, greenPlasmaMaterial347)
greenPlasmaMesh347.position.set( (Math.cos((3269 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3269 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup347.add(greenPlasmaMesh347)

// bluePlasmaMesh347
const bluePlasmaGeometry347 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial347 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh347 = new THREE.Mesh(bluePlasmaGeometry347, bluePlasmaMaterial347)
bluePlasmaMesh347.position.set( (Math.cos((4109 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4109 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup347.add(bluePlasmaMesh347)

plasmaGroup347.rotation.z = Math.PI / 180 * 90
plasmaGroupB347.add(plasmaGroup347)

plasmaGroupB347.rotation.y = (347 * ((Math.PI / 2) / 90))
plasmaGroupC347.add(plasmaGroupB347)

plasmaGroupC347.position.x = (Math.sin((347 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC347.position.z = (Math.cos((347 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC347)

// plasmaGroup348		###############################################################################
const plasmaGroup348 = new THREE.Group()

const plasmaGroupB348 = new THREE.Group()

const plasmaGroupC348 = new THREE.Group()

// redPlasmaMesh348
const redPlasmaGeometry348 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial348 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh348 = new THREE.Mesh(redPlasmaGeometry348, redPlasmaMaterial348)
redPlasmaMesh348.position.set( (Math.cos((2436 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2436 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup348.add(redPlasmaMesh348)

// greenPlasmaMesh348
const greenPlasmaGeometry348 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial348 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh348 = new THREE.Mesh(greenPlasmaGeometry348, greenPlasmaMaterial348)
greenPlasmaMesh348.position.set( (Math.cos((3276 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3276 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup348.add(greenPlasmaMesh348)

// bluePlasmaMesh348
const bluePlasmaGeometry348 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial348 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh348 = new THREE.Mesh(bluePlasmaGeometry348, bluePlasmaMaterial348)
bluePlasmaMesh348.position.set( (Math.cos((4116 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4116 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup348.add(bluePlasmaMesh348)

plasmaGroup348.rotation.z = Math.PI / 180 * 90
plasmaGroupB348.add(plasmaGroup348)

plasmaGroupB348.rotation.y = (348 * ((Math.PI / 2) / 90))
plasmaGroupC348.add(plasmaGroupB348)

plasmaGroupC348.position.x = (Math.sin((348 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC348.position.z = (Math.cos((348 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC348)

// plasmaGroup349		###############################################################################
const plasmaGroup349 = new THREE.Group()

const plasmaGroupB349 = new THREE.Group()

const plasmaGroupC349 = new THREE.Group()

// redPlasmaMesh349
const redPlasmaGeometry349 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial349 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh349 = new THREE.Mesh(redPlasmaGeometry349, redPlasmaMaterial349)
redPlasmaMesh349.position.set( (Math.cos((2443 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2443 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup349.add(redPlasmaMesh349)

// greenPlasmaMesh349
const greenPlasmaGeometry349 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial349 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh349 = new THREE.Mesh(greenPlasmaGeometry349, greenPlasmaMaterial349)
greenPlasmaMesh349.position.set( (Math.cos((3283 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3283 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup349.add(greenPlasmaMesh349)

// bluePlasmaMesh349
const bluePlasmaGeometry349 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial349 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh349 = new THREE.Mesh(bluePlasmaGeometry349, bluePlasmaMaterial349)
bluePlasmaMesh349.position.set( (Math.cos((4123 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4123 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup349.add(bluePlasmaMesh349)

plasmaGroup349.rotation.z = Math.PI / 180 * 90
plasmaGroupB349.add(plasmaGroup349)

plasmaGroupB349.rotation.y = (349 * ((Math.PI / 2) / 90))
plasmaGroupC349.add(plasmaGroupB349)

plasmaGroupC349.position.x = (Math.sin((349 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC349.position.z = (Math.cos((349 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC349)

// plasmaGroup350		###############################################################################
const plasmaGroup350 = new THREE.Group()

const plasmaGroupB350 = new THREE.Group()

const plasmaGroupC350 = new THREE.Group()

// redPlasmaMesh350
const redPlasmaGeometry350 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial350 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh350 = new THREE.Mesh(redPlasmaGeometry350, redPlasmaMaterial350)
redPlasmaMesh350.position.set( (Math.cos((2450 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2450 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup350.add(redPlasmaMesh350)

// greenPlasmaMesh350
const greenPlasmaGeometry350 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial350 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh350 = new THREE.Mesh(greenPlasmaGeometry350, greenPlasmaMaterial350)
greenPlasmaMesh350.position.set( (Math.cos((3290 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3290 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup350.add(greenPlasmaMesh350)

// bluePlasmaMesh350
const bluePlasmaGeometry350 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial350 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh350 = new THREE.Mesh(bluePlasmaGeometry350, bluePlasmaMaterial350)
bluePlasmaMesh350.position.set( (Math.cos((4130 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4130 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup350.add(bluePlasmaMesh350)

plasmaGroup350.rotation.z = Math.PI / 180 * 90
plasmaGroupB350.add(plasmaGroup350)

plasmaGroupB350.rotation.y = (350 * ((Math.PI / 2) / 90))
plasmaGroupC350.add(plasmaGroupB350)

plasmaGroupC350.position.x = (Math.sin((350 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC350.position.z = (Math.cos((350 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC350)

// plasmaGroup351		###############################################################################
const plasmaGroup351 = new THREE.Group()

const plasmaGroupB351 = new THREE.Group()

const plasmaGroupC351 = new THREE.Group()

// redPlasmaMesh351
const redPlasmaGeometry351 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial351 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh351 = new THREE.Mesh(redPlasmaGeometry351, redPlasmaMaterial351)
redPlasmaMesh351.position.set( (Math.cos((2457 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2457 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup351.add(redPlasmaMesh351)

// greenPlasmaMesh351
const greenPlasmaGeometry351 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial351 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh351 = new THREE.Mesh(greenPlasmaGeometry351, greenPlasmaMaterial351)
greenPlasmaMesh351.position.set( (Math.cos((3297 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3297 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup351.add(greenPlasmaMesh351)

// bluePlasmaMesh351
const bluePlasmaGeometry351 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial351 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh351 = new THREE.Mesh(bluePlasmaGeometry351, bluePlasmaMaterial351)
bluePlasmaMesh351.position.set( (Math.cos((4137 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4137 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup351.add(bluePlasmaMesh351)

plasmaGroup351.rotation.z = Math.PI / 180 * 90
plasmaGroupB351.add(plasmaGroup351)

plasmaGroupB351.rotation.y = (351 * ((Math.PI / 2) / 90))
plasmaGroupC351.add(plasmaGroupB351)

plasmaGroupC351.position.x = (Math.sin((351 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC351.position.z = (Math.cos((351 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC351)

// plasmaGroup352		###############################################################################
const plasmaGroup352 = new THREE.Group()

const plasmaGroupB352 = new THREE.Group()

const plasmaGroupC352 = new THREE.Group()

// redPlasmaMesh352
const redPlasmaGeometry352 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial352 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh352 = new THREE.Mesh(redPlasmaGeometry352, redPlasmaMaterial352)
redPlasmaMesh352.position.set( (Math.cos((2464 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2464 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup352.add(redPlasmaMesh352)

// greenPlasmaMesh352
const greenPlasmaGeometry352 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial352 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh352 = new THREE.Mesh(greenPlasmaGeometry352, greenPlasmaMaterial352)
greenPlasmaMesh352.position.set( (Math.cos((3304 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3304 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup352.add(greenPlasmaMesh352)

// bluePlasmaMesh352
const bluePlasmaGeometry352 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial352 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh352 = new THREE.Mesh(bluePlasmaGeometry352, bluePlasmaMaterial352)
bluePlasmaMesh352.position.set( (Math.cos((4144 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4144 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup352.add(bluePlasmaMesh352)

plasmaGroup352.rotation.z = Math.PI / 180 * 90
plasmaGroupB352.add(plasmaGroup352)

plasmaGroupB352.rotation.y = (352 * ((Math.PI / 2) / 90))
plasmaGroupC352.add(plasmaGroupB352)

plasmaGroupC352.position.x = (Math.sin((352 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC352.position.z = (Math.cos((352 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC352)

// plasmaGroup353		###############################################################################
const plasmaGroup353 = new THREE.Group()

const plasmaGroupB353 = new THREE.Group()

const plasmaGroupC353 = new THREE.Group()

// redPlasmaMesh353
const redPlasmaGeometry353 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial353 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh353 = new THREE.Mesh(redPlasmaGeometry353, redPlasmaMaterial353)
redPlasmaMesh353.position.set( (Math.cos((2471 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2471 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup353.add(redPlasmaMesh353)

// greenPlasmaMesh353
const greenPlasmaGeometry353 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial353 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh353 = new THREE.Mesh(greenPlasmaGeometry353, greenPlasmaMaterial353)
greenPlasmaMesh353.position.set( (Math.cos((3311 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3311 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup353.add(greenPlasmaMesh353)

// bluePlasmaMesh353
const bluePlasmaGeometry353 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial353 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh353 = new THREE.Mesh(bluePlasmaGeometry353, bluePlasmaMaterial353)
bluePlasmaMesh353.position.set( (Math.cos((4151 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4151 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup353.add(bluePlasmaMesh353)

plasmaGroup353.rotation.z = Math.PI / 180 * 90
plasmaGroupB353.add(plasmaGroup353)

plasmaGroupB353.rotation.y = (353 * ((Math.PI / 2) / 90))
plasmaGroupC353.add(plasmaGroupB353)

plasmaGroupC353.position.x = (Math.sin((353 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC353.position.z = (Math.cos((353 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC353)

// plasmaGroup354		###############################################################################
const plasmaGroup354 = new THREE.Group()

const plasmaGroupB354 = new THREE.Group()

const plasmaGroupC354 = new THREE.Group()

// redPlasmaMesh354
const redPlasmaGeometry354 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial354 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh354 = new THREE.Mesh(redPlasmaGeometry354, redPlasmaMaterial354)
redPlasmaMesh354.position.set( (Math.cos((2478 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2478 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup354.add(redPlasmaMesh354)

// greenPlasmaMesh354
const greenPlasmaGeometry354 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial354 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh354 = new THREE.Mesh(greenPlasmaGeometry354, greenPlasmaMaterial354)
greenPlasmaMesh354.position.set( (Math.cos((3318 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3318 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup354.add(greenPlasmaMesh354)

// bluePlasmaMesh354
const bluePlasmaGeometry354 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial354 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh354 = new THREE.Mesh(bluePlasmaGeometry354, bluePlasmaMaterial354)
bluePlasmaMesh354.position.set( (Math.cos((4158 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4158 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup354.add(bluePlasmaMesh354)

plasmaGroup354.rotation.z = Math.PI / 180 * 90
plasmaGroupB354.add(plasmaGroup354)

plasmaGroupB354.rotation.y = (354 * ((Math.PI / 2) / 90))
plasmaGroupC354.add(plasmaGroupB354)

plasmaGroupC354.position.x = (Math.sin((354 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC354.position.z = (Math.cos((354 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC354)

// plasmaGroup355		###############################################################################
const plasmaGroup355 = new THREE.Group()

const plasmaGroupB355 = new THREE.Group()

const plasmaGroupC355 = new THREE.Group()

// redPlasmaMesh355
const redPlasmaGeometry355 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial355 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh355 = new THREE.Mesh(redPlasmaGeometry355, redPlasmaMaterial355)
redPlasmaMesh355.position.set( (Math.cos((2485 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2485 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup355.add(redPlasmaMesh355)

// greenPlasmaMesh355
const greenPlasmaGeometry355 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial355 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh355 = new THREE.Mesh(greenPlasmaGeometry355, greenPlasmaMaterial355)
greenPlasmaMesh355.position.set( (Math.cos((3325 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3325 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup355.add(greenPlasmaMesh355)

// bluePlasmaMesh355
const bluePlasmaGeometry355 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial355 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh355 = new THREE.Mesh(bluePlasmaGeometry355, bluePlasmaMaterial355)
bluePlasmaMesh355.position.set( (Math.cos((4165 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4165 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup355.add(bluePlasmaMesh355)

plasmaGroup355.rotation.z = Math.PI / 180 * 90
plasmaGroupB355.add(plasmaGroup355)

plasmaGroupB355.rotation.y = (355 * ((Math.PI / 2) / 90))
plasmaGroupC355.add(plasmaGroupB355)

plasmaGroupC355.position.x = (Math.sin((355 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC355.position.z = (Math.cos((355 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC355)

// plasmaGroup356		###############################################################################
const plasmaGroup356 = new THREE.Group()

const plasmaGroupB356 = new THREE.Group()

const plasmaGroupC356 = new THREE.Group()

// redPlasmaMesh356
const redPlasmaGeometry356 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial356 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh356 = new THREE.Mesh(redPlasmaGeometry356, redPlasmaMaterial356)
redPlasmaMesh356.position.set( (Math.cos((2492 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2492 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup356.add(redPlasmaMesh356)

// greenPlasmaMesh356
const greenPlasmaGeometry356 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial356 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh356 = new THREE.Mesh(greenPlasmaGeometry356, greenPlasmaMaterial356)
greenPlasmaMesh356.position.set( (Math.cos((3332 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3332 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup356.add(greenPlasmaMesh356)

// bluePlasmaMesh356
const bluePlasmaGeometry356 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial356 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh356 = new THREE.Mesh(bluePlasmaGeometry356, bluePlasmaMaterial356)
bluePlasmaMesh356.position.set( (Math.cos((4172 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4172 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup356.add(bluePlasmaMesh356)

plasmaGroup356.rotation.z = Math.PI / 180 * 90
plasmaGroupB356.add(plasmaGroup356)

plasmaGroupB356.rotation.y = (356 * ((Math.PI / 2) / 90))
plasmaGroupC356.add(plasmaGroupB356)

plasmaGroupC356.position.x = (Math.sin((356 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC356.position.z = (Math.cos((356 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC356)

// plasmaGroup357		###############################################################################
const plasmaGroup357 = new THREE.Group()

const plasmaGroupB357 = new THREE.Group()

const plasmaGroupC357 = new THREE.Group()

// redPlasmaMesh357
const redPlasmaGeometry357 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial357 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh357 = new THREE.Mesh(redPlasmaGeometry357, redPlasmaMaterial357)
redPlasmaMesh357.position.set( (Math.cos((2499 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2499 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup357.add(redPlasmaMesh357)

// greenPlasmaMesh357
const greenPlasmaGeometry357 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial357 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh357 = new THREE.Mesh(greenPlasmaGeometry357, greenPlasmaMaterial357)
greenPlasmaMesh357.position.set( (Math.cos((3339 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3339 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup357.add(greenPlasmaMesh357)

// bluePlasmaMesh357
const bluePlasmaGeometry357 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial357 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh357 = new THREE.Mesh(bluePlasmaGeometry357, bluePlasmaMaterial357)
bluePlasmaMesh357.position.set( (Math.cos((4179 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4179 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup357.add(bluePlasmaMesh357)

plasmaGroup357.rotation.z = Math.PI / 180 * 90
plasmaGroupB357.add(plasmaGroup357)

plasmaGroupB357.rotation.y = (357 * ((Math.PI / 2) / 90))
plasmaGroupC357.add(plasmaGroupB357)

plasmaGroupC357.position.x = (Math.sin((357 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC357.position.z = (Math.cos((357 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC357)

// plasmaGroup358		###############################################################################
const plasmaGroup358 = new THREE.Group()

const plasmaGroupB358 = new THREE.Group()

const plasmaGroupC358 = new THREE.Group()

// redPlasmaMesh358
const redPlasmaGeometry358 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial358 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh358 = new THREE.Mesh(redPlasmaGeometry358, redPlasmaMaterial358)
redPlasmaMesh358.position.set( (Math.cos((2506 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2506 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup358.add(redPlasmaMesh358)

// greenPlasmaMesh358
const greenPlasmaGeometry358 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial358 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh358 = new THREE.Mesh(greenPlasmaGeometry358, greenPlasmaMaterial358)
greenPlasmaMesh358.position.set( (Math.cos((3346 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3346 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup358.add(greenPlasmaMesh358)

// bluePlasmaMesh358
const bluePlasmaGeometry358 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial358 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh358 = new THREE.Mesh(bluePlasmaGeometry358, bluePlasmaMaterial358)
bluePlasmaMesh358.position.set( (Math.cos((4186 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4186 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup358.add(bluePlasmaMesh358)

plasmaGroup358.rotation.z = Math.PI / 180 * 90
plasmaGroupB358.add(plasmaGroup358)

plasmaGroupB358.rotation.y = (358 * ((Math.PI / 2) / 90))
plasmaGroupC358.add(plasmaGroupB358)

plasmaGroupC358.position.x = (Math.sin((358 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC358.position.z = (Math.cos((358 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC358)

// plasmaGroup359		###############################################################################
const plasmaGroup359 = new THREE.Group()

const plasmaGroupB359 = new THREE.Group()

const plasmaGroupC359 = new THREE.Group()

// redPlasmaMesh359
const redPlasmaGeometry359 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial359 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh359 = new THREE.Mesh(redPlasmaGeometry359, redPlasmaMaterial359)
redPlasmaMesh359.position.set( (Math.cos((2513 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2513 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup359.add(redPlasmaMesh359)

// greenPlasmaMesh359
const greenPlasmaGeometry359 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial359 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh359 = new THREE.Mesh(greenPlasmaGeometry359, greenPlasmaMaterial359)
greenPlasmaMesh359.position.set( (Math.cos((3353 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3353 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup359.add(greenPlasmaMesh359)

// bluePlasmaMesh359
const bluePlasmaGeometry359 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial359 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh359 = new THREE.Mesh(bluePlasmaGeometry359, bluePlasmaMaterial359)
bluePlasmaMesh359.position.set( (Math.cos((4193 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4193 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup359.add(bluePlasmaMesh359)

plasmaGroup359.rotation.z = Math.PI / 180 * 90
plasmaGroupB359.add(plasmaGroup359)

plasmaGroupB359.rotation.y = (359 * ((Math.PI / 2) / 90))
plasmaGroupC359.add(plasmaGroupB359)

plasmaGroupC359.position.x = (Math.sin((359 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC359.position.z = (Math.cos((359 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC359)

// plasmaGroup360		###############################################################################
const plasmaGroup360 = new THREE.Group()

const plasmaGroupB360 = new THREE.Group()

const plasmaGroupC360 = new THREE.Group()

// redPlasmaMesh360
const redPlasmaGeometry360 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const redPlasmaMaterial360 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var redPlasmaMesh360 = new THREE.Mesh(redPlasmaGeometry360, redPlasmaMaterial360)
redPlasmaMesh360.position.set( (Math.cos((2520 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((2520 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup360.add(redPlasmaMesh360)

// greenPlasmaMesh360
const greenPlasmaGeometry360 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const greenPlasmaMaterial360 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var greenPlasmaMesh360 = new THREE.Mesh(greenPlasmaGeometry360, greenPlasmaMaterial360)
greenPlasmaMesh360.position.set( (Math.cos((3360 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((3360 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup360.add(greenPlasmaMesh360)

// bluePlasmaMesh360
const bluePlasmaGeometry360 = new THREE.CylinderGeometry(1, 1, 0.3, 32)
const bluePlasmaMaterial360 = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))
var bluePlasmaMesh360 = new THREE.Mesh(bluePlasmaGeometry360, bluePlasmaMaterial360)
bluePlasmaMesh360.position.set( (Math.cos((4200 * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin((4200 * ((Math.PI / 2) / 90) ))) * radius )
plasmaGroup360.add(bluePlasmaMesh360)

plasmaGroup360.rotation.z = Math.PI / 180 * 90
plasmaGroupB360.add(plasmaGroup360)

plasmaGroupB360.rotation.y = (360 * ((Math.PI / 2) / 90))
plasmaGroupC360.add(plasmaGroupB360)

plasmaGroupC360.position.x = (Math.sin((360 * ((Math.PI / 2) / 90) ))) * 10
plasmaGroupC360.position.z = (Math.cos((360 * ((Math.PI / 2) / 90) ))) * 10
// add 3 plasmaGroup to plasmaConduitGroup
plasmaConduitGroup.add(plasmaGroupC360)

   
  
  
  

scene.add(plasmaConduitGroup)
// scene.add(plasmaGroupC120)
// scene.add(plasmaGroupC180)
// scene.add(plasmaGroupC240)
// scene.add(plasmaGroupC300)
// scene.add(plasmaGroupC360)
  

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