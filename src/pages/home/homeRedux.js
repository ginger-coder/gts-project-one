const initState = [];

const GET_HOME_DATA= 'HOME/GET_GET_HOME_DATA';

const getHomeDataAction = (skuId=0, count=0)=> (dispatch, getState) =>{
    setTimeout(()=>{
        dispatch(
            {
                type:GET_HOME_DATA,
                homeData:[1,2,3]
            }
        );
    },500)
}

export const actions = {
    getHomeDataAction
}

export default function homeRedux (state=initState, action) {
    let {
        type,
        homeData
    } = action;
    switch (type) {
        case GET_HOME_DATA:
            return [...state,...homeData];
        default:
            return state;
    }
}