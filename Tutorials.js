let input1 = document.querySelector(".input1");
let maxletter1 = input1.getAttribute("maxlength");
let linemax1 = document.querySelector(".linemax1");
let spanmax1 = document.querySelector(".maxletter");
spanmax1.innerHTML = maxletter1;
input1.oninput = function () {
  spanmax1.innerHTML = maxletter1 - input1.value.length;
  if (linemax1.style.width < "95%") {
    linemax1.style.width = `${(input1.value.length * 100) / maxletter1}%`;
  }
};
let input2 = document.querySelector(".input2");
let maxletter2 = input2.getAttribute("maxlength");
let linemax2 = document.querySelector(".linemax2");
let spanmax2 = document.querySelector(".maxletter2");
spanmax2.innerHTML = maxletter2;
input2.oninput = function () {
  spanmax2.innerHTML = maxletter2 - input2.value.length;
  if (linemax2.style.width < "87.6%") {
    linemax2.style.width = `${(input2.value.length * 100) / maxletter2}%`;
  }
};
setInterval(() => {
  let num_letter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color_num_letter = [];
  for (let i = 0; i < 6; i++) {
    color_num_letter.push(
      num_letter[Math.trunc(Math.random() * num_letter.length)]
    );
  }
  let final_color = `#${color_num_letter.join("")}`;
  document.querySelector(".cont").style.backgroundColor = final_color;
  document.querySelector("button").style.backgroundColor = final_color;
  document.querySelector(".linemax1").style.backgroundColor = final_color;
  document.querySelector(".linemax2").style.backgroundColor = final_color;
}, 1000);
