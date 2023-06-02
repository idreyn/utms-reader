export DOMAIN="idreyn.github.io/utms-reader/"
export ASSET_PREFX="$DOMAIN"

echo $ASSET_PREFX;

rm -r ./docs
npx next build
mv ./out ./docs
touch ./docs/.nojekyll
# echo $DOMAIN > ./docs/CNAME