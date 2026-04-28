# CommonJS export 多個物件的寫法

如果 `helper.js` 這樣 export：

```js
module.exports = {
  DateCalculator,
  ValidationHelper
};
```

代表 `require('./helper.js')` 拿到的是一個大物件：

```js
{
  DateCalculator: {
    getDayDiffFromNow() {},
    calDateDiff() {}
  },
  ValidationHelper: {
    buildValidationResult() {}
  }
}
```

所以在 `homework.js` 要這樣寫：

```js
const { DateCalculator, ValidationHelper } = require('./helper.js');
```

這叫做物件解構（Object Destructuring），意思是從 `require('./helper.js')` 回傳的大物件裡，把 `DateCalculator` 和 `ValidationHelper` 這兩個屬性拿出來用。

它等同於：

```js
const helpers = require('./helper.js');

const DateCalculator = helpers.DateCalculator;
const ValidationHelper = helpers.ValidationHelper;
```

如果寫成：

```js
const DateCalculator = require('./helper.js');
```

那 `DateCalculator` 其實會變成整包物件：

```js
{
  DateCalculator,
  ValidationHelper
}
```

這時候下面這樣寫會錯：

```js
DateCalculator.getDayDiffFromNow(timestamp);
```

因為真正的方法位置會變成：

```js
DateCalculator.DateCalculator.getDayDiffFromNow(timestamp);
```

所以比較好的寫法是：

```js
const { DateCalculator, ValidationHelper } = require('./helper.js');
```

之後就可以正常使用：

```js
DateCalculator.getDayDiffFromNow(timestamp);
ValidationHelper.buildValidationResult(error);
```
