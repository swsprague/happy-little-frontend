curl "http://localhost:4741/playlists" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "playlist": {
      "title": "'"${TITLE}"'"
    }
  }'

echo
