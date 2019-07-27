Example:

```js
<Dropdown
  dropdownContent={dropdownData => (
    <a onClick={dropdownData.actions.close}>Close</a>
  )}
>
  {dropdownData => <a onClick={dropdownData.actions.open}>Open</a>}
</Dropdown>
```
