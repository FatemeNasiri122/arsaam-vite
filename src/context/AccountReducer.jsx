const todoReducer= (state,action) =>{
    switch (action.type) {
        case 'CHANGE-ACTIVE':
            return{
                ...state,
                lists: action.payload.lists,
            }

    }

}

export default todoReducer