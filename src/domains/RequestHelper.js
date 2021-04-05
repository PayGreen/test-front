import { useEffect, useReducer } from 'react';
const RequestHelper = (initialUrl) => {
    console.log(initialUrl)
    const [state, dispatch] = useReducer(requestReducer, {
        isInit: true,
        isLoading: false,
        isSuccess: false,
        isError: false,
        data: []
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT', payload: [] });
            try {
                await fetch(initialUrl).then(result => result.json()).then( data => dispatch({ type: 'FETCH_SUCCESS', payload: data }));
            }
            catch (error) {
                dispatch({ type: 'FETCH_FAILURE', payload: [] });
            }
        };
        fetchData();
    }, [initialUrl]);
    return Object.assign({}, state);
};
const requestReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return Object.assign(Object.assign({}, state), { isInit: false, isLoading: true, isError: false });
        case 'FETCH_SUCCESS':
            return Object.assign(Object.assign({}, state), { isInit: false, isLoading: false, isSuccess: true, isError: false, data: action.payload });
        case 'FETCH_FAILURE':
            return Object.assign(Object.assign({}, state), { isInit: false, isLoading: false, isError: true });
        default:
            throw new Error();
    }
};
export default RequestHelper;
