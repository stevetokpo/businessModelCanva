<?php
    if ( isset($_POST['localstorage']) AND !empty($_POST['localstorage']) ) {
        $file = 'business-model-' . date('Y/m/d-H:i') . '.json';

        header('Content-Type: application/octet-stream');
        header('Content-Transfer-Encoding: Binary');
        header('Content-disposition: attachment; filename="' . $file . '"');

        $alldata = $_POST['localstorage'];
        // $alldata = preg_replace('#"#', '\"', $alldata);
        echo $alldata;
    }
    else {
        die('Aucune donnée à exporter!');
    }
?>