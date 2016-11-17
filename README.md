# eRouter

![Preview](/preview.png)

eRouter is a super easy javascript hash routing library. 
It is very tiny (less then 50 strings of code or 0.27 kb), and should be able to handle all your routing needs.

## Download

* [Development](https://raw.githubusercontent.com/frentsel/SuperEasyHashRouter/master/eRouter.js)
* [Production](https://raw.githubusercontent.com/frentsel/SuperEasyHashRouter/master/eRouter.min.js)
* [Source](https://github.com/frentsel/SuperEasyHashRouter)

## Basic Usage

Here is the most basic way:

```javascript
eRouter.init({
    index: function () {
        console.log('Index Page');
    },
    about: function () {
        console.log('About Page');
    },
    product: function (id) {
        var params = Array.prototype.slice.call(arguments);
        console.info("Product page, params: ", params);
    },
    notFound: function (page) {
        console.info("Page '"+page+"' not found!");
    }
});
```

If you want to trigger a route manually, you can call routie like this:

```javascript
eRouter.set('product/12');
```

## Dependencies

none