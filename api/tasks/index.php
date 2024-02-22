<?php

header('Content-Type: application/json');

$data_path = __DIR__ . '/../../data/tasks.json';

$json_data = file_get_contents($data_path);

$tasks = $json_data;

$new_task = $_POST['task'] ?? '';

if($new_task) {

    $tasks = json_decode($tasks, true);

    $tasks[] = ['id' => rand(5,100), 'text' => "$new_task", 'done' => false];

    $tasks = json_encode($tasks);

}

echo $tasks;