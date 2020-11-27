import ReactDOM from 'react-dom';
import React from "react";
import App from '../App';

const state = {
    
    dialogs: {
        data: {
            persons: [{id: 'rerget-435-fg-gerg-5-f',name: 'Alex'}, {id: 'rer5-fg-ger-gerg-5-f', name: 'Ahmet'}],
            messages: [{id: 'ret-5fg-gerg-5-f', value: 'Hello, msf'}, {id: 'vhyht-rfuuk-cvcfr-44-f', value: 'What you say?'}]
        },
        entities: {
            text_area_text: ''
        }
        
    },
    profile: {
        data: {
            posts: [{id: 'dewfwr343fegr-54', value: 'its my post'}, {id: 'qseffwr-55gfrgr-54', value:'hellohello'}]
        },
          
        entities: {
            text_area_id: '',
            text_area_text: ''
        },
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
    },

    dispatch: (action) => {
        switch (action.type) {
            case 'ADD-POST':
                const obj = {id: state.profile.entities.text_area_id, value: state.profile.entities.text_area_text};
                state.profile.data.posts.unshift(obj);
                state.profile.entities.text_area_id = state.profile.entities.text_area_text = ''
                state.methods.rerenderDOM();
                break;

            case 'ADD-MESSAGE':
                state.dialogs.data.messages.push({id: 'idididi123', value: state.dialogs.entities.text_area_text});
                state.dialogs.entities.text_area_text = ''
                state.methods.rerenderDOM();
                break;


            case 'CHANGE-TEXT':
                switch (action.entitie) {
                    case 'text_area_id':
                        state.profile.entities.text_area_id = action.value
                        break;

                    case 'text_area_text':
                        state.profile.entities.text_area_text = action.value
                        break;

                    case 'text_area_text_dialogs':
                        state.dialogs.entities.text_area_text = action.value
                        break;
                
                
                    default:
                        break;
                }               
                state.methods.rerenderDOM();
                break;
            default:
                break;
        }
    }
}

export default state;