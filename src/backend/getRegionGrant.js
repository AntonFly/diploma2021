export default async function getRegionGrant(props) {
  let year = "";
  let pricerange = "";
  let sort = "";
  let y = props.year;
  if (props.sort === "contractsSum") sort = "";
  else sort = "&desc=True";
  if (y) year = "&info_dateUpdate=" + y + "-01-01:" + y + "-12-31";
  if (props.pricerange)
    pricerange =
      "&info_sum=0:" +
      Math.round(props.pricerange[0]) * 10 ** props.pricerange[1];

  return await fetch(
    `https://api.sub.clearspending.ru/v1/subsidy/?receiver_localAddress_regionCodeFixed=${props.region}${year}${pricerange}&sort=info.sum${sort}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    }
  ).then((response) => response.json());
}
