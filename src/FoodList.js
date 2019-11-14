import React from 'react';
// import fire from "./fire";
// import 'bootstrap/dist/css/bootstrap.css';
import Seed from './Seed';
import { Card, Button, CardDeck, Form } from 'react-bootstrap';
import './App.css';

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      filteredFoods: [],
      input: '',
      showRemoveIcon: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      foods: Seed.foods,
      filteredFoods: Seed.foods,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];
    // currentList = this.state.foods;
    // If the search bar isn't empty
    // if (e.target.value !== "") {
    if (this.state.input !== "") {
      // Assign the original list to currentList
      currentList = this.state.foods;
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(description => {
        // change current item to lowercase
        const lc = description.description.toLowerCase();
        // change search term to lowercase
        // const filter = e.target.value.toLowerCase();
        const filter = this.state.input.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      // newList = this.props.description;
      newList = currentList;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filteredFoods: newList
    });
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      input: value,
    });

    if (value === '') {
      this.setState({
        showRemoveIcon: false,
        filteredFoods: this.state.foods
      });
    } else {

      this.setState({
        showRemoveIcon: true,
      });
    }
  };

  clearForm() {
    this.setState({
      filteredFoods: this.state.foods
    });
  }

  render() {
    const foodComponents = this.state.filteredFoods.map((food) => (
      <Food
        key={'food-' + food.id}
        id={food.id}
        title={food.title}
        description={food.description}
        url={food.url}
        votes={food.votes}
        submitterAvatarUrl={food.submitterAvatarUrl}
        productImageUrl={food.productImageUrl}
      />
    ));
    return (
      <div className='mt-2'>
        {/* <SearchField /> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Form style={{ width: '18rem' }} onSubmit={this.handleSubmit} >
            <Form.Group controlId="formBasic">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control type="input"
                placeholder="Enter Ingredient"
                value={this.state.input}
                onChange={this.handleChange}
              />
              <Button
                variant="secondary"
                onClick={this.clearForm}
              >
                Clear Search
              </Button>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={this.state.input === "" ? true : false }
            >
              Submit
          </Button>
          </Form>
        </div>

        {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        </div> */}
        <div className='mt-5'>
          <CardDeck>
            {foodComponents}
          </CardDeck>
        </div>
      </div>
    );
  }
}

class Food extends React.Component {

  render() {
    return (
      <Card className="card-style" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.productImageUrl} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button href={this.props.url} variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    );
  }
}

// class SearchField extends React.Component {
//   render() {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Form style={{ width: '18rem' }}>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Ingredients</Form.Label>
//             <Form.Control type="text"
//               placeholder="Enter Ingredient"
//               value={this.props.state.searchValue}
//               onChange={this.props.onSearchChange} />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     )
//   }
// }

export default FoodList;