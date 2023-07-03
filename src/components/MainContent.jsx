import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TecnologiesContainaer from './TecnologiesContainer';
import '../styles/components/maincontent.scss';

const MainContent = () => {
    return(
        <main id='main-content'>
            <AboutContainer />
            <TecnologiesContainaer />
            <ProjectsContainer /> 
        </main>
    )
}

export default MainContent