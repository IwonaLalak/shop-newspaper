import types from "./types";

interface State {
    desc: string,
    data: any[]  //todo change any to product object type
}

const INIT: State = {
    desc: 'Array of products data',
    data: []
};

const productsReducer = (state = INIT, action: any) => {
    switch (action.type) {
        case types.ADD: {

            console.log(state)
            console.log(action)

            return {
                ...state, data: [...state.data, action.item]
            }
        }

        case types.EDIT: {
            let {data} = state;
            data[data.indexOf(data.find((i: any) => i.id === action.item.id))] = action.item;
            return {...state, data}
        }

        case types.DELETE: {
            let {data} = state;
            data.splice(data.indexOf(data.find((i: any) => i.id === action.id)), 1);
            return {...state, data};
        }

        default:
            return state;
    }
};

export default productsReducer;

