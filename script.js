let jumlahKartu = 5;
let kartupertama = 0;
let kartukedua = 0;
function buatAngka() {
  let angkaTerurut = [];
  for (let i = 1; i <= jumlahKartu; i++) {
    angkaTerurut.push(i, i);
  }
  return angkaTerurut;
}

function acakAngka(angkaBerurut) {
  let angkaAcak = angkaBerurut.sort(function () {
    return 0.5 - Math.random();
  });
  return angkaAcak;
}

function persiapanKartu(angkaAcak) {
  let str = "";
  angkaAcak.forEach(function (i) {
    str += '<div class="kartu" nilai="' + i + '">' + '<div class="belakang">' + i + "</div>" + '<div class="depan">KARTU</div>' + "</div>";
  });
  $("#game").append(str);
}

function pengendali() {
  $(".kartu").on("click", function () {
    $(this).addClass("buka");

    if (kartupertama == 0) {
      kartupertama = $(this).attr("nilai");
      console.log("kartu pertama :" + kartupertama);
    } else {
      kartukedua = $(this).attr("nilai");
      console.log("kartu Kedua :" + kartukedua);

      if (kartupertama == kartukedua) {
        $(".buka").addClass("betul");
        $(".betul").removeClass("buka");
        kartupertama = kartukedua = 0;
      } else {
        kartupertama = kartukedua = 0;
        $(this).one("transitionend", function () {
          $(".kartu").removeClass("buka");
        });
      }
    }
  });
}

//Jquery
$(document).ready(function () {
  let angkaTerurut = buatAngka();
  let angkaAcak = acakAngka(angkaTerurut);
  persiapanKartu(angkaAcak);
  pengendali();

  //   console.log("ini adalah angka berurutan " + angkaAcak);
  console.log("ini adalah angka acak " + angkaAcak);
});
