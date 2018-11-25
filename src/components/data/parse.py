import csv
import json
from collections import Counter

def parse():
    data = None 
    data_map = {}
    with open('questions.json') as f:
        data = json.load(f) 
    
    count = {}
    create_data_map(data, data_map, count)
    #print(data_map)
    
    valid_entries = 0

    scores = []

    questions = []

    with open('data.csv', 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        for i, row in enumerate(reader):
            if i == 0:
                continue
            
            total_score = 0
            valid = True
            for i in range(2, len(row)-2):
                if row[i] == '':
                    print("incomplete entry")
                    valid = False
                    break
                else:
                    answer = row[i].split(',(')
                    score = answer[1][0]
                    total_score += int(score)
                    count[i-1][score] += 1
            
            if (valid):
                scores.append(total_score)
                questions.append(row[-2].lower())

        print("--questions--")
        print(data)
        print("--count--")
        print(count) 

        print("--scores--")
        formatted_scores = []
        for s in scores:
            formatted_scores.append({'x':s,'y':0})
       	c = Counter(scores)
        st = "["
        for s,v in c.most_common():
            st += "{{x:{}, y:{}, label:\"{} for {} people\"}}, ".format(s,v,s,v)
        st += "]"
        print(st)	

        # print("--stats--")
        # print("number of scores {}".format(len(scores)))
        # print("----")
        # print("avg: {}, High: {}, Low: {}".format(sum(scores)/len(scores), max(scores), min(scores)))
        # print("--questions--")
        # invalid = ['', 'none', 'n/a', 'no']
        # for q in sorted(questions):
        #     if (q not in invalid):
        #         print(q)
        #
        # print("--formatted--")
        # formatted = {}
        # for q in data['questions']:
        #     formatted[str(q['id'])] = []
        #     for s, option in q['options'].items():
        #     	formatted[str(q['id'])].append({'label': option, 'y': count[int(q['id'])][s]})
        # print(formatted)
        #


def create_data_map(data, m, count):
    for q in data['questions']:
        m[q['id']] = q
        count[q['id']] = {}
        for r in q['options'].keys():
            count[q['id']][r] = 0
    # print(count)

parse()
