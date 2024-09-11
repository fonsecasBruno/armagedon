'use client'

import apiFilmes from "../apis/apiFilmes"
import Pagina from "../components/Pagina"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"

export default function page() {

    const [filmes, setFilmes]= useState([])

    // Fazer algo quando iniciar o componente
    useEffect(() => {
        //Buscar os Filmes
        buscarFilmes()
    }, [])

    async function buscarFilmes(){
        const resultado = await apiFilmes.get("/movie/popular?language=pt-BR")
        console.log(resultado.data.results)
        const filmesRecebidos = resultado.data.results
        setFilmes(filmesRecebidos)
    } 

  return (
    
    <Pagina titulo="Filmes">

        <Row>

            {filmes.map(filmes => {
                return(
                    <Col>
                        <p>{filmes.original_title}</p>
                    </Col>
                )
            })}

        </Row>

    </Pagina>

  )
}
