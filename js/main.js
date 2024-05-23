//1.登録 クリックイベント
$(".save").on("click", function () {
  const key = $(".text_what").val();
  //特定のキーが存在しているかチェックする
  if (localStorage.hasOwnProperty(key)) {
    alert("すでに登録されています");
  } else {
    let user_data = [
      (who = $(".text_who").val()),
      (when = $(".text_when").val()),
      (comment = $(".text_comment").val()),
    ];
    const value = JSON.stringify(user_data); //JSON形式へ変換
    localStorage.setItem(key, value);

    const array = localStorage.getItem(key);
    const hukugen_data = JSON.parse(array); //JSON形式から復元
    console.log(hukugen_data);

    // テンプレートリテラル
    const html = `
    <li>
      <p>${key}</p>
      <p>${hukugen_data[0]}</p>
      <p>${hukugen_data[1]}</p>
      <p>${hukugen_data[2]}</p>
    </li>
    `;
    $(".list").append(html);
    $(".count").html(localStorage.length);
    form.reset();
  }
});

//2.全削除 クリックイベント
$(".clear").on("click", function () {
  // ストレージ削除
  localStorage.clear();

  // 画面のリスト削除
  $(".list").empty();

  // 登録件数表示
  $(".count").html(localStorage.length);
});

//3.ページ読み込み（rerode）：保存データ取得表示
function rerode() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const array = localStorage.getItem(key);
    const hukugen_data = JSON.parse(array); //JSON形式から復元

    // テンプレートリテラル
    const html = `
  <li>
    <p>${key}</p>
    <p>${hukugen_data[0]}</p>
    <p>${hukugen_data[1]}</p>
    <p>${hukugen_data[2]}</p>
  </li>
  `;
    $(".list").append(html);
  }
  // 登録件数表示
  $(".count").html(localStorage.length);
}
rerode();

//4.一部削除クリックイベント
$(".remove").on("click", function () {
  const key = $(".text_what").val();

  //特定のキーが存在しているかチェックする
  if (localStorage.hasOwnProperty(key)) {
    localStorage.removeItem(key);

    // リスト初期化
    $(".list").empty();

    // 再表示＆登録件数表示
    rerode();
  } else {
    alert("まだ登録されていません");
  }
});

//5.変更 クリックイベント
$(".change").on("click", function () {
  const key = $(".text_what").val();

  //特定のキーが存在しているかチェックする
  if (localStorage.hasOwnProperty(key)) {
    // 一回消して、再登録
    localStorage.removeItem(key);

    let user_data = [
      (who = $(".text_who").val()),
      (when = $(".text_when").val()),
      (comment = $(".text_comment").val()),
    ];
    const value = JSON.stringify(user_data); //JSON形式へ変換
    localStorage.setItem(key, value);

    // リスト初期化
    $(".list").empty();

    // 再表示＆登録件数表示
    rerode();
  } else {
    alert("まだ登録されていません");
  }
});
