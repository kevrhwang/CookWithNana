import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";

class NanaProfile extends Component {
  // state = {
  //   firstname: "Rose",
  //   location: "Somerset, NJ",
  //   profileimage: "https://c1.staticflickr.com/4/3275/2918869494_7e93a0ec3e_n.jpg",
  //   specialties: "Italian",
  //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab minima, repudiandae ex explicabo distinctio praesentium magnam velit inventore optio, dignissimos fuga, ipsum quos vero consequuntur! Voluptate cumque culpa eum nisi!"

	// }
	
	state = {
    nana: {}
  };

	componentDidMount() {
    API.getNanabyID(this.props.match.params.id)
      .then(res => this.setState({nana: res.data }))
      .catch(err => console.log(err));
  } 

  render(){
    return(	<div className="container">
		<div className="row">
			<div class="col-md-4">
				<div class="thumbnail">
      				<img src={this.state.nana.profileimage} alt="grandma" className="profilephoto"></img>
    		</div>
		  </div>

			<div class="col-md-8">
				<h1>{this.state.nana.firstname}&nbsp;{this.state.nana.lastname}</h1>
				<p>{this.state.nana.location}</p>
				<h4>Cooking Specialties:</h4>
				<p>Italian, Southern, Baking</p>
				<h4>About Me:</h4>
				<p>{this.state.nana.bio}</p>
				<button type="button" className="btn btn-primary">Make An Appointment With Me!</button>
			</div>

		</div>
	</div>)}  
};

export default NanaProfile;