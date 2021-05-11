import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { withRouter } from 'react-router';

class DogsGallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allDogs : []
        };
 
       
    }
    componentDidMount = () => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then( (stream) => stream.json())
            .then((res) => {
                const bre
                console.log(res.message)
                // const breedsObj = {
                //          res.message
                // }
                //console.log(breedsObj)
            //    console.log(res.message)
            //    const breedList = Object.keys(res.message);
            //    this.setState({
            //     allDogs : breedList
            //    })
            
                })
          
    }

        render(){
            const dogCard = this.state.allDogs.map((breed) => {
                return (
                    <Col lg={3} md={6} sm={12}>
                        <Card>
                            <Card.Title>{breed}</Card.Title>
                            <Card.Img src={`https://dog.ceo/api/breed/${breed}/images/random`} />
                        </Card>
                    </Col>
                )
            });
    
               
    
            return(
               
                <div className='p-dogs-gallery-page'>
                    <h1>Dogs Gallery</h1>
                    <label htmlFor="search-name">Find dog:</label>
                <input type="text"
                onChange={(()=>{})}
                className="form-control"
                name="search-name" 
                id="search-name" 
                placeholder="type here.." />
                <Row>
                    {dogCard}
                </Row>  
                    </div>
                  
         
          )
            }
        }
export default withRouter(DogsGallery);      