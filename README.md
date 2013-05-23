#multi-key-dictionary

This is a node.js lib which provides a dictionary which can have multiple keys.

##Installation

```bash
npm install multi-key-dictionary
```

##Usage

1. Create a new object

   ```js
   var Dict = require('multi-key-dictionary');
   var dict = new Dict();
   ```

2. Add values to the dictionary object. The keys can be passed as _arguments_ or as an _array_.

   __NOTE__ The key parameter - ['a', 'b', 'c'] and ['a','c','b'] would represent two different keys and will store two different values. The order of keys is thus important.

   ```js
   //Passing keys as arguments.
   dict.add('a','b','c',34);
   
   //Pass keys as an array.
   dict.add(['a','x','y'],45);
   ```

   In both cases the last parameter is considered as the value of the key.


3. Getting/Deleting the value using the get method. Here also the keys can be passed as _arguments_ or as an _array_.

   ```js
   var x = dict.get('a','b','c'); // returns 34
   dict.remove('a','b','c'); //removes the key permutation
   ```