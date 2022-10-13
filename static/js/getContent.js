async function conn(url) {
  let res = await fetch(
    `https://arth-app-stag-naaiidmgnq-uc.a.run.app/api/${url}`
  );
  let json = await res.json();
  return json;
}

export default conn;
