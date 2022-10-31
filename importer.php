<?php
    function renamer($val) {
        $thereturns = '__';
        if ( $val == 1 ) {
            $thereturns = 'key_partners';
        }
        else if ( $val == 2 ) {
            $thereturns = 'key_activities';
        }
        else if ( $val == 3 ) {
            $thereturns = 'key_ressources';
        }
        else if ( $val == 4 ) {
            $thereturns = 'value_proposition';
        }
        else if ( $val == 5 ) {
            $thereturns = 'customer_relationship';
        }
        else if ( $val == 6 ) {
            $thereturns = 'channels';
        }
        else if ( $val == 7 ) {
            $thereturns = 'customer_segment';
        }
        else if ( $val == 8 ) {
            $thereturns = 'cost_structure';
        }
        else if ( $val == 9 ) {
            $thereturns = 'revenue_stream';
        }
        return $thereturns;
    }

    if ( isset($_FILES['import_file']) AND $_FILES['import_file']['error'] == 0 ) {
        $my_file = fopen($_FILES['import_file']['tmp_name'], 'r+');
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
        $json = json_decode($filecontent);
        $ti1 = $json->key_partners->total_item;
        $ti2 = $json->key_activities->total_item;
        $ti3 = $json->key_ressources->total_item;
        $ti4 = $json->value_proposition->total_item;
        $ti5 = $json->customer_relationship->total_item;
        $ti6 = $json->channels->total_item;
        $ti7 = $json->customer_segment->total_item;
        $ti8 = $json->cost_structure->total_item;
        $ti9 = $json->revenue_stream->total_item;
?>
    <script>
        var alldata = '<?php echo preg_replace("#'#", "\'", $filecontent); ?>';
        var thetotal;

        const json = alldata;
        const obj = JSON.parse(json);
        <?php
            for ( $ee = 1; $ee <= 9; $ee += 1 ) {
                $name = 'ti' . $ee;
                $curent = $$name;
        ?>
            thetotal = obj.<?php echo renamer($ee); ?>.total_item;
            localStorage['key<?php echo $ee; ?>-0'] = thetotal;
        <?php
            for ( $ii = 1; $ii <= $curent; $ii += 1 ) {
        ?>
                localStorage['key<?php echo $ee; ?>-' + <?php echo $ii; ?>] = obj.<?php echo renamer($ee); ?>.<?php echo 'item' . $ii; ?>;
        <?php
            }
        ?>
        <?php
            }
        ?>
            window.location.href = './';
    </script>
<?php
    }
    else {
        die('Impossible d\'effectuer l\'importation. Veuillez choisir le fichier à importer. <a href="./">Retour</a>');
    }

?>