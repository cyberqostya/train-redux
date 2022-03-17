import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './store/customersReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customersReducer.customers);

  const addCash = cash => dispatch(addCashAction(cash))
  const getCash = cash => dispatch(getCashAction(cash))

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  }
  const removeCustomer = (customer) => dispatch(removeCustomerAction(customer));

  return (
    <div className="App">
      <h3>{cash}</h3>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add customers from database</button>
      </div>
      {customers.length > 0 ?
        <ol>
          {customers.map((customer, i) =>
            <li key={i} onClick={() => removeCustomer(customer)}>{customer.name}</li>
          )}
        </ol> :
        <h3>Customers not found</h3>
      }
    </div>
  );
}

export default App;
