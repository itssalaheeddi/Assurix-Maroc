var rPosition = 1;
var cPosition = 1;

function sawbDama() {
  var baytaKahla = 0;

  var tt = "<table>";
  for (let l = 1; l <= 8; l++) {
    tt = tt + "<tr>";
    for (let c = 1; c <= 8; c++) {
      if (baytaKahla == 0) {
        tt = tt + `<td id="C${l}${c}" class='damaBayta'></td>`;
        baytaKahla = 1;
      } else {
        tt = tt + `<td id="C${l}${c}" class='damaKahla'></td>`;
        baytaKahla = 0;
      }
    }

    baytaKahla == 0 ? (baytaKahla = 1) : (baytaKahla = 0);

    tt = tt + "</tr>";
  }
  tt = tt + "</table>";
  document.getElementById("dvGrid").innerHTML = tt;

  harkPion();
}

function harkPion() {
  var dd = `C${rPosition}${cPosition}`;
  var pion = `<img class ="pion" src="IMAGE/PION.png" >`;
  document.getElementById(dd).innerHTML = pion;
}

function mchiLimin() {
  var dd = `C${rPosition}${cPosition}`;
  var pion = `<img class ="pion" src="IMAGE/PION.png" >`;
  document.getElementById(dd).innerHTML = "";
  cPosition = cPosition + 1;
  if (cPosition > 8) {
    cPosition = 1;
    rPosition = rPosition + 1;
  }
  if (rPosition > 8) {
    cPosition = 1;
    rPosition = 1;
  }

  harkPion();
}
function mchiLchmal() {
  var dd = `C${rPosition}${cPosition}`;
  var pion = `<img class ="pion" src="IMAGE/PION.png" >`;
  document.getElementById(dd).innerHTML = "";
  cPosition = cPosition - 1;
  if (cPosition < 1) {
    cPosition = 8;
    rPosition = rPosition - 1;
  }
  if (rPosition < 1) {
    cPosition = 8;
    rPosition = 8;
  }

  harkPion();
}
function mchiLimin(
  
) {
  var dd = `C${rPosition}${cPosition}`;
  var pion = `<img class ="pion" src="IMAGE/PION.png" >`;
  document.getElementById(dd).innerHTML = "";
  cPosition = cPosition + 1;
  if (cPosition > 8) {
    cPosition = 1;
    rPosition = rPosition + 1;
  }
  if (rPosition > 8) {
    cPosition = 1;
    rPosition = 1;
  }

  harkPion();
}