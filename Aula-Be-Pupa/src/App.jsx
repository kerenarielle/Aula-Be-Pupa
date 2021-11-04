import './App.css';
import Produtos from './components/Produtos';

const produto = [
  {
    titulo: 'Titulo imagem 1',
    descricao: 'descrição 1',
    imagem: {
      path: 'https://www.qries.com/images/banner_logo.png',
      desc: 'Descrição da imagem',
      classe: '',
    }
  },
  {
    titulo: 'Titulo imagem 2',
    descricao: 'descrição 2',
    source: '',
    imagem: {
      path: 'https://www.qries.com/images/banner_logo.png',
      desc: 'Descrição da imagem',
      classe: '',
    }
  },
  {
    titulo: 'Titulo imagem 3',
    descricao: 'descrição 3',
    source: '',
    imagem: {
      path: 'https://www.qries.com/images/banner_logo.png',
      desc: 'Descrição da imagem',
      classe: '',
    }
  },
  {
    titulo: 'Titulo imagem 4',
    descricao: 'descrição 4',
    source: '',
    imagem: {
      path: 'https://www.qries.com/images/banner_logo.png',
      desc: 'Descrição da imagem3',
      classe: '',
    }
  }
]

const App = () => {
  return (
    <>
      <Produtos produtos={produto} />
    </>
  );
}

export default App;
