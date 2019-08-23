<?php
header('content-type::json;charset=utf8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');


// //读取json数据到php变量
$json_s = file_get_contents('bu.json');
echo $json_s;
// //输出
// // echo $type."员工工作类型";

// echo $peoId;
// 



  
// function foreachFun($json_s,$proId){   
//        foreach ($json_s["id"] as $key => $value) {   
//         if($value["id"] == $proId){     
//                 $results = $value;     
//             }    
//           }    
//    return $result;  
//   }     
//      $res = foreachFun($data,$proId);  
//     print_r($res);









// $data = json_decode('$json_s',true);

// $ret = array(
//     'id' => isset($_POST['id'])? $_POST['id'] : '',
//     'jobtype' => isset($_POST['jobtype'])? $_POST['jobtype'] : '',
//     'basemoney' => isset($_POST['basemoney'])? $_POST['basemoney'] : '',
//     'range' => isset($_POST['range'])? $_POST['range'] : '',
//     'work' => isset($_POST['work'])? $_POST['work'] : '',

// );


// echo json_encode($ret);
?>
