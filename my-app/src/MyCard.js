import React from "react"
import {Card,CardBody,CardTitle,CardText} from "reactstrap"
import {FaEnvelope,FaMapMarkedAlt,Faphone} from "react-icons/fa"

const MyCard=({details})=>{
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}/>
                <CardTitle className="text-primary">
                    <h1><span className="pr-4">{details.name?.title}</span>
                    <h1><span>{details.name?.first}</span>
                    <span>{details.name?.last}</span></h1>



                    </h1>
                </CardTitle>
            </CardBody>
        </Card>
    )
}

export default MyCard;