import React , {useState , useEffect}from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import {fetchCountries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [Countries, setCountries] = useState([]);

    useEffect (()=>{
        const fetchCountriesApi = async () => {
            setCountries(await fetchCountries());
        }

        fetchCountriesApi();
    },[setCountries]);

    return(
        <div>
           
           <FormControl className={styles.formcontrol }>
               <NativeSelect className={styles.a }defaultValue='' onChange={(e)=>{handleCountryChange(e.target.value)}}>
                   <option className={styles.opt } value=''>Global</option>
                  {Countries.map(country=>(<option key={country} value={country} className={styles.opt }>{country}</option>))}
               </NativeSelect>
           </FormControl>
        </div>
    );
}

export default CountryPicker;