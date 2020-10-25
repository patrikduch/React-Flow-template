@echo off

echo ==================================================================
echo react-flow-template v1.0.0
echo ==================================================================

echo * Copyright (c) Patrik Duch
echo * Author: Patrik Duch
echo ==================================================================
echo.

echo ==================================================================
echo  START OF DEPLOYING...
echo ==================================================================

cd ..
cmd /c npm run prod
cmd /c heroku git:remote -a reactapp-microservices
cmd /c heroku container:login
cmd /c heroku container:push web
cmd /c heroku container:release web