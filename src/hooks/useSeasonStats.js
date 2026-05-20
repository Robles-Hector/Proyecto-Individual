import { useMemo } from 'react';

export function useSeasonStats(driversData, selectedYear) {
  return useMemo(() => {
    if (!driversData) return { totalGrandSlams: 0, highestDnfRate: null };

    // Simulación de procesamiento pesado de métricas históricas de F1
    const totalGrandSlams = driversData.reduce((acc, curr) => acc + (curr.grandSlams || 0), 0);
    
    const highestDnfRate = [...driversData].sort((a, b) => b.dnfs - a.dnfs)[0];

    return {
      totalGrandSlams,
      highestDnfRate,
      processedAt: new Date().toISOString()
    };
  }, [driversData, selectedYear]); // Solo se recalcula si cambian los datos o el año seleccionado
}