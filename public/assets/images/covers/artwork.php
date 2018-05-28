<?php
// Note that !== did not exist until 4.0.0-RC2

if ($handle = opendir('/home/bruced2/public_html/brucedvds/public_html/DVDIndex/beta/images/CoverArt')) {
    echo "Files:\n";

    /* This is the correct way to loop over the directory. */
    while (false !== ($file = readdir($handle))) {
		$pos = strpos($file, '.');
		$ID = substr($file, 0, $pos);
        echo "$ID, ";
    }

    /* This is the WRONG way to loop over the directory. */
   // while ($file = readdir($handle)) {
    //    echo "$file\n";
    //}

    closedir($handle);
}
?> 
