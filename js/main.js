//Cau 1
document.getElementById("btnSort").onclick = function () {
  var a, b, c, x;
  a = document.getElementById("a").value * 1;
  b = document.getElementById("b").value * 1;
  c = document.getElementById("c").value * 1;

  if (a > b) {
    x = a;
    a = b;
    b = x;
  }
  if (a > c) {
    x = a;
    a = c;
    c = x;
  }
  if (b > c) {
    x = b;
    b = c;
    c = x;
  }

  var kq = "<div class='alert alert-success'>";
  kq += "<p>Sắp xếp tăng dần: " + a + ", " + b + ", " + c + "</p>";
  kq += "</div>";
  document.getElementById("thongBao1").innerHTML = kq;
};

//Cau 2
function ktraUser() {
  var x = document.getElementById("myOption").value;
  if (x == "B") {
    kq = "bố";
  }
  if (x == "M") {
    kq = "mẹ";
  }
  if (x == "A") {
    kq = "anh trai";
  }
  if (x == "E") {
    kq = "em gái";
  }
  return kq;
}
document.getElementById("btnHello").onclick = function () {
  var user = ktraUser();
  var kq = "<div class='alert alert-success'>";
  kq += "<p>Xin chào, " + user + "</p>";
  kq += "</div>";
  document.getElementById("thongBao2").innerHTML = kq;
};

//Cau 3
function demSoChanLe(x, y, z) {
  var demSoChan = 0;
  var demSoLe = 0;
  var arr = [x, y, z];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      demSoChan++;
    } else {
      demSoLe++;
    }
  }
  return (kq = "So le: " + demSoLe + ", " + "So chan: " + demSoChan);
}
document.getElementById("btnCount").onclick = function () {
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;

  var count = demSoChanLe(num1, num2, num3);
  var kq = "<div class='alert alert-success'>";
  kq += "<p>" + count + "</p>";
  kq += "</div>";
  document.getElementById("thongBao3").innerHTML = kq;
};

//Cau 4
function tamGiac(a, b, c) {
  if (a == b || a == c || b == c) {
    kq = "cân";
  }
  if (a == b && b == c) {
    kq = "đều";
  }
  if (
    a == Math.sqrt(b * b + c * c) ||
    b == Math.sqrt(a * a + c * c) ||
    c == Math.sqrt(b * b + a * a)
  ) {
    kq = "vuông";
  }
  return kq;
}
document.getElementById("btnTriangle").onclick = function () {
  var c1 = document.getElementById("c1").value * 1;
  var c2 = document.getElementById("c2").value * 1;
  var c3 = document.getElementById("c3").value * 1;
  var tg = tamGiac(c1, c2, c3);
  var kq = "<div class='alert alert-success'>";
  kq += "<p>Tam giác: " + tg + "</p>";
  kq += "</div>";
  document.getElementById("thongBao4").innerHTML = kq;
};
