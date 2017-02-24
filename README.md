# README

This is a rails demo project for how to use [Rails Webpacker](https://github.com/rails/webpacker) to implement [tastejs/todomvc (react version)](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react)

* [online demo](https://rails-webpacker-demo.herokuapp.com/)

* compare with [original todomvc (react version) demo](http://todomvc.com/examples/react/#/)


## How to play locally

### 1. get codes
```
git clone git@github.com:rainchen/rails_webpacker_demo.git
cd rails_webpack_demo
```

### 2. use bundler to install ruby gems

```
./bin/bundle
```

### 3. use yarn to install npm packages

```
./bin/yarn
```

### 4. start web server

```
# start rails server in a terminal
./bin/rails s

# start webpack watcher in another terminal
./bin/webpack-watcher
```

### 5. open browser to play with "http://localhost:3000"

---

## Tips

* react codes saved in `app/javascript/todomvc/`, which are copy and slightly modified from [todomvc react example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react/js)

* To active HMR(Hot Module Replacement)

  1. start webpack-dev-server with `--hot` option：

     `./bin/webpack-dev-server --hot`

  2. start rails server with `WEBPACK_DEV_SERVER` env：

     `WEBPACK_DEV_SERVER=true ./bin/rails s`

  3. open `http://localhost:3000` and watch, should see logs "[WDS] Hot Module Replacement enabled." in Chrome Console, modify any js codes in `app/javascript/` to trigger HMR
