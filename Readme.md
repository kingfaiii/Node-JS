<!-- API ROUTES ARE STORED IN  CONFIG/CONTROLLERS/-->

<!-- TO ACCESS ROUTE USER NEEDS TO LOG IN AUTHORIZATION HEADERS PROVIDED WHEN LOGGED IN -->

Type mpm mun migrate to run seeds and reset database

ENDPOINTS:
REQ.BODY IS FORM URL ENCODED

LOGIN:
http://localhost:6060/api/v1/user/login POST
BODY:
username:
password:
OUTPUT:
{
"\_id": "6116bb3eae7a7518641c4177",
"username": "Username3",
"fullname": "Bartolome Cruz",
"contact_number": "09383848334",
"\_\_v": 0,
"createdAt": "2021-08-13T18:34:39.002Z",
"updatedAt": "2021-08-13T18:34:39.002Z",
"userToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTZiYjNlYWU3YTc1MTg2NDFjNDE3NyIsImlhdCI6MTYyODg3OTY5OCwiZXhwIjoxNjI4OTY2MDk4fQ.MlvaJ7EuA_9x9RWlDjC_dYaNfCppXo2y8bLY5ZgtgHFgn8ZYX-ApZyRwNIw7heYjA1pljTkm5W9TJTGRykZUIQ"
}

REGISTER:
http://localhost:6060/api/v1/user/register POST
REQ BODY:
username
password
fullname
contact_number
OUTPUT:
{
"\_id": "6119c8a2ad97d111305e4b07",
"username": "username9",
"password": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBhc3N3b3JkMiIsImlhdCI6MTYyOTA3OTcxNCwiZXhwIjoxNjI5MTY2MTE0fQ.IOgxbWLDnRhH7sXE5jdl_PLo7aTNq9-i23gApQbdRME0Bh79rXoiOhiD28lVB0BfvdGvdgV9StE9PmboDoDPAg",
"fullname": "Calil Christopher",
"contact_number": "(099)-5559-1932",
"createdAt": "2021-08-16T02:08:34.480Z",
"updatedAt": "2021-08-16T02:08:34.480Z",
"\_\_v": 0
}

Update User:
http://localhost:6060/api/v1/user/update PATCH
Header: Authorization (userToken in login)
Req Body:
username
password
fullname
contact_number
Output:
{
"\_id": "6119c922d58e9e18843844d1",
"username": "Username9",
"password": "Password4",
"fullname": "Bartolome Dela Cruz",
"contact_number": "(099)-5559-1932",
"\_\_v": 0,
"createdAt": "2021-08-16T02:10:42.526Z",
"updatedAt": "2021-08-16T02:14:13.197Z"
}

GET LOGGED IN USER DETAILS: GET
Headers: Authorization (userToken in login)
output:
{
"\_id": "6119c922d58e9e18843844d1",
"username": "Username9",
"password": "Password4",
"fullname": "Bartolome Dela CruS",
"contact_number": "(099)-5559-1932",
"\_\_v": 0,
"createdAt": "2021-08-16T02:10:42.526Z",
"updatedAt": "2021-08-16T02:21:49.916Z",
"address": null,
"department": null
}

Add address: POST
http://localhost:6060/api/v1/address/add
Headers: Authorization (userToken in login)
Req Body:
street
lot_number
state
city
Output:
{
"\_id": "6119c922d58e9e18843844d1",
"username": "Username9",
"password": "Password4",
"fullname": "Bartolome Dela CruS",
"contact_number": "(099)-5559-1932",
"**v": 0,
"createdAt": "2021-08-16T02:10:42.526Z",
"updatedAt": "2021-08-16T02:18:13.267Z",
"address": {
"\_id": "6119cae5ad97d111305e4b22",
"street": "Finnback St.",
"lot_number": "#283c",
"state": "Zambales",
"city": "Olongapo",
"createdAt": "2021-08-16T02:18:13.265Z",
"updatedAt": "2021-08-16T02:18:13.265Z",
"**v": 0
}
}

Update Address: Patch
http://localhost:6060/api/v1/address/update
Headers: Authorization (userToken in login)
Req Body:
street
lot_number
state
city
Ouput:
{
"\_id": "6119cae5ad97d111305e4b22",
"street": "Mayon St.",
"lot_number": "453s",
"state": "Zambales",
"city": "Olongapo",
"createdAt": "2021-08-16T02:18:13.265Z",
"updatedAt": "2021-08-16T02:18:42.936Z",
"\_\_v": 0
}

Delete Address: DELETE
http://localhost:6060/api/v1/address/delete
Headers: Authorization (userToken in login)
Output: "deleted"

Add Department: POST
http://localhost:6060/api/v1/department/add
Headers: Authorization (userToken in login)
Req Body:
dept_name
dept_location
Output:
{
"\_id": "6119c922d58e9e18843844d1",
"username": "Username9",
"password": "Password4",
"fullname": "Bartolome Dela CruS",
"contact_number": "(099)-5559-1932",
"**v": 0,
"createdAt": "2021-08-16T02:10:42.526Z",
"updatedAt": "2021-08-16T02:21:49.916Z",
"address": "6119cae5ad97d111305e4b22",
"department": {
"\_id": "6119cbbdad97d111305e4b35",
"dept_name": "Procurement",
"dept_location": "Zamboanga",
"createdAt": "2021-08-16T02:21:49.913Z",
"updatedAt": "2021-08-16T02:21:49.913Z",
"**v": 0
}
}

Update Department: Patch
http://localhost:6060/api/v1/department/update
Headers: Authorization (userToken in login)
Req Body:
dept_name
dept_location
Ouput:
{
"\_id": "6119cbbdad97d111305e4b35",
"dept_name": "Accounting",
"dept_location": "Zambales",
"createdAt": "2021-08-16T02:21:49.913Z",
"updatedAt": "2021-08-16T02:22:37.934Z",
"\_\_v": 0
}

Delete Department: DELETE
http://localhost:6060/api/v1/department/delete
Headers: Authorization (userToken in login)
Ouput: Deleted
