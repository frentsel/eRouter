# eRouter - javascript URI hash router
![preview](/preview.png?v=2)

eRouter is a super easy javascript hash routing library. 
It is very tiny (less then 40 strings of code or 0.25 kb), and should be able to handle all your routing needs.

## Demo
https://frentsel.github.io/eRouter/#!/

## Basic Usage

Here is the most basic way:

```javascript
eRouter.init({
  index: () => {
    console.log('Index Page');
  },
  about: () => {
    console.log('About Page');
  },
  product: (id) => {
    console.log("Product id: ", id);
  },
  product: (...params) => {
    console.log("Product params: ", params);
  },
  notFound: (page) => {
    console.info("Page '" + page + "' not found!");
  }
});
```

If you want to trigger a route manually, you can call eRouter like this:

```javascript
eRouter.set('product/12');
```
