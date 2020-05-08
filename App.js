import React from 'react'

import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux'

import Home from './src/pages/home'
import Menu from './src/pages/menu'
import Desafio1 from './src/pages/botao_desafio1'
import Desafio2 from './src/pages/botao_desafio2'
import Desafio3 from './src/pages/botao_desafio3'

import Apresentacao from './src/pages/Apresentacao'
import QuestaoCeara from './src/pages/questaoCeara'
import questaoParana from './src/pages/questaoParana'
import ExercicioCeara from './src/pages/ExercicioCeara'
import ExercicioSaoPaulo from './src/pages/ExercicioSaoPaulo'
import ExercicioParana from './src/pages/ExercicioParana'
import questaoSaoPaulo from './src/pages/questaoSaoPaulo'
import videoExtra from './src/pages/videoExtra'


function App() {
  return (
    <Router>
      <Stack key='root'>
        <Scene key="home" component={Home} title='Inicio' initial hideNavBar />
        <Scene key="menu" component={Menu} title='Aventura Matemática' hideNavBar />
        <Scene key="desafio1" component={Desafio1} title='Aventura Matemática' hideNavBar />
        <Scene key="desafio2" component={Desafio2} title='Aventura Matemática' hideNavBar />
        <Scene key="desafio3" component={Desafio3} title='Aventura Matemática' hideNavBar />
        <Scene key="exercicioCeara" component={ExercicioCeara} title='Aventura Matemática' hideNavBar /> 
        <Scene key="exercicioSaoPaulo" component={ExercicioSaoPaulo} title='Aventura Matemática' hideNavBar />  
        <Scene key="exercicioParana" component={ExercicioParana} title='Aventura Matemática' hideNavBar />  
        <Scene key="apresentacao" component={Apresentacao} title='' hideNavBar />
        <Scene key="questaoCeara" component={QuestaoCeara} title='' hideNavBar/>
        <Scene key="questaoParana" component={questaoParana} title='' hideNavBar/>
        <Scene key="questaoSaoPaulo" component={questaoSaoPaulo} title='' hideNavBar/>
        <Scene key="videoExtra" component={videoExtra} title=''hideNavBar />


      </Stack>
    </Router>
  )
}

export default App
