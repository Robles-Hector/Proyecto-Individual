import { useF1 } from '../../context/F1Context';
import { seasonsData } from '../../services/f1Data';

export default function CircuitsList() {
  const { state } = useF1();
  const season = seasonsData[state.selectedYear] || { circuits: [] };

  return (
    <div>
      <h2>Circuitos del Calendario Oficial ({state.selectedYear})</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {season.circuits.map(circuit => {
          // Evalúa si el circuito tiene tag para meterle el marco personalizado
          const hasTag = !!circuit.tag;
          
          return (
            <div 
              key={circuit.id} 
              style={{ 
                background: '#222', 
                padding: '20px', 
                borderRadius: '8px',
                position: 'relative',
                border: hasTag ? '2px solid #ffcc00' : '1px solid #333',
                boxShadow: hasTag ? '0 0 10px rgba(255, 204, 0, 0.2)' : 'none'
              }}
            >
              {hasTag && (
                <span style={{ position: 'absolute', top: '-12px', right: '10px', background: '#ffcc00', color: '#000', fontSize: '11px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '10px' }}>
                  {circuit.tag}
                </span>
              )}
              <h3 style={{ color: '#e10600', margin: '0 0 10px 0' }}>{circuit.name}</h3>
              <p><strong>Ubicación:</strong> {circuit.location}</p>
              <p><strong>Curvas:</strong> {circuit.turns} | <strong>Longitud:</strong> {circuit.lengthKm}</p>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.4' }}>{circuit.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}