Example:

```js
import { Button } from "../../index";

initialState = {
  isVisible: false
};

<React.Fragment>
  <Button onClick={() => setState({ isVisible: !state.isVisible })}>
    Toggle example
  </Button>
  {state.isVisible && <FillToBottom>Filled to bottom</FillToBottom>}
</React.Fragment>;
```
