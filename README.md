## Dependencies
1. Express - to create a server and send requests.
2. Mongoose - to connect MongoDB and do queries. 
3. Fs-extra- read & write json file.  

## Dev Dependencies
1. Nodemon - save changes in the file and restart the server. 

## Middleware
App.use(express.static('public')), to connect my index.html page. 
There is one more middleware that writes in JSON file every request that is incomming to the server. 

## Requests
Adding a new student to the DB :
![insert](https://user-images.githubusercontent.com/89860312/150688478-98e5dfb8-7cc0-4c45-a8ee-00c45271b058.png)

Get student by name:
![byName](https://user-images.githubusercontent.com/89860312/150688362-9f6469fe-9e2f-4a8b-81ea-9bc35be00206.png)

Get all students:
![allStudents](https://user-images.githubusercontent.com/89860312/150688324-9415ac5c-42d6-48ba-9014-4fc9600d9c32.png)

Add grade for a user:
![grade](https://user-images.githubusercontent.com/89860312/150688320-dceaa71b-6711-420f-8740-06ac151b9311.png)

Delete student by name:
![deleteByName](https://user-images.githubusercontent.com/89860312/150688314-09fcc7b6-57b3-46ac-b718-b698ae53d689.png)

Delete student by id:
![deleteById](https://user-images.githubusercontent.com/89860312/150688327-d8ef078c-522a-48d4-b58e-f03e45108bd1.png)
 
 Get max-grade:
 ![maxGrade](https://user-images.githubusercontent.com/89860312/150688382-0e424c7e-1220-4768-b2d6-938336a6c473.png)





