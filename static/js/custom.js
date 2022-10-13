import getContent from "./getContent.js";
import picutreProcess from "./pictureProcess.js";
const pictureForm = document.querySelector("#pictureForm");
const pictures = document.querySelector("#pictures");
const wo_select = document.querySelector("#workorder_id");
const windblade_select = document.getElementById("windblade_id");
const form = new FormData();

form.append(pictures.name, pictures.files);

function loadSelect() {
  var elems = document.querySelectorAll("select");
  M.FormSelect.init(elems);
}

pictureForm.onsubmit = (e) => {
  picutreProcess(e);
};

document.addEventListener("DOMContentLoaded", async function () {
  await getWorkorder();
  var elems = document.querySelectorAll("select");
  M.FormSelect.init(elems);
});

async function getWorkorder() {
  const url = "process-list";
  const json = await getContent(url);
  json.process.forEach((item) => {
    console.log(item);
    const option = document.createElement("option");
    option.textContent = `${item}`;
    wo_select.appendChild(option);
  });
}

wo_select.onchange = (e) => {
  const selectedOption = e.target.value;
  getWindblade(selectedOption);
};

async function getWindblade(workorder) {
  windblade_select.innerHTML = "";
  let options = ["Teste 1", "Teste 2", "Teste 3"];
  let option = document.createElement("option");
  options.forEach((item) => {
    option.innerHTML = `${item}`;
    windblade_select.appendChild(option);
    loadSelect();
  });
}
