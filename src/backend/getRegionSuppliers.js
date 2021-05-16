export default async function getRegionSuppliers(props) {
  let y = props.year;
  let fz = "";
  let region = "";
  let pricerange = "";
  let year = "";
  let count = "";
  let sort = "";
  if (props.sort) sort = "&sort=" + props.sort;
  if (props.count) count = "&perpage=" + props.count;
  if (props.region) region = "regioncode=" + props.region;
  if (props.pricerange)
    pricerange =
      "&pricerange=0-" +
      Math.round(props.pricerange[0]) * 10 ** props.pricerange[1];
  if (props.fz) fz = "&fz=" + props.fz;
  if (props.year) year = "&daterange=01.01." + y + "-31.12." + y;

  return await fetch(
    `http://openapi.clearspending.ru/restapi/v3/suppliers/select/?${region}${sort}${count}`,
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
