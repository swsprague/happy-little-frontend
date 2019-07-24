curl "http://localhost:4741/playlists/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "playlist": {
      "title": "'"${TITLE}"'"
    }
  }'

echo
