Example:

```js
import { Button, Spacer, success, warn, error } from "../../index";

<React.Fragment>
  <Button onClick={() => success("success!")}>Success</Button>
  <Spacer left="sm" />
  <Button onClick={() => warn("warn!")}>Warn</Button>
  <Spacer left="sm" />
  <Button onClick={() => error("error!")}>Error</Button>
  <Alert />
</React.Fragment>;
```
