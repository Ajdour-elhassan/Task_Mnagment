import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Addtask extends Component {
    state = {
        
        title: ''

    }

    onSubmit = (e) => {
    e.preventDefault();
    this.props.addtask(this.state.title);
    this.setState({ title: '' })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input

            text="text"
            style={{ flex : '10', padding : '5px'}}
            name="title"
            placeholder="Todo Task ..."
            value ={this.state.title}
            onChange ={this.onChange}

            />

            <input
               type="submit"
               value="submit"
               className="btn"
               style={{flex : '1' }}

            />

        </form>

        )
    }
}
ADDtask.propTypes = {
    Addtask : PropTypes.func.isRequired
  }

export default Addtask ;
