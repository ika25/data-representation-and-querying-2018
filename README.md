
# DisasterMonitoring

The project - Disaster Monitoring - is use to monitor disasters effect. The Disaster Monitoring application is used to maintain the records of all disasters, monitoring the effects and keep an eye on sever disasters by generating report.

Following are components that make the disaster monitoring system live.

1. **Login** :

![signin](https://user-images.githubusercontent.com/16356275/49344003-936a0d00-f669-11e8-80eb-d1193e7f9456.png)

This component is use to login to the site. If user is not login and trying to access disaster monitoring system's secure components then it will be redirect to login page.

2. **Signup** : 

![signup](https://user-images.githubusercontent.com/16356275/49344004-9402a380-f669-11e8-9f46-f5d12cb82954.png)

This will register user to the system who can add/edit/delete/view/report the disasters.

3. **Disaster (_secured_)** : 

![3](https://user-images.githubusercontent.com/16356275/49344000-936a0d00-f669-11e8-8ae5-424635b18c54.png)

This component is use to view all the disasters. It also give links to the components like add, edit, detail and delete.

4. **Disaster-create (_secured_)** : 

![4](https://user-images.githubusercontent.com/16356275/49344001-936a0d00-f669-11e8-90e9-73ffba9237e4.png)

This component is use to create new disaster to the system and save it in database. Then it will navigate to disaster component.

5. **Disaster-edit (_secured_)** : 

![5](https://user-images.githubusercontent.com/16356275/49344002-936a0d00-f669-11e8-9109-981660c18c04.png)

This component is use to edit the disaster to the system and update it in database. Then it will navigate to disaster component after success.

6. **Disaster-detail (_secured_)** : 

![6](https://user-images.githubusercontent.com/16356275/49344051-3fabf380-f66a-11e8-8b0c-9c5ee4c2441b.png)

This component is use to show details about the disaster.

7. **Top-Five-Disaster-By-Deaths (_secured_)** : 

![7](https://user-images.githubusercontent.com/16356275/49344052-3fabf380-f66a-11e8-8677-28899a43d795.png)

This component fetch the top five disasters where deaths are highest. This is quite useful to accessing the effect of disaster and prioritize the tasks.

8. **header (_secured_)** :

![8](https://user-images.githubusercontent.com/16356275/49344050-3f135d00-f66a-11e8-84c4-0b9f5fe4819e.png)

This component is the header of all secure components. It contains navigation links to disaster and topFiveDisastersByDeath component. It also lets user to logout.

***

All  (_**secured**_) components are secured using JWT tokens. All secured apis in nodejs are first evaluated, if not good then it throw error to angular that request is unauthorized.

## Description

The Disaster Monitoring application is use to maintain the records of all disasters, monitor the effects and keep an eye on sever disasters by generating report.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` and to run backend you need to run `node ./BACKEND/bin/www`. The angular-app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## resources and references
https://www.tutorialspoint.com/nodejs/index.htm

https://www.djamware.com/post/5b00bb9180aca726dee1fd6d/mean-stack-angular-6-crud-web-application

https://www.djamware.com/post/5a878b3c80aca7059c142979/securing-mean-stack-angular-5-web-application-using-passport

https://www.youtube.com/watch?v=r0QYP61bCCM

https://www.youtube.com/watch?v=V9zDNfVs7Z4

https://www.youtube.com/watch?v=x2_bcCZg8vQ&t=273s

https://www.youtube.com/watch?v=pWbMrx5rVBE

https://www.youtube.com/watch?v=SD9cS_6O4zg
