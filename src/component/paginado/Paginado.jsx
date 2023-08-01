import React from 'react'
import './paginado.css'

export const Paginado = ({numberOfProduct,cardForPage,page,setPage}) => {
    const pageNumber =[]
    for(let i =1;i<=Math.ceil(numberOfProduct/cardForPage);i++){
        pageNumber.push(i)
    }
  

    const pagePrevius =()=>{
        setPage(page-1)
    }

    const pageNext=()=>{
        setPage(page+1)
    }

    const specificPage=(page)=>{
        setPage(page)
    }


  return (
    <div className='conteiner-paginado'>
        <button onClick={pagePrevius} disabled={page<=1}>atras</button>
        <div className='btn-page'>
        {pageNumber.map((noPage)=>(
            <button key={noPage}  onClick={()=>specificPage(noPage)} className={`${noPage===page ? 'btn-act':'btn-des'}`}>{noPage}</button>
        )).slice(page-1,page+1)}

        </div>

        

        <button onClick={pageNext} disabled={page>=pageNumber.length}>adelante</button>
    </div>
  )
}
