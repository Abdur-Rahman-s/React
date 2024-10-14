import './App.css';
import MyContextAPI from './ContextApi/myContextAPI';
import UserForm from './ContextApi/UserForm';

function App() {
  return (
    <>
      <MyContextAPI>
        <UserForm />
      </MyContextAPI>
    </>
  );
}

export default App;
