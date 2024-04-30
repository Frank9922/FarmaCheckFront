import { useState } from 'react';
import { HomeLayout } from '../../ui/HomeLayout';
import { useForm } from '../../hooks/useForm';
import { useGetCompaQuery, useGetFarmacosQuery } from '../../store/apis/checkApi';
import { ResultadoCompatibilidad } from '../components/ResultadoCompatibilidad';





export const PageCheck = () => {

  const { form1, form2, onInputChange,  } = useForm({form1: '', form2: ''})

  const { data, isLoading } = useGetFarmacosQuery();

  const [skipquery, setskip] = useState(false)

  const [farmacos, setfarmacos] = useState({farma1: '1', farma2: '10'})

  const { data : compa  } = useGetCompaQuery(farmacos, { skip: !skipquery});


  const handleSubmit = async(event) => {
    event.preventDefault();

    if(form1 === '' || form2 === '') return
    
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
                    <option >First option...</option>
                  {
                      data.farmacos.map((farmaco) => ( <option value={farmaco.id} key={farmaco.id}>{farmaco.name}</option> ))
                  }

                  </select>


                  <select className='form-control mt-4' name='form2' onChange={onInputChange}>
                  <option >Second option...</option>
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

          
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" style={{backdropFilter: 'blur(5px)'}} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-black">
        Modaaaaaal
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    </HomeLayout>

    </>
  );
};
