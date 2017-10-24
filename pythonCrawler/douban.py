# -*- coding: utf-8 -*-
import requests
import codecs
from bs4 import  BeautifulSoup

URL = "http://movie.douban.com/top250" #要爬取的地址
HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36'
}#user-agent，模仿浏览器，防止被目标网站反爬

def download_page(url):#下载页面
    data = requests.get(url,headers=HEADERS).content #请求页面，获取要爬取的页面内容
    return data

def parse_html(html):
    soup= BeautifulSoup(html, "html.parser")#使用bs解析获取的页面，测试是可以使用print soup.pretiffy()打印查看获得的页面
    movie_list_soup = soup.find('ol',attrs={'class':'grid_view'})#根据css获得要爬取的页面信息
    movie_name_list=[]
    for movie_li  in movie_list_soup.find_all('li'): #遍历页面中有关的信息
        detail = movie_li.find('div',attrs={'class':'hd'}) #找到电影描述
        movie_name=detail.find('span',attrs={'class':'title'}).getText() #电影名字
        movie_name_list.append(movie_name) #添加到list中
    next_page = soup.find('span',attrs={'class':'next'}).find('a') #找到下一页
    if next_page:
        return movie_name_list,URL+next_page['href'] #拼接下一页的url，继续爬取下一页
    return movie_name_list,None #返回电影名称的list

def main():
    url=URL
    with codecs.open('movies.txt','wb',encoding='utf-8') as fp: #打开文件，使用utf-8编码
        while url:
            html = download_page(url)  #获取页面
            movies,url=parse_html(html) #分析页面获取信息
            fp.write(u'{movies}\n'.format(movies='\n'.join(movies))) #将获得的信息写入文件

if __name__=='__main__':
    main()