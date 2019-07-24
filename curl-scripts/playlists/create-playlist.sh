curl "http://localhost:4741/playlists" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "playlist": {
      "name": "'"${PLAYLIST_ID}"'",
      "video_id": "'"${VIDEO_ID}"'"
    }
  }'

echo
