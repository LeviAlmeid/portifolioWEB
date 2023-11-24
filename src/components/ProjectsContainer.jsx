
import '../styles/components/projectsContainer.scss';
import React, { useState, useEffect, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';






const ProjectsContainer = () => {

    const carrousel = useRef(null);

    function handleLeftButton(e){
        carrousel.current.scrollLeft -= 500;
    }
    function handleRightButton(e){
        carrousel.current.scrollLeft += 500;
    }


    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const buscarRepositories = async () => {
            const response = await fetch('https://api.github.com/users/levialmeid/starred');
            
            const data = await response.json();
            setRepositories(data);
            
        };

        buscarRepositories();
    }, []);

    const meusProjetosFavoritados = repositories.filter(repo => repo.owner.login === 'LeviAlmeid');
    
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            {console.log(meusProjetosFavoritados)}
            {
                
                meusProjetosFavoritados.length > 0 ? (
                    <div>
                        <div className="carrousel" ref={carrousel}>

                                {
                                    meusProjetosFavoritados.map((repo) => (
                                        <div className="item">
                                            <div className="image">
                                                <img src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png" alt="projeto" />
                                            </div>
                                            <div className="info">
                                                <span className="name">{repo.name}</span>
                                                <span className="desc">{repo.description}</span>
                                                <a href={repo.html_url}  target="_blank">Acessar projeto</a>
                                            </div>
                                        </div>
                                    ))
                                }
                        </div>
                        <div className='buttonsCarrousel' >
                            <button onClick={handleLeftButton}>
                                <ChevronLeftIcon name='left' sx={{ fontSize: 40 }}  color='white'/>
                            </button>
                            <button onClick={handleRightButton}>
                                <ChevronRightIcon name='right' sx={{ fontSize: 40 }}  color='white'/>
                            </button>
                            
                        </div>
                    </div>
 
                ) : (
                    <CircularProgress className='loadingCarrousel' />
                )
            }

        </section>
    )
}

export default ProjectsContainer