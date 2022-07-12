'use strict';
{
  const btnMenu = document.getElementById("menu");
  const overlay = document.querySelector(".overlay");

  // ハンバーガーメニューボタン押下時のイベント処理
  btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("hide");
    overlay.classList.toggle('show');
  });

  // 黒背景押下時のイベント処理
  overlay.addEventListener("click", () => {
    overlay.classList.toggle("show");
    btnMenu.classList.toggle("hide");
  });

  // const btnDetail = document.getElementById('btn-detail');
  // const btnClose = document.getElementById('btn-close');
  // const modal = document.getElementById('modal');
  // const mask = document.getElementById('mask');

  // // 詳細ボタンクリック時のイベント処理
  // btnDetail.addEventListener('click', ()=>{
  //   modal.classList.remove("hidden");
  //   mask.classList.remove("hidden");
  // });

  // // 閉じるボタンクリック時のイベント処理
  // btnClose.addEventListener('click', ()=>{
  //   modal.classList.add("hidden");
  //   mask.classList.add("hidden");
  // });

  // // マスククリック時のイベント処理
  // mask.addEventListener('click', ()=>{
  //   btnClose.click();
  // });
}