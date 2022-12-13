//検索窓で検索

function Search(s){
	const textbox = document.getElementById("search"); //検索ボックスを取得
	const value = textbox.value; //検索ボックスの中身を取得
	let url = "";

	if (!value){return;} //空文字チェック

	switch (s) { //受け取った引数によって､検索エンジンを変える｡
		case s = "Google":
		url = "https://www.google.com/search?q=" + value;
			break;
		case s = "Images":
		url = "https://www.google.com/search?q=" + value + "&tbm=isch";
			break;
		case s = "Youtube":
		url = "https://www.youtube.com/results?search_query=" + value ;
			break;
		case s = "DDG":
		url = "https://duckduckgo.com/?t=ffab&q=" + value;
			break;
		case s = "e-Gov":
		url = "https://elaws.e-gov.go.jp/result?allDocument=0&searchTargetAll=1&searchTextBox=" + value + "&serchSelect=and&searchTarget_array=Constitution%2CAct%2CCabinetOrder%2CImperialOrder%2CMinisterialOrdinance%2CRule&classification_array=%E6%86%B2%E6%B3%95%2C%E5%88%91%E4%BA%8B%2C%E8%B2%A1%E5%8B%99%E9%80%9A%E5%89%87%2C%E6%B0%B4%E7%94%A3%E6%A5%AD%2C%E8%A6%B3%E5%85%89%2C%E5%9B%BD%E4%BC%9A%2C%E8%AD%A6%E5%AF%9F%2C%E5%9B%BD%E6%9C%89%E8%B2%A1%E7%94%A3%2C%E9%89%B1%E6%A5%AD%2C%E9%83%B5%E5%8B%99%2C%E8%A1%8C%E6%94%BF%E7%B5%84%E7%B9%94%2C%E6%B6%88%E9%98%B2%2C%E5%9B%BD%E7%A8%8E%2C%E5%B7%A5%E6%A5%AD%2C%E9%9B%BB%E6%B0%97%E9%80%9A%E4%BF%A1%2C%E5%9B%BD%E5%AE%B6%E5%85%AC%E5%8B%99%E5%93%A1%2C%E5%9B%BD%E5%9C%9F%E9%96%8B%E7%99%BA%2C%E4%BA%8B%E6%A5%AD%2C%E5%95%86%E6%A5%AD%2C%E5%8A%B4%E5%83%8D%2C%E8%A1%8C%E6%94%BF%E6%89%8B%E7%B6%9A%2C%E5%9C%9F%E5%9C%B0%2C%E5%9B%BD%E5%82%B5%2C%E9%87%91%E8%9E%8D%E3%83%BB%E4%BF%9D%E9%99%BA%2C%E7%92%B0%E5%A2%83%E4%BF%9D%E5%85%A8%2C%E7%B5%B1%E8%A8%88%2C%E9%83%BD%E5%B8%82%E8%A8%88%E7%94%BB%2C%E6%95%99%E8%82%B2%2C%E5%A4%96%E5%9B%BD%E7%82%BA%E6%9B%BF%E3%83%BB%E8%B2%BF%E6%98%93%2C%E5%8E%9A%E7%94%9F%2C%E5%9C%B0%E6%96%B9%E8%87%AA%E6%B2%BB%2C%E9%81%93%E8%B7%AF%2C%E6%96%87%E5%8C%96%2C%E9%99%B8%E9%81%8B%2C%E7%A4%BE%E4%BC%9A%E7%A6%8F%E7%A5%89%2C%E5%9C%B0%E6%96%B9%E8%B2%A1%E6%94%BF%2C%E6%B2%B3%E5%B7%9D%2C%E7%94%A3%E6%A5%AD%E9%80%9A%E5%89%87%2C%E6%B5%B7%E9%81%8B%2C%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%99%BA%2C%E5%8F%B8%E6%B3%95%2C%E7%81%BD%E5%AE%B3%E5%AF%BE%E7%AD%96%2C%E8%BE%B2%E6%A5%AD%2C%E8%88%AA%E7%A9%BA%2C%E9%98%B2%E8%A1%9B%2C%E6%B0%91%E4%BA%8B%2C%E5%BB%BA%E7%AF%89%E3%83%BB%E4%BD%8F%E5%AE%85%2C%E6%9E%97%E6%A5%AD%2C%E8%B2%A8%E7%89%A9%E9%81%8B%E9%80%81%2C%E5%A4%96%E4%BA%8B&lawNo1=&lawNo2=&lawNo3=&lawNo4=&dayPromulgation1_0=&dayPromulgation1_1=&dayPromulgation1_2=&dayPromulgation1_3=&dayPromulgation2_0=&dayPromulgation2_1=&dayPromulgation2_2=&dayPromulgation2_3=&lawDayFrom1=0&selectMenu=0&searchBtn=1";
			break;
		case s = "Renso":
		url = "https://renso-ruigo.com/word/" + value;
			break;
		case s = "Weblio":
		url = "https://ejje.weblio.jp/content/" + value;
			break;
		case s = "Wiki":
		url = "https://ja.wikipedia.org/w/index.php?search="; + value;
			break;

		default:
			console.log("なんかが変だ！")

	}
	window.location.href = url;
}

function guguru(event){ //検索ボックスに入力があったときに動くスクリプト Enterキー以外何も起こらない｡
	if (event.keyCode == 13){
		Search("Google");
	}
}
/*

*/
