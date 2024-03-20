'''
Date         : 2023-01-16 11:31:15
Author       : BDFD,bdfd2005@gmail.com
Github       : https://github.com/bdfd
LastEditTime : 2024-03-19 20:26:06
LastEditors  : <BDFD>
Description  : 
FilePath     : \server.py
Copyright (c) 2023 by BDFD, All Rights Reserved. 
'''
# This is the flask server of waterfrontes.com 滨水工
# from distutils.log import debpytug
from flask import Flask, send_file, redirect, render_template, url_for, request, flash
from execdata.format import convint as s2int, convfloat as s2dec
import WES_Calculation as wes

app = Flask(__name__)


@app.route("/")
@app.route("/index")
def home():
    return render_template("home.html")


@app.route("/guide.html")
def guide():
    return render_template("guide.html")


@app.route("/disclaim.html")
def disclaim():
    return render_template("disclaim.html")


@app.route("/greenampt.html", methods=["POST", "GET"])
def greenampt():
    if request.method == "POST":
        mingzi = request.form["mingzi"]
        input_dic = {}
        thetai = request.form["thetai"]  # Initial soil moisture content
        # Soil moisture content at saturation (i.e. porosity)
        thetas = request.form["thetas"]
        Psi = request.form["psi"]  # Suction head (m)
        K = request.form["k"]  # Saturated hydraulic conductivity (cm/h)
        # 6 time interval in the analysis, normally that used in hyetograph (min)
        dti = request.form["dti"]
        # The number of time intervals to be considered in the anlysis
        nin = request.form["nin"]
        # Whether to generate an effective hyetograph (0: No; 1: Yes)
        iyesno = request.form["iyesno"]
        yesono = request.form["iyesno"]
        yesorno = request.form["iyesno"]
        yesorno = int(yesorno)+1
        input_dic.update({"thetai": thetai, "thetas": thetas, "Psi": Psi, "K": K, "dti": dti,
                         "nin": nin, "iyesno": iyesno, "yesono": yesono, "yesnorno": yesorno})
        if iyesno == "1":
            # test9 = request.form["dd"]
            # test10 = request.form["i"]
            # Depression depth used in generating an effective hyetograph (mm), which has to be zero when iyesno=0.
            dd = request.form["dd"]
            # Hyetograph (mm/h) (The first value covers the period between time 0 and time 0+dti.)
            i = request.form["i"]
        else:
            # Hyetograph (mm/h) (The first value covers the period between time 0 and time 0+dti.)
            i = [0 for k in range(int(nin))]
            dd = 0
        input_dic.update({"dd": dd, "i": i})

        print("input_dic before function", input_dic)
        headings, ending, *result = wes.ga(input_dic)
        return render_template('greenampt.html', mingzi=mingzi, headings=headings, ending=ending, yesornot=yesorno, yesono=yesono, test2=input_dic["thetai"], test3=input_dic["thetas"], test4=input_dic["Psi"], test5=input_dic["K"], test7=input_dic["dti"], test8=input_dic["nin"], test9=input_dic["dd"], test10=i, plot_url=result[0], data=result[1], eff=result[2], note=result[3], note2=result[4])
    else:
        return render_template("greenampt.html")


@app.route("/greenampthelp.html")
def greenampthelp():
    return render_template("instructions/greenampthelp.html")


@app.route("/greenamptupdate.html")
def greenamptupdate():
    return render_template("updates/greenamptupdate.html")


