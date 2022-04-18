import {createStore} from 'redux'


const ADD = "ADD"
const REMOVE = "REMOVE"

const reducer =(arr = [], action) => {
    switch (action.type) {
        case ADD: 
        return [...arr, action.td]
        case REMOVE: 
        return arr.filter((_, i) => i != action.index)
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

const removeAction = (index) => {
    return {
        type: REMOVE, 
        index:index
    }
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
        }, 
        removeToDo: (index) => {
            dispatch(removeAction(index))
        }
    }
}

