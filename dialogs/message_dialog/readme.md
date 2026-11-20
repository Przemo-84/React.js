# Message_Dialog

## Opis projektu

Modalne okno z komunikatem i jednym przyciskiem potwierdzenia, zbudowane na natywnym elemencie `<dialog>`. Treścią i widocznością sterujesz nie przez stan, a przez funkcje zwrotne przekazane w propsach.

## Sposób użycia / wdrożenie

**Pliki**

- `message_dialog.jsx`
- `message_dialog.css`

### Import

```jsx
import Message_Dialog from "./.../message_dialog";
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
```

### Wyświetlenie komponentu

```jsx
<Message_Dialog
  dialogMessage="Zapisano zmiany"
  buttonText="OK"
  setShowModalCallback={setShowModalHandle}
  setMessageCallback={setUpdateHandle}
/>
```

### Otwarcie okna i zmiana komunikatu

```jsx
// otwarcie okna
openDialog.current();

// zmiana komunikatu i koloru tekstu
updateMessage.current("Nie udało się zapisać", "#c0392b");
```

## Licencja

Komponent jest udostępniany na [licencji MIT](./LICENSE).
