async function getDataAPI() {
  const api = await fetch("http://localhost:3000/country");
  const data = await api.json();
  return data;
}
export { getDataAPI };
