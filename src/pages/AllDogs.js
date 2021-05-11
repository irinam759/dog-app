import React from 'react'
import { Card, Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class AllDogs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            breedsArr: [],
            isLoading: true,
            filter: ''
        }
    }
    componentDidMount = () => {
        setTimeout(()=> {
            this.setState({
                isLoading: false
            })
        }, 2000)
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(stream => stream.json())
        .then(res => {
            for(const breed in res.message){
                fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                .then(stream => stream.json())
                .then(res => {
                    const obj = {
                        breedName: breed,
                        image: res.message
                    }
                    this.setState({
                        breedsArr: this.state.breedsArr.concat(obj)
                    })
                })
            }
        })
        
    }
    updateFilter = (value) => {
        this.setState({
            filter: value
        })
    }

    render() {

        const dogCard = this.state.breedsArr.sort((a,b) => {
            if (a.breedName < b.breedName ){
                return -1
            }
            if (a.breedName > b.breedName ){
                return 1
            }
            return 0
        })
        .filter(breed => breed.breedName.includes(this.state.filter))
        .map((breed) => {
            return (
                <Col lg={3} md={6} sm={12}>
                    <Link to={`/breed/${breed.breedName}`}>
                        <Card>
                            <Card.Title>{breed.breedName}</Card.Title>
                            <Card.Img src={breed.image} />
                        </Card>
                    </Link>
                </Col>
            )
        })
        return (
            <div> <Row>
                {/* {this.state.isLoading && <div>Loading, please wait</div>}
                {!this.state.isLoading && (<div> */}
                    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Search</Form.Label>
    <Form.Control type="text" placeholder="search dog by breed" onChange={(event) => this.updateFilter(event.target.value)} value={this.state.filter}/>
  </Form.Group>
  </Form>
  </Row>
               
                <Row className = "mt-2">
                    {dogCard}
                </Row>
                {/* </div>)} */}
            </div>
        )
    }
}


export default AllDogs;