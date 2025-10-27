import './App.css';
import DesercionPorCurso from './components/DesercionPorCurso';
import RankingCausas from './components/RankingCausas';
import UsuariosPorNivel from './components/UsuariosPorNivel';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">
        DASHBOARD STEM HELPER
      </h1>

      <div className="flex flex-col items-center gap-6 text-blue-900">
        <DesercionPorCurso />
        <RankingCausas />
        <UsuariosPorNivel />
      </div>
    </div>
  );
}

export default App;
