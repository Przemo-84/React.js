# Menu_Button

## Opis projektu

Animowany przycisk menu — trzy poziome paski, które po kliknięciu zamieniają się w krzyżyk. Zmienia kolor po najechaniu myszą i zgłasza zmianę stanu na zewnątrz.

## Sposób użycia / wdrożenie

**Pliki**

- `menuButton.jsx`
- `menuButton.css`

### Import

```jsx
import Menu_Button from "./menuButton/menuButton";
```

### Uchwyt do funkcji kliknięcia

Uchwyt, do którego zostaje przypisana funkcja kliknięcia przycisku menu. Można ją wywoływać z zewnątrz.

Funkcja podana w propsach. `Menu_Button` wywołuje ją podczas tworzenia i zwraca uchwyt do funkcji `mouse_click()`. Należy zapisać ten uchwyt, aby można było wywoływać (symulować) kliknięcie z poziomu kodu z zewnątrz.

```js
var menuButton_click = null;

function getMenuButton_click_function(func) {
  menuButton_click = func;
}

// wywołanie menuButton_click();
```

### Zmiana stanu

Callback wywoływany po zmianie stanu przycisku menu. W `state` podawany jest aktualny stan przycisku. Jeśli przycisk został wciśnięty myszką, to `caller` jest `true`, jeśli za pomocą wywołania funkcji wewnętrznej `mouse_click()` to `caller` jest `false`.

```js
function onMenuChange(state, caller) {
  // …
}
```

### Przykład użycia

```jsx
<Menu_Button
  normal_spans_color="#112720"
  hover_spans_color="#7c3aed"
  spans_height={3}
  setmenuButton_onClick={getMenuButton_click_function}
  onMenuButton_changeState={onMenuChange}
/>
```

## Licencja

Komponent jest udostępniany na [licencji MIT](./LICENSE).
