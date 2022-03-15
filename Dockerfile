FROM nodejs
EXPOSE 3000 3001

ADD pwa-react/public /home/pwa/fahrt/public
ADD pwa-react/src /home/pwa/fahrt/src
ADD pwa-react/db.json /home/pwa/fahrt/

RUN chown 1000 /home/pwa/fahrt/node_modules &&\
	chown -R 1000 /home/pwa/fahrt/node_modules/react-router-dom &&\
	chown -R 1000 /home/pwa/fahrt/node_modules/react &&\
	chown -R 1000 /home/pwa/fahrt/node_modules/react-dom &&\
	chown -R 1000 /home/pwa/fahrt/node_modules/prop-types &&\
	chown -R 1000 /home/pwa/fahrt/node_modules/react-icons &&\
	chown -R 1000 /home/pwa/fahrt/public &&\
	chown -R 1000 /home/pwa/fahrt/src &&\
	chown -R 1000 /home/pwa/fahrt/package.json &&\
	chown -R 1000 /home/pwa/fahrt/package-lock.json &&\
	chmod 777 /home/pwa/fahrt/node_modules &&\
	chmod -R 777 /home/pwa/fahrt/node_modules/react-router-dom &&\
	chmod -R 777 /home/pwa/fahrt/node_modules/react &&\
	chmod -R 777 /home/pwa/fahrt/node_modules/react-dom &&\
	chmod -R 777 /home/pwa/fahrt/node_modules/prop-types &&\
	chmod -R 777 /home/pwa/fahrt/node_modules/react-icons &&\
	chmod -R 777 /home/pwa/fahrt/public &&\
	chmod -R 777 /home/pwa/fahrt/src &&\
	chmod -R 777 /home/pwa/fahrt/package.json &&\
	chmod -R 777 /home/pwa/fahrt/package-lock.json

WORKDIR /home/pwa/fahrt/

USER 1000
#CMD json-server --watch db.json --port 3001 & npm start
CMD npm start