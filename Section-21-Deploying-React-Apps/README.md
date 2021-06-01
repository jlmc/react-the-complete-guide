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


## 294. Getting Started With Deployment (Uploading Files)

- React SPA is a "Static Website" only HTML, CSS & JavaScript.

- To deploy our app we need A `Static Site Host`.

- If we Google search for: **static website hosting provider** we can find several options:


### Using Firebase Hosting

1. in your firebase account click hosting

2. Executing the command in your local system:

Install Firebase CLI
```
npm install -g firebase-tools
```


Initialise your project

Sign in to Google
```
firebase login
```

Initiate you project (this command should be runned from your app root folder, source fould of project, not the build)
```
firebase init
```

At some moment it will ask you where the resources to deploy, and then you should indicate that are in the build folder.


- Create a firebase configuration (configure your server to always ignore the url)

- firebase deploy
```
firebase deploy
```
