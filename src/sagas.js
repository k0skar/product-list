import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch('https://json-server-k.herokuapp.com/products')
        .then(response => response.json());
    yield put({ type: "RES_PRODUCTS", products: json});
}
function* actionWatcher() {
    yield takeLatest('REQ_PRODUCTS', fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
