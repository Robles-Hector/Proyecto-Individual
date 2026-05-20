import { NavLink, Outlet } from 'react-router-dom';
import { useF1 } from '../context/F1Context';

export default function Layout() {
  const { state, dispatch } = useF1();
  const years = Array.from({ length: 2026 - 2002 + 1 }, (_, i) => 2002 + i).reverse();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', background: '#111', color: '#fff' }}>
      {/* Sidebar de Navegación */}
      <nav style={{ width: '250px', background: '#1f1f1f', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h1 style={{ color: '#e10600', margin: '0 0 20px 0' }}>F1 Analytics</h1>
        
        {/* Selector de Temporada Global */}
        <label>Temporada Histórica:</label>
        <select 
          value={state.selectedYear} 
          onChange={(e) => dispatch({ type: 'SET_YEAR', payload: e.target.value })}
          style={{ padding: '8px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>

        <hr style={{ width: '100%', borderColor: '#333' }} />

        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#e10600' : '#fff', textDecoration: 'none' })}>Dashboard</NavLink>
        <NavLink to="/drivers" style={({ isActive }) => ({ color: isActive ? '#e10600' : '#fff', textDecoration: 'none' })}>Pilotos</NavLink>
        <NavLink to="/teams" style={({ isActive }) => ({ color: isActive ? '#e10600' : '#fff', textDecoration: 'none' })}>Escuderías</NavLink>
        <NavLink to="/circuits" style={({ isActive }) => ({ color: isActive ? '#e10600' : '#fff', textDecoration: 'none' })}>Circuitos</NavLink>
      </nav>

      {/* Contenedor de Vistas Dinámicas */}
      <main style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}