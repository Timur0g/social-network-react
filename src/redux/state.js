import ReactDOM from 'react-dom';
import React from "react";
import App from '../App';

// const rerenderDOM = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//           <App state={state}/>
//         </React.StrictMode>,
//         document.getElementById('root')
//       );
// };
const state = {
    
    dialogs: {
        persons: [{id: 'rerget-435-fg-gerg-5-f',name: 'Alex'}, {id: 'rer5-fg-ger-gerg-5-f', name: 'Ahmet'}],
        messages: [{id: 'ret-5fg-gerg-5-f', value: 'Hello, msf'}, {id: 'vhyht-rfuuk-cvcfr-44-f', value: 'What you say?'}],
    },
    profile: {
        addPost(text, id='evgete545-gef-55fgr'){ 
            const obj = {id: id, value: text};
            this.posts.unshift(obj)
            state.methods.rerenderDOM()
        },
        posts: [{id: 'dewfwr343fegr-54', value: 'its my post'}, {id: 'qseffwr-55gfrgr-54', value:'hellohello'}]
    },

    methods: {
        rerenderDOM: () => {
            ReactDOM.render(
                <React.StrictMode>
                  <App state={state}/>
                </React.StrictMode>,
                document.getElementById('root')
              );
        }
    }
}

export default state;