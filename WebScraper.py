import json
import pip._vendor.requests as r
import pandas as pd
import numpy as np
import requests
from bs4 import BeautifulSoup

url_population = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population"

data_population = requests.get(url_population).text
soup_population = BeautifulSoup(data_population, 'html.parser')

country_table=soup_population.find('table',{'class':"wikitable"})

df_population = pd.read_html(str(country_table))
df_population=pd.DataFrame(df_population[0])
print(df_population.keys())
print("table starts here")
print(df_population.head())
df2_population =  df_population.drop(["% of world","Date","Source (official or from the United Nations)", "Unnamed: 6"], axis=1)
df2_population = df2_population.rename(columns={"Unnamed: 0":"Ranking"})
print(df2_population.head())

print("LANDAREA")

url_landarea = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area"

data_landarea = requests.get(url_landarea).text
soup_landarea = BeautifulSoup(data_landarea, 'html.parser')

landarea_table=soup_landarea.find('table',{'class':"wikitable"})

df_landarea = pd.read_html(str(landarea_table))
df_landarea=pd.DataFrame(df_landarea[0])
print(df_landarea.keys())
print("table starts here")
print(df_landarea.head(10))
df2_landarea =  df_landarea.drop(["% water", "Unnamed: 6"], axis=1)
df2_landarea = df2_landarea.rename(columns={"Unnamed: 0":"Ranking"})
print(df2_landarea.head(10))


