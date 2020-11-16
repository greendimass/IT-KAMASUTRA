import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you", likes: "12" },
                { id: 2, message: "It's my first post", likes: "11" }
            ],
            newPostText: "hey! Ho! Let's go!",
        },
        sideBar: {
            friends: [
                { id: "1", name: "Katya", ava: "https://b1.culture.ru/c/371974.475xp.jpg" },
                { id: "2", name: "Sasha", ava: "https://interesnyefakty.com/sites/default/files/i/9720/2-4/0d4c7505f90e.jpg" },
                { id: "3", name: "Petya", ava: "https://veryimportantlot.com/uploads/over/files/%D0%9C%D0%B0%D0%B9%20%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F%2014%20(4)%20%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%20%D0%98%D0%BB%D1%8C%D0%B8%20%D0%A0%D0%B5%D0%BF%D0%B8%D0%BD%D0%B0.jpg" },
            ],
        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerender = observer;
    },
    rerender() {
        console.log("State is changed")
    },


    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this.rerender(this._state);
    }
}


export default store;