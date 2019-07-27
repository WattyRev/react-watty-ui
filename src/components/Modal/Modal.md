Example:

```js
import { Button, ModalClose } from "../../index";
initialState = { isOpen: false };

<React.Fragment>
  <Button onClick={() => setState({ isOpen: true })}>Open Modal</Button>
  <Modal
    isOpen={state.isOpen}
    onBackdropClick={() => setState({ isOpen: false })}
  >
    <ModalClose onClick={() => setState({ isOpen: false })} />
    Stuff inside the modal
  </Modal>
</React.Fragment>;
```
