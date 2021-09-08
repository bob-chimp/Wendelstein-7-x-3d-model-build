<?php
echo "const plasmaConduitGroup = new THREE.Group()"."\n\n";
echo "const redPlasmaGeometry = new THREE.SphereGeometry( 1, 16, 16 )"."\n";
echo "const greenPlasmaGeometry = new THREE.SphereGeometry( 1, 16, 16 )"."\n";
echo "const bluePlasmaGeometry = new THREE.SphereGeometry( 1, 16, 16 )"."\n";

for( $a=1; $a<=360; $a++)
{
    $b = $a*7;
    $c = ($a+120)*7;
    $d = ($a+240)*7;
    // plasmaGroup
    echo "// plasmaGroup{$a}\t\t###############################################################################"."\n";
    echo "const plasmaGroup{$a} = new THREE.Group()"."\n\n";
    echo "const plasmaGroupB{$a} = new THREE.Group()"."\n\n";
    echo "const plasmaGroupC{$a} = new THREE.Group()"."\n\n";
    echo "const plasmaGroupD{$a} = new THREE.Group()"."\n\n";
    // red plasma
    echo "// redPlasmaMesh{$a}"."\n";
    echo "const redPlasmaMaterial{$a} = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true, transparent: true, opacity: 0.5 })"."\n";
    echo "var i = 0, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))"."\n";
    echo "var redPlasmaMesh{$a} = new THREE.Mesh(redPlasmaGeometry, redPlasmaMaterial{$a})"."\n";
    echo "redPlasmaMesh{$a}.position.set( (Math.cos(({$b} * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin(({$b} * ((Math.PI / 2) / 90) ))) * radius )"."\n";
    echo "plasmaGroup{$a}.add(redPlasmaMesh{$a})"."\n\n";
    // green plasma
    echo "// greenPlasmaMesh{$a}"."\n";
    echo "const greenPlasmaMaterial{$a} = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, transparent: true, opacity: 0.5 })"."\n";
    echo "var i = 1, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))"."\n";
    echo "var greenPlasmaMesh{$a} = new THREE.Mesh(greenPlasmaGeometry, greenPlasmaMaterial{$a})"."\n";
    echo "greenPlasmaMesh{$a}.position.set( (Math.cos(({$c} * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin(({$c} * ((Math.PI / 2) / 90) ))) * radius )"."\n";
    echo "plasmaGroup{$a}.add(greenPlasmaMesh{$a})"."\n\n";
    // blue plasma
    echo "// bluePlasmaMesh{$a}"."\n";
    echo "const bluePlasmaMaterial{$a} = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true, transparent: true, opacity: 0.5 })"."\n";
    echo "var i = 2, radius = 2, count = 3, r = (Math.PI * 2 / count * (i))"."\n";
    echo "var bluePlasmaMesh{$a} = new THREE.Mesh(bluePlasmaGeometry, bluePlasmaMaterial{$a})"."\n";
    echo "bluePlasmaMesh{$a}.position.set( (Math.cos(({$d} * ((Math.PI / 2) / 90) ))) * radius, 0, (Math.sin(({$d} * ((Math.PI / 2) / 90) ))) * radius )"."\n";
    echo "plasmaGroup{$a}.add(bluePlasmaMesh{$a})"."\n\n";
    // add 3 meshes to group
    echo "plasmaGroup{$a}.rotation.z = Math.PI / 180 * 90"."\n";
    echo "plasmaGroupB{$a}.add(plasmaGroup{$a})"."\n\n";
    echo "plasmaGroupB{$a}.rotation.y = ({$a} * ((Math.PI / 2) / 90))"."\n";

    echo "plasmaGroupC{$a}.add(plasmaGroupB{$a})"."\n\n";
    echo "var i = 2, radius = 4, count = 3, r = (Math.PI * 2 / count * (i))"."\n";
    echo "plasmaGroupC{$a}.position.set( 0, (Math.cos(({$a} * ((Math.PI / 2) / 90) ))) * radius, (Math.sin(({$a} * ((Math.PI / 2) / 90) ))) * radius )"."\n";

    echo "plasmaGroupD{$a}.add(plasmaGroupC{$a})"."\n\n";
    echo "plasmaGroupD{$a}.position.x = (Math.sin(({$a} * ((Math.PI / 2) / 90) ))) * 10"."\n";
    echo "plasmaGroupD{$a}.position.z = (Math.cos(({$a} * ((Math.PI / 2) / 90) ))) * 10"."\n";



    echo "// add 3 plasmaGroup to plasmaConduitGroup"."\n";
    echo "plasmaConduitGroup.add(plasmaGroupD{$a})"."\n\n";
}

// for ($t=1; $t<=360; $t++)
// {
//     $g=$t*1;
//     echo "bosTween(redPlasmaMesh{$t},{$g})\n";
//     echo "bosTween(greenPlasmaMesh{$t},{$g})\n";
//     echo "bosTween(bluePlasmaMesh{$t},{$g})\n";

// }

?>   
