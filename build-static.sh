export DOMAIN="mirrorsea.xyz"

npm run ingest
rm -r ./docs
npx next build
mv ./out ./docs
touch ./docs/.nojekyll
echo $DOMAIN > ./docs/CNAME