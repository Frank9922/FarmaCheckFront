import React from 'react'
import { json } from 'react-router-dom'

export const ResultadoCompatibilidad = ({data}) => {
  return (
    <div className="container bootstrap snippets bootdeys">
        <div className="row justify-content-center">

            <div className="col-md-8 col-sm-6 content-card">
                <div className="card-big-shadow">
                    <div className="card card-just-text flex-row" data-background="color" data-color="blue" data-radius="none">
                        <div className="content ">
                            <h4 className="title"><a href="#">{data.first_farmaco}</a></h4>
                            <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                        </div>

                        <div className="row content">
                            <h4 className="title"><a href="#">{data.second_farmaco}</a></h4>
                            <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                        </div>
                    </div>

                    <div className="card card-just-text" data-color="blue">
                        <div className="content ">
                            <h3>{data.compatibilidad}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
