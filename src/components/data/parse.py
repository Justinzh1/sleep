import csv
import json

def parse():
    data = None 
    data_map = {}
    with open('questions.json') as f:
        data = json.load(f) 

    create_data_map(data, data_map)
    print(data_map)

    with open('data.csv', 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        for row in reader:
            continue

def create_data_map(data, m):
    for q in data['questions']:
        print(q)
        m[q['id']] = q

parse()
