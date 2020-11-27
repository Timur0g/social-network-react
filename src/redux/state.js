import ReactDOM from 'react-dom';
import React from "react";
import App from '../App';

const state = {
    
    dialogs: {
        persons: [{id: 'rerget-435-fg-gerg-5-f',name: 'Alex'}, {id: 'rer5-fg-ger-gerg-5-f', name: 'Ahmet'}],
        messages: [{id: 'ret-5fg-gerg-5-f', value: 'Hello, msf'}, {id: 'vhyht-rfuuk-cvcfr-44-f', value: 'What you say?'}],
    },
    profile: {
        data: {
            posts: [{id: 'dewfwr343fegr-54', value: 'its my post'}, {id: 'qseffwr-55gfrgr-54', value:'hellohello'}]
        },
          
        entities: {
            text_area_id: '',
            text_area_text: ''
        },
        methods: {
            addPost: (text, id='evgete545-gef-55fgr') => { 
                const obj = {id: id, value: text};
                state.profile.data.posts.unshift(obj);
                state.methods.rerenderDOM();
                state.profile.entities.text_area_id = state.profile.entities.text_area_text = ''
            },

            changeText: (entitie, value) => {
                switch (entitie) {
                    case 'text_area_id':
                        state.profile.entities.text_area_id = value
                        break;

                    case 'text_area_text':
                        state.profile.entities.text_area_text = value
                        break;
                
                    default:
                        break;
                }               
                state.methods.rerenderDOM();
            }
        }
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