# MLH
まいろーかるほーむぺーじの略   

ホームページ用のページ  

開発の経緯：  
Webブラウザの規定(ホーム)ページに､自分が好きなように書いてカスタマイズしたWebページを設定すれば､QOL上がるんじゃないの？というアイデアから生まれたソースコード群です｡  

使い方：  
1,Releasesにある圧縮ファイルを任意の場所にDL  
2,圧縮ファイルを解凍する    
3,MLHv1またはMLHv2のファイル内のHTMLファイルを､お使いのブラウザの規定のページに設定する  
4,MLHが利用可能になる  
(5),自分の好みに合わせてMLHのファイルを編集する  

MLHのテーマ：  
  MLHv1 ： Click and Go  
  MLHv2 ： Utterly Simple Homepage    

注意）Webブラウザによっては､拡張機能の導入がなければ新規ページのURLが指定できない場合があります｡ローカルファイルをWebブラウザで開く際は､ファイルのパスの頭に「file:///」を付ける必要があります｡  

MLHv1の補足説明  
・HTMLファイルの上から6行目にある「href=""」の「"と"の間」をstyle_lightにすることで白い背景､style_darkにすることで黒い背景にできます｡わかる人はCSSファイルの:root部の変数を編集することでページの色を設定できます｡  
・index.htmlの下の方にある<div class="item"...>から始まるスクリプトは､ページ上のボタンの中身なので､itemの1番目の記述を参考に､好きにいじってみてください｡    

わかる人向けのTip：MLHのページのマス（Grid）はCSSファイルによって制御・配置されている｡CSSファイルの--Grid--セクションを編集することで､要素を好きな場所に配置できる｡うまく活用して､自分だけのMLHを作ってね｡
