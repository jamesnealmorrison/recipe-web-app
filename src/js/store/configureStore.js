import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import combinedReducer, { GlobalStateRecord } from './reducer'
import { AppStateRecord } from './app/app.records'

export default function configureStore(initialState = {}, history) {
    const middlewares = [thunk, routerMiddleware(history)]
    const enhancers = [applyMiddleware(...middlewares)]

    const composeEnhancers =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                    shouldHotReload: false,
                })
            : compose

    const state = GlobalStateRecord({
        app: AppStateRecord({ apiToken: window.localStorage.getItem('apiToken') }),
    })

    const finalState = state.merge(initialState)

    const store = createStore(
        combinedReducer,
        finalState,
        composeEnhancers(...enhancers),
    )

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            store.replaceReducer(combinedReducer)
        })
    }

    return store
}