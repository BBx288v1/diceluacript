import pprint
import requests
import json

class TimeGender:
    def __init__(self):
        self.url = "http://api.timezonedb.com/v2.1/get-time-zone?key=H9V7D0UJNQRU&format=json&by=position&lat=21.004655&lng=105.791918"
        self.dateTime = []
    def get_real_time(self):
        response = requests.get(self.url)
        response = response.json()
        response  = response["formatted"]
        self.dateTime = self.handing_time(response)
    def handing_time(self, source):
        source = source.split(" ")
        source[0]=source[0].split("-")
        source[1]=source[1].split(":")
        return source
    def compare_other(self, other):
        for i in range(3):
            for k in range(3):
                if(self.dateTime[i][k] <= other[i][k]):
                    return False
        return True
    def get_year(self):
        return self.dateTime[0][0]
    def get_month(self):
        return self.dateTime[0][1]
    def get_day(self):
        return self.dateTime[0][2]
    def get_hour(self):
        return self.dateTime[1][0]
    def get_minute(self):
        return self.dateTime[1][1]
    def get_second(self):
        return self.dateTime[1][2]
        
A = TimeGender()
A.get_real_time()
print(A.get_hour())