<?php

$name = htmlspecialchars($_GET["nume"]);
$prenume = htmlspecialchars($_GET["prenume"]);
$mail = htmlspecialchars($_GET["mail"]);
$telefon = htmlspecialchars($_GET["tel"]);
$marime = htmlspecialchars($_GET["size"]);
$hartie = htmlspecialchars($_GET["paper"]);


$jsonString = file_get_contents('orders.json');
$data = json_decode($jsonString, true);

$extra = array(

    'nume' => $name . " " . $prenume,
    'mail' => $mail,
    'telefon' => $telefon,
    'marime' => $marime,
    'hartie' => $hartie,
);

$data[] = $extra;

$newJsonString = json_encode($data);
file_put_contents("orders.json", $newJsonString);


?>