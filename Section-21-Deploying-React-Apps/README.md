# Section 21: Deploying React Apps

This task and refactorings should be made before deploying the application in production.

# 292. Adding Lazy Loading


1. In you components, apply Suspense Loading

Instead of:
```
function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/quotes'/>
                </Route>
                <Route path='/new-quote'>
                    <NewQuote/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
```

We should change to:

```
const NewQuote = React.lazy(() => import('./pages/NewQuote'));

function App() {

    return (
        <Layout>
        
          <Suspense>

            <Switch>
                <Route path='/' exact>
                    <Redirect to='/quotes'/>
                </Route>
                <Route path='/new-quote'>
                    <NewQuote/>
                </Route>
               
            </Switch>

          </Suspense>
        
        </Layout>
    );
}

export default App;
```


## 293. Building The Code For Production

For production, we want to run the `build` command instead of `run`:

```
npm run build
```

or 
```
yarn build
```

- This will build our production output, and it may make a couple of seconds until it's done

when it finished the output also show how to preview this production app on our local machine

```
npm install -g server
server -s build
```
or 
```
yarn global add serve
serve -s build
```

As result of the previous process, we can find the folder `build`.
The content of the `build` folder hold all the code you need to deploy in the end.
