# Python 데이터 종류
# 자료형: 숫자형, 문자열, 불
# 참고형: 변수, 리스트, 튜플, 딕셔너리, 집합

# 1-2. 문자열 indexing
a = "Life is too short, You need Python"
print(a[0]) # 긴 문자열의 각 글자의 값 
print(a[-2]) # 맨 끝글자 = -1

# slicing
print(a[0:4]) 

b = "20221209Rainy"
print(b[0:8])
print(b[8:])

c = "123456789"
print(c[::1])
print(c[::3])