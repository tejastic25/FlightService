#Project Setup 
-welocme to the project : SH_AIR

-To set up the environment clone the project to your local repository
-Execute 'npm install' in the same path as of your root project repository
-create a .env file and add the following information 'PORT : 5510'
-inside 'src/config' create a 'config.json' file and add the following code in it
'''
{
  "development": {
    "username": "root",
    "password": "Tejas@2505",
    "database": "FlightSearch",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
'''
-After executing these steps execute npx sequelize db:create init in the terminal inside src path
then execute npx sequelize db:migrate