import json
import pip._vendor.requests as r
import pandas as pd
import numpy as np
import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population"
#dfs = pd.read_html(url, attrs = {'class':'wikitable sortable'}, flavor='bs4')
#print(dfs[0])

data = requests.get(url).text
soup = BeautifulSoup(data, 'html.parser')

tables = soup.find_all('table')
table = soup.find('table', class_='wikitable sortable')

df = pd.DataFrame(columns=['Ranking','Country','Population', 'Percentage of World','Date'])
for row in table.tbody.find_all('tr'):
    columns = row.find_all('td')
    if(columns != []):
        ranking = columns[0].text.strip()
        country = columns[1].text.strip()
        population = columns[2].text.strip()
        percentage_of_world = columns[3].text.strip()
        date = columns[4].text.strip()
        #comments = columns[6].text.strip()

        df = pd.concat([df,pd.DataFrame.from_records([{'Ranking':ranking,'Country':country,'Population':population, 'Percentage of World':percentage_of_world,'Date':data}])])

df.head()