import { connect } from "react-redux";
import { addMessage } from "../../redux/reducers/dialogs-reducer";
import { changeText } from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import MessageItem from "./MessageItem";
import PersonItem from "./PersonItem";

const mapStateToProps = (state) => {
    return {
        text_area_text: state.dialogs.text_area_text,
        messages: state.dialogs.messages.map(item => <MessageItem value={item.value} key={item.id} />),
        persons: state.dialogs.persons.map(item => <PersonItem id={item.id} name={item.name} key={item.id} />)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (e) => {
            const value = e.target.value;
            dispatch(changeText(value))
        },
        addMessage: () => dispatch(addMessage())
    }
}
const ProfileContainer = connect(mapStateToProps , mapDispatchToProps)(Dialogs);

export default ProfileContainer;