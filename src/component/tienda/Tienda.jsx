import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './tienda.css'
import { Paginado } from '../paginado/Paginado'


export const Tienda = () => {

    const [product, setProduct] =useState([])
    const numberOfProduct = product.length

    //---------    paginado   --------------//
    const [cardForPage,setCardForPage] = useState(6)
    const [page,setPage]=useState(1)

    const lastIndex=page*cardForPage
    const firstIndex = lastIndex-cardForPage



    const productAll = async()=>{
        const {data}= await axios('https://fakestoreapi.com/products')
        setProduct(data)
    }

    useEffect(()=>{
        productAll()
    },[])


  return (
    <div className='conteiner'>
        <h1>FAKE SHOP</h1>
        <div className='paginado'>
            <Paginado 
                numberOfProduct={numberOfProduct}
                cardForPage={cardForPage}
                page={page}
                setPage={setPage}
            />
        </div>
        <div className='conteiner-product'>
        {
            product.map(element=>(
                <div key={element.id} className='product'>
                    
                    <img src={element.image} alt={element.title}/>
                    <h1>{element.title}</h1>
                    <h3>Precio: {element.price}</h3>

                </div>
            )).slice(firstIndex,lastIndex)}

{/* {
            product.map(element=>(
                <div key={element.id} className='product'>
                    
                    <img src={element.img} alt={element.title}/>
                    <h1>{element.name}</h1>


                </div>
            )).slice(firstIndex,lastIndex)} */}

        </div>
        
        

       
        
    </div>
  )
}
