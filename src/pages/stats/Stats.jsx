import StatsChart from '../../components/stats/StatsChart';
import './Stats.css';

const rallyData = [
    { driver: "Sébastien Loeb", wins: 80 },
    { driver: "Sébastien Ogier", wins: 58 },
    { driver: "Carlos Sainz", wins: 26 },
    { driver: "Colin McRae", wins: 25 },
    { driver: "Tommi Mäkinen", wins: 24 },
    { driver: "Juha Kankkunen", wins: 23 },
    { driver: "Ott Tänak", wins: 19 },
    { driver: "Thierry Neuville", wins: 19 },
    { driver: "Kalle Rovanperä", wins: 11 }
];

const Stats = () => {
    return (
        <div className="stats-page">
            <div className="stats-container">
                <h1>Estadísticas WRC</h1>
                <p>Victorias históricas por piloto destacado en el Campeonato Mundial de Rally.</p>
                
                <div className="chart-wrapper">
                    <StatsChart data={rallyData} />
                </div>
            </div>
        </div>
    );
};

export default Stats;
