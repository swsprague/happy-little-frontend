curl "http://localhost:4741/playlist_videos" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "playlist_video": {
      "playlist_id": "'"${PLAYLIST_ID}"'",
      "video_id": "'"${VIDEO_ID}"'"
    }
  }'

echo
