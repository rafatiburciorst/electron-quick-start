function picutreProcess(e) {
  e.preventDefault();
  console.log("enviando");
  const paths = [];
  for (let i = 0; i < pictures.files.length; i++) {
    paths.push(pictures.files[i].path);
  }
  return startUpload(paths);
}

async function startUpload(paths) {
  const options = {
    method: "POST",
    contentType: "application/json",
  };

  for (let i = 0; i < paths.length; i++) {
    let res = await fetch(url, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(paths[i]),
    });
  }
}

export default picutreProcess;
