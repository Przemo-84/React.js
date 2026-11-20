# Number_Input

## Opis projektu

Licznik z przyciskami − i + oraz przytrzymaniem — po dłuższym przytrzymaniu wartość zmienia się coraz szybciej. Pilnuje zakresu `min`/`max` i pozwala dopisać własny sufiks, np. jednostkę.

## Sposób użycia / wdrożenie

**Pliki**

- `number_input.jsx`
- `number_input.css`

### Import

```jsx
import Number_Input from "./number_input/number_input";
```

### Przykład użycia

```jsx
<Number_Input
  defaultValue={5}
  minValue={0}
  maxValue={100}
  suffix="szt."
  colorsStyles={{
    backgroundColor: "#ffffff",
    border: "1px solid #c4c5c9",
    backgroundButtonColor: "#eef1f6",
    buttonBorder: "1px solid #c4c5c9",
    buttonTextColor: "#111827",
    textColor: "#111827",
  }}
/>
```

### Dostęp do wartości

Wartość trzymana jest wewnątrz komponentu — brak propsa `onChange`.

```js
document.querySelector('.numberInput_span').innerText;
```

## Licencja

Komponent jest udostępniany na [licencji MIT](./LICENSE).
