Example:

```js
import { Button } from "../../index";

<ModalConfirm
  onConfirm={() => console.log("confirmed")}
  onCancel={() => console.log("canceled")}
  message="Are you sure you want to do that?"
>
  {modalConfirm => <Button onClick={modalConfirm.actions.open}>Confirm</Button>}
</ModalConfirm>;
```
