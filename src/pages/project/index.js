import React from 'react';
import regions from "../../data/regions.json";
import flag_sources from "../../data/flag-sources";
import getRegionContracts from "../../backend/getRegionContracts";
import "./style.css"

import '../../index.css';

class ProjectPage extends React.Component {
    state = {
        project: null,
        error: false,
        contracts: null,
        isFetching: false

    };

    componentDidMount() {
        const code = this.props.match.params.code;
        setTimeout(() => {
            const region = regions.find(region => region.code === code);
            this.setState({
                region: region,
                error: !region
            });
            getRegionContracts({region: code},this).catch(e => console.log(e))
        });
    }

    render() {
        const { region, error, contracts, isFetching } = this.state;
        if (error) {
            alert(error)
            return <div className='container'>Что-то пошло не так...</div>;
        }

        //TODO анимация загрузки
        if (!region || isFetching) return <div className='container'>Loading...</div>;
        return (
            <div className='project'>
                <div className='container'>
                    <div className='region_header'>
                        <img
                        className='region_flag'
                        src={flag_sources[region.code].default}
                        alt={region.region}
                        />
                        <h1 className='region__title'>{region.region}<br/>
                        Код региона: {region.code}
                        </h1>
                    </div>
                        <hr/>

                    <p className='region_main_info'>
                    </p>

                    <div className='project__stack'>
                        {console.log(contracts)}
                    </div>

                    <div>
                        <a href={region.link} className='project__link'>
                            Ссылка на проект
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPage;