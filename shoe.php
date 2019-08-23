<?php
header('content-type::text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
$json_s = file_get_contents('shoes.json');
echo $json_s;
?>
