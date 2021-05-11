import React from 'react'
import { withRouter } from 'react-router';
import { Card , Col , Row } from 'react-bootstrap';

class SingleBreed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            breedImages:[]
        }
        this.singleBreed = this.props.match.params.singleBreed;
       // console.log(this.props.match.params.singleBreed)
        
    }
    componentDidMount = () => {
        fetch(`https://dog.ceo/api/breed/${this.singleBreed}/images`)
        .then(stream => stream.json())
        .then(res => {
            console.log(res.message)
            this.setState({
                breedImages: res.message
            })
            
        })
    }
    render() {
        let breedGallery = this.state.breedImages.map((img)=> {
            return ( <Col lg={3} md={6} sm={12}>
                             <Card>
                            
                             <a href={img} target="_blank"><Card.Img src={img} /></a>
                        </Card>
                        </Col>
                 )}
         ) 
            //    console.log(breedGallery);
        return (
            <div>
          <h1>Gallery by breed: {this.singleBreed}</h1>
          <Row>
          {breedGallery}
          </Row>
          </div>
        )
    }
}

export default withRouter(SingleBreed);