var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'week2-5', 'text': 'Week2 \n 建立個人倉儲cad2019及編輯網站 \n 1.下載 2019Fall可攜套件.7z \xa0 2.建立cad2019 3.git clone \xa0https://github.com/s40723218/cad2019\xa0 4.git submodule add https://github.com/mdecourse/cmsimde.git\xa0 5.進入cmsimde後,輸入python -m pip install flask_cors 更改模組\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 6.python wsgi.py 進入近端進行編輯\xa0 7.編輯完成後git status\xa0>\xa0git add .\xa0>\xa0git commit -m "\xa0 \xa0 \xa0"\xa0>\xa0git push\xa0 \n 個人操作影片 \n \n \n \xa0 Week3 \n Solvespac e 編譯 \n 1.\xa0sh.exe 改名為 sh_rename_for_solvespace.exe。 2.git version 查驗 git 版本 3\xa0git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace 4.編譯Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 endif()(在713跟714前面加#)\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 5.手動編輯 libpng.dll.a 改名 libpng_static.a, 並放到編譯系統的 lib 目錄中\xa0 \n 6.cd solvespace->cd extlib->cd libpng->mkdir build->cd build->cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release->mingw32-make 7.最後回到solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 輸入cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release->mingw32-make \n 個人操作影片 \n \n Week4 \n 網站更新以及拍攝操作影片 \n 1.使用的錄影軟體 \xa0  ShareX \n \n 2.使用的上字幕及浮水印軟體 \xa0   ArcTime \n \n 3.浮水印 \n \n Week5 \n solvespace繪製練習 \n 1.使用快捷鍵(R)繪製出一個矩形 \n 2.使用快捷鍵(D)標註尺寸為40X30的矩形 \n 3.再繪製一個矩形在裡面 \n 4.使用快捷鍵(G) 使其變成綠色參照線 \n 5.利用快捷鍵(C)繪製4個圓孔 \n 6.點選2個圓孔並按下快捷鍵(Q)使其相等直徑，依序操作 \n 7.然後使用快捷鍵(D)標註尺寸以及快捷鍵(N)標註角度 \n 8.最後利用快捷鍵 shift+x 拉伸板子 ，並使用(D)設定厚度 \n 9.快捷鍵(W)為正視圖 ，快捷鍵 F3為等角圖 \n 完成圖 \n \n 個人操作影片 \n \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'Week6 \n 1.繪製兩輪自走車 \n 完成圖 \n \n 個人操作影片 \n \n 2.網際V-rep模型控制 \n 個人操作影片 \n \n 3.新增啟動予停止按鈕 \n 個人操作影片 \n \n Week7 \n Solvespace 編譯與參數繪圖驗證 \n 1. Solvespace 編譯加入學號 \n 完成圖 \n \n 個人操作影片 \n \n 2.Solvespace\xa0參數繪圖驗證 \n (1) \n 完成圖 \n \n 個人操作影片 \n \n (3) \n 完成圖 \n \n 個人操作影片 \n \n (4) \n 完成圖 \n \n 個人操作影片 \n \n (6) \n 完成圖 \n \n 個人操作影片 \n \n (7) \n 完成圖 \n \n 個人操作影片 \n \n (8) \n 完成圖 \n \n 個人操作影片 \n \n (12) \n 完成圖 \n \n 個人操作影片 \n \n (13) \n 完成圖 \n \n 個人操作影片 \n \n (15) \n 完成圖 \n \n 個人操作影片 \n \n (18) \n 完成圖 \n \n 個人操作影片 \n \n Week8 \n 1.啟用CMSiMDE中的網誌系統 \n (1)開啟start_mdecourse.bat，輸入leo (2)將隨身系統裡的config裡面的pelican.leo用leo開啟 (3)到個人網站的blog的網址複製到@path . ./\xa0->\xa0Pelican設定\xa0->\xa0遠端中SITEURL (4)將DISQUS_SITENAME改為s40723218 cad2019 (5)在local_blog點選右鍵>點goto script將指令複製起來後輸入在 start_mdecourse.bat \n 個人操作影片 \n \n 2.導入Webots \n (1)下載 Webots_2019b_rev1.7z \xa0並解壓縮 \n (2)複製start_mdecourse.bat並改名為start_mdecourse_webots.bat \n (3)使用編譯器開啟start_mdecourse_webots.bat \n (4)輸入執行入徑 :set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \n (5)在path_後面改為webots \n (6)輸入start D:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe %* 即可Save \n (7)開啟start_mdecourse_webots.bat即可打開webots \n 個人操作影片 \n \n 3.ssh對github連線 \n 個人操作影片 \n \n Week9 \n 期中個人報告 \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'Week10 \n 正向\xa0 pull request: 指無權限之組員創建New pull request後，將更新資料推送到組別倉儲，再經由有權限組長或組員確認資料無誤後，同意合併。 \n 反向 pull request: \xa0指管理者給於組員權限，使組員擁有合併的權力，但常因組員版本不同，推送易發生 衝突。 \n Fork倉儲 \n 1.搜尋自己組別的倉儲 2.點選Fork後，再點選自己的github帳號 3.使用指令git clone --recurse-submodules 組別的倉儲 4.更新資料後，git add . ->git commit -m"xx" ->git push，創建New pull request 5.等待組長同意，確認即可 \n 1.Soildworks/NX 各自簡單分析差異性 \n Soildworks介面較整齊，使用起來操作較為簡單，適合繪圖初學者使用，在業界受到廣泛使用，但是曲面建模以及模具方面較差。 \n NX的介面較為凌亂，使用起來比較難上手，但是適合用於模具方面加工以及複雜曲面。 \n NX繪圖練習 \n \n 2.Solidworks, NX, Inventor 與 Creo (Pro/E) 的開發緣起/套件安裝/設定流程/零組件繪圖的相關差異與特點分析 : \n 負責章節9-10 \n 章節9 \n Auto-trol的公司發展歷程 Auto-trol Corporation由Bill Barnes和他的妻子Tammy於1962年成立，1960年我曾在科羅拉多州公路局工作過。極富創造力的工程師，總是想出新穎的創意產品和市場，其中一些實用，而有些則不那麼實用。該公司的名稱來自“自動控制”。其最初重點是建立工業控制系統，包括麵包房的控制設備。很快，Auto-trol便開始製造大型精密數字化儀，用於土木工程，製圖和電子設計應用。這些曾經是關於繪圖台的大小，並使用光學技術來跟踪光標位置。在1960年代，我偶爾會在貿易展覽會上遇到塔米該公司有一個展位，並將展示其數字化儀。大約在1970年，開始將其數字化儀直接連接到小型計算機系統，就像Calma同時按照第11章所述進行操作。 \n 戴夫·漢納（Dave Hanna）在1992年8月的一場慘烈的車禍中喪生。對我來說，這讓公司全心全意。霍華德繼續向君主注資即使在湯姆·拉弗蒂（Tom Rafferty）離開公司之後。有趣的是，比爾·布雷特（Bill Brett）被重新僱用了並接管了Monarch的管理以及其餘的大部分研發工作。1993年左右，Auto-trol與一家位於德克薩斯州休斯頓的軟件公司建立了聯繫蘇珊·弗洛伊德（Susan Floyd）。弗洛伊德（Floyd）已開發了技術信息管理包，而在肯尼迪航天中心為洛克希德公司工作。 Auto-trol最終獲得了在休斯敦運營，並將該軟件作為CENTRA 2000銷售。當前的另一個產品是KONFIG，它是衍生出的網絡管理軟件包。來自前面提到的TEAMS軟件包。在2002年9月，Auto-trol更改了Centra 2000的名稱改為KONFIG Configuration Management。在2001財政年度，有詳細數據可用的年份，該公司銷售的軟件不到200萬美元。Auto-trol的收入餘額來自與軟件相關的維護服務和早期出售的硬件。令人驚訝的是，該公司仍然花費近6美元每年研發投入上百萬美元。在整個1990年代，Hillman繼續向公司貸款，然後 將貸款轉換為股票。到2001年9月30日，他擁有未償還債務的99.4％公司股票，並在2002年初宣佈公司被收購私人的。仍由公眾股東擁有的股票以每股0.20美元的價格購買。在幾年前以1:10進行反向股票分割之後，這意味著該股票的賣出相當於1980年的615美元，相當於其22年銷售收入的0.03％較早。在2007年中期編寫此文件時，Hillman仍在運行Auto-trol。的公司的主要軟件產品仍然是KONFIG配置管理軟件和Tech Illustrator。 Auto-trol繼續銷售GIS軟件，主要在加拿大，以及主要在德國的加工廠設計軟件。 \n 章節10 \n 賓利系統公司 杜邦公司的工程學是1980年代初期鷹圖的主要客戶之一特拉華州威爾明頓市的部門。 凱斯·本特利（Keith Bentley）在杜邦工作之後在特拉華大學獲得電氣工程學士學位，並在佛羅里達大學。 杜邦正在使用其Intergraph系統進行生產其過程工廠的電氣圖。 但是，使用受到高增加更多座位的座位成本。基思（Keith）相信還有一種成本更低的選擇，他會根據自己的時間出發開發一個名為PseudoStation的軟件包，該軟件包使用戶能夠訪問鷹圖的CAD軟件來自低成本的DEC VT-100終端，配備了圖形卡或Tektronix存儲管端子。 事實證明PseudoStation是當杜邦設計師只想對現有工程圖，例如更改工程圖上的某些文本。 \n 新的應用程序開始流行到1997年年底，Bentley似乎有了新的發展產品的推出步伐加快。 1997年12月，本特利（Bentley）收購了雅各布（Jacobus）尚未擁有的其餘部分，雅各布（Jacobus）成為完全擁有的子公司。 PlantSpace包含兩組軟件產品，程序可用於管理工廠設計軟件的設計數據是否已創建是否使用Jacobus軟件以及用於設計加工廠的程序。 這大部分該軟件是使用該公司的JSpace面向對象軟件開發的 技術。 \n Infrasoft –賓利民用產品線的第三站自Bentley於2003年收購Infrasoft以來，這可能是一個描述的好地方該公司及其前身MOSS Systems，Ltd.。這個故事始於美國1973年成為英國王國，當時英格蘭南部的三個縣議會決定發展自己的高速公路設計軟件。這些理事會很像州的DOT美國。當時幾乎沒有可用於道路設計的軟件，特別是符合英國標準的軟件。該小組的設計軟件的第一版發佈於1975年。當時的工程解決方案，稱為MOSS的軟件包是面向批次的並同時在大型機和大型微型計算機上運行。 1983年 開發商離開了政府職位，並成立了MOSS Systems，Ltd.進行開發和向政府機構和私人工程公司銷售該軟件。在幾內幾年來，英國50個縣議會中有49個使用了MOSS。 Infrasoft將原始MOSS軟件更名為MX Series，並將其模塊用於道路設（MXROAD），路面更新（MXRENEW），鐵路工程（MXRAIL）和站點工程（MXSITE）。它與AutoCAD和MicroStation，儘管在1990年代後期，Infrasoft傾向於選擇與 自Bentley成為GEOPAK的直接競爭對手以來的Autodesk。圖10.3顯示了使用MXROAD設計典型的道路交叉口。Bentley在2003年1月宣布，它計劃收購Infrasoft和一些幾個月後交易完成。在某種程度上，本特利可能已經採取了此舉防止Autodesk收購Infrasoft並在民用領域更有效地競爭市場。這三個民用產品線均由Gabe Norona和開發人員管理開始努力創建新的高速公路設計應用程序，最終將將軟件包的最佳特性合併到一套新的土木工程程序中。 \n week12 \n NX章節分析與操作 \n 第四章 \n 第4章-三維建模 本章討論了NX 12中三維（3D）建模的基礎。我們將討論什麼是特徵，什麼是不同類型的特徵，什麼是原語以及如何建模NX 12中使用原語的功能。這將使NX 12的建模部分搶先一步並了解3D建模中使用表單特徵的知識。一旦這些功能在介紹之後，我們將重點介紹功能操作，這些功能可以應用於實體的曲面和邊緣或您創建的特徵。這些包括錐度，邊緣融合，面混合，倒角，修剪等。在解釋了功能操作之後，本章將逐步引導您一些例子。在NX 12中，要素是具有已定義父項的一類對象。功能是關聯的 由一個或多個父母定義，其創建和修改的順序保留在模型，從而通過“歷史記錄”捕獲它。父對象可以是幾何對像或數字對象變量。特徵包括圖元，表面和/或實體以及某些線框對象（例如作為曲線以及相關的修剪和橋樑曲線）。例如，一些常見功能包括 塊，圓柱體，圓錐體，球體，擠壓體和旋轉體。 \n 4.1功能類型 表單特徵有六種類型：基元，參考特徵，掃描特徵，刪除功能，提取功能和用戶定義的功能。 與以前的版本相似，NX 12存儲插入菜單選項下的所有表單功能。 表單功能也可以在表單功能工具欄 \n 4.2基本原則 基本特徵是其他許多基礎特徵可以創建功能。 基本圖元是塊圓柱體，圓錐體和球體。 基元是非關聯的這意味著它們與用於創建它們。請注意，通常使用掃掠特徵來創建 原始而不是此處提到的命令。 \n 4.3參考功能 基準平面是可以在構建其他對象時用作基本特徵。 他們協助創建功能圓柱體，圓錐體，球體和旋轉實體沒有平坦表面的物體，以及還有助於創建除垂直於目標實體的面。 我們將按照一些簡單的步驟進行練習特徵。 首先，我們將創建一個從基準面偏移的基準平面。 \n 4.4掃描功能 這裡使用實用的方法介紹了兩個重要的掃掠特徵（拉伸和旋轉）示例是葉輪下殼體的延續，我們從前一章。 \n 4.5刪除功能 刪除功能允許您刪除現有對象的一部分以創建具有以下內容的對象設計中的其他功能。 \n 4.6功能操作 功能操作是在基本的“表單功能”上執行的，以平滑拐角，創建錐度，進行螺紋加工，實例化以及將某些實體從其他實體中減去。 一些功能操作說明如下。 \n 4.7例子 ➢創建一個新文件並將其另存為Impeller_hexa-bolt.prt ➢選擇插入→設計特徵→圓筒 ➢圓柱體應指向正ZC方向與中心設置在原點並具有以下內容尺寸：直徑= 0.25英寸 高度= 1.5英寸現在，在現有氣缸。 \n 4.8標準零件庫 一種更好，更快的建模標準零件（例如螺栓，螺母，銷，螺釘和墊圈）的方法 正在使用標準零件庫。 例如，要建模六角螺栓， ➢選擇重用庫→重用示例→標準零件→ANSI英寸→螺栓 ➢右鍵單擊六角頭 ➢點擊開源文件夾 ➢打開六角螺栓AI.prt \n 4.9同步技術 NX提供的重要且獨特的功能之一，除了“設計功能”和“自由格式建模是同步技術。 使用同步中可用的選項在“建模應用程序”選項卡的功能區欄中的“建模”組，用戶可以修改複雜沒有模型歷史樹並且不知道特徵關係和依賴性。 “推拉”選項可用於使用面，邊來修改3D模型和橫截面。 NX 12支持同步建模，可與以下版本的3D模型一起使用 除標準外，CATIA，Pro /ENGINEER®，SolidWorks®和AutodeskInventor®格式，包括IGES，ISO / STEP和JT。 \n 4.10練習 \n 個人操作影片 \n \n week13 \n Week13以前的回顧影片 \n \n week14 \n Webots Tutorial操作 \n 1.開啟Webots，創建一個新的世界，並將檔名改為my_first_simulation 2.依照教材更改場地尺寸及牆的高度 3.加入木箱，並更改木箱尺寸與初始高度 4.複製出三個箱子，以shift+左鍵拖移 5.加入一台機器後 6.創建控制程式，選python，並命名為e-puck_go_forward 7.更改程式碼後存儲，進行測試 8.測試完成 \n 個人操作影片 \n \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': "Week15 \n 個人學習回報 \n \n 心得: 在這學期我學到的很多全新的東西，像是 Solvespac e 編譯以及操作，也花了很多時間去學習這個軟體，也學到了Webots、SSH、V-rep，但是還沒有很熟練，希望能盡快學會這些軟體。 \n Week16 \n 越野車零組件設計繪圖查驗 \n \n 心得:這次使用solvespace繪製越野車零件便組裝，由於不是很熟練所以花了很多時間去繪圖，並且轉v-rep及webots，但是時間不夠所以沒做完，所以回去會加緊練習並補齊進度的! \n Week17 \n 1.根據分配內容翻譯 \n 1. http://www.coppeliarobotics.com/helpFiles/en/buildingAModelTutorial.htm \n We end up with 17 individual shapes: \n 我們最終得到17個單獨的形狀： \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0[Adjusted visual attributes] \n [調整後的視覺屬性] \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n Now we can group the shapes that are part of the same link with [Menu bar --> Edit --> Grouping/merging -> Group selected shapes]. We end up with 7 shapes: the base of the robot (or base of the robot's hierarchy tree), and 6 mobile links. It is also important to correctly name your objects: you we do this with a double-click on the object name in the\xa0 scene hierarchy . The base should always be the robot or model name, and the other objects should always contain the base object name, like:\xa0 robot \xa0(base),\xa0 robot_link1 ,\xa0 robot_proximitySensor , etc. By defaut, shapes will be assigned to visibility layer 1, but can be changed in the\xa0 object common properties . By default, only\xa0 visibility layers 1-8 are activated for the scene . We now have following (the model\xa0 ResizableFloor_5_25 \xa0was temporarily made invisible in the\xa0 model properties dialog ): \n 現在，我們可以使用[菜單欄->編輯->分組/合併->分組所選形狀]對屬於同一鏈接的形狀進行分組。 我們最終得到7個形狀：機器人的基礎（或機器人的層次結構樹的基礎）和6個移動鏈接。 正確命名對像也很重要：您可以通過雙擊場景層次結構中的對象名稱來做到這一點。 基礎應始終是機械手或模型名稱，其他對象應始終包含基礎對象名稱，例如：robot（基礎），robot_link1，robot_proximitySensor等。通過默認，形狀將分配給可見性層1，但可以 在對象通用屬性中進行更改。 默認情況下，僅激活場景的可見性層1-8。 現在，我們有了以下內容（模型ResizableFloor_5_25模型在模型屬性對話框中暫時不可見）： \n \n [Individual elements compositn the robot] \n [構成機器人的各個要素] \n When a shape is created or modified, CoppeliaSim will automatically set its reference frame position and orientation. A shape's reference frame will always be positioned at the shape's geometric center. The frame orientation will be selected so that the shape's bounding box remains as small as possible. This does not always look nice, but we can always reorient a shape's reference frame at any time. We now reorient the reference frames of all our created shapes with [Menu bar --> Edit --> Reorient bounding box --> with reference frame of world]. You have more options to reorient a reference frame in the shape geometry dialog. \n 創建或修改形狀時，CoppeliaSim將自動設置其參考框架的位置和方向。 形狀的參考框架將始終位於形狀的幾何中心。 將選擇框架方向，以便形狀的邊界框保持盡可能小。 這並不總是看起來不錯，但是我們隨時可以隨時調整形狀的參考框架的方向。 現在，我們可以使用[菜單欄->編輯->重定向邊界框->使用世界參考框架]重新調整所有已創建形狀的參考框架。 您有更多選項可以在形狀幾何對話框中重新定向參考框架。 \n Building the joints Now we will take care of the joints/motors. Most of the time, we know the exact position and orientation of each of the joints. In that case, we simply add the joints with [Menu bar --> Add --> Joints --> ...], then we can change their position and orientation with the position dialog and orientation dialog. In other situations, we only have the Denavit-Hartenberg (i.e. D-H) parameters. In that case, we can build our joints via the tool model located in Models/tools/Denavit-Hartenberg joint creator.ttm, in the model browser. Othertimes, we have no information about the joint locations and orientations. Then, we need to extract them from the imported mesh. Let's suppose this is our case. Instead of working on the modified, more approximate mesh, we open a new scene, and import the original CAD data again. Most of the time, we can extract meshes or primitive shapes from the original mesh. The first step is to subdivide the original mesh. If that does not work, we do it via the triangle edit mode. Let's suppose that we could divide the original mesh. We now have smaller objects that we can inspect. We are looking for revolute shapes, that could be used as reference to create joints at their locations, with the same orientation. First, remove all objects that are not needed. It is sometimes also useful to work across several opened scenes, for easier visualization/manipulation. In our case, we focus first on the base of the robot: it contains a cylinder that has the correct position for the first joint. In the triangle edit mode, we have: \n 建立關節 現在，我們將照顧關節/馬達。大多數時候，我們知道每個關節的確切位置和方向。在這種情況下，我們只需使用[菜單欄->添加->關節-> ...]添加關節，然後可以使用位置對話框和方向對話框更改它們的位置和方向。在其他情況下，我們只有Denavit-Hartenberg（即D-H）參數。在這種情況下，我們可以通過模型瀏覽器中位於Models / tools / Denavit-Hartenberg聯合creator.ttm中的工具模型來構建關節。有時，我們沒有關於關節位置和方向的信息。然後，我們需要從導入的網格中提取它們。讓我們假設這是我們的情況。無需處理修改過的，更近似的網格，而是打開一個新場景，然後再次導入原始CAD數據。大多數時候，我們可以從原始網格中提取網格或基本形狀。第一步是細分原始網格。如果那不起作用，我們將通過三角形編輯模式進行操作。假設我們可以劃分原始網格。現在，我們可以檢查較小的對象。我們正在尋找旋轉形狀，可以用作在其位置以相同方向創建關節的參考。首先，刪除所有不需要的對象。有時在多個打開的場景中工作也很有用，以便於可視化/操作。在我們的案例中，我們首先關注機器人的基座：它包含一個圓柱體，該圓柱體的第一個關節的位置正確。在三角形編輯模式下，我們有： \n \n [Robot base: normal and triangle edit mode visualization] \n [機器人基礎：法線和三角形編輯模式可視化] \n 2. https://cyberbotics.com/doc/guide/tutorial-2-modification-of-the-environment \n A\xa0 Solid \xa0node represents a\xa0 rigid body , that is a body in which deformation can be neglected. The distance between any two given points of a rigid body remains constant in time regardless of external forces exerted on it. For example a table, a robot finger phalanx or a wheel are rigid bodies. Soft bodies and articulated objects are not rigid bodies. For example, a rope, a tire, a sponge or an articulated robot arm are not rigid bodies. However, an articulated entity can be broken into several rigid bodies. \n The physics engine of Webots is designed for simulating rigid bodies only. An important step, when designing a simulation, is to break up the various entities into separate rigid bodies. \n To define a rigid body, you will have to create a\xa0 Solid \xa0node. Inside this node you will set up different sub-nodes corresponding to the characteristics of the rigid body. The following\xa0 figure \xa0depicts a rigid body and its sub-nodes. The graphical representation of the\xa0 Solid \xa0node is defined by the\xa0 Shape \xa0nodes populating its\xa0 children \xa0list. The collision bounds are defined in its\xa0 boundingObject \xa0field. The graphical representation and the collision shape are often but not necessarily identical. Finally, the\xa0 physics \xa0field defines if the object belongs to the dynamical or to the static environment. All these sub-nodes are optional, but the\xa0 physics \xa0field needs the\xa0 boundingObject \xa0to be defined. \n 實體節點表示剛體，即可以忽略變形的剛體。剛體上任意兩個給定點之間的距離在時間上保持恆定，而不管施加在其上的外力如何。例如，桌子，機械手指骨或輪子是剛體。軟體和關節物體不是剛體。例如，繩索，輪胎，海綿或關節式機械臂不是剛性體。但是，可以將一個鉸接的實體分解為幾個剛體。 \n Webots的物理引擎僅設計用於模擬剛體。設計仿真時，重要的一步是將各個實體分解為單獨的剛體。 \n 要定義剛體，您將必須創建一個實體節點。在此節點內，您將根據剛體的特性設置不同的子節點。下圖描繪了剛體及其子節點。實體節點的圖形表示由填充其子級列表的Shape節點定義。碰撞範圍在其boundingObject字段中定義。圖形表示和碰撞形狀通常但不一定相同。最後，物理字段定義對像是屬於動態環境還是屬於靜態環境。所有這些子節點都是可選的，但物理場需要定義boundingObject。 \n \n The simplest model of a rigid body in Webots having a graphical representation, a physical bounding object and being in the dynamical environment. \n Webots中剛體的最簡單模型，具有圖形表示，物理邊界對象並且處於動態環境中。 \n The Geometry box (in\xa0 this figure ) stands for any kind of geometrical primitive. In fact, it can be substituted by a\xa0 Sphere , a\xa0 Box , a\xa0 Cylinder , etc. \n 幾何框（在此圖中）代表任何類型的幾何圖元。 實際上，它可以用球體，盒子，圓柱體等代替。 \n 2.越野車模擬 \n 個人操作影片 \n \n week18 \n \n", 'tags': '', 'url': 'week15-18.html'}, {'title': 'Note', 'text': '', 'tags': '', 'url': 'Note.html'}, {'title': 'Phthon語法', 'text': '\n "#" 符號後是註解 ( comment ) ，可以在一列的開頭或中間加入 \n reserved word or built-in function( 變數取名請避開) and，exec，not，as，finally，or，assert，for，pass，except，break，from，print，class，global，raise，continue，if，return，def，import，try，del，in，while，elif，is，with，else，lambda，yield \n 縮排視為不同的block(在IF判斷是或迴圈的段落中使用)，縮排可以用tab或是數個空格( ≧ 1 )，空格的數量不同，是為不同的block ( bug 容易因為這一點而產生 ) \n python 的每個變數視為一個 object \n python variables 不需要事先宣告變數，直接用"=" assign value ( 賦值 ) 即可，例如： x = 3.14 → 實數變數 \n 變數類型 ( data type ) 根據被賦予的值決定 ( 之後若是被分配不同類型的數值，該變數的類型會直接改變 ) 例如：x = \'text\' → 字串變數 \n \n \n', 'tags': '', 'url': 'Phthon語法.html'}, {'title': 'Solvespace常用快捷鍵', 'text': '草圖 \n S\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0線段 \n R\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0矩形 \n C\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0圓 \n A\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0圓弧 \n T\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0真型字體本文 \n B\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0三次曲線樣條 \n P\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0基準點 \n G\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 切換構造 \n I\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 在相交處分割線/曲線 \n Shift+A\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0選定點之切線弧\xa0 \n 拘束 \n D\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0距離/長度/直徑 \n H\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0設定水平 \n N\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0角度 \n L\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定兩線段平行或切線 \n [\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0設定兩線段垂直 \n Y\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定對稱 \n Q \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定等長/角度/半徑 \n X\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定法線方向相同 \n U\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 設定其他輔助角 \n E\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0切換參考尺寸 \n O\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 點在線上/點上/平面上/曲面上 \n 組成 \n Shift+X\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0拉伸草圖 \n Shift+L\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0旋轉拉伸草圖 \n Shift+T\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0逐步放置 \n Shift+R\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0逐步旋轉 \n Shift+3\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa03D素描 \n Shift+W\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0新的工作平面 \n Shift+I\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 導入連接/組合文件 \n 視角 \n F3\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 等角視圖 \n W\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0正視圖 \n \n \n \n \n \n \n \xa0 \n \n \xa0 \n \n \n \n \xa0 \n \n', 'tags': '', 'url': 'Solvespace常用快捷鍵.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}]};