# nano-performance

An extremely lightweight node module that measures execution time in nanoseconds.

Created by [Agilit-e](https://agilite.io)

**Installation**

Using npm:

```
npm install nano-performance
```

**Display output in milliseconds (default):**

```javascript
import { timeStart, timeEnd } from "nano-performance";

timeStart("Test");

setTimeout(function () {
  timeEnd("Test");
}, 10);
```

Output = Test: 11.086301 ms

**Display output in nanoseconds:**

```javascript
import { timeStart, timeEnd } from "nano-performance";

timeStart("Test");

setTimeout(function () {
  timeEnd("Test", "ns");
}, 10);
```

Output = Test: 11086301 ns
