Message_Dialog - Komponent


Opis projektu

Modalne okno z komunikatem i jednym przyciskiem potwierdzenia, zbudowane na natywnym elemencie dialog. Treścią i widocznością sterujesz nie przez stan, a przez funkcje zwrotne przekazane w propsach.

Sposób użycia / wdrożenie

Pliki: message_dialog.jsx + message_dialog.css

import Message_Dialog from "./.../message_dialog";

const openDialog = useRef(null);
const updateMessage = useRef(null);

// Komponent wywołuje te funkcje przy pierwszym montowaniu,
// przekazując w argumencie uchwyt (handle) do swojej metody.
// W propsach nie podajesz stanu — tylko funkcję zwrotną.
const setShowModalHandle = (handle) => {
openDialog.current = handle;
};

const setUpdateHandle = (handle) => {
updateMessage.current = handle;
};

<Message_Dialog
dialogMessage="Zapisano zmiany"
buttonText="OK"
setShowModalCallback={setShowModalHandle}
setMessageCallback={setUpdateHandle}
/>

// otwarcie okna
openDialog.current();

// zmiana komunikatu i koloru tekstu
updateMessage.current("Nie udało się zapisać", "#c0392b");