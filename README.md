## Challenge

- ### About:
A simple web application for managing devices and categories. Supports creating, listing, and deleting devices and categories.

- ### Database Schema
![schema](https://github.com/user-attachments/assets/deadd396-e0a7-45a2-93ea-905dc4f003a0)
 
- ### Local Setup with Docker
  > Make sure the backend `.env` file is correctly configured.
1. Clone the project
```bash
  git clone git@github.com:marcosrebelo97/device-manager-app.git
  cd device-manager-app
``` 
2. Create a .env file in the project root by copying .env.example
3. Run the setup script:
```bash
 chmod +x setup.sh
./setup.sh
```
  - The script will:
    - Spin up the MySQL database
    - Apply Prisma migrations
    - Populate the DB with seed data
    - Run the backend (port 3000)
    - Serve the frontend (port 4200)

 - Access the frontend at http://localhost:4200/home/
 - Access the backend at http://localhost:3000/v1/

- ### Tests
  - Unit tests implemented for backend services
  - Testing framework: Jest
  - Run tests with:
    ```bash
     npm test
    ```
- ### API Endpoints

  | Method | Endpoint           | Description          |
  |--------|---------------------|----------------------|
  | GET    | /devices           | List all devices    |
  | POST   | /devices           | Create a device     |
  | DELETE | /devices/:id       | Delete a device     |
  | GET    | /categories        | List all categories |
  | POST   | /categories        | Create a category   |
  | DELETE | /categories/:id    | Delete a category   |

  Postman Collection:
  [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/19986209-795d073b-2b9f-4201-8e08-e2276db94770?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D19986209-795d073b-2b9f-4201-8e08-e2276db94770%26entityType%3Dcollection%26workspaceId%3D4afb2b6c-476f-4f35-8318-1d1df8796e19)
  
- ### API Documentation
   - Available via Swagger at: http://localhost:3000/api-docs

- ### Production Notes

  | Componente  | Plataforma | Status |
  |-------------|------------|--------|
  | Database    | Clever Cloud | Operational (free tier, may experience downtime) |
  | Backend API | Render | Operational (free tier, cold starts possible) |
  | Frontend    | Vercel | Failed (deployment/configuration issues) |

  - **Database**: Hosted on Clever Cloud
  ![image](https://github.com/user-attachments/assets/ff58c213-71c8-4a4c-8724-e5dca13bc568)

  - **Backend API**: Deployed on Render: https://device-manager-app.onrender.com/v1/
  ![image](https://github.com/user-attachments/assets/3ef78f43-2397-48e6-a145-465da888eecd)


- ### Tech Stack
  - **Frontend**: Angular
  - **Backend**: Node.js, Express, Prisma ORM
  - **Database**: MySQL (Dockerized)
  - **Infrastructure**: Docker, Render, Clever Cloud
    
  ___

### Author 
<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/37541973?s=400&u=9ed58a58d32f6314db5f27fc52e7086130cd4e12&v=4" width="100px;" alt="Marcos Guerreiro Rebelo Profile Picture"/><br>
        <sub>
          <b>Marcos Guerreiro Rebelo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


