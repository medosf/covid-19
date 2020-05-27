import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar } from 'react-chartjs-2';


 import styles from './Chart.module.css';
 
const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
       
        fetchAPI();
    },[]);

    const linechart = (
      dailyData.length?

      (<Line data={{
          labels: dailyData.map(({date}) => date),
            datasets: [{
              data: dailyData.map(({confirmed})=> confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true
             },{
                 data: dailyData.map(({deaths})=> deaths),
                 label: 'Deaths',
                 borderColor: 'red',
                 backgroundColor: 'rgba(255, 0 , 0 , 0.5)',
                 fill: true

            }]
      }}  
    />) : null
    );

    console.log(confirmed, recovered, deaths);
    const barchar = (
        confirmed 
        ? ( <Bar   

            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                    {
                    label: 'total',
                    data: [confirmed.value, recovered.value, deaths.value],
                    backgroundColor: [ 'rgba(0,0,255,0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    hoverBackgroundColor: ['rgba(0,0,255,0.7)', 'rgba(0, 255, 0, 0.722)', 'rgba(255, 0, 0, 0.752)']
                    }
                ]
            }}
                // data={{
                //     lables: ['Infected', 'Recovered', 'Deaths'],
                //     datasets: [{
                //         label: 'people',
                //         backgroundColor: [
                //             'rgba(0,0,255,0.5)',
                //             'rgba(0, 255, 0, 0.664)',
                //             'rgba(255, 0, 0, 0.692)'
                //         ],
                //         data: [confirmed.value, recovered.value, deaths.value],
                        
                //     }]

                // }}
                // options={{
                //     legend: {display: false},
                //     title: {display: true, text: `Current state in ${country}`}
                // }}
            /> 
        ): null
    )

    return(
        <div className={styles.container}>
            {country? barchar : linechart}
           
           
        </div>
    );
}

export default Chart;