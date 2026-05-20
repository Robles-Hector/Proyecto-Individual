import { useParams, Link } from 'react-router-dom';
import { useF1 } from '../../context/F1Context';
import { seasonsData, teamsData } from '../../services/f1Data';

export default function DriverDetail() {
  const { driverId } = useParams();
  const { state } = useF1();
  
  const season = seasonsData[state.selectedYear] || { drivers: [] };
  const driver = season.drivers.find(d => d.id === driverId);

  if (!driver) {
    return (
      <div>
        <p>Piloto no encontrado para la temporada {state.selectedYear}.</p>
        <Link to="/drivers" style={{ color: '#e10600' }}>Volver a la lista</Link>
      </div>
    );
  }

  const team = teamsData[driver.teamId];

  return (
    <div style={{ background: '#222', padding: '30px', borderRadius: '12px' }}>
      <Link to="/drivers" style={{ color: '#aaa', textDecoration: 'none' }}>← Volver</Link>
      <h2 style={{ color: '#e10600', marginTop: '10px' }}>{driver.name}</h2>
      <p style={{ fontSize: '18px' }}>Escudería Histórica ({state.selectedYear}): <strong>{team.name}</strong></p>
      
      <hr style={{ borderColor: '#333', margin: '20px 0' }} />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ background: '#111', padding: '15px', borderRadius: '6px' }}>
          <p style={{ margin: 0, color: '#aaa' }}>Campeonatos del Mundo</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '5px 0 0 0' }}>{driver.championships}</p>
        </div>
        <div style={{ background: '#111', padding: '15px', borderRadius: '6px' }}>
          <p style={{ margin: 0, color: '#aaa' }}>Abandonos (DNFs)</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '5px 0 0 0' }}>{driver.dnfs}</p>
        </div>
        <div style={{ background: '#111', padding: '15px', borderRadius: '6px' }}>
          <p style={{ margin: 0, color: '#aaa' }}>Vueltas Rápidas</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '5px 0 0 0' }}>{driver.fastLaps}</p>
        </div>
        <div style={{ background: '#111', padding: '15px', borderRadius: '6px' }}>
          <p style={{ margin: 0, color: '#aaa' }}>Grand Slams</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '5px 0 0 0' }}>{driver.grandSlams}</p>
        </div>
      </div>
    </div>
  );
}