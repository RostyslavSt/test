To start laravel project, please, make follow steps:
 1. Clone the repository and move to folder "laravel_docker";
 2. Create image with command: "docker build -t ubuntu_with_php ."
 3. Install necessary dependencies for laravel with help Composer.
 You should't install Composer locally. We will do it with help of docker container.
 So, please go to the folder "laravel_project" and run the command:
 "docker run --rm -v $(pwd):/app composer:latest install".
 4. Then set the the permissions right for the Laravel folders.
 "sudo chown -R www-data:www-data ./laravel_project"
 5. Run "docker-compose up" and go the "localhost:8050" in your browser.

To create new laravel project:
 


docker run --rm -v $(pwd):/app composer:latest install

php artisan key:generate

sudo chown -R www-data:www-data ./laravel_project
sudo chmod -R 755 ./laravel_project
