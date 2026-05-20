// src/services/f1Data.js

export const teamsData = {
  ferrari: { name: "Ferrari", foundation: "1950", headquarters: "Maranello, Italia", constructorsChampionships: 16, iconicCars: ["F2002", "SF71H", "SF-24"] },
  mclaren: { name: "McLaren", foundation: "1963", headquarters: "Woking, Reino Unido", constructorsChampionships: 8, iconicCars: ["MP4-17", "MP4-23", "MCL38"] },
  redbull: { name: "Red Bull Racing", foundation: "2005", headquarters: "Milton Keynes, Reino Unido", constructorsChampionships: 6, iconicCars: ["RB6", "RB19", "RB22"] },
  mercedes: { name: "Mercedes-AMG", foundation: "2010", headquarters: "Brackley, Reino Unido", constructorsChampionships: 8, iconicCars: ["W05", "W11", "W15"] },
  alpine: { name: "Alpine / Renault", foundation: "1977", headquarters: "Enstone, Reino Unido", constructorsChampionships: 2, iconicCars: ["R25", "A521", "A524"] },
  astonmartin: { name: "Aston Martin", foundation: "2021", headquarters: "Silverstone, Reino Unido", constructorsChampionships: 0, iconicCars: ["AMR23", "AMR24"] },
  williams: { name: "Williams Racing", foundation: "1977", headquarters: "Grove, Reino Unido", constructorsChampionships: 9, iconicCars: ["FW24", "FW46"] },
  vcarb: { name: "RB (Visa Cash App RB)", foundation: "2024", headquarters: "Faenza, Italia", constructorsChampionships: 0, iconicCars: ["VCARB 01"] },
  haas: { name: "Haas F1 Team", foundation: "2016", headquarters: "Kannapolis, EE.UU.", constructorsChampionships: 0, iconicCars: ["VF-18", "VF-24"] },
  audi: { name: "Audi F1 Team", foundation: "2026", headquarters: "Hinwil, Suiza / Neuburg, Alemania", constructorsChampionships: 0, iconicCars: ["Audi F1 Showcar"] },
  cadillac: { name: "Cadillac F1 Team", foundation: "2026", headquarters: "Indiana, EE.UU. / Charlotte, EE.UU.", constructorsChampionships: 0, iconicCars: ["Cadillac F1 Entry"] },
  brawn: { name: "Brawn GP", foundation: "2009", headquarters: "Brackley, UK", constructorsChampionships: 1, iconicCars: ["BGP 001"] },
  bmwsauber: { name: "BMW Sauber", foundation: "2006", headquarters: "Hinwil, Suiza", constructorsChampionships: 0, iconicCars: ["F1.08"] },
  toyota: { name: "Toyota F1", foundation: "2002", headquarters: "Colonia, Alemania", constructorsChampionships: 0, iconicCars: ["TF102"] },
  jaguar: { name: "Jaguar Racing", foundation: "2000", headquarters: "Milton Keynes, UK", constructorsChampionships: 0, iconicCars: ["R3"] },
  bar: { name: "BAR Honda", foundation: "1999", headquarters: "Brackley, UK", constructorsChampionships: 0, iconicCars: ["BAR006"] }
};

