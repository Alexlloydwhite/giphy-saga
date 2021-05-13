import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import logger from 'redux-logger';
import {put, takeEvery} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';


//-------SAGA-------//

function* getGif() {
    try {
        const response = yield axios.get('/api/search');
        yield put({type: 'SET_GIF', payload: response.data});
    } catch (error) {
        alert('Unable to get gif from server');
        console.log('ERROR in getGif', error);
    }
}


function* getFavorite() {
    try {
        const response = yield axios.get('/api/favorite');
        yield put({type: 'SET_FAVORITE', payload: response.data});
    } catch (error) {
        alert('Unable to get gif from server');
        console.log('ERROR in getGif', error);
    }
}

function* getCategory(){
    try {
        const response = yield axios.get('/api/category');
        yield put({type: 'SET_CATEGORY', payload: response.data});
    } catch (error) {
        alert('Unable to get category from server');
        console.log('ERROR in getting category', error);
    }
        
}


function* addFavoriteGif(action) {
    try {
        yield axios.post('/api/favorite', String(action.payload) );
    } catch (error) {
        alert('Unable to add new gif');
        console.log('ERROR in addGif', error);
    }
}

function* deleteGif(action) {
    try{
        yield axios.delete(`/api/favorite/${action.payload}`);
        yield put({type: 'FETCH_GIF'});
    } catch (error) {
        alert('Unable to delete Gif');
        console.log('ERROR in deleteing gif', error);
    }
}

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('FETCH_GIF', getGif);
    yield takeEvery('ADD_NEW_FAVORITE', addFavoriteGif);
    yield takeEvery('DELETE_GIF', deleteGif);
    yield takeEvery('FETCH_CATEGORY', getCategory);
    yield takeEvery('FETCH_FAVORITE', getFavorite);
}

const gifList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GIF':
            return[...state, action.image]
        case 'SET_GIF':
            return action.payload
        default:
            return state;
    }
};

const search = (state = {}, action)  => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}

const category = (state = [], action) => {
    if(action.type === 'SET_CATEGORY'){
        return action.payload;
    }
    return state;
}

const store = createStore (
    combineReducers({
        search,
        gifList,
        category
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
