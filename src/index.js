import './index.css';
import state from './redux/state';
import reportWebVitals from './reportWebVitals';

state.methods.rerenderDOM()
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
