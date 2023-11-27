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
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />, desc: "Explorar o HTML foi uma jornada simples e gratificante, tornando a criação de uma página mais intuitiva."},
    { id: 'css', name: 'CSS3', icon: <DiCss3 />, desc: "Experimentar CSS foi como dar vida à minha página web, podendo deixar o visual de maneira incrivelmente flexível e intuitiva."},
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, desc: "Explorar JavaScript foi como desbloquear o interativo da minha página, proporcionando uma experiência diferente."},
    { id: 'node', name: 'Node.Js', icon: <DiNodejsSmall />, desc: "Node.js abriu novas possibilidades, permitindo-me levar o JavaScript para o lado do servidor."},
    { id: 'mysql', name: 'MySQL', icon: <DiMysql />, desc: "MySQL trouxe robustez aos meus projetos, proporcionando uma base de dados confiável e eficiente"},
    { id: 'react', name: 'React', icon: <DiReact />, desc: "Explorar React foi como descobrir uma abordagem revolucionária para construir interfaces de usuário."},
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
                            <p>{tech.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecnologiesContainaer