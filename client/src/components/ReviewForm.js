import React from "react";

class ReviewForm extends React.Component {
    render(){
        return <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.onSubmit();
            return false;
        }}>
            <p>Note</p>
            {/* <input name="firstname" onChange={(event) => this.props.onChange(event.currentTarget.value, "firstname")}/> */}
            <select name="score" onChange={(event) => this.props.onChange(event.currentTarget.value, "score")}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> 
            <p>Comment</p>
            <textarea name="Comment" onChange={(event) => this.props.onChange(event.currentTarget.value, "Comment")}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    }
}

export default ReviewForm;