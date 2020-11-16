const send_message = "SEND-MESSAGE";
const update_text_mes = "UPDATE-TEXT-MES";

let initialState = {
    dialogs: [
        { id: "1", name: "Katya", ava: "https://b1.culture.ru/c/371974.475xp.jpg" },
        { id: "2", name: "Sasha", ava: "https://interesnyefakty.com/sites/default/files/i/9720/2-4/0d4c7505f90e.jpg" },
        { id: "3", name: "Petya", ava: "https://veryimportantlot.com/uploads/over/files/%D0%9C%D0%B0%D0%B9%20%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%2014%20(4)%20%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%98%D0%BB%D1%8C%D0%B8%20%D0%A0%D0%B5%D0%BF%D0%B8%D0%BD%D0%B0.jpg" },
        { id: "4", name: "Lena", ava: "https://i1.wp.com/files2.geometria.ru/pics/original/038/591/38591894.jpg" },
        { id: "5", name: "Misha", ava: "https://veryimportantlot.com/cache/thumbed/800x800/220179_1560568990_800_800_0.jpg" },
        { id: "6", name: "Denis", ava: "https://b1.culture.ru/c/371979.475xp.jpg" },
        { id: "7", name: "Dima", ava: "https://artofpain.ru/sites/default/files/field/image/tatu-kartin-1.jpg" },
    ],
    messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "How r u?" },
        { id: "3", message: "Sup" },
    ],
    textMes: "Hey! Ho! Let's go!",
};
let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case send_message: {
            let newMessage = {
                id: "4",
                message: state.textMes,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                textMes: "",};
        }
        case update_text_mes:
            return {
                ...state,
                textMes: action.newMes,};
        default:

            return state;

    }
}
export let sendMessage = (text) => {
    return {
        type: send_message,
    }
};
export let updateTextMes = (text) => {
    return {
        type: update_text_mes, newMes: text,
    }
};
export default dialogsReducer;