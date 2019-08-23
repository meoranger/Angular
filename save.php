<?php
header('content-type::text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
//读取前端数据 
$dat = $_POST["val"];
//var_dump($dat);
echo $dat;
//echo json_decode();
// $js = eval('('+json_encode($dat)+')');
// $str = stripslashes(array_keys($dat)[0]))
// json_encode();array_keys($dat)[0]
 file_put_contents('enter.json',$dat);
?>