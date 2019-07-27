Example:

```js
import { Button } from "../../index";

<ModalPrompt
  onSubmit={response => console.log("response:", response)}
  onCancel={() => console.log("canceled")}
  message="Has anyone really been far even as decided to use even go want to do look more like?"
>
  {modalPrompt => <Button onClick={modalPrompt.actions.open}>Prompt</Button>}
</ModalPrompt>;
```
