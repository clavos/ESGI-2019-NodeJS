import React from "react";

class MovieForm extends React.Component {
    render(){
        return <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.onSubmit();
            return false;
        }}>
            <p>Title</p>
            <input name="title" onChange={(event) => this.props.onChange(event.currentTarget.value, "title")}/>
            <p>Description</p>
            <input name="description" onChange={(event) => this.props.onChange(event.currentTarget.value, "description")}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    }
}

export default MovieForm;