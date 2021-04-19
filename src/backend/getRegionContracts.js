export default function getRegionContracts(props){
    return fetch(`http://openapi.clearspending.ru/restapi/v3/contracts/search/?customerregion=${props.region}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
    })
        .then(response => response.json())
        .then(response => {
            if (response.status !== 'OK') {
                throw response
            }
            return response
        })

}