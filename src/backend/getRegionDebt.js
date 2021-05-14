export default async function getRegionDebt() {
  return await fetch(
    `https://skad.minfin.ru/OpenDataAPI/api/json/dataset/7710168360-Subject_Debt/version/0/content`,
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
