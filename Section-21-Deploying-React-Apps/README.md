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
