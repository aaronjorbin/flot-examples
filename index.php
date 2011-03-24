<?php
    $file='data.xml';
    $arr = simplexml_load_file($file);//this creates an object from the xml file
 
    $dates = $arr->row[0];
    $downloads = $arr->row[1]; 
    $dataset = array();

    $count = 0;

    foreach($dates as  $a)
    {
        $dataset[$count ][] = 
     ( ( gmdate('U' , (strtotime( (string) $a ) ) ) * 1000 ) - 18000000 );
        $count++;
    }   

    $count = 0;
    foreach($downloads as $a)
    {
        $dataset[$count][] = (int) $a;
        $count++;
    }


    $linedata['data'] =  array_slice( $dataset, -60  );
    $linedata['label'] = 'Downloads';

    $chartdata = json_encode( (object)  $linedata);

?>

<html>
    <head>
        <title>WordPress Plugin Stats in Flot!</title>
       
        <script type='text/javascript' language="javascript">
        var chartdata =[ <?php echo $chartdata; ?>];
        </script>

        <script type="text/javascript" src="flot/jquery.js" ></script>
        <script type="text/javascript" src="flot/jquery.flot.js"></script>
        <script type="text/javascript" src="pluginchart.js"></script>
        <link rel="stylesheet" href="pluginchart.css" type="text/css" media="screen" charset="utf-8"/> 
    </head>
    <body>
    <div id='container'>
        <form action='' type='get' id='line' >
            <input type='submit' value='Line'  >
        </form>
        <form action='' type='get' id='linepoints' >
            <input type='submit' value='Line with hover points'  >
        </form>
        <form action='' type='get' id='fillline' >
            <input type='submit' value='Filled step line' >
        </form>
        <form action='' type='get' id='bar' >
            <input type='submit' value='Bar' >
        </form>
        <form action='' type='get' id='lot' >
            <input type='submit' value='A lot of points' >
        </form>
        <form action='' type='get' id='multi' >
            <input type='submit' value='Multiple Lines' >
        </form>
        <div id="placeholder" height="400px" width="960px" ></div>
    </div>
    </body>
</html>
