import React from "react";
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg'


import { Title, Form, Container, Repositories } from './styles'

const Dashboard: React.FC  = () => {
    return (
        <Container>


        <img src={logo} alt="Github logo" />

        <Title> Explore repositorios no Github</Title>

        <Form >
            <input placeholder="Digite aqui um repositorio"/>
            <button type="submit" >Pesquisar</button>
        </Form>
        <Repositories>
            <a href="teste">
                <img  src="https://avatars.githubusercontent.com/u/68607000?s=400&u=4e51bfb72768818a354845754ebad46e80d765cd&v=4" alt="avatar imagem"/>
                <div>
                    <strong>rocketseat Unforn</strong>
                    <p>descricao ffffffff</p>
                </div>
                <FiChevronRight size="20px" />
            </a>
            <a href="teste">
                <img  src="https://avatars.githubusercontent.com/u/68607000?s=400&u=4e51bfb72768818a354845754ebad46e80d765cd&v=4" alt="avatar imagem"/>
                <div>
                    <strong>rocketseat Unforn</strong>
                    <p>descricao ffffffff</p>
                </div>
                <FiChevronRight size="20px" />
            </a>
            <a href="teste">
                <img  src="https://avatars.githubusercontent.com/u/68607000?s=400&u=4e51bfb72768818a354845754ebad46e80d765cd&v=4" alt="avatar imagem"/>
                <div>
                    <strong>rocketseat Unforn</strong>
                    <p>descricao ffffffff</p>
                </div>
                <FiChevronRight size="20px" />
            </a>
        </Repositories>
        </Container>
    )
}


export default Dashboard;
