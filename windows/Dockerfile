FROM mcr.microsoft.com/windows/servercore:ltsc2019

LABEL maintainer="moses@moses.io"

RUN dism.exe /online /enable-feature /all /featurename:iis-webserver /NoRestart

RUN echo "Hello World - Dockerfile" > c:\inetpub\wwwroot\index.html

CMD [ "cmd" ]

