#!/bin/bash

curl "http://localhost:4741/playlist_videos/${ID}" \
  --include \
  --request DELETE \

echo
