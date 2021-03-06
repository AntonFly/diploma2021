export default async function getRegionContracts(props) {
  let y = props.year;
  let fz = "";
  let region = "";
  let pricerange = "";
  let year = "";
  let count = "";
  let sort = "";
  if (props.sort === "contractsSum") sort = "&sort=price";
  else sort = "&sort=-price";
  if (props.count) count = "&perpage=" + props.count;
  if (props.region) region = "customerregion=" + props.region;
  if (props.pricerange)
    pricerange =
      "&pricerange=0-" +
      Math.round(props.pricerange[0]) * 10 ** props.pricerange[1];
  if (props.fz) fz = "&fz=" + props.fz;
  if (props.year) year = "&daterange=01.01." + y + "-31.12." + y;

  return await fetch(
    `https://api.spending.gov.ru/v1/contracts/select/?${region}${pricerange}${fz}${year}${count}${sort}`,
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
