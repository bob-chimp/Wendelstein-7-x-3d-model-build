<?php
function dec3($number)
{
    $newNumber = number_format($number, 3);
    return $newNumber;
}


$allPointsX = array();
$allPointsY = array();

$allPoints360X = array();
$allPoints360Y = array();

for ($q = 1; $q <= 360; $q++) {
    $allPointsX[] = 1000 - ($q * (377 / 360));
    $allPointsY[] = ($q * (782 / 360));
}

for ($q = 1; $q <= 360; $q++) {
    $allPointsX[] = 623 - ($q * (846 / 360));
    $allPointsY[] = 782 + ($q * (193 / 360));
}

for ($q = 1; $q <= 360; $q++) {
    $allPointsX[] = 0 - 223 - ($q * (678 / 360));
    $allPointsY[] = 975 - ($q * (541 / 360));
}

for ($q = 1; $q <= 360; $q++) {
    $allPointsX[] = 0 - 901;
    $allPointsY[] = 434 - ($q * (868 / 360));
}

for ($q = 1; $q <= 360; $q++) {
    $allPointsX[] = 0 - 901 + ($q * (678 / 360));
    $allPointsY[] = 0 - 434 - ($q * (541 / 360));
}

for ($q = 1; $q <= 360; $q++) {
    $allPointsX[] = 0 - 223 + ($q * (846 / 360));
    $allPointsY[] = 0 - 975 + ($q * (193 / 360));
}

for ($q = 1; $q <= 360; $q++) {
    $allPointsX[] = 623 + ($q * (377 / 360));
    $allPointsY[] = 0 - 782 + ($q * (782 / 360));
}

for ($q = 0; $q < 2520; $q += 7) {
    $keyX = $allPointsX[$q];
    $allPoints360X[] = dec3($allPointsX[$q]);
    $allPoints360Y[] = dec3($allPointsY[$q]);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heptagon Coords</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/17.4.0/Tween.min.js"></script>
    <style>
        #container {
            position: relative;
            margin-top: 100px;
            margin-left: 100px;
            display: block;
        }


        .vertex {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #666;
        }

        <?php
        $c = 0;
        foreach ($allPoints360X as $x) {
            $x = ($x + 800)/3;
            $d = $c + 1;
            $y = ($allPoints360Y[$c] + 800)/3;
            echo "\n\t\t#vertex{$d} \n\t\t{ \n\t\t\tleft: {$x}px; \n\t\t\ttop: {$y}px; \n\t\t}\n";
            $c++;
        }
        ?>
    </style>
</head>

<body>
    <div id="container">
        <?php
        $c = 0;
        foreach ($allPoints360X as $x) {
            $d = $c + 1;
            $y = $allPointsY[$c];
            echo "\n\t\t<div id=\"vertex{$d}\" class=\"vertex\"></div>";
            $c++;
        }
        ?>
    </div>
</body>

</html>