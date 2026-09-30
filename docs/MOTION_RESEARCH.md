# 持续运动街区 · 参考观察

2026-09-30，Chromium / Playwright CLI，1280×800。先静置，再移动鼠标，最后滚动约 650–700px。连续记录保存在 `.cache/research/cases.webm` 和 `cases-more.webm`；各站 idle / pointer / scroll 帧在同目录。以下是实际访问到的 13 个页面，覆盖 10 个团队／创作者。案例介绍页与作品本体明确区分，不将介绍页当成完整作品体验。

| 案例、团队 | 层次与连续画面 | 周期与鼠标 | 滚动与本项目借鉴 |
|---|---|---|---|
| [Lusion 首页](https://lusion.co/) · Lusion | 前景标题、白色页面、独立 3D 物件画面；首次加载有空白过程，随后出现实体 | 采样窗口内物体画面变化；完整周期未测定，鼠标时位置变化不能单独归因为跟随 | 标题与场景分别退出；采用分层退场，避免背景和文字黏成整图 |
| [Lusion Labs](https://labs.lusion.co/) · Lusion | PLAYGROUND 大字、颗粒雾、前景圆点分开 | 指针移动后圆点位置与场景变化；周期未测定 | 下滚进入作品；采用大字与边缘装饰不同步移动 |
| [Dogstudio](https://dogstudio.co/) · Dogstudio | 狼、树叶、背景光、前景标题同时存在；叶片位置持续改变 | 鼠标阶段主体视角变化，完整循环未测定 | 主体成为跨段叙事锚点；借鉴局部持续动作和景深，不沿用动物或素材 |
| [Active Theory](https://activetheory.net/) · Active Theory | 初访停留加载，第二次等待后进入播放场景；文字与媒体独立 | DOM 可读 ticker 周期 9000ms；已加载媒体长 111.66s 且正在播放，媒体长度不等于其他循环周期 | 以场景为主体，控制保持精简；借鉴启动即有媒体运动，但不复制其加载等待 |
| [makemepulse](https://www.makemepulse.com/) · makemepulse | 大字与下方作品媒体分层，暗场留白 | 采样未确认明确周期；不编造鼠标变形 | 大字让位给内容；借鉴前景文案与展图的尺度差 |
| [Locomotive](https://locomotive.ca/en) · Locomotive | 全幅蓝色人像媒体、前景排版、局部像素化 | 媒体画面随时间改变；采样未确定循环 | 画面跨越版心，文本保持独立；借鉴越界素材与清晰点击区 |
| [14islands](https://14islands.com/) · 14islands | Design / Technology 错位排版、大片留白、下方作品 | 未读到稳定周期；鼠标采样未证实跟随 | 以滚动揭示内容；借鉴非卡片式索引与大小节奏 |
| [Hello Monday](https://www.hellomonday.com/) · Hello Monday | 黑白角色插画、独立文字、开放空间 | 插画状态在连续记录中变化；精确周期未测定 | 插画与标题各自占位；借鉴人物与操作区互不遮挡 |
| [Dennis Snellenberg](https://dennissnellenberg.com/) · Dennis Snellenberg | 人像、超大姓氏跑马文字、地点标识 | 文字横向持续移动；完整周期未测定 | 滚动进入作品，非同速整图平移；借鉴错开周期的横向运动 |
| [Cuberto](https://cuberto.com/) · Cuberto | 开放排版、项目媒体、指针圆点 | 物体媒体变化，圆点有指针响应；周期未测定 | 大媒体直接展开，采用单幅大展示，不把细节挤成小面板 |
| [Atlas Motion 案例页](https://lusion.co/projects/atlas_motion) · Lusion | 左文右大图、产品物件与细线叠层 | 此页没有可读原生动画周期，不将其当作作品本体周期 | 借鉴材质物件与叙述的分离；本项目材质正面、厚度、灯光分别实现 |
| [FlipaClip 案例页](https://cuberto.com/projects/flipaclip/) · Cuberto | 大字后接巨幅斜置画面，媒体间存在视觉连续性 | 已加载视频长 2.43–15.02s，采样时暂停，不据此声称自动播放 | 借鉴斜向撕纸过渡与单画面展示，界面文字仍用 HTML |
| [The Sleepers](https://projects.thibautfoussard.com/the-sleepers/) · Thibaut Foussard | 暗色楼群、窗光、轨道、薄雾构成空间；本轮观察入口场景 | 未测定完整循环；尚未据入口断言列车点击后的行为 | 采用低成本远中近层、雾和局部窗光的组织，不抄其模型 |

Resn 停留加载，Bruno Simon 在本轮环境未进入可核实内容，不计入完成数量。Codrops 的[创作者文章](https://tympanus.net/codrops/2026/06/09/building-an-interactive-digital-stamp-collection-with-shaders-postcards-and-playful-inspection/)用于拓展可触摸的展品交互思路，不计作已实机观察的第十四个案例。

## 实施对应

天空云层用可平铺纹理与不同周期；建筑以整体刚性层缓慢位移。人物呼吸、发梢、衣摆、眼睑各自一层，虹膜共享一个输入更新循环。列车、机器人、窗灯和灯牌各用独立周期。视觉过渡依靠前景墙、纸和喷漆遮住分区边界，滚轮仍为原生滚动。系统减少动态、主动暂停、后台与离屏状态统一控制。

现有依赖为 Vite 8.1.4 / TypeScript 5.9.3。无新增动效依赖。浏览器原生动画、IntersectionObserver、PointerEvent 的接口以当前安装的 TypeScript DOM 声明及浏览器实际测试确认；在线 MDN 抓取受限，不能据失败请求宣称已核验网页。
