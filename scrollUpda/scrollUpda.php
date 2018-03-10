
<?php
	$dataArray = array();
	for($i=0; $i<100;$i++){
		$dataArray[] = array("甘慧琳$i");
	}
	$number = 20; //每次页面跟新出的信息的条数
	if(!empty($_GET)){
		$upArray = array(); // 定义一个数组保存本次返回的数据
		$num = intval($_GET["num"]);
		for($i=0;$i<$number;$i++){
			if(!empty($dataArray[$num+$i])){ // 判断数据是否还有
				$upArray[] = $dataArray[$num+$i];
			}else{ // 数据没有了 让页面显示没有了
				$upArray[] = "没有了";
				break;
			}
		}
		echo json_encode($upArray);
	}

?>