# -*- coding: utf-8 -*-
import requests
import re
from bs4 import  BeautifulSoup

HEADERS = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36'
}#user-agent，模仿浏览器，防止被目标网站反爬

def search_xsrf():
    url= "https://www.zhihu.com/#signin" #登录页面地址
    r=requests.get(url,headers=HEADERS) #获取页面
    if int(r.status_code)!=200:
        raise NetworkError(u" requestcaptcha network error")
    results=re.compile(r"\<input\stype=\"hidden\"\sname=\"_xsrf\"\svalue=\"(\S+)\"",re.DOTALL).findall(r.text)
#使用正则表达式提取xsrf的值
    if len(results)<1:
        print(u"can not get XSRF")
        return None
    print results[0]
    return results[0]#返回xsrf的值，供后续使用

def build_form(account,password):
    form={"account":account,"password":password,"remember_me":'true'}#用户名，密码及是否'记住我'
    form['_xsrf']=search_xsrf()#调用获取xsrf的方法获得xsrf
    # form['captcha']=download_captcha()#调用获得验证码的方法获得验证码
    return form

def upload_form(form):
    url= "https://www.zhihu.com/login/email"
    headers = {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36",
        'Host': "www.zhihu.com",
        'Origin': "https://www.zhihu.com",
        'Referer': "https://www.zhihu.com/",
        'X-Requested-With': "XMLHttpRequest",
 
    }#构造请求头
    r=requests.post(url,data=form,headers=headers)#post提交请求数据
    if int(r.status_code)!=200:
        raise  NetworkError(u"upload form failed")
    print r.content
    if r.headers['content-type'].lower() =="application/json":#返回数据判断
        result=r.json()#将返回数据转为json格式
        if result["r"]==0:
            print(u"login success")
            return{"result":True}
        elif result["r"]==1:
            print(u"login failed")
            return 

def main():
    form = build_form("lyssfxz@126.com", "ly85807694")
    upload_form(form)

if __name__=='__main__':
    main()