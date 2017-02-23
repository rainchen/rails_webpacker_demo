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

react codes saved in `app/javascript/todomvc/`, which are copy and slightly modified from [todomvc react example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react/js)
