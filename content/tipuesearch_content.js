var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'week2-5', 'text': 'Week2 \n 建立個人倉儲cad2019及編輯網站 \n 1.下載 2019Fall可攜套件.7z \xa0 2.建立cad2019 3.git clone \xa0https://github.com/s40723218/cad2019\xa0 4.git submodule add https://github.com/mdecourse/cmsimde.git\xa0 5.進入cmsimde後,輸入python -m pip install flask_cors 更改模組\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 6.python wsgi.py 進入近端進行編輯\xa0 7.編輯完成後git status\xa0>\xa0git add .\xa0>\xa0git commit -m "\xa0 \xa0 \xa0"\xa0>\xa0git push\xa0 \n 個人操作影片 \n \n \n \xa0 Week3 \n Solvespac e 編譯 \n 1.\xa0sh.exe 改名為 sh_rename_for_solvespace.exe。 2.git version 查驗 git 版本 3\xa0git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace 4.編譯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 endif()(在713跟714前面加#)\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 5.手動編輯 libpng.dll.a 改名 libpng_static.a, 並放到編譯系統的 lib 目錄中\xa0 \n 6.cd solvespace->cd extlib->cd libpng->mkdir build->cd build->cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release->mingw32-make 7.最後回到solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release->mingw32-make \n 個人操作影片 \n \n Week4 \n 網站更新以及拍攝操作影片 \n 1.使用的錄影軟體 \xa0  ShareX \n \n 2.使用的上字幕及浮水印軟體 \xa0   ArcTime \n \n 3.浮水印 \n \n Week5 \n solvespace繪製練習 \n 1.使用快捷鍵(R)繪製出一個矩形 \n 2.使用快捷鍵(D)標註尺寸為40X30的矩形 \n 3.再繪製一個矩形在裡面 \n 4.使用快捷鍵(G) 使其變成綠色參照線 \n 5.利用快捷鍵(C)繪製4個圓孔 \n 6.點選2個圓孔並按下快捷鍵(Q)使其相等直徑，依序操作 \n 7.然後使用快捷鍵(D)標註尺寸以及快捷鍵(N)標註角度 \n 8.最後利用快捷鍵 shift+x 拉伸板子 ，並使用(D)設定厚度 \n 9.快捷鍵(W)為正視圖 ，快捷鍵 F3為等角圖 \n 完成圖 \n \n 個人操作影片 \n \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'Week6 \n 1.繪製兩輪自走車 \n 完成圖 \n \n 個人操作影片 \n \n 2.網際V-rep模型控制 \n 個人操作影片 \n \n 3.新增啟動予停止按鈕 \n 個人操作影片 \n \n Week7 \n Solvespace 編譯與參數繪圖驗證 \n 1. Solvespace 編譯加入學號 \n 完成圖 \n \n 個人操作影片 \n \n 2.Solvespace\xa0參數繪圖驗證 \n (1) \n 完成圖 \n \n 個人操作影片 \n \n (3) \n 完成圖 \n \n 個人操作影片 \n \n (4) \n 完成圖 \n \n 個人操作影片 \n \n (6) \n 完成圖 \n \n 個人操作影片 \n \n (7) \n 完成圖 \n \n 個人操作影片 \n \n (8) \n 完成圖 \n \n 個人操作影片 \n \n (12) \n 完成圖 \n \n 個人操作影片 \n \n (13) \n 完成圖 \n \n 個人操作影片 \n \n (15) \n 完成圖 \n \n 個人操作影片 \n \n (18) \n 完成圖 \n \n 個人操作影片 \n \n Week8 \n 1.啟用CMSiMDE中的網誌系統 \n (1)開啟start_mdecourse.bat，輸入leo (2)將隨身系統裡的config裡面的pelican.leo用leo開啟 (3)到個人網站的blog的網址複製到@path . ./\xa0->\xa0Pelican設定\xa0->\xa0遠端中SITEURL (4)將DISQUS_SITENAME改為s40723218 cad2019 (5)在local_blog點選右鍵>點goto script將指令複製起來後輸入在 start_mdecourse.bat \n 個人操作影片 \n \n 2.導入Webots \n (1)下載 Webots_2019b_rev1.7z \xa0並解壓縮 \n (2)複製start_mdecourse.bat並改名為start_mdecourse_webots.bat \n (3)使用編譯器開啟start_mdecourse_webots.bat \n (4)輸入執行入徑 :set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \n (5)在path_後面改為webots \n (6)輸入start D:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe %* 即可Save \n (7)開啟start_mdecourse_webots.bat即可打開webots \n 個人操作影片 \n \n 3.ssh對github連線 \n 個人操作影片 \n \n Week9 \n 期中個人報告 \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'Week10 \n \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Note', 'text': '', 'tags': '', 'url': 'Note.html'}, {'title': 'Phthon語法', 'text': '\n "#" 符號後是註解 ( comment ) ，可以在一列的開頭或中間加入 \n reserved word or built-in function( 變數取名請避開) and，exec，not，as，finally，or，assert，for，pass，except，break，from，print，class，global，raise，continue，if，return，def，import，try，del，in，while，elif，is，with，else，lambda，yield \n 縮排視為不同的block(在IF判斷是或迴圈的段落中使用)，縮排可以用tab或是數個空格( ≧ 1 )，空格的數量不同，是為不同的block ( bug 容易因為這一點而產生 ) \n python 的每個變數視為一個 object \n python variables 不需要事先宣告變數，直接用"=" assign value ( 賦值 ) 即可，例如： x = 3.14 → 實數變數 \n 變數類型 ( data type ) 根據被賦予的值決定 ( 之後若是被分配不同類型的數值，該變數的類型會直接改變 ) 例如：x = \'text\' → 字串變數 \n \n \n', 'tags': '', 'url': 'Phthon語法.html'}, {'title': 'Solvespace常用快捷鍵', 'text': '草圖 \n S\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0線段 \n R\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0矩形 \n C\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0圓 \n A\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0圓弧 \n T\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0真型字體本文 \n B\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0三次曲線樣條 \n P\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0基準點 \n G\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 切換構造 \n I\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 在相交處分割線/曲線 \n Shift+A\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0選定點之切線弧\xa0 \n 拘束 \n D\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0距離/長度/直徑 \n H\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0設定水平 \n N\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0角度 \n L\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定兩線段平行或切線 \n [\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0設定兩線段垂直 \n Y\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定對稱 \n Q \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定等長/角度/半徑 \n X\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定法線方向相同 \n U\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定其他輔助角 \n E\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0切換參考尺寸 \n O\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 點在線上/點上/平面上/曲面上 \n 組成 \n Shift+X\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0拉伸草圖 \n Shift+L\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0旋轉拉伸草圖 \n Shift+T\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0逐步放置 \n Shift+R\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0逐步旋轉 \n Shift+3\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa03D素描 \n Shift+W\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0新的工作平面 \n Shift+I\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 導入連接/組合文件 \n 視角 \n F3\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 等角視圖 \n W\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0正視圖 \n \n \n \n \n \n \n \xa0 \n \n \xa0 \n \n \n \n \xa0 \n \n', 'tags': '', 'url': 'Solvespace常用快捷鍵.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}]};