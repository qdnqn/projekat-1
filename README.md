# Node.js MySQL CRUD Application

A CRUD (Create, Read, Update, Delete) application developed using Node.js and MySQL, showcasing database management and API development skills.

---

## How to run locally? (Ubuntu instructions)

Prerequisite (Install curl, git, and nodejs):

```cgo
sudo apt-get update
sudo apt-get install git curl -y
```

Install nodejs v22.0:
```cgo
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 22
# Verify the Node.js version:
node -v # Should print "v22.13.1".
nvm current # Should print "v22.13.1".
# Verify npm version:
npm -v # Should print "10.9.2".
```

Create .env file based on the .env.example file and enter correct values for your environment.

For example if MySQL is running on the same host as this application, content of the .env file would be:
```cgo
HOST=localhost
PORT=3306
USER=root
PASSWORD=dummypassword
```

>>> !IMPORTANT
>>> Note: Adjust your values so that application is working in containerized environment!

Afterward, in this project run:
```cgo
npm install
npm run dev
```

## Testing if working properly for localhost

```cgo
curl -X POST http://localhost:3000/api/records -d "name=Student&address=Franjevacka 2&phone=1111111111" 
curl http://localhost/api/records
```

## API Endpoints

The following API endpoints are available:
```
GET /api/records: Retrieve all records from the database.
GET /api/records/:id: Retrieve a specific record by ID.
POST /api/records: Create a new record.
PUT /api/records/:id: Update an existing record by ID.
DELETE /api/records/:id: Delete a record by ID.
```

License
This project is licensed under the MIT License.
