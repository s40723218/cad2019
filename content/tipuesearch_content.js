var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Week1~9', 'text': 'Week1 \xa0  \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 中秋放假 \n Week2 \n 建立個人倉儲cad2019及編輯網站 \n 1.下載 2019Fall可攜套件.7z \xa0 2.建立cad2019 3.git clone \xa0 https://github.com/s40723218/cad2019 \xa0 4.git submodule add https://github.com/mdecourse/cmsimde.git\xa0 5.進入cmsimde後,輸入python -m pip install flask_cors 更改模組\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  \n 6. python wsgi.py 進入近端進行編輯\xa0 7.編輯完成後git status \xa0 > \xa0 git add . \xa0 > \xa0 git commit -m "\xa0 \xa0 \xa0" \xa0 > \xa0 git push\xa0 \n \n \n \xa0 Week3 \n Solvespac e 編譯 \n 1.\xa0 sh.exe 改名為 sh_rename_for_solvespace.exe。 2.git version 查驗 git 版本 3 \xa0git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace 4.編譯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 endif()(在713跟714前面加#)\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 5.手動編輯 libpng.dll.a 改名 libpng_static.a, 並放到編譯系統的 lib 目錄中 。 6.cd solvespace -> cd extlib->cd libpng->mkdir build->cd build->cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release-> mingw32-make 7.最後回到solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release -> mingw32-make \n \n Week4 \n 自主練習 \n 網站更新以及拍攝操作影片 \n 1.使用的錄影軟體 \xa0  ShareX \n \n 2.使用的上字幕及浮水印軟體\xa0   ArcTime \n \n 3.浮水印 \n \n Week5 \n solvespace繪製練習 \n 1.使用快捷鍵(R)繪製出一個矩形 \n 2.使用快捷鍵(D)標註尺寸為40X30的矩形 \n 3.再繪製一個矩形在裡面 \n 4.使用快捷鍵(G) 使其變成綠色參照線 \n 5.利用快捷鍵(C)繪製4個圓孔 \n 6.點選2個圓孔並按下快捷鍵(Q)使其相等直徑，依序操作 \n 7.然後使用快捷鍵(D)標註尺寸以及快捷鍵(N)標註角度 \n 8.最後利用快捷鍵 shift+x 拉伸板子 ，並使用(D)設定厚度 \n 9.快捷鍵(W)為正視圖 ，快捷鍵 F3為等角圖 \n 完成圖 \n \n \n', 'tags': '', 'url': 'Week1~9.html'}]};