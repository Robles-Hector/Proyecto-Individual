import { useF1 } from '../../context/F1Context';
import { seasonsData, teamsData } from '../../services/f1Data';

export default function TeamsList() {
  const { state } = useF1();
  const season = seasonsData[state.selectedYear] || { activeTeams: [] };

  return (
    <div>
      <h2>Escuderías Competidoras en la Temporada {state.selectedYear}</h2>
      <p style={{ color: '#aaa', marginBottom: '25px' }}>Listado de constructores activos en el campeonato durante este año histórico.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
        {season.activeTeams.map(teamId => {
          const team = teamsData[teamId];
          if (!team) return null;
          
          return (
            <div key={teamId} style={{ background: '#222', padding: '20px', borderRadius: '8px', borderTop: '4px solid #00ccff', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>{team.name}</h3>
              <p style={{ margin: '5px 0' }}><strong>Sede Central:</strong> {team.headquarters}</p>
              <p style={{ margin: '5px 0' }}><strong>Año de Fundación:</strong> {team.foundation}</p>
              <p style={{ margin: '5px 0' }}><strong>Campeonatos de Constructores Totales:</strong> {team.constructorsChampionships}</p>
              <div style={{ marginTop: '15px' }}>
                <strong>Monoplazas Destacados:</strong>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                  {team.iconicCars.map(car => (
                    <span key={car} style={{ background: '#333', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', color: '#ffcc00' }}>{car}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}