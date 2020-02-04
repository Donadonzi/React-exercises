import React from 'react';

export default class SearchBar extends React.Component {

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = { term: ''};

    onFormSubmit= (event) => {
        event.preventDefault();
        
        this.props.Submit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                {/* <form className="ui form" onSubmit={e => this.onFormSubmit(e)}> One of the solution for broken value of "this" in this case, we don't need to define onFormSubmit as an arrow function up there */}
                    <div className="field">
                        <label>Search Image</label>
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        <input type="text" value={this.state.term} onChange={ e => this.setState({ term: e.target.value }) } />
                    </div>     
                </form>
            </div>
        );
        
    }

}