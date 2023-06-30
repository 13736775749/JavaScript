var btn1 = document.getElementById('btn1');
	var messageContent = document.getElementById('messageContent');
	var text = document.getElementById('text');
	var avtar = document.getElementById('avtar');
	var nickname = document.getElementById('nickname');
	btn1.onclick = function() {

		var mes = text.value;
		var imgSrc = avtar.src;
		var nick = nickname.innerHTML;

		if (f == 1) {
			messageContent.innerHTML = messageContent.innerHTML + '<p> <img src = " ' + imgSrc + ' " alt = "" ><span> ' + nick + ' </span> <span>:' + mes + '</span> </p> ';
		} else {
			messageContent.innerHTML = messageContent.innerHTML + '<p class="aui-right"><img src = " ' + imgSrc + ' " alt = "" > <span>: ' + nick + '</span><span>' + mes + '</span>  </p> ';
		}
		text.value = '';
	}
	var f = 1;

	nickname.onclick = avtar.onclick = function() {

		if (f == 1) {
			nickname.innerHTML = '阿呆';
			avtar.src = 'images/ad.png';
			f = 0;
		} else {
			nickname.innerHTML = '萌主';
			avtar.src = 'images/mz.png';
			f = 1;
		}

	}
