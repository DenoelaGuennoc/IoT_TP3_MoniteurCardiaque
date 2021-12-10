import { createPortal } from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Graphique(props) {
    const {data} = props;

    const listeDatasFormat = data.map((format) => ({
        heartrate: format.heartrate,
        heure: new Date(format.timestamp).toLocaleTimeString('fr-FR'),
    }));

    console.log(data);
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                width={500}
                height={300}
                data={listeDatasFormat}
                margin={{
                    top: 15,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="heure" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="heartrate" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default  Graphique;