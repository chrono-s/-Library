/*01*/

$(function(){
     
$(".accordion p").click(function(){
    $(this).next("ul").slideToggle();
    $(this).children("span").toggleClass("open");
}); 
 
$(".accordion dt").click(function(){
    $(this).next("dd").slideToggle();
    $(this).next("dd").siblings("dd").slideUp();
    $(this).toggleClass("open");    
    $(this).siblings("dt").removeClass("open");
});
 
});

/*01　説明
jquery本体と、
上記スクリプトをコピーして「accordion.js」などというファイルを作成して読み込ませて下さい。
（head内に書く場合は<script type=”text/javascript”>と</script>で囲んで下さい）

簡単な説明ですが、
3～6行目が「ul」用で、
3行目、pを押すと、
4行目、次にあるulを開く（閉じる）
5行目、pの子のspanにクラスopenをつける（外す）
8～13行目が「dl」用で、
8行目、dtを押すと、
9行目、押したdtの次のddが開く（閉じる）
10行目、押したdtの次のdd 以外の dd を閉じる
11行目、押したdtにクラスopenをつける（外す）
12行目、押したdt 以外の dtからクラスopenを外す
となります。

「ul」だけ使うなら、8～13行目を、 「dl」だけ使うなら、3～6行目を消しても大丈夫です！ */