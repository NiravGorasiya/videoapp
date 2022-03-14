# How to run

Note: Before running, make sure you have a clean database schema, and add the following property in your .env in order for sequelize to connect to your local db: 
```markdown
SQL_USERNAME=root
SQL_PASSWORD=password
SQL_DATABASE=videoapp
SQL_HOST=localhost
SQL_PORT=3306
```

Steps: 
1. Set the following properties in .env:
 ```markdown
   #Sequelize Startup Related Config
    DROP_ALTER_SEED = true
    ALTER_SYNC = false
    NODE_ENV=development
    PORT=3000
    #JWT
    JWT_SECRET=

2. Run `npm install `
3. Run     `npm run start`
4. This will populate all seeding data in your local db
5. Stop the server by hitting `ctrl+C`
6. Set the property ` DROP_ALTER_SEED = false`
7. Your setup is complete. You can start the server again by running `npm run start`

