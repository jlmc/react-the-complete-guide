# SASS

- [sass-guide](https://sass-lang.com/guide)


1. add sass dependency
```shell
yarn add -D node-sass
```

```json
  "devDependencies": {
    "node-sass": "^6.0.1"
  }
```

2. Create a Scss file 
```css
table.Table {
  width: 100%;
  box-shadow: 0 3px 6px rgba(#000, .1);
  border-collapse: collapse;

  thead {
    background-color: #09f;
    tr th {
      color: rgba(#fff, .8);
      text-align: left;
      padding: 7px 10px;
      font-size: .8em;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: .75px;

      &.right {
        text-align: right;
      }
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: rgba(#000, .05);
      }
      td {
        padding: 7px 10px;
        color: #222;

        &.right {
          text-align: right;
        }
      }
    }
  }
}
```
