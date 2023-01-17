# bull-queue-node

Background queue service to execute bulk tasks with LIFO system

To run code
node src/index.js

Here api request sample
curl --location --request POST 'http://localhost:4000/add-job' \
--header 'Content-Type: application/json' \
--data-raw '{
"name":"manoj"
}'
