import React from 'react';
import { LineChart, Line,CartesianGrid,XAxis,YAxis } from 'recharts';

const GraphPage = props => {

    const data = props.data;

    return (
        <LineChart width={600} height={400} data={data}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis dataKey="value"/>
        </LineChart>
    );
};
export default GraphPage;