# finds all *.js files that have either `</` or `/>` tags in them and renames them to *.jsx
find ./src -type f -name '*.js' -not -name '*.jsx' -not -name '*.ejs' -exec bash -c 'grep -l -E "</|/>" "$0"' {} \; -exec bash -c 'mv "$0" "${0%.js}.jsx"' {} \;
