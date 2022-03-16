# Introduction 

- Welcome to Houses API, your neighbours public information.
- Its open source so feel free to contribute if need be


# Getting Started 

- You'd need a computer with internet connection, no email is required or api key required. 
- It coontains data on current residents on sunny road
- You would need Git installed
- After installation, run git clone with the generated https link
- Then run cd the into the repo and run node app.js to start the server 

# Residents

### h3 Get all residents 

- This endpoint retrives all resisdents on sunny road 

### h3 HTTP requests

- GET   path/personal/    - action is index 

## House 

### Get all House information

- This endpoint retrives all house information on sunny road

### HTTP requests 

- GET   path/home/    - action is index 

## Query parameters

- you can run more complex queries similar to      - GET     path/personal?age[]>=20&age[]<=40
