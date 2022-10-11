const pictureForm = document.querySelector("#pictureForm");
const pictures = document.querySelector("#pictures");
const wo_select = document.querySelector("#workorder_id");
const form = new FormData();

form.append(pictures.name, pictures.files);

const options = {
  method: "POST",
};
options.body = form;

async function readPictures(options) {
  const res = await fetch("http://teste.com");
  const json = await res.json();
}

pictureForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("enviando");
  const paths = [];
  for (let i = 0; i < pictures.files.length; i++) {
    paths.push(pictures.files[i].path);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  M.FormSelect.init(elems);
});

async function getWorkorder() {
  let res = await fetch(
    "https://arth-app-stag-naaiidmgnq-uc.a.run.app/api/process-list"
  );
  let json = await res.json();
  const option = document.createElement("option");
  json.process.map((item) => {
    option.textContent = item;
    wo_select.appendChild(option);
  });
}

getWorkorder();
