# 3.3. Produtividade com Axios

Documentation: https://axios-http.com/docs/intro

Documentation: https://github.com/axios/axios


https://www.npmjs.com/package/axios



extra example backend: https://github.com/algaworks/api-alga-stock

## installing

#### Using npm:
```shell
$ npm i axios
```

#### Using yarn:
```shell
$ yarn add axios
```

#### result 
```
"axios": "^0.24.0",
```

## Using 
```javascript
import axios from "axios";

// create a new Instance of axios, using a preconfigured configs that we can have
const Http = axios.create({
    baseURL: 'http://localhost:80/app'
})

export default Http

```


```javascript
Hppp.get('/books')
```
