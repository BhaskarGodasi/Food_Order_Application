import { useEffect, useState } from 'react'
import axios from 'axios'

function Menu() {
  var [search, setSearch] = useState('')
  const [card , setCard] = useState([])

  useEffect(()=>{
    const options={
        Headers:{
          'Content-Type': '*'
        }
    }
   axios.get('http://localhost:8080/522001',options).then((data)=>{
        setCard(data.data)
    })
    console.log(card)
  },[])
  return (
    <>
      <div className='container-fluid'>
        <div className='row text-center'>
          <div className=' col-md-4'></div>
          <div className='col-md-4 p-3'>
            <label ><b>search here.....</b></label>
            <input className='form-control border border-dark ' type='text' placeholeder='searchHere' 
            value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className='col-md-4'></div>
        </div>
        <div className='container'>
          <div className='row'>
           
            { 
            card?.filter(record => record.name.toLowerCase().includes(search.toLowerCase())).map((record => {
              return (
                <>
                  <div className='container' key={record.id}>
                    <div className="card  border border-dark">
                      <img src={record.img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{record.name}</h5>
                        <p className="card-text">{record.description}</p>
                        <h3 className='fw-bold'>{record.price}</h3>
                        </div>
       
                      
                    </div>
                  </div>
                </>
              )
            }))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Menu
