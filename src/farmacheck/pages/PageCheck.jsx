import React, { useState, useEffect, useMemo } from 'react';
import { api } from '../../api/api';
import { HomeLayout } from '../../ui/HomeLayout';
import { useForm } from '../../hooks/useForm';
import { useGetCompaQuery, useGetFarmacosQuery } from '../../store/apis/checkApi';
import { ResultadoCompatibilidad } from '../components/ResultadoCompatibilidad';





export const PageCheck = () => {

  const { form1, form2, onInputChange, formState } = useForm({form1: '', form2: ''})

  const { data, isLoading, error } = useGetFarmacosQuery();

  const [skipquery, setskip] = useState(false)

  const [farmacos, setfarmacos] = useState({farma1: '1', farma2: '10'})

  const { data : compa, isLoading : isLoadingCompa, error : errorCompa } = useGetCompaQuery(farmacos, { skip: !skipquery});


  const handleSubmit = async(event) => {
    event.preventDefault();
    setskip(true);

    setfarmacos({farma1: form1, farma2: form2});

  }
  

 

  // Render the component
  return (
    <>
    <HomeLayout>
        
          <div className='container pt-4 pb-4'>

            <form onSubmit={handleSubmit}>
              {
                isLoading ? (
                  <p>Loading farmacos...</p>
                ) :(
                  <>

                  <select className='form-control mb-4' name='form1' onChange={onInputChange}>
                    <option selected={true}>First option...</option>
                  {
                      data.farmacos.map((farmaco) => ( <option value={farmaco.id} key={farmaco.id}>{farmaco.name}</option> ))
                  }

                  </select>


                  <select className='form-control mt-4' name='form2' onChange={onInputChange}>
                  <option selected={true}>Second option...</option>
                  {
                      data.farmacos.map((farmaco) => ( <option key={farmaco.id} value={farmaco.id}>{farmaco.name}</option> ))
                  }

                  </select>
                  <button type='submit' className='btn btn-primary mt-4'>
                    Consultar
                  </button>

                  </>
                )
              }
              
        </form>
                  {JSON.stringify(compa)}
                  {
                    compa ? <ResultadoCompatibilidad {...compa}/> : null
                  }
    
          </div>


    </HomeLayout>

    </>
  );
};
