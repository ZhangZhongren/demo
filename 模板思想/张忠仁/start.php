<?php

?>

<body style="width: 100%; height: 100%; background-color: black; position: relative; margin: 0; padding: 0;">
	<div class="box" style="padding-bottom:20px;background-color: #020003; width: 350px; margin: 100px auto; display: flex; align-items: center;justify-content: space-around;flex-wrap: wrap;position: absolute;z-index: 100;left: 500px;">
		<p style="color: green;padding:0 100px; font-size: 30px; line-height: 30px;"></p>
		<a style="color: white;text-decoration: none; font-size: 20px;padding: 0 50px;"target="_blank" href="files/模板字符串.html">模板字符串</a>
		<a style="color: white;text-decoration: none;font-size: 20px; padding: 0 50px;"target="_blank" href="files/标签模板.html">标签模板</a>
		<a style="color: white;text-decoration: none;font-size: 20px;padding: 0 50px;"target="_blank" href="files/音乐播放/音乐播放.html">音乐播放</a>
		<a style="color: white;text-decoration: none;font-size: 20px;"target="_blank" href="files/AJAX获取数据与模板引擎/demo.html">AJAX获取数据与模板引擎</a>
		<a style="color: white;text-decoration: none;font-size: 20px;padding: 0 50px;color: red;"target="_blank" href="load.php">下载</a>
	</div>
	<img style="position: absolute; left:0;top:100px;right: 0; margin: auto;" src="zzr.jpg" alt="" />
</body>
	<script>
		var p = document.getElementsByTagName("a");
		p.onmouseover=function(){
			this.backgroundColor = "red";
		}
	</script>
