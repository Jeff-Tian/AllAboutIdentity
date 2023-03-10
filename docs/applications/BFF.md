# BFF

随着软件工程的复杂性越来越高，分工也就越来越细，前后端分离开发早已成熟，而随着前端的设备越来越多，导致演化出了 BFF 架构。

BFF 架构，即 Backend For Frontend，是专为特定的前端而做的后端服务，是一种将后端服务抽象为前端服务的架构模式。在 BFF 架构之前，所有的前端共享同样的后端服务，比如桌面端和手机端。但是实际上它们的页面展示和交互方式是不同的，甚至由不同的团队开发。这样导致一端对后端的需求变更，往往受制于或者对另一端造成影响。而 BFF 架构的出现，就是为了解决这个问题。

随着 BFF 架构的大量使用，其本身也出现了一些变化。我称之为 BFF 进化。

![](https://pic1.zhimg.com/v2-6849952e789763ddf546db288d08e5e9_1440w.jpg?source=172ae18b)

## Naive BFF

Naive BFF，即原始的 BFF，是最简单的 BFF 架构。它的特点是：

  * 一个 BFF 服务对应一个前端页面
  * BFF 服务只提供给对应的前端页面使用
  * BFF 服务只提供数据，不提供页面

它最大的特点就是“薄”。它不做任何的业务逻辑，只做为了前端和众多后端服务之间的中间层，基本上没有特定的业务逻辑，只是后端服务的聚合和裁剪。或者说，就是一个接口转发层，比如接收到前端的一个请求后，调用一个或多个后端服务，取出需要的字段，再返回给前端。