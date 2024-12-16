import React, {useEffect, useState} from 'react';
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';



const COLORS = [
    '#FF4F64', '#4F46E5', '#22C55E', '#FFB020',
    '#F97316', '#14B8A6', '#F43F5E', '#9333EA',
    '#06B6D4', '#3B82F6', '#D946EF', '#8B5CF6',
    '#EC4899', '#10B981', '#EAB308', '#F59E0B',
    '#34D399', '#F472B6', '#FB923C', '#D97706'
];
const Charts = () => {
    const [chartData, setChartData] = useState([{name: "bo'sh", value: 100}]);
    useEffect(() => {
        const LStransactions = (JSON.parse(localStorage.getItem("transactions")) || [])
        if (LStransactions.length > 0) {
            const res = LStransactions.map(item => {
                return {
                    name: item.name,
                    value: +item.amount,
                }
            })
            setChartData(res)
        }
    }, []);
    return (
        <div className="container" style={{textAlign: 'center', marginTop: '20px'}}>
         
            <h3 style={{fontWeight: 'bold', marginBottom: '20px'}}>
                Xarajatlar kategoriyasi bo'yicha taqsimot
            </h3>

        
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <PieChart width={400} height={400}>
                  
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={90}
                        outerRadius={150}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        animationDuration={1500}
                        isAnimationActive={true}
                    >
                       
                        {chartData?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Tooltip/> {/* Tooltip */}
                    <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
            </div>
        </div>
    );
};

export default Charts;
