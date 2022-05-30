# syngeta-blogs
# NodeJS secure RESTFUL api

A minimal, secure RESTFUL api for NodeJS. This project includes access control of objects, and crud operation and model!

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.


# Running the software

* ```node src/server.js``` for simple setups.

# Adding new dishes into the backend system

To add dishes, simply send a POST to /dishes/ with the required fields in the req body,

```
http://localhost:3000/blogs/
```

# To get all dishes 
To get all blogs, simply send a GET to /blogs/ with the required fields in the query string, like so:
```
http://localhost:3000/blogs/
```

# To get all blogs by author and title
To get blogs, simply send a GET to /blogs/ with the required fields in the query string, like so:
```
http://localhost:3000/blogs/title?title=expected
http://localhost:3000/blogs/author?author=expected
```

# To get all blogs according to likes
To get blogs, simply send a GET to /blogs/maxlikes/ with the required fields in the query string, like so:
```
http://localhost:3000/blogs/maxlikes/
```


# To update blog 
To update, simply send a PATCH to /blogs/:id/ with the required fields in the query string, like so:
```
http://localhost:3000/blogs/:id
```

# To view a blog
To view a blog, simply send a GET to /blogs/:id/ with the required fields in the query string, like so:
```
http://localhost:3000/blogs/:id
```


# Adding likes to blog

To add like to blog, simply send a PATCH to /blogs/:id/like/ with the required fields in the req body,

```
http://localhost:3000/blogs/:id/like
```




# Heroku deployment link
```
https://syngenta-blogs.herokuapp.com/datas
```

```
