import json
import pip._vendor.requests as r
import pandas as pd
import numpy as np
import requests
import locale
from bs4 import BeautifulSoup

locale.setlocale(locale.LC_ALL, '')

url_population = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population"

data_population = requests.get(url_population).text
soup_population = BeautifulSoup(data_population, 'html.parser')

country_table=soup_population.find('table',{'class':"wikitable"})

df_population = pd.read_html(str(country_table))
df_population=pd.DataFrame(df_population[0])
df2_population =  df_population.drop(["% of world","Date","Source (official or from the United Nations)", "Unnamed: 6"], axis=1)
df2_population = df2_population.rename(columns={"Unnamed: 0":"Ranking"})
print(df2_population.head(10))

print("LANDAREA")

url_landarea = "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area"

data_landarea = requests.get(url_landarea).text
soup_landarea = BeautifulSoup(data_landarea, 'html.parser')

landarea_table=soup_landarea.find('table',{'class':"wikitable"})

df_landarea = pd.read_html(str(landarea_table))
df_landarea=pd.DataFrame(df_landarea[0])
df2_landarea =  df_landarea.drop(["% water", "Unnamed: 6"], axis=1)
df2_landarea = df2_landarea.rename(columns={"Unnamed: 0":"Ranking", "Total in km2 (mi2)":"Total Area", "Land in km2 (mi2)": "Land Area", "Water in km2 (mi2)": "Water Area"})
print(df2_landarea.head())
df2_landarea["Total Area"] = df2_landarea["Total Area"].apply(lambda totalstring: totalstring[0:totalstring.find(' ')])
df2_landarea["Land Area"] = df2_landarea["Land Area"].apply(lambda landstring: landstring[0:landstring.find(' ')] if isinstance(landstring, str) else "nodata")
df2_landarea["Water Area"] = df2_landarea["Water Area"].apply(lambda waterstring: waterstring[0:waterstring.find(' ')] if isinstance(waterstring, str) else "nodata")
print(df2_landarea.head(10))





