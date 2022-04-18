import React from "react";



export class ToDoListRenderer extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <>
                {
                    this.props.list.map((i) => i)
                }
            </>
        )
    }
}