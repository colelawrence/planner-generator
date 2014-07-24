### Jade Dev
Basic [`jade`](http://jade-lang.com) file server. Ideal for building local prototypes apart from any application. All other files are served statically as they usually would.

installation
``` sh
npm install -g jade-dev
```

create a folder

    + myfolder/
      - index.jade
      - example.css
      - example.js

usage
``` sh
cd myfolder
jade-dev .
```

or for a different port:
``` sh
cd myfolder
jade-dev . 8081
```


open your browser to [http://localhost:8080/index.jade](http://localhost:8080/index.jade)
