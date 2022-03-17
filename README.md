Github Pages: https://cyberqostya.github.io/train-redux

### Кратко об изученном
1. ```store = createStore(reducer)``` - хранит состояния
1. ```rootReducer = combineReducers({ red1, red2, ..., redN })``` - главный редьюсер, в котором комбинируются все редьюсеры приложения
1. ```reducer``` - функция, которая на основании *action.type*, возвращает преобразованный store
1. ```action = { type: ..., payload: ... }``` - объект, в котором содержится информация о типе события и доп данных
1. ```actionCreator``` - функция, которая принимает *payload* и возвращает объект *action* с уже внесенным полем *type*
1. ```defaultState``` - стейт по-умолчанию
1. ```dispatch = useDispatch()``` - функция, которая принимает *action | actionCreator*, а затем обращается к *reducer*
1. ```state = useSelector(state => state.reducer.stateName)``` - изъятие стейта их *store*
1. ```<Provider store={store}></Provider>``` - обертка приложения для доступа всех дочерних элементов к общему стейту
1. Асинхронный Redux-thunk на примере запросов в [JSONplaceholder](https://jsonplaceholder.typicode.com/)
1. Асинхронный Redux-saga ```workers watchers effects```
1. Рефакторинг и декомпозиция

