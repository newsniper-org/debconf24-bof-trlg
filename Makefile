prepare-astro:
	npm install

build:
	npm run build

postbuild:
	npm run postbuild


netlify: prepare-astro build