const generateSeasons = () => {
  const data = {};
  
  const pool = {
    monaco: { id: "monaco", name: "Circuit de Monaco", location: "Monte Carlo", turns: 19, lengthKm: "3.337 km", description: "Trazado urbano e histórico.", tag: "Circuito con menos accidentes" },
    monza: { id: "monza", name: "Autodromo Nazionale di Monza", location: "Monza, Italia", turns: 11, lengthKm: "5.793 km", description: "El templo de la velocidad.", tag: "Circuito más importante" },
    silverstone: { id: "silverstone", name: "Silverstone Circuit", location: "Silverstone, UK", turns: 18, lengthKm: "5.891 km", description: "Cuna de la F1.", tag: "Circuito más largo" },
    bahrain: { id: "bahrain", name: "Bahrain International Circuit", location: "Sakhir", turns: 15, lengthKm: "5.412 km", description: "Carrera nocturna en el desierto." },
    spa: { id: "spa", name: "Circuit de Spa-Francorchamps", location: "Stavelot, Bélgica", turns: 19, lengthKm: "7.004 km", description: "El circuito más largo del calendario actual." },
    suzuka: { id: "suzuka", name: "Suzuka International Racing Course", location: "Suzuka, Japón", turns: 18, lengthKm: "5.807 km", description: "Trazado técnico en forma de ocho." },
    sepang: { id: "sepang", name: "Sepang International Circuit", location: "Kuala Lumpur, Malasia", turns: 15, lengthKm: "5.543 km", description: "Gran Premio de Malasia (2002-2017)." },
    indianapolis: { id: "indianapolis", name: "Indianapolis Motor Speedway", location: "Indiana, EE.UU.", turns: 13, lengthKm: "4.192 km", description: "Utilizado en el GP de EE.UU. entre 2000 y 2007." },
    nurburgring: { id: "nurburgring", name: "Nürburgring", location: "Nürburg, Alemania", turns: 16, lengthKm: "5.148 km", description: "Sede del GP de Europa y GP de Alemania." },
    valencia: { id: "valencia", name: "Valencia Street Circuit", location: "Valencia, España", turns: 25, lengthKm: "5.419 km", description: "Circuito urbano del GP de Europa (2008-2012)." },
    barcelona: { id: "barcelona", name: "Circuit de Barcelona-Catalunya", location: "Montmeló, España", turns: 14, lengthKm: "4.657 km", description: "Sede del Gran Premio de España." },
    albertpark: { id: "albertpark", name: "Albert Park Circuit", location: "Melbourne, Australia", turns: 14, lengthKm: "5.278 km", description: "Circuito semiurbano de Australia." },
    interlagos: { id: "interlagos", name: "Autódromo José Carlos Pace", location: "São Paulo, Brasil", turns: 15, lengthKm: "4.309 km", description: "Sede del Gran Premio de Brasil." }
  };

  for (let year = 2002; year <= 2026; year++) {
    let drivers = [];
    let activeTeams = [];
    let constructorsPoints = {}; // Mantenemos un solo nombre limpio para los puntos
    let mostAccidentsCircuit = "Monaco";
    let circuits = [];

    // 1. Carga exhaustiva de todos los circuitos por año
    if (year === 2026) {
      circuits = [pool.bahrain, pool.albertpark, pool.barcelona, pool.monaco]; 
      mostAccidentsCircuit = "Bahrain";
    } else if (year >= 2021) {
      circuits = [pool.bahrain, pool.albertpark, pool.barcelona, pool.monaco, pool.silverstone, pool.spa, pool.monza, pool.suzuka, pool.interlagos];
      mostAccidentsCircuit = "Silverstone";
    } else if (year >= 2010) {
      circuits = [pool.albertpark, pool.bahrain, pool.barcelona, pool.monaco, pool.valencia, pool.silverstone, pool.spa, pool.monza, pool.suzuka, pool.interlagos];
      mostAccidentsCircuit = "Valencia";
    } else { 
      circuits = [pool.albertpark, pool.sepang, pool.barcelona, pool.monaco, pool.nurburgring, pool.indianapolis, pool.silverstone, pool.spa, pool.monza, pool.suzuka, pool.interlagos];
      if (year >= 2004) circuits.push(pool.bahrain);
      mostAccidentsCircuit = "Indianapolis";
    }

    // 2. Mapeo de Duplas y Puntuaciones de Constructores de forma unificada
    if (year === 2026) {
      activeTeams = ["redbull", "ferrari", "mclaren", "mercedes", "astonmartin", "alpine", "williams", "vcarb", "haas", "audi", "cadillac"];
      drivers = [
        { id: "verstappen", name: "Max Verstappen", teamId: "redbull", championships: 3, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 25 },
        { id: "perez", name: "Sergio Pérez", teamId: "redbull", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 18 },
        { id: "leclerc", name: "Charles Leclerc", teamId: "ferrari", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 15 },
        { id: "hamilton", name: "Lewis Hamilton", teamId: "ferrari", championships: 7, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 12 },
        { id: "norris", name: "Lando Norris", teamId: "mclaren", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 10 },
        { id: "piastri", name: "Oscar Piastri", teamId: "mclaren", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 8 },
        { id: "russell", name: "George Russell", teamId: "mercedes", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 6 },
        { id: "antonelli", name: "Kimi Antonelli", teamId: "mercedes", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 4 },
        { id: "alonso", name: "Fernando Alonso", teamId: "astonmartin", championships: 2, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 2 },
        { id: "stroll", name: "Lance Stroll", teamId: "astonmartin", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 1 },
        { id: "gasly", name: "Pierre Gasly", teamId: "alpine", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "doohan", name: "Jack Doohan", teamId: "alpine", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "albon", name: "Alexander Albon", teamId: "williams", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "sainz", name: "Carlos Sainz", teamId: "williams", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "ocon", name: "Esteban Ocon", teamId: "haas", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "bearman", name: "Oliver Bearman", teamId: "haas", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "tsunoda", name: "Yuki Tsunoda", teamId: "vcarb", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "vcarb_tbc", name: "Por confirmar (VCARB)", teamId: "vcarb", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "hulkenberg", name: "Nico Hülkenberg", teamId: "audi", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "audi_tbc", name: "Por confirmar (Audi)", teamId: "audi", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "cadillac_tbc1", name: "Por confirmar 1 (Cadillac)", teamId: "cadillac", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 },
        { id: "cadillac_tbc2", name: "Por confirmar 2 (Cadillac)", teamId: "cadillac", championships: 0, dnfs: 0, fastLaps: 0, grandSlams: 0, points: 0 }
      ];
      constructorsPoints = { redbull: 43, ferrari: 27, mclaren: 18, mercedes: 10, astonmartin: 3, alpine: 0, williams: 0, haas: 0, vcarb: 0, audi: 0, cadillac: 0 };
    } 
    else if (year >= 2021 && year <= 2025) {
      activeTeams = ["redbull", "ferrari", "mclaren", "mercedes", "astonmartin", "alpine", "williams", "vcarb", "haas"];
      drivers = [
        { id: "verstappen", name: "Max Verstappen", teamId: "redbull", championships: 3, dnfs: 2, fastLaps: 9, grandSlams: 2, points: 454 },
        { id: "perez", name: "Sergio Pérez", teamId: "redbull", championships: 0, dnfs: 3, fastLaps: 2, grandSlams: 0, points: 285 },
        { id: "leclerc", name: "Charles Leclerc", teamId: "ferrari", championships: 0, dnfs: 3, fastLaps: 5, grandSlams: 1, points: 308 },
        { id: "sainz", name: "Carlos Sainz", teamId: "ferrari", championships: 0, dnfs: 2, fastLaps: 3, grandSlams: 0, points: 246 },
        { id: "norris", name: "Lando Norris", teamId: "mclaren", championships: 0, dnfs: 1, fastLaps: 4, grandSlams: 0, points: 241 },
        { id: "piastri", name: "Oscar Piastri", teamId: "mclaren", championships: 0, dnfs: 2, fastLaps: 2, grandSlams: 0, points: 197 },
        { id: "hamilton", name: "Lewis Hamilton", teamId: "mercedes", championships: 7, dnfs: 1, fastLaps: 4, grandSlams: 0, points: 234 },
        { id: "russell", name: "George Russell", teamId: "mercedes", championships: 0, dnfs: 3, fastLaps: 2, grandSlams: 0, points: 175 }
      ];
      constructorsPoints = { redbull: 860, mercedes: 409, ferrari: 406, mclaren: 302, astonmartin: 280, alpine: 120, williams: 32, vcarb: 23, haas: 12 };
    } 
    else if (year >= 2006 && year <= 2010) {
      activeTeams = ["ferrari", "mclaren", "redbull", "renault", "bmwsauber", "brawn", "williams"];
      drivers = [
        { id: "button", name: "Jenson Button", teamId: "brawn", championships: 1, dnfs: 1, fastLaps: 2, grandSlams: 0, points: 95 },
        { id: "barrichello", name: "Rubens Barrichello", teamId: "brawn", championships: 0, dnfs: 1, fastLaps: 2, grandSlams: 0, points: 77 },
        { id: "hamilton", name: "Lewis Hamilton", teamId: "mclaren", championships: 1, dnfs: 2, fastLaps: 1, grandSlams: 0, points: 98 },
        { id: "kovalainen", name: "Heikki Kovalainen", teamId: "mclaren", championships: 0, dnfs: 5, fastLaps: 2, grandSlams: 0, points: 53 },
        { id: "vettel", name: "Sebastian Vettel", teamId: "redbull", championships: 4, dnfs: 3, fastLaps: 3, grandSlams: 1, points: 84 },
        { id: "webber", name: "Mark Webber", teamId: "redbull", championships: 0, dnfs: 2, fastLaps: 3, grandSlams: 0, points: 69 },
        { id: "alonso", name: "Fernando Alonso", teamId: "renault", championships: 2, dnfs: 3, fastLaps: 0, grandSlams: 0, points: 61 }
      ];
      constructorsPoints = { brawn: 172, redbull: 153, mclaren: 71, ferrari: 70, renault: 26, williams: 43, bmwsauber: 36 };
    } 
    else { 
      activeTeams = ["ferrari", "mclaren", "williams", "jaguar", "toyota", "bar"];
      drivers = [
        { id: "schumacher", name: "Michael Schumacher", teamId: "ferrari", championships: 7, dnfs: 2, fastLaps: 7, grandSlams: 2, points: 144 },
        { id: "barrichello", name: "Rubens Barrichello", teamId: "ferrari", championships: 0, dnfs: 3, fastLaps: 5, grandSlams: 0, points: 77 },
        { id: "raikkonen", name: "Kimi Räikkönen", teamId: "mclaren", championships: 1, dnfs: 5, fastLaps: 3, grandSlams: 0, points: 91 },
        { id: "coulthard", name: "David Coulthard", teamId: "mclaren", championships: 0, dnfs: 4, fastLaps: 1, grandSlams: 0, points: 41 },
        { id: "montoya", name: "Juan Pablo Montoya", teamId: "williams", championships: 0, dnfs: 3, fastLaps: 3, grandSlams: 0, points: 50 },
        { id: "webber", name: "Mark Webber", teamId: "jaguar", championships: 0, dnfs: 7, fastLaps: 0, grandSlams: 0, points: 17 }
      ];
      constructorsPoints = { ferrari: 221, williams: 92, mclaren: 65, jaguar: 17, toyota: 16, bar: 11 };
    }

    data[year.toString()] = { drivers, circuits, constructorsPoints, mostAccidentsCircuit, activeTeams };
  }
  
  return data;
};

export const seasonsData = generateSeasons();