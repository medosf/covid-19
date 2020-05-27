import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import Styles from './App.module.css';

import {fetchData} from './api';




class App extends React.Component{

    state = {
        data: {},
        country:''
    }

    async componentDidMount(){
        const fetchedData  = await fetchData();

        this.setState({data: fetchedData});
      
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
        console.log()

    }
    render(){
        const {data, country} = this.state;
        return(
            <div className={Styles.container}>
                {country? <h1 style={{color:'white'}}>Coivd-19 <span style={{color: 'rgba(0,0,255,0.8)'}}>{country}</span> Data</h1> 
                : <h1 style={{color:'white'}}> Coivd-19 <span style={{color: 'rgba(0,0,255,0.8)'}}>World </span> Data</h1>}
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />

                {console.log(this.state.data)}
                
                
            </div>
        );
    }
}

export default App;