@app.route("/gumbel.html", methods=["POST", "GET"])
def gumbel():
    if request.method == "POST":
        mingzi = request.form["mingzi"]
        input_dic = {}
        pq = request.form["pq"]
        unitx = request.form["unitx"]
        unitt = request.form["unitt"]
        i1 = request.form["i1"]
        i2 = request.form["i2"]
        meanx, sdx, n = "", "", ""
        i3, dataolist = "", ""
        if i2 == "1":
            meanx = request.form["meanx"]
            sdx = request.form["sdx"]
            n = request.form["n"]
        if i2 == "2":
            dataolist = request.form["datao"]
            i3 = request.form["i3"]
        input_dic.update({"pq": pq, "unitx": unitx, "unitt": unitt, "i1": i1, "i2": i2,
                         "meanx": meanx, "sdx": sdx, "n": n, "i3": i3, "dataolist": dataolist})

        print("input_dic before function", input_dic)
        result = wes.gu(input_dic)
        print("input_dic before function", input_dic)
        return render_template("gumbel.html", mingzi=mingzi, pq=input_dic["pq"], unitx=input_dic["unitx"], unitt=input_dic["unitt"], i1=input_dic["i1"], i2=input_dic["i2"], i3=input_dic["i3"], meanx=input_dic["meanx"], sdx=input_dic["sdx"], n=input_dic["n"], dataolist=input_dic["dataolist"], plot_url=result[0], nCl2=result[1], nlen=result[2], note1=result[3], note2=result[4], note3=result[5], data3=result[6], note4=result[7], data4=result[8], note5=result[9], data5=result[10], data6=result[11], heading1=result[12], heading2=result[13], ending=result[14])
    else:
        return render_template("gumbel.html")


@app.route("/gumbelhelp.html")
def gumbelhelp():
    return render_template("instructions/gumbelhelp.html")


@app.route("/gumbelupdate.html")
def gumbelupdate():
    return render_template("updates/gumbelupdate.html")


@app.route("/wavespectra.html", methods=["POST", "GET"])
def wavespectra():
    if request.method == "POST":
        mingzi = request.form["mingzi"]
        input_dic = {}
        c1 = request.form["radio"]
        input_dic.update({"c1": c1})
        input_dic.update({"d_1": "", "X_1": "", "U_1": "", "el_1": "",
                         "gamma_1": "", "Hs_1": "", "Tz_1": "", "Ts_1": "", "Tp_1": ""})
        input_dic.update({"d_2": "", "X_2": "", "U_2": "", "el_2": "", "gamma_2": "",
                         "Hs_2": "", "Tz_2": "", "Ts_2": "", "Tp_2": "", "X_2_Replace": ""})
        # If c1=1, please input the following paramaters:
        if c1 == "1":
            d_1 = request.form["d"]   # water depth (m)
            X_1 = request.form["X_1"]
            U_1 = request.form["U_1"]  # wind speed (m/s)
            el_1 = request.form["el_1"]   # the elevation of the wind speed (m)
            # peakedness parameter for JONSWAP (between 1 and 7, but 3.30 is normally recommended)
            gamma_1 = request.form["gamma_1"]
            Hs_1 = request.form["Hs_1"]   # significant wave height (m)
            # average zero-crossing period from data (s)
            Tz_1 = request.form["Tz_1"]
            Ts_1 = request.form["Ts_1"]  # significant wave period (s)
            Tp_1 = None
            input_dic.update({"d_1": d_1, "X_1": X_1, "U_1": U_1, "el_1": el_1,
                             "gamma_1": gamma_1, "Hs_1": Hs_1, "Tz_1": Tz_1, "Ts_1": Ts_1, "Tp_1": Tp_1})

        # If c1=2, please input the following paramaters:
        if c1 == "2":
            d_2 = None
            X_2 = request.form["X_2"]
            U_2 = request.form["U_2"]  # wind speed (m/s)
            el_2 = request.form["el_2"]   # the elevation of the wind speed (m)
            # peakedness parameter for JONSWAP (between 1 and 7, but 3.30 is normally recommended)
            gamma_2 = request.form["gamma_2"]
            Hs_2 = request.form["Hs_2"]  # significant wave height (m)
            # average zero-crossing period from data (s)
            Tz_2 = request.form["Tz_2"]
            Ts_2 = request.form["Ts_2"]  # significant wave period (s)
            Tp_2 = request.form["Tp"]  # significant wave period (s)
            input_dic.update({"d_2": d_2, "X_2": X_2, "U_2": U_2, "el_2": el_2,
                             "gamma_2": gamma_2, "Hs_2": Hs_2, "Tz_2": Tz_2, "Ts_2": Ts_2, "Tp_2": Tp_2})

        print("input_dic before function", input_dic)
        result = wes.wa(input_dic)
        return render_template("wavespectra.html", mingzi=mingzi, img_stream=result[0], heading=result[1], data1=result[2], data1_heading=result[3], data2=result[4], data2_heading=result[5], content=result[6], ending=result[7], d_1=input_dic["d_1"], X_1=input_dic["X_1"], U_1=input_dic["U_1"], el_1=input_dic["el_1"], gamma_1=input_dic["gamma_1"], Hs_1=input_dic["Hs_1"], Tz_1=input_dic["Tz_1"], Ts_1=input_dic["Ts_1"], c1=input_dic["c1"], X_2=input_dic["X_2"], X_2_Replace=input_dic["X_2_Replace"], U_2=input_dic["U_2"], el_2=input_dic["el_2"], gamma_2=input_dic["gamma_2"], Hs_2=input_dic["Hs_2"], Tz_2=input_dic["Tz_2"], Ts_2=input_dic["Ts_2"], Tp_2=input_dic["Tp_2"])
    else:
        return render_template("wavespectra.html", c1=1)


@app.route("/wavespectrahelp.html")
def wavespectrahelp():
    return render_template("instructions/wavespectrahelp.html")


@app.route("/wavespectraupdate.html")
def wavespectraupdate():
    return render_template("updates/wavespectraupdate.html")


@app.route("/windspeed.html", methods=["POST", "GET"])
def windspeed():
    if request.method == "POST":
        input_dic = {"o2": "", "zw_1": "", "zw_2": "", "X_2": "", "zw_3": "", "Xlat_3": "", "X_3": "", "Xlat_4": "", "Rg_4": "", "o2": "",
                     "zw": "", "Xlat": "", "X": "", "Rg": "", "beta": "", "atm": "", "Ta": "", "zt": "", "Tw": "", "Taa": "", "wdu": "", "zu": ""}
        # mingzi = request.form["mingzi"]

        o2 = request.form["o2"]
        input_dic.update({"o2": o2})

        if o2 == "1":
            zw_1 = request.form["zw_1"]
            input_dic.update({"zw_1": zw_1})

        if o2 == "2":
            zw_2 = request.form["zw_2"]
            X_2 = request.form["X_2"]
            input_dic.update({"zw_2": zw_2, "X_2": X_2})

        if o2 == "3":
            zw_3 = request.form["zw_3"]
            Xlat_3 = request.form["Xlat_3"]
            X_3 = request.form["X_3"]
            input_dic.update({"zw_3": zw_3, "Xlat_3": Xlat_3, "X_3": X_3})

        if o2 == "4":
            Xlat_4 = request.form["Xlat_4"]
            Rg_4 = request.form["Rg_4"]
            input_dic.update({"Xlat_4": Xlat_4, "Rg_4": Rg_4})

        beta = request.form["beta"]
        atm = request.form["atm"]
        Ta = request.form["Ta"]
        zt = request.form["zt"]
        Tw = request.form["Tw"]
        Taa = request.form["Taa"]
        wdu = request.form["wdu"]
        zu = request.form["zu"]
        input_dic.update({"beta": beta, "atm": atm, "Ta": Ta,
                         "zt": zt, "Tw": Tw, "Taa": Taa, "wdu": wdu, "zu": zu})

        print("input_dic before function", input_dic)
        result = wes.ws(input_dic)
        return render_template("windspeed.html", o2=input_dic["o2"], img_stream=result[0], heading=result[1], section1=result[2], section2=result[3], section2_note=result[4], section3=result[5], section4=result[6], section5=result[7], section6=result[8], section7=result[9], ending=result[10], zw_1=input_dic["zw_1"], zw_2=input_dic["zw_2"], zw_3=input_dic["zw_3"], Xlat_3=input_dic["Xlat_3"], Xlat_4=input_dic["Xlat_4"], X_2=input_dic["X_2"], X_3=input_dic["X_3"], Rg_4=input_dic["Rg_4"], beta=input_dic["beta"], atm=input_dic["atm"], Ta=input_dic["Ta"], zt=input_dic["zt"], Tw=input_dic["Tw"], Taa=input_dic["Taa"], wdu=input_dic["wdu"], zu=input_dic["zu"])
    else:
        return render_template("windspeed.html", c1=1)


@app.route("/windspeedupdate.html")
def windspeedupdate():
    return render_template("updates/windspeedupdate.html")


@app.route("/windspeedhelp.html")
def windspeedhelp():
    return render_template("instructions/windspeedhelp.html")


@app.route("/wws.html", methods=["POST", "GET"])
def wws():
    if request.method == "POST":
        # Wind-generated Wave
        # Inputs
        input_dic = {}
        input_dic.update({"o1": " ", "ad": " ", "X": " ", "U10k": " ",
                          "atm": " ", "atr": " ", "wdu": " ", "o2": " ",
                          "beta": " ", "slc": " ", "o4": " ", "o5": " ",
                          "xs": " ", "d0": " ", "Ksb": " ", "xlook": " "})
        # Primary
        # catagory of water environment: 1 open ocean or coastal (not enclosed) waters, 2 almost enclosed coastal waters (including bays or estuaries), 3 lakes or reserviors
        o1 = request.form["o1"]
        input_dic.update({"o1": o1})
        # None # average water depth (m), None for assumed deep water or a positive value for a finite water depth
        if request.form["ad"] != "":
            ad = request.form["ad"]
        else:
            ad = "None"
        print(ad)
        X = request.form["X"]  # 24.4#20#10 # fetch length (km)
        # 30.86#30#14.195#20/1.25 # 30# A known U10 (m/s)
        U10k = request.form["U10k"]
        # averaging time of U10 (min) (A wanrning will show if it<=1/60 or it>=600!!)
        atm = request.form["atm"]
        # required averaging time of windspped (min) (A wanrning will show if it<=1/60 or it>=600!!)
        atr = request.form["atr"]
        # 4.5*60 # wind duration to be considered (min) (A wanrning will show if it<=1/60 or it>=600!!)
        wdu = request.form["wdu"]
        input_dic.update({"ad": ad, "X": X, "U10k": U10k, "atm": atm,
                          "atr": atr, "wdu": wdu})
        # Replace 1 For 'Yes' Situtation  # whether to calculate wind setup? Yes or No
        o2 = request.form["o2"]
        # beta=0 # the angle of incidence (from the shoreline normal). 0 means that the incident wave is pertenticular to the shoreline.
        input_dic.update({"o2": o2})
        if o2 == "1":
            beta = request.form["beta"]
            slc = request.form["slc"]
            input_dic.update({"beta": beta, "slc": slc})
            o5 = request.form["o5"]
            input_dic.update({"o5": o5, })
            if o5 == "1":
                o4 = request.form["o4"]
                xs = request.form["xs"]
                d0 = request.form["d0"]
                Ksb = request.form["Ksb"]
                xlook = request.form["xlook"]
                input_dic.update(
                    {"o4": o4, "xs": xs, "d0": d0, "Ksb": Ksb, "xlook": xlook})
        # catagory of known windspeed: #1) low-level overwater wind; 2) low-level overland wind (onshore wind at an anemometer immediately adjacent to water);
        # o2 = 3
        # 3) low-level overland wind (other scenarios); 4) geostrophic winds
        print(input_dic)
        result = wes.ww(input_dic)
        print((input_dic["xs"]))
        print((input_dic["d0"]))
        test = result[7]
        print('Hello World!')
        print(test[0][1])
        return render_template("wws.html", o1=input_dic["o1"], ad=input_dic["ad"], X=input_dic["X"],
                               U10k=input_dic["U10k"], atm=input_dic["atm"], atr=input_dic["atr"],
                               wdu=input_dic["wdu"], o2=input_dic["o2"], beta=input_dic["beta"], slc=input_dic["slc"],
                               o4=input_dic["o4"], o5=input_dic["o5"], xs=input_dic["xs"],
                               d0=input_dic["d0"], Ksb=input_dic["Ksb"], xlook=input_dic["xlook"],
                               heading=result[0], section1=result[1], section3=result[2],
                               section4=result[3], section5=result[4], section6=result[5],
                               section7=result[6], section8_heading=result[7], section8=result[8], ending=result[9])
    else:
        return render_template("wws.html")


@app.route("/wwsupdate.html")
def wwsupdate():
    return render_template("updates/wwsupdate.html")


@app.route("/wwshelp.html")
def wwshelp():
    return render_template("instructions/wwshelp.html")


if __name__ == "__main__":
    # from waitress import serve
    # serve(app, host="0.0.0.0", port=5000)
    app.run(host='0.0.0.0', port=5000, debug=True)
