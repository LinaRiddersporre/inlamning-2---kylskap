import React from "react";

class Filter extends React.Component {

    render() {
        return (
            <div>
                {this.props.categories.map((value, index) => {
                    return (
                        <button key={index} onClick={() => { this.props.filterWord(value) }}> {value} </button>)
                })}
            </div>

        )
    }
}

export default Filter;