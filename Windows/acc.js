BIOS'Basic Input/Output System',基本输入输出系统 
  boot mode 启动模式 
    UEFI   新式的BIOS
    legacy 传统BIOS
  Secure BOOT 安全启动 
  USB Boot  U盘启动 
系统安装-老毛桃UEFI版U盘启动安装 
  一: 按照教程制作UEFI版启动U盘 
    制作的U盘可能是一个分区也可能是两个分区,
    因为单个文件大于4G无法放置到FAT32格式的启动U盘中, 
    故需使用两个分区的模式‹可能需制作多次›,
    将‹大于4G的›系统镜像放置到NTFS格式的分盘中 
  二: 按照教程进行系统安装 
    开机按F12进入启动项设置界面,使用U盘启动 
    安装完毕后,拔出U盘进行重启即可 
  三: 重启设置 
    开机按F2进入BIOS系统,进行相关设置 
    Boot选项:将从硬盘启动的项放到第一的顺序 
    UEFI改为:legacy 
  四: 安装完系统后,将系统进行重置,以去除附加进系统中的第三方软件 
    设置-恢复-重置电脑 
    windows defender-设备性能和运行状况-全新启动
  ◆可能遇到的问题: 
  启动显示: NO BOOTABLE DEVICE 
    一: 缺少系统引导设备,用于开机引导系统的文件丢失或损坏;
      解决方法: 重新使用U盘启动,使用Diskgenius工具重建分区表,
      选中硬盘右键-搜索已丢失分区(重建分区表),中途按提示选择保留或忽略-
      完成后,重建主引导记录-然后进行重启
    二: 启动方式问题 
      将启动方式从UEFI改为legacy 
  启动显示: Intel UNDI,PXE-2.1 (build 083) 
    原因: 主板启用了网卡的PXE远程启动,且为第一引导项 
    解决：
      开机-F2,进入BIOS设置 
      Onboard LAN Boot ROM‹内建网络开机功能›,改为 Disabled
      Network Boot 改为 Disabled 
  重启慢‹启动正常› 
    一: 启动模式问题 ‹待验证› 
      若主板是UEFI启动,而采用传统启动模式,就会很慢
      决解: 
        1:重新安装UEFI启动的系统
        2:已安装好系统后修改下启动引导,以达到UEFI启动的效果 
          1、新建一个100M空间的分区 
            计算机-选择管理,选中一有空闲空间的分区,右键-压缩卷,新建分区 
          2、将新分区格式化<FAT32格式> 
          4、修复EFI引导分区 
            命令行中键入命令：
            bcdboot <X>：Windows /s <Y>： /l zh-CN /f ALL 
              Example: bcdboot C：Windows /s E： /l zh-CN /f ALL
              X是系统文件所在分区
              Y是刚分出来的FAT32分区 
          5、重启并进入BIOS
            Secure Boot 设为 Enabled
            Launch CSM 设为 Never 
            Boot Menu 设为 Disable 
          6、保存更改的设置，退出BIOS，重启 
    二: 到官方网站下载主板芯片驱动更新 ‹待验证› 
    三: 将系统进行重置 
      从官网进行重新安装系统
关闭屏幕亮度随当前屏幕背景色变化 
  桌面上,右键-英特尔显卡设置-电源-禁用屏幕省电-保存方案并运用 
  也将其他快捷键等选项去掉,避免无操作 
--------------------------------------------------------------------------------
系统特性、设置及说明 
  系统[部分]字体更改
    在桌面上右击-个性化-窗口颜色-高级外观设置-在项目中进行每项的字体显示更改。
  设置win7资源管理器默认打开为“我的电脑”
    关闭所有的资源管理器窗口,Shift+在任务栏的资源管理器图标上右击,选属性。
    在目标“%windir%\explorer.exe”的后面加一个空格和逗号
    （即: %windir%\explorer.exe ,）,然后保存。
    记住此方法是把输入法切换在英文状态下进行。
快捷键 
  ★系统/桌面相关操作 
    win-d       显示桌面
    win-e       打开我的电脑
    win-r       打开运行对话框
    win-w       打开工作区面板,可使用便签、草图板及屏幕草绘等工具.
    win-l       锁定计算机或切换用户
    win-<num>   打开任务栏上的第几个程序
    win-t       切换任务栏上的程序
    win-space   预览桌面/选择输入法 
    win-↑↓→←    最大化/最小化/最大化到屏幕左/右侧
    win-ctrl-f  搜索计算机‹需要在网络上›
    win-f       搜索文件或文件夹/反馈中心 
    ctrl-scroll       缩放 
      可在桌面上调整图标大小  
    ctrl-shift-esc    打开任务管理器
    ctrl-esc    打开开始菜单 
    prtscSysRq      全屏截屏 
      截屏后需在画图软件中粘贴出来,才可以查看
  ★程序通用操作 
    alt-f4            退出
  ★窗口通用操作 
    alt-space-n           窗口最小化
    alt-esc               以项目打开的顺序切换项目
    ctrl?-alt-tab-↑↓→←?   在打开的项目间切换
    ctrl?-win-tab-↑↓→←?   '3D'形式切换界面
  ★文件夹/文件操作 
    alt-↑             到当前目录的上级目录 
    ctrl-n            新窗口打开该目录 
    alt-leftMouse     查看文件夹属性 
    alt-enter         查看文件夹属性 
    ctrl-leftMouse    新窗口打开文件夹 
    ctrl-enter        新窗口打开文件夹 
    shift-f10         打开右键菜单
    ctrl?-shift-↑↓→←  文字选择 
    ctrl-a            全选
    ctrl-f            查找
    ctrl-p            打印
    ctrl-s            保存
    ctrl-z            取消
    ctrl-f4           关闭多个文档
    shift-↑↓→←        多个项目选择
    shift-drag        可将复制到换成移动到
小技巧 
  文件编辑、修改与保存 
    将文件保存为PDF格式文件
      第一种方法: 另存为进行保存为PDF,若没有保存为PDF的选项
      第二种方法: 打印-选择打印机PDFCreator-打印-选择保存位置 
Q&A 
  为什么Word、Excel等文字中句号。在中间显示？
    港台用的宋体句号在中间。
    
  桌面图标排列方式改为纵向排列。

  U盘右键菜单中格式化和弹出放在一起,不太好,菜单的排序方式应该与使用方便、合理为原则。
--------------------------------------------------------------------------------
关机设置
  Shutdown -s -t XX       XX秒后关机
  shutdown -a             取消关机
  at 22:00 shutdown -s    在22: 00定时关机
通过自带防火墙控制软件联网方法 
  可通过360上网管理-联网控制,发现联网的程序及确定其位置
  步骤 
    进入到防火墙设置页->高级设置,
    选择 出站规则 或 进站规则,进行 新建规则,
    然后跟着指引设置即可
问题汇总: 
  一直更新失败 
    停止 'Windows update' 和 'Background Intelligent Transfer Service' 服务  
    方法一: 
      删除临时文件 
        'C:\Windows\SoftwareDistribution'下
        删除 DataStore 文件夹下的内容和 Download 文件夹下的内容 
      重命名'SoftwareDistribution'文件夹为'SDfolder' ? 
        Windows+R 打开运行,输入 services.msc 并回车 
        打开'Windows  Update'服务,点击'服务状态'下面的'关闭'按钮,将启动类型改为'禁用'
        然后重命名,完成后,重启之后重新启用 Windows  Update 服务再尝试检查更新和安装 
    方法二: 
      删除文件夹 'C:\Windows\System32\Tasks\Microsoft\XblGameSave' 
      删除注册表文件夹 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Schedule\ TaskCache\Tree\Microsoft\XblGameSave' 
    方法三: 
      控制面板/疑难解答/使用windows更新解决问题 
    终极方法: 搜索'windows10',进入下载页,点击立即更新,下载辅助更新软件'易升' 
  svchost.exe 占大量网速和内存 
    右键我的电脑----管理---选择服务 
    找到 Background Intelligent Transfer Service
    服务状态改为停止服务
    启动类型改为手动或禁用
  IE‹Internet Explore 11›浏览器消失了,重现方法  
    控制面板-启用或关闭windows功能
    接着,关闭选项 'Internet Explore 11' ,重启 
    然后,勾选选项 'Internet Explore 11' ,重启 
    最后,在开始菜单 的 Accessories 文件夹下,找到 IE
--------------------------------------------------------------------------------



