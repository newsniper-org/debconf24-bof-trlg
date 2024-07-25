prepare-astro:
	npm install

build:
	CI=false npm run build


netlify: prepare-astro build