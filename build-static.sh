export DOMAIN="mirrorsea.xyz"
export ASSET_PREFIX="/"
export BASE_PATH=""

rm -r ./docs
npx next build
mv ./out ./docs
rm ./docs/*.txt
rm ./docs/**/*.txt
touch ./docs/.nojekyll
echo $DOMAIN > ./docs/CNAME