export default async function getRegionIncome() {
  return await fetch(
    `https://skad.minfin.ru/OpenDataAPI/api/json/dataset/7710168360-StatePerCapitaIncome/version/0/content`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    }
  ).then((response) => {
    return response.json();
  });
}
