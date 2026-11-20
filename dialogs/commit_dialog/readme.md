# Commit_Dialog

## Opis projektu

Okno potwierdzenia z dwoma przyciskami — zatwierdź i anuluj. Wynik wyboru trafia do `commitCallback` jako `true` (zatwierdzenie) lub `false` (anulowanie).

## Sposób użycia / wdrożenie

**Pliki**

- `commit_dialog.jsx`
- `commit_dialog.css`

### Import

```jsx
import Commit_Dialog from "./.../commit_dialog";
```

### Przygotowanie funkcji zwrotnych

```jsx
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
```

### Wyświetlenie komponentu

```jsx
<Commit_Dialog
  dialogMessage="Usunąć wybrany plik?"
  commit_buttonText="Usuń"
  abort_buttonText="Anuluj"
  setShowModalCallback={setShowModalHandle}
  setMessageCallback={setUpdateHandle}
  commitCallback={commitCallback}
/>
```

### Otwarcie okna i zmiana komunikatu

```jsx
// otwarcie okna
openDialog.current();

// zmiana komunikatu i koloru tekstu
updateMessage.current("Na pewno usunąć ten plik?", "#c0392b");
```

## Licencja

Komponent jest udostępniany na [licencji MIT](./LICENSE).
