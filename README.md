# weather-backend

## Steps
    1. npm init (this will create a package.json)
    2. npm install axios body-parser cors dotenv ex
press express-rate-limit express-validator mongoose nodemon --save (check package.json, check node_modules)
    3. create folder structure (see below)
    4. add code under root index.js
    5. add code under loaders
    6. add code under app
## Folder Structure
- app (application)
    - config (if env change it will change, eg: PORT, url)
    - controllers (req, res)
    - middleware (http header, eg: auth)
    - routes (backend-url)
    - services (business-logic, third-party)
    - validation (before enter controller it need to validate the result)
- loaders (application init)
    - index.js (entry file)
    - express.js (framework)
    - mongoose.js (database)

- .env (this will change when environment changes) 
- .gitignore (as it as what files should git ignore)
- index.js (entry file/code start here)
- package.json (this is when we run npm init)
- README.md (explain what the project is and how to run)

#### Loader
Root index.js -> loaders/index.js -> loaders/express.js -> app/routes/v1/api.js

#### Application
app/routes/v1/api.js -> middleware -> validation -> controller -> services -> modal -> return back to controller