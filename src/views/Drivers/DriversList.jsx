import { useF1 } from '../../context/F1Context';
import { seasonsData, teamsData } from '../../services/f1Data';
import { Link } from 'react-router-dom';

export default function DriversList() {
  const { state, dispatch } = useF1();
  const season = seasonsData[state.selectedYear] || { drivers: [], activeTeams: [] };

  // Filtra los pilotos según la escudería elegida en el menú desplegable
  const filteredDrivers = season.drivers.filter(driver => 
    state.activeFilters.team === 'all' || driver.teamId === state.activeFilters.team
  );

  return (
    <div>
      <h2>Pilotos de la Temporada {state.selectedYear}</h2>
      
      <div style={{ marginBottom: '25px' }}>
        <label style={{ marginRight: '10px' }}>Filtrar Parrilla por Escudería: </label>
        <select 
          value={state.activeFilters.team} 
          onChange={(e) => dispatch({ type: 'SET_FILTERS', payload: { team: e.target.value } })} 
          style={{ padding: '8px 12px', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px', cursor: 'pointer' }}
        >
          <option value="all">Ver todos los pilotos</option>
          {season.activeTeams.map(teamId => (
            <option key={teamId} value={teamId}>{teamsData[teamId]?.name || teamId}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredDrivers.map(driver => {
          const team = teamsData[driver.teamId] || { name: 'Desconocido' };
          return (
            <div key={driver.id} style={{ background: '#222', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #e10600', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{driver.name}</h3>
              <p style={{ margin: '0 0 15px 0', color: '#aaa', fontSize: '14px' }}>Escudería: {team.name}</p>
              <p style={{ margin: '5px 0' }}><strong>Puntos de Temporada:</strong> {driver.points} pts</p>
              <p style={{ margin: '5px 0' }}><strong>Campeonatos del Mundo:</strong> {driver.championships}</p>
              <Link to={`/drivers/${driver.id}`} style={{ color: '#e10600', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginTop: '15px' }}>
                Ver Telemetría Detallada →
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}