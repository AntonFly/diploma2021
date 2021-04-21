export default async function getRegionContracts(props, comp){
    comp.setState({isFetching: true})
    return await fetch(`http://openapi.clearspending.ru/restapi/v3/contracts/search/?customerregion=${props.region}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
    })
        .then(response => response.json())
        .then(result => comp.setState(
            {contracts: result,
                isFetching: false
            }
        ))

}