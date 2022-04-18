import {createStore} from 'redux'


const ADD = "ADD"
const REMOEVE = "REMOVE"

const reducer =(arr = [], action) => {
    switch (action.type) {
        case ADD: 
        return [...arr, action.td]
        default: 
        return arr 
    }
}

const addAction = (td) => {
    return {
        type: ADD , 
        td: td
    }
}

const removeAction = () => {

}

export const store = createStore(reducer)

export const mapStateToProps = (state) => {
    return {
        toDo: state 
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (td) => {
            dispatch(addAction(td))
        }
    }
}

