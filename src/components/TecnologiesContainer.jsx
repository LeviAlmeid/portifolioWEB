import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'

import '../styles/components/tecnologiescontainer.scss'

const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />},
    { id: 'css', name: 'CSS3', icon: <DiCss3 />},
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />},
    { id: 'node', name: 'Node.Js', icon: <DiNodejsSmall />},
    { id: 'mysql', name: 'MySQL', icon: <DiMysql />},
    { id: 'react', name: 'React', icon: <DiReact />},
]

const TecnologiesContainaer = () => {
    return (
        <section className="tecnologies-container">
            <h2>Tecnologias</h2>
            <div className="tecnologies-grid">
                {technologies.map((tech) => (
                    <div className="tecnologies-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="teclogy-info">
                            <h3>{tech.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecnologiesContainaer