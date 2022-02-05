import React , { useState, useEffect,FormEvent}from "react";

import api from '../../services/api';

import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg'


import { Title, Form, Container, Repositories, Error } from './styles'

interface Repository {

    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}
const Dashboard: React.FC  = () => {

    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storedRepositories = localStorage.getItem(
          '@GithubExplorer:respositories',
        );
        if (storedRepositories) {
          return JSON.parse(storedRepositories);
        }
        return [];
      });
    const [inputError, setInputError] = useState('');
    const [ newRepo, setNewRepo] = useState('');

    useEffect(() => {
localStorage.setItem('@GitHubExporer:repositories', JSON.stringify(repositories))

    }, [repositories])

    async function handleAddRepo(event:FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault();
if(!newRepo) {
    setInputError('digite o nome do repositorio')
    return
}
 try {

     const response = await api.get<Repository>(`repos/${newRepo}`);

     const repository = response.data;

     setRepositories([...repositories, repository]);
    setInputError('')
     setNewRepo('');


  } catch(err){

    setInputError('erro na busca dess repositorio')
  }


    }

    return (
        <Container>


        <img src={logo} alt="Github logo" />

        <Title> Explore repositorios no Github</Title>

        <Form hasError={!!inputError} onSubmit={handleAddRepo}>
            <input
            value={newRepo}
            onChange={ e=> setNewRepo(e.target.value)}
            placeholder="Digite aqui um repositorio"/>
            <button type="submit" >Pesquisar</button>
        </Form>

        { inputError && <Error>{inputError}</Error>}
        <Repositories>
           {repositories.map(repository => (
            <a key={repository.full_name} href="teste">
                <img  src={repository.owner.avatar_url} alt={repository.owner.login}/>
                <div>
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>
                </div>
                <FiChevronRight size="20px" />
            </a>
           ))}


        </Repositories>
        </Container>
    )
}


export default Dashboard;
