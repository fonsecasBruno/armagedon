'use client'

import Pagina from "@/app/components/Pagina"
import apiFilmes from "@/app/apis/apiFilmes"
import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"

export default function page() {

    const [filmes, setFilmes]= useState([])

    // Fazer algo quando iniciar o componente
    useEffect(() => {
        //Buscar os Filmes
        buscarFilmes()
    }, [])

    async function buscarFilmes(){
        const resultado = await apiFilmes.get("/movie/now_playing?language=pt-BR")
        console.log(resultado.data.results)
        const filmesRecebidos = resultado.data.results
        setFilmes(filmesRecebidos)
    } 

  return (
    
    <Pagina titulo="Filmes">

        <Row md='4'>

            {filmes.map(filmes => {
                return(
                    <Col className="py-2">

                        <Card style={{height: '100'}}>
                            <Card.Img src={"https://image.tmdb.org/t/p/w500/" + filmes.poster_path}/>
                            <Card.Body>
                                <Card.Title>{filmes.original_title}</Card.Title>
                                <p><b>Nota: </b>{filmes.vote_average} ⭐</p>
                            </Card.Body>
                            <Card.Footer className="text-end">
                                <Button href={"/filmes/" + filmes.id}>Detalhes</Button>
                            </Card.Footer>
                        </Card>

                    </Col>
                )
            })}

        </Row>

    </Pagina>

  )
}
