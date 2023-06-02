export DOMAIN="idreyn.github.io/utms-reader/"
export ASSET_PREFIX="https://$DOMAIN"

rm -r ./docs
npx next build
mv ./out ./docs
touch ./docs/.nojekyll
# echo $DOMAIN > ./docs/CNAME