Examples:

```js
import { ICON_NAMES, Spacer } from "../../index";

<React.Fragment>
  {ICON_NAMES.map(name => (
    <Spacer as="div" bottom="sm">
      {name}: <Icon icon={name} key={name} />
    </Spacer>
  ))}
</React.Fragment>;
```
