
import './App.css';
// import Navbar from './components/Navbar';

// import Textform from './components/Textform';
// import Alert from './components/Alert';
// import About from './components/About';



 // digikull
//  import Todolist from './components/Todolist';

// import Header from './components/Digikull/Header';
// import Footer from './components/Digikull/Footer';
// import Serchbar from './components/Digikull/Serchbar';
// import Sidebar from './components/Digikull/Sidebar';
// import Todo from './components/Todo/Todo';
// import Banner from './components/Banner/Banner';

          // todo_List
  //  import ToDoList1  from "./components/ToDoList1"



               // bank application for Bank of Application
               import { useSelector, useDispatch } from 'react-redux';
               import Actions1,{ withdrawAmount } from './Bank/Actions1'; // Assuming you have defined this action

// import Actions1  from './Bank/Actions1';
import Reducers from './Bank/Reducers';
import Store1 from './Bank/Store1'


function App() {

  // Bank_Applications
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleWithdrawal = (amount) => {
    dispatch(withdrawAmount(amount));
  };
  
  return (
  <>

{/* <Navbar title="Flipcart" /> */}
{/* <Alert alert ="this is alert"/> */}
<div className="container mb-3">
{/* <Textform headding = "Enter the detail" /> */}

{/* <About/> */}
</div>



{/* Digikull */}

{/* <Header/> */}
{/* <Serchbar/> */}
{/* <Footer/> */}
{/* <Sidebar/> */}
{/* <Todo/> */}
{/* <Banner/> */}

{/* <ToDoList1/> */}


     {/* Bank Applications */}

     <div>
      <h1>Welcome to the Bank Application</h1>
      <div>
        <p>Name: {user.name}</p>
        <p>Balance: ${user.balance}</p>
      </div>
      <button onClick={() => handleWithdrawal(10)}>Withdraw $10</button>
      <button onClick={() => handleWithdrawal(20)}>Withdraw $20</button>
    </div>










<Actions1/>
<Reducers/>
<Store1/>














</>

  );
}

export default App;
