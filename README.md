loopback-example-remote-methods
===============================

LoopBack example demonstrating remote methods.

## install

```sh
git clone git@github.com:strongloop/loopback-example-remote-methods.git
cd loopback-example-remote-methods
npm install
```

## run the example

```sh
node app
```

## call the method over REST / HTTP

```sh
curl localhost:3000/api/products/stats
{
  "stats": {
    "totalAvailable": 0
  }
}
```

## source

See the `stats` method in [product.js](https://github.com/strongloop/loopback-example-remote-methods/blob/master/models/product.js).
