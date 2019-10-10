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
const nano = require('nano-performance')

nano.timeStart('Test')

setTimeout(function() {
  nano.timeEnd('Test')
}, 10)
```

Output = Test: 11.086301 ms

**Display output in nanoseconds:**

```javascript
const nano = require('nano-performance')

nano.timeStart('Test')

setTimeout(function() {
  nano.timeEnd('Test', 'ns')
}, 10)
```
Output = Test: 11086301 ns