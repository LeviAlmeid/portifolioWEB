import SocialNetworks from './SocialNetworks'
import Avatar from '../img/perfil.jpg'

import '../styles/components/sidebar.scss'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Levi Almeida" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="./files/CV_Levi_Almeida.pdf" className="btn" download>Dowload curriculo</a>
        </aside>
    )
}

export default Sidebar