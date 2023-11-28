import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.scss';

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedin />, link: "https://www.linkedin.com/in/levi-almeida/"}, 
    {name: 'github', icon: <FaGithub />, link: "https://github.com/LeviAlmeid"}, 
    {name: 'instagram', icon: <FaInstagram />, link: "https://www.instagram.com/levi_almeida22/"}, 
]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className='social-btn' id={network.name} key={network.name} target='blank'>
                    {network.icon}
                </a>
            ))}
        </section>  
    )
}

export default SocialNetworks