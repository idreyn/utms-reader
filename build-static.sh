export DOMAIN="mirrorsea.xyz"

rm -r ./docs
npx next build
mv ./out ./docs
rm ./docs/*.txt
rm ./docs/**/*.txt
touch ./docs/.nojekyll
echo $DOMAIN > ./docs/CNAME