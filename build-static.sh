export DOMAIN="mirrorsea.xyz"

rm -r ./docs
npx next build
mv ./out ./docs
touch ./docs/.nojekyll
echo $DOMAIN > ./docs/CNAME