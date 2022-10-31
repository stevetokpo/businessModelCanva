<?php

$my_file = fopen('./sample.json', 'r+');
$stop = FALSE;
$filecontent = '';
do {
    $actuel = '';
    $actuel = fgets($my_file);
    $filecontent .= $actuel;
    if ( $actuel ==  '' ) {
        $stop = TRUE;
    }
} while (!$stop);
fclose($my_file);
    $myjson = json_decode($filecontent, false);
    echo '<pre>';
   var_dump($myjson->key_partners);
    

   