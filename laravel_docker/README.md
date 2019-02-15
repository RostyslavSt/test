To start laravel project, please, make follow steps:
 - clone the repository and move to laravel_docker folder;
 - 


To create new laravel project:
 


docker run --rm -v $(pwd):/app composer:latest install

php artisan key:generate

sudo chown -R www-data:www-data ./laravel_project
sudo chmod -R 755 ./laravel_project
