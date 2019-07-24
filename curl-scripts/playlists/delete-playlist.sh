#!/bin/bash

curl "http://localhost:4741/playlists/${ID}" \
  --include \
  --request DELETE \

echo
