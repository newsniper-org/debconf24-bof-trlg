prepare-astro:
	npm install

build:
	CI=false npm run build


deploy: prepare-astro build