import React from 'react';
import regions from "../../data/regions.json";

import '../../index.css';

class ProjectPage extends React.Component {
    state = {
        project: null,
        error: false
    };

    componentDidMount() {
        const code = this.props.match.params.code;
        setTimeout(() => {
            const region = regions.find(region => region.code === code);
            this.setState({
                region: region,
                error: !region
            });
        }, 100);
    }

    render() {
        const { region, error } = this.state;
        if (error) {
            alert(error)
            return <div className='container'>Что-то пошло не так...</div>;
        }
        if (!region) return <div className='container'>Loading...</div>;

        return (
            <div className='project'>
                <div className='container'>
                    <img
                        className='project__screenshot'
                        src={region.screenshot}
                        alt={region.region}
                    />

                    <h1 className='region__title'>{region.region}</h1>

                    <p className='project__description'>
                        {region.description}
                    </p>

                    <div className='project__stack'>
                        {/*{project.stack.join(', ')}*/}
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