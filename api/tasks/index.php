<?php

$data_path = __DIR__ . '/../../data/tasks.json';

$json_data = file_get_contents($data_path);

header('Content-Type: application/json');

echo $json_data;