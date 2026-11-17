Commit_Dialog - Komponent



Opis projektu

Okno potwierdzenia z dwoma przyciskami — zatwierdź i anuluj. Wynik wyboru trafia do commitCallback jako true (zatwierdzenie) lub false (anulowanie).

Sposób użycia / wdrożenie

Pliki: commit_dialog.jsx + commit_dialog.css

import Commit_Dialog from "./.../commit_dialog";

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

const commitCallback = (is_commit) => {
console.log(is_commit); // true = zatwierdzono, false = anulowano
};

<Commit_Dialog
dialogMessage="Usunąć wybrany plik?"
commit_buttonText="Usuń"
abort_buttonText="Anuluj"
setShowModalCallback={setShowModalHandle}
setMessageCallback={setUpdateHandle}
commitCallback={commitCallback}
/>

// otwarcie okna
openDialog.current();

// zmiana komunikatu i koloru tekstu
updateMessage.current("Na pewno usunąć ten plik?", "#c0392b");