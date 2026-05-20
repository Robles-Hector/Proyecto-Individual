import { useF1 } from '../context/F1Context';
import { seasonsData, teamsData } from '../services/f1Data';
import { useSeasonStats } from '../hooks/useSeasonStats';

export default function Dashboard() {
  const { state } = useF1();
  
  const season = seasonsData[state.selectedYear] || { drivers: [], constructorsPoints: {}, mostAccidentsCircuit: "N/A" };
  const { totalGrandSlams } = useSeasonStats(season.drivers, state.selectedYear);

  const leaderboardDrivers = [...season.drivers].sort((a, b) => b.points - a.points);
  const leaderboardTeams = Object.entries(season.constructorsPoints || {}).sort((a, b) => b[1] - a[1]);

  return (
    <div>
      <h2>Centro de Telemetría Global - Temporada {state.selectedYear}</h2>
      <p style={{ color: '#aaa', marginBottom: '20px' }}>Resumen reactivo e histórico de rendimiento de la parrilla de Fórmula 1.</p>
      
      {/* Indicadores Clave del Año */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ background: '#222', padding: '20px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h4 style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>Grand Slams en la Temporada</h4>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0 0 0', color: '#e10600' }}>{totalGrandSlams}</p>
        </div>
        <div style={{ background: '#222', padding: '20px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h4 style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>Trazado con Mayor Tasa de Accidentes</h4>
          <p style={{ fontSize: '26px', fontWeight: 'bold', margin: '12px 0 0 0', color: '#ffcc00' }}>{season.mostAccidentsCircuit}</p>
        </div>
      </div>

      {/* Tablas Estadísticas del Campeonato */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Tabla Mundial de Pilotos */}
        <div style={{ background: '#1c1c1c', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.4)' }}>
          <h3 style={{ borderBottom: '2px solid #e10600', paddingBottom: '10px', margin: '0 0 15px 0' }}>Clasificación de Pilotos</h3>
          {leaderboardDrivers.length === 0 ? <p style={{ color: '#666' }}>Sin registros</p> : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {leaderboardDrivers.map((d, idx) => (
                <li key={d.id} style={{ padding: '10px 0', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span><strong style={{ color: '#aaa' }}>{idx + 1}.</strong> {d.name}</span>
                  <span style={{ fontWeight: 'bold', color: '#e10600', background: '#331111', padding: '2px 8px', borderRadius: '4px' }}>{d.points} PTS</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tabla Mundial de Constructores */}
        <div style={{ background: '#1c1c1c', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.4)' }}>
          <h3 style={{ borderBottom: '2px solid #00ccff', paddingBottom: '10px', margin: '0 0 15px 0' }}>Clasificación de Constructores</h3>
          {leaderboardTeams.length === 0 ? <p style={{ color: '#666' }}>Sin registros</p> : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {leaderboardTeams.map(([teamId, pts], idx) => (
                <li key={teamId} style={{ padding: '10px 0', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span><strong style={{ color: '#aaa' }}>{idx + 1}.</strong> {teamsData[teamId]?.name || teamId}</span>
                  <span style={{ fontWeight: 'bold', color: '#00ccff', background: ' #112233', padding: '2px 8px', borderRadius: '4px' }}>{pts} PTS</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}