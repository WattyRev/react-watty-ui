Example:

```js
import { ICON_NAMES, Spacer } from "../../index";

<React.Fragment>
  {ICON_NAMES.map(name => (
    <Spacer as="div" bottom="sm" key={name}>
      {name}: <Icon icon={name} />
    </Spacer>
  ))}
</React.Fragment>;
```
