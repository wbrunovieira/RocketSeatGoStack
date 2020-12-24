import React, { useState } from 'react'

import './App.css';

import Header from './Header'

function App() {
const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

    function handleAddProject(){
        //projects.push(`Novo projeto ${Date.now()}`)

        setProjects([...projects, `Novo projeto ${Date.now()}`])
    }
    return (
<>
    
    <Header title="Projects"/>
    <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    
    </>
    )
}

export default App