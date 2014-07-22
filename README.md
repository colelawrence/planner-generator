### Jade Server
Basic [`jade`](http://jade-lang.com) file server. Ideal for building local prototypes apart from any application. All other files are served statically as they usually would.

installation
``` sh
npm install -g jade-server
```

create a folder

    + myfolder/
      - index.jade
      - example.css
      - example.js

usage
``` sh
cd myfolder
jade-server .
```

or
``` sh
cd myfolder
jade-server . 8081
```

for a different port

open your browser to [http://localhost:8080/index.jade](http://localhost:8080/index.jade